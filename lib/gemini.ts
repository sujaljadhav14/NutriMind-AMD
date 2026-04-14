interface Meal {
  name: string;
  benefit: string;
  ingredients: string[];
  avoid: boolean;
}

interface GeminiResponse {
  heading: string;
  subtext: string;
  meals: Meal[];
  avoid_foods: string[];
}

export async function getMealSuggestions(mood: string): Promise<GeminiResponse> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const prompt = `You are a nutritionist AI. The user is feeling: ${mood}.
Return a JSON object (no markdown, no backticks) with this exact structure:
{
  "heading": "short poetic heading for this mood",
  "subtext": "one sentence description",
  "meals": [
    {
      "name": "meal name",
      "benefit": "one line mood benefit",
      "ingredients": ["ingredient1", "ingredient2", "ingredient3"],
      "avoid": false
    }
  ],
  "avoid_foods": ["food1", "food2", "food3", "food4"]
}
Return exactly 3 meals. Keep it concise.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response from Gemini");
  }

  return JSON.parse(text) as GeminiResponse;
}
