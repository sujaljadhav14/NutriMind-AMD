import { NextRequest, NextResponse } from "next/server";
import { getMealSuggestions } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mood } = body;

    if (!mood || typeof mood !== "string") {
      return NextResponse.json(
        { error: "Mood parameter is required" },
        { status: 400 }
      );
    }

    const suggestions = await getMealSuggestions(mood);

    return NextResponse.json(suggestions);
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Failed to get meal suggestions" },
      { status: 500 }
    );
  }
}
