"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SuggestionCard from "@/components/SuggestionCard";
import FoodsToAvoid from "@/components/FoodsToAvoid";

interface Meal {
  name: string;
  benefit: string;
  ingredients: string[];
  tag: string;
  avoid: boolean;
}

interface SuggestionData {
  heading: string;
  subtext: string;
  meals: Meal[];
  avoid_foods: string[];
}

export default function SuggestionsPage() {
  const searchParams = useSearchParams();
  const mood = searchParams.get("mood") || "stressed";
  const [data, setData] = useState<SuggestionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        const res = await fetch(`/api/suggestions?mood=${mood}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSuggestions();
  }, [mood]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Failed to load suggestions</p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide uppercase">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          Results for: {mood}
        </div>
        
        <h1 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-center text-on-surface">
          {data.heading}
        </h1>
        <p className="mt-4 text-on-surface-variant text-lg text-center max-w-xl">
          {data.subtext}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {data.meals.map((meal, index) => (
          <SuggestionCard key={index} meal={meal} />
        ))}
      </div>

      <FoodsToAvoid foods={data.avoid_foods} />

      <div className="mt-24 text-center">
        <p className="font-label text-sm uppercase tracking-[0.2em] text-outline mb-6">Want a customized plan?</p>
        <button className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-full shadow-lg transition-transform hover:bg-primary-container active:scale-95">
          Generate Weekly {mood.charAt(0).toUpperCase() + mood.slice(1)}-Fix Menu
        </button>
      </div>
    </div>
  );
}
