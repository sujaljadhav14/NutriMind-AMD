import Image from "next/image";

export interface MealProps {
  name: string;
  benefit: string;
  ingredients: string[];
  tag: string;
  imageUrl?: string;
  avoid?: boolean;
}

export default function SuggestionCard({ meal }: { meal: MealProps }) {
  // Using an Unsplash fallback image if none provided
  const imgSrc = meal.imageUrl || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80";

  return (
    <div className="group flex flex-col bg-surface-container-low rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          alt={meal.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={imgSrc} 
        />
        {meal.tag && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {meal.tag}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-on-surface mb-2 leading-tight">{meal.name}</h3>
        <p className="text-on-secondary-container text-sm font-medium mb-4 italic">{meal.benefit}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {meal.ingredients.map((ing, idx) => (
            <span key={idx} className="px-2 py-1 bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase rounded-md">
              {ing}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
