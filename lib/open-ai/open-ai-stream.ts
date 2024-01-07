import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";
import { CreateChatCompletionRequest } from "openai";

export async function OpenAIStream(payload: CreateChatCompletionRequest) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;
    const baseUrl = process.env.OPENAI_BASE_URL ?? "https://api.openai.com";
    const res = await fetch(`${baseUrl}/v1/chat/completions`, {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
});

    const stream = new ReadableStream({
        async start(controller) {
            function onParse(event: ParsedEvent | ReconnectInterval) {
                if (event.type === "event") {
                    const data = event.data;
                    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
                    if (data === "[DONE]") {
                        controller.close();
                        return;
                    }

                    try {
                        const json = JSON.parse(data);
                        const text = json.choices[0].delta?.content || "";
                        if (counter < 2 && (text.match(/\n/) || []).length) {
                            return;
                        }
                        const queue = encoder.encode(text);
                        controller.enqueue(queue);
                        counter++;
                    } catch (e) {
                        controller.error(e);
                    }
                }
            }

            // stream response (SSE) from OpenAI may be fragmented into multiple chunks
            // this ensures we properly read chunks and invoke an event for each SSE event stream
            const parser = createParser(onParse);
            // https://web.dev/streams/#asynchronous-iteration
            for await (const chunk of res.body as any) {
                parser.feed(decoder.decode(chunk));
            }
        },
    });

    return stream;
}