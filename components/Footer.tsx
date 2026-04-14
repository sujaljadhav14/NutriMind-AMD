import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f1] dark:bg-stone-950 w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1440px] mx-auto">
        <div className="text-lg font-bold text-[#1a1c1b] dark:text-[#f9f9f6]">
          NutriMind
        </div>
        <div className="flex gap-8 font-['Manrope'] text-xs uppercase tracking-[0.05em] font-semibold">
          <Link className="text-[#59413b] dark:text-stone-500 hover:text-[#E8603C] dark:hover:text-[#f28c71] transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-[#59413b] dark:text-stone-500 hover:text-[#E8603C] dark:hover:text-[#f28c71] transition-colors" href="#">Terms of Service</Link>
          <Link className="text-[#59413b] dark:text-stone-500 hover:text-[#E8603C] dark:hover:text-[#f28c71] transition-colors" href="#">Contact Us</Link>
        </div>
        <div className="text-[#59413b] dark:text-stone-500 font-['Manrope'] text-xs uppercase tracking-[0.05em] font-semibold opacity-80">
          © 2024 NutriMind. Crafted for mindful alchemy.
        </div>
      </div>
    </footer>
  );
}
