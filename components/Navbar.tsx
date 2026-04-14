import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#f9f9f6]/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(26,28,27,0.04)] no-border">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-[#1a1c1b] dark:text-[#f9f9f6]">
          NutriMind
        </Link>
        <div className="hidden md:flex items-center gap-8 font-['Manrope'] text-sm tracking-wide font-medium">
          <Link className="text-[#59413b] dark:text-stone-400 hover:text-[#E8603C] transition-colors" href="#">How it works</Link>
          <Link className="text-[#59413b] dark:text-stone-400 hover:text-[#E8603C] transition-colors" href="/nearby">Find Food</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#get-started">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transform transition-transform shadow-lg shadow-primary/10">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
