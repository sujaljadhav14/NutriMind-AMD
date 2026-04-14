"use client";

import { useState, useEffect } from "react";
import NearbySpotCard from "@/components/NearbySpotCard";

interface Spot {
  name: string;
  rating: number;
  description: string;
  tags: string[];
  distance: string;
  imageUrl?: string;
}

const defaultSpots: Spot[] = [
  {
    name: "The Green Alchemist",
    rating: 4.9,
    description: "Plant-based & Organic",
    tags: ["KETO", "GLUTEN FREE"],
    distance: "0.4 mi",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },
  {
    name: "Marrow & Root",
    rating: 4.7,
    description: "Artisan Broths & Seasonal Bowls",
    tags: ["PALEO"],
    distance: "1.2 mi",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    name: "Levantine Hearth",
    rating: 4.8,
    description: "Mediterranean Soul Food",
    tags: ["WHOLE30"],
    distance: "1.5 mi",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
  },
  {
    name: "Pulse & Press",
    rating: 4.5,
    description: "Cold-pressed & Superfoods",
    tags: ["VEGAN"],
    distance: "2.1 mi",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80",
  },
  {
    name: "Solstice Market",
    rating: 4.9,
    description: "Farm-to-Table Grocery",
    tags: ["LOCAL"],
    distance: "3.4 mi",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
  },
];

export default function NearbyPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string>("");
  const [spots] = useState<Spot[]>(defaultSpots);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setLocation({ lat: 19.076, lng: 72.877 });
          setError("Location access denied. Showing Mumbai by default.");
        }
      );
    } else {
      setLocation({ lat: 19.076, lng: 72.877 });
      setError("Geolocation not supported. Showing Mumbai by default.");
    }
  }, []);

  const mapUrl = location
    ? `https://www.google.com/maps/embed/v1/view?key=AIzaSyD9XMEg6u4RqWcPSoA9yi2y1MmP8mb_cDA&center=${location.lat},${location.lng}&zoom=14`
    : "";

  return (
    <div className="flex-grow flex flex-col min-h-[calc(100vh-80px)]">
      <section className="w-full bg-surface-container-low px-8 py-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input
              className="w-full h-16 pl-16 pr-8 bg-surface-container-highest border-none rounded-2xl text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 font-medium transition-all"
              placeholder="Search for organic cafes, keto-friendly spots, or local farm markets..."
              type="text"
            />
            <div className="absolute inset-y-0 right-4 flex items-center gap-2">
              <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
          {error && (
            <p className="mt-2 text-sm text-on-surface-variant">{error}</p>
          )}
        </div>
      </section>

      <section className="flex-grow flex flex-col md:flex-row overflow-hidden max-w-[1440px] mx-auto w-full">
        <div className="w-full md:w-[450px] lg:w-[520px] h-[calc(100vh-216px)] overflow-y-auto bg-surface px-8 py-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">Nearby Spots</h1>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">
              {spots.length} Locations
            </span>
          </div>

          {spots.map((spot, i) => (
            <NearbySpotCard key={i} spot={spot} />
          ))}
        </div>

        <div className="flex-grow h-[400px] md:h-[calc(100vh-216px)] bg-surface-container-high relative">
          {location ? (
            <iframe
              src={mapUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-surface-container-highest">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
