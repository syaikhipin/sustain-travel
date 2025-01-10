import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    baseUrl: process.env.OPENAI_API_BASE,
    model: process.env.OPENAI_MODEL,
    hasKey: !!process.env.OPENAI_API_KEY,
  });
} 