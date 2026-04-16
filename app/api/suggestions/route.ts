import { NextRequest, NextResponse } from "next/server";
import { getSuggestionData } from "@/lib/suggestionData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mood = searchParams.get("mood") || "stressed";
  const data = getSuggestionData(mood);

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const mood = body.mood || "stressed";
    const data = getSuggestionData(mood);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
