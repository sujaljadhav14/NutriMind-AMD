"use client";

import { NextRequest, NextResponse } from "next/server";

const moodMeals: Record<string, {
  heading: string;
  subtext: string;
  meals: Array<{
    name: string;
    benefit: string;
    ingredients: string[];
    tag: string;
    avoid: boolean;
  }>;
  avoid_foods: string[];
}> = {
  stressed: {
    heading: "Calm through Culinary Alchemy",
    subtext: "Nourish your nervous system with cortisol-lowering nutrients designed to restore inner peace.",
    meals: [
      { name: "The Zen Garden Bowl", benefit: "Stabilizes blood sugar to prevent cortisol spikes.", ingredients: ["QUINOA", "AVOCADO", "KALE"], tag: "Magnesium Rich", avoid: false },
      { name: "Atlantic Drift Fillet", benefit: "Healthy fats to reduce neural inflammation.", ingredients: ["SALMON", "ASPARAGUS", "HERBS"], tag: "Omega-3 Focus", avoid: false },
      { name: "Midnight Berry Oats", benefit: "Complex carbs that aid in natural mood elevation.", ingredients: ["STEEL-CUT OATS", "WALNUTS", "BLUEBERRIES"], tag: "Serotonin Boost", avoid: false },
    ],
    avoid_foods: ["High Caffeine", "Refined Sugars", "Ultra-Processed Oils", "Excessive Alcohol", "High Sodium Snacks"],
  },
  tired: {
    heading: "Recharge with Purposeful Eating",
    subtext: "Fuel your body with nutrients that naturally boost energy without the crash.",
    meals: [
      { name: "Sunrise Protein Scramble", benefit: "Sustained energy from clean protein sources.", ingredients: ["EGGS", "SPINACH", "SWEET POTATO"], tag: "Energy Boost", avoid: false },
      { name: "Tropical Power Bowl", benefit: "Natural sugars for immediate vitality.", ingredients: ["MANGO", "COCONUT", "CHIA SEEDS"], tag: "Quick Energy", avoid: false },
      { name: "Green Machine Smoothie", benefit: "Hydration meets nutrition for all-day stamina.", ingredients: ["KALE", "BANANA", "GINGER"], tag: "Hydration Plus", avoid: false },
    ],
    avoid_foods: ["Processed Foods", "Energy Drinks", "White Bread", "Candy", "Fried Foods"],
  },
  energised: {
    heading: "Sustain Your Vitality",
    subtext: "Keep your momentum going with foods that complement your natural energy.",
    meals: [
      { name: "Citrus Burst Salad", benefit: "Vitamin C to maintain your energized state.", ingredients: ["ORANGE", "FENNEL", "ALMONDS"], tag: "Vitamin C Rich", avoid: false },
      { name: "Watermelon Refresh Bowl", benefit: "Hydration with natural electrolytes.", ingredients: ["WATERMELON", "MINT", "FETA"], tag: "Electrolyte Dense", avoid: false },
      { name: "Protein Power Plate", benefit: "Maintain muscle energy with lean proteins.", ingredients: ["CHICKEN", "QUINOA", "BROCCOLI"], tag: "Protein Rich", avoid: false },
    ],
    avoid_foods: ["Heavy Dairy", "Red Meat", "Deep Fried Foods", "Sugary Snacks", "Soda"],
  },
  focused: {
    heading: "Fuel Your Mind",
    subtext: "Optimize your concentration with brain-boosting nutrients.",
    meals: [
      { name: "Brain Boost Buddha Bowl", benefit: "Omega-3s and antioxidants for mental clarity.", ingredients: ["WILD SALMON", "AVOCADO", "BLUEBERRIES"], tag: "Cognitive Support", avoid: false },
      { name: "Walnut Wisdom Wrap", benefit: "Nuts and seeds for enhanced memory.", ingredients: ["WALNUTS", "GOJI BERRIES", "SPINACH"], tag: "Memory Boost", avoid: false },
      { name: "Turmeric Golden Bowl", benefit: "Anti-inflammatory spices for focus.", ingredients: ["TURMERIC", "SWEET POTATO", "LENTILS"], tag: "Anti-Inflammatory", avoid: false },
    ],
    avoid_foods: ["Trans Fats", "Artificial Sweeteners", "Excess Sugar", "Processed Meats", "Refined Carbs"],
  },
  anxious: {
    heading: "Find Your Center",
    subtext: "Soothe your anxiety with calming, grounding foods that promote relaxation.",
    meals: [
      { name: "Chamomile Comfort Soup", benefit: "Warm broths to ground and soothe.", ingredients: ["CHAMOMILE", "VEGETABLES", "HERBS"], tag: "Calming", avoid: false },
      { name: "Magnesium Rich Medley", benefit: "Natural calm from leafy greens.", ingredients: ["SPINACH", "DARK CHOCOLATE", "ALMONDS"], tag: "Magnesium Rich", avoid: false },
      { name: "Lavender-infused Porridge", benefit: "Gentle carbs for steady nerves.", ingredients: ["OATS", "LAVENDER", "HONEY"], tag: "Nerve Calming", avoid: false },
    ],
    avoid_foods: ["Caffeine", "Alcohol", "High Sugar Foods", "Energy Drinks", "Processed Snacks"],
  },
  happy: {
    heading: "Celebrate with Color",
    subtext: "Enhance your joy with vibrant, nutrient-dense foods that amplify your mood.",
    meals: [
      { name: "Rainbow Harvest Bowl", benefit: "Celebrate with diverse nutrients.", ingredients: ["BEETS", "CARROTS", "CITRUS"], tag: "Mood Amplifier", avoid: false },
      { name: "Berry Bliss Parfait", benefit: "Antioxidants to keep spirits high.", ingredients: ["STRAWBERRIES", "YOGURT", "GRANOLA"], tag: "Joy Boost", avoid: false },
      { name: "Tropical Paradise Bowl", benefit: "Exotic flavors for extra happiness.", ingredients: ["PINEAPPLE", "COCONUT", "MANGO"], tag: "Tropical Vibes", avoid: false },
    ],
    avoid_foods: ["Processed Foods", "Artificial Additives", "Excess Sodium", "Fried Foods", "Sugary Drinks"],
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mood = searchParams.get("mood") || "stressed";

  const data = moodMeals[mood.toLowerCase()] || moodMeals.stressed;

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const mood = body.mood || "stressed";

    const data = moodMeals[mood.toLowerCase()] || moodMeals.stressed;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
