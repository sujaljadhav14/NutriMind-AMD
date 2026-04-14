import { NextRequest, NextResponse } from "next/server";
import { getNearbyPlaces } from "@/lib/places";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lat, lng, radius } = body;

    if (typeof lat !== "number" || typeof lng !== "number") {
      return NextResponse.json(
        { error: "lat and lng parameters are required" },
        { status: 400 }
      );
    }

    const places = await getNearbyPlaces(lat, lng, radius || 5000);

    return NextResponse.json(places);
  } catch (error) {
    console.error("Places API error:", error);
    return NextResponse.json(
      { error: "Failed to get nearby places" },
      { status: 500 }
    );
  }
}
