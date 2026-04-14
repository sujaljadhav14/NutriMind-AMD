export interface MoodData {
  id: string;
  label: string;
  icon: string;
  desc: string;
  heading: string;
  subtext: string;
}

export const moodData: Record<string, MoodData> = {
  stressed: {
    id: "stressed",
    label: "Stressed",
    icon: "psychology",
    desc: "Calm your nervous system with magnesium-rich greens and complex carbs.",
    heading: "Calm through Culinary Alchemy",
    subtext: "Nourish your nervous system with cortisol-lowering nutrients designed to restore inner peace.",
  },
  tired: {
    id: "tired",
    label: "Tired",
    icon: "battery_low",
    desc: "Sustainable energy from clean proteins and low-GI grains.",
    heading: "Recharge with Purposeful Eating",
    subtext: "Fuel your body with nutrients that naturally boost energy without the crash.",
  },
  energised: {
    id: "energised",
    label: "Energised",
    icon: "bolt",
    desc: "Maintain the flow with electrolyte-dense fruits and light hydration.",
    heading: "Sustain Your Vitality",
    subtext: "Keep your momentum going with foods that complement your natural energy.",
  },
  focused: {
    id: "focused",
    label: "Focused",
    icon: "center_focus_weak",
    desc: "Boost cognitive function with Omega-3s and antioxidants.",
    heading: "Fuel Your Mind",
    subtext: "Optimize your concentration with brain-boosting nutrients.",
  },
  anxious: {
    id: "anxious",
    label: "Anxious",
    icon: "waves",
    desc: "Ground yourself with warm, comforting amino-acid rich broths.",
    heading: "Find Your Center",
    subtext: "Soothe your anxiety with calming, grounding foods that promote relaxation.",
  },
  happy: {
    id: "happy",
    label: "Happy",
    icon: "celebration",
    desc: "Celebrate with vibrant, seasonal whole-food treats.",
    heading: "Celebrate with Color",
    subtext: "Enhance your joy with vibrant, nutrient-dense foods that amplify your mood.",
  },
};

export function getMoodById(id: string): MoodData | undefined {
  return moodData[id.toLowerCase()];
}

export function getAllMoods(): MoodData[] {
  return Object.values(moodData);
}
