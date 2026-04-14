export default function FoodsToAvoid({ foods }: { foods: string[] }) {
  if (!foods || foods.length === 0) return null;
  return (
    <section className="bg-surface-container-lowest rounded-[2rem] p-10 shadow-sm mt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-primary text-3xl">warning</span>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface">Foods to avoid</h2>
      </div>
      <p className="text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
        When your body is in a specific mood state, certain stimulants and ingredients can exacerbate negative symptoms. 
      </p>
      <div className="flex flex-wrap gap-3">
        {foods.map((food, idx) => (
          <span key={idx} className="inline-flex items-center gap-2 px-5 py-2.5 bg-error-container text-on-error-container rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-xs">close</span> {food}
          </span>
        ))}
      </div>
    </section>
  );
}
