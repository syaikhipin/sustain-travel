export type ItineraryRequirements = {
  destinations: string;
  duration: string;
  activities: string[];
  budget: string;
  months: string[];
  travellers: string;
  dietaryRestrictions: string[];
  otherConsiderations: string[];
  inDepth: boolean;
};

export const generateItinerary = async (
  itinerary: ItineraryRequirements,
  onUpdateResult: (newResult: string) => void
): Promise<void> => {
  const response = await fetch("/api/generate-itinerary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...itinerary,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  if (response.body === null)
    throw new Error("generateItinerary.ts: Response body is null");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);
    onUpdateResult(chunkValue);
  }
};
