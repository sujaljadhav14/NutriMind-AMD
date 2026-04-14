"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const moods = [
  { id: "stressed", label: "Stressed", icon: "psychology", desc: "Calm your nervous system with magnesium-rich greens and complex carbs." },
  { id: "tired", label: "Tired", icon: "battery_low", desc: "Sustainable energy from clean proteins and low-GI grains." },
  { id: "energised", label: "Energised", icon: "bolt", desc: "Maintain the flow with electrolyte-dense fruits and light hydration." },
  { id: "focused", label: "Focused", icon: "center_focus_weak", desc: "Boost cognitive function with Omega-3s and antioxidants." },
  { id: "anxious", label: "Anxious", icon: "waves", desc: "Ground yourself with warm, comforting amino-acid rich broths." },
  { id: "happy", label: "Happy", icon: "celebration", desc: "Celebrate with vibrant, seasonal whole-food treats." },
];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string>("stressed");
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/suggestions?mood=${selectedMood}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moods.map((mood) => {
          const isActive = selectedMood === mood.id;
          return (
            <div
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMood(mood.id);
                }
              }}
              className={`group relative p-8 rounded-[1.5rem] transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#E8603C] text-white shadow-xl shadow-primary/20 scale-[1.02]"
                  : "bg-surface-container-low hover:bg-surface-container-high"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl transition-colors ${isActive ? "bg-white/20 backdrop-blur-md" : "bg-surface-container-highest group-hover:bg-surface-container-low"}`}>
                  <span className={`material-symbols-outlined text-3xl ${isActive ? "text-white" : "text-on-surface-variant"}`} data-icon={mood.icon}>{mood.icon}</span>
                </div>
                {isActive && (
                  <span className="material-symbols-outlined text-xl opacity-60" data-icon="check_circle" data-weight="fill">check_circle</span>
                )}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isActive ? "text-white" : "text-on-surface"}`}>{mood.label}</h3>
              <p className={`leading-relaxed ${isActive ? "text-white/80 font-medium" : "text-on-surface-variant"}`}>
                {mood.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={handleContinue}
          className="bg-[#E8603C] hover:bg-primary-container text-white px-12 py-5 rounded-full text-lg font-extrabold tracking-tight transition-all duration-300 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
        >
          Get My Meal Plan
        </button>
        <p className="mt-6 text-on-surface-variant font-medium text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base" data-icon="verified">verified</span>
          Nutritionally balanced recommendations based on your cortisol levels.
        </p>
      </div>
    </>
  );
}
