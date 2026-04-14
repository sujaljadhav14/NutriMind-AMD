# NutriMind

Mood-aware food intelligence web app. Tell us your mood, and we'll tell you exactly what to eat.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
- **Maps:** Google Maps Embed API
- **Deployment:** Google Cloud Run

## Features

- **Mood Check-In** - Select from 6 moods: Stressed, Tired, Energised, Focused, Anxious, Happy
- **Meal Suggestions** - AI-powered personalized food recommendations based on your mood
- **Nearby Spots** - Find healthy food places near your location with Google Maps

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with mood selector |
| `/suggestions` | Personalized meal recommendations |
| `/nearby` | Find healthy food spots nearby |

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env.local` with:

```env
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Deploy to Cloud Run

```bash
gcloud run deploy nutrimind \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars "GEMINI_API_KEY=your_key"
```

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/suggestions` | GET/POST | Get meal suggestions by mood |
| `/api/gemini` | POST | Gemini AI integration |
| `/api/places` | POST | Google Places API |

## Mood Categories

| Mood | Focus |
|------|-------|
| Stressed | Magnesium-rich, cortisol-lowering foods |
| Tired | Energy-boosting proteins and grains |
| Energised | Electrolyte-dense fruits |
| Focused | Omega-3s and antioxidants |
| Anxious | Calming, amino-acid rich broths |
| Happy | Vibrant, seasonal whole foods |
