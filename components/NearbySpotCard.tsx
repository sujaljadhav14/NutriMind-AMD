export interface SpotProps {
  name: string;
  rating: number;
  description: string;
  tags: string[];
  distance?: string;
  imageUrl?: string;
}

export default function NearbySpotCard({ spot }: { spot: SpotProps }) {
  const imgSrc = spot.imageUrl || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80";

  return (
    <div className="group bg-surface-container-lowest p-5 rounded-3xl transition-all duration-300 hover:shadow-lg flex gap-5 cursor-pointer border border-transparent hover:border-primary/10">
      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
        <img 
          alt={spot.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={imgSrc}
        />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-on-surface leading-tight">{spot.name}</h3>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-sm font-bold">{spot.rating}</span>
          </div>
        </div>
        <p className="text-on-surface-variant text-sm mt-1">{spot.description}</p>
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {spot.tags.map((tag, idx) => {
            const isPrimary = idx % 2 === 1;
            return (
              <span key={idx} className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md ${isPrimary ? 'text-primary bg-primary-fixed/30' : 'text-secondary bg-secondary-container/20'}`}>
                {tag}
              </span>
            );
          })}
          {spot.distance && (
            <span className="ml-auto text-xs font-medium text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" data-icon="near_me">near_me</span>
              {spot.distance}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
