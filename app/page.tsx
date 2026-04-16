import MoodSelector from "@/components/MoodSelector";

export default function Home() {
  return (
    <>
      <section className="relative pt-20 pb-12 px-8 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-[0.05em] uppercase rounded-full">
              Daily Alchemy
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              How are you feeling right now?
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Tell us your mood and we&apos;ll tell you exactly what to eat.
            </p>
          </div>
          
          <div className="flex-1 relative hidden lg:block">
            <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-surface-container-highest to-surface-container opacity-50 absolute -z-10 blur-3xl transform translate-x-1/4"></div>
            {/* Replace with next/image. For now using standard img tag with remote source from stitch template */}
            <img 
              alt="Mindful Nutrition" 
              className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA5kf5Y03ermSNLG5qyhh_gm_RUATcd68kVVuuleVdSfXBTh3EMSUfHer8QFekdlDAKp_k9XV4qlHkk-VvvBCWP-HvDiwTe_s7Mp1_OJvhtlI5O6JqcY6p2CHLBj7PM4rHM3gLmrAfqCFMpq8x1tTjqmQsimiHeLCoufMR4xkXaqxDrOq-WjHSH9hpA2m30TlWzTE1A8eLfD6xkzoZNVLuQXqxkxEOd5q-hsY-mC5dY8WvlJOJXMq9FvAgQfnQ9RSrCLsHPvfHW9Pe"
            />
          </div>
        </div>
      </section>

      <section className="px-8 pb-32 max-w-[1440px] mx-auto">
        <MoodSelector />
      </section>
    </>
  );
}
