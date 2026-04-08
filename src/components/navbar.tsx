import Link from "next/link";
import { Search, ShoppingCart, Heart, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-lg bg-black/60 border-b border-white/10 text-white">
      <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm font-medium uppercase tracking-widest hidden md:flex">
        <a href="#men" className="hover:text-white/70 transition-colors">Men</a>
        <a href="#women" className="hover:text-white/70 transition-colors">Women</a>
        <a href="#kids" className="hover:text-white/70 transition-colors">Kids</a>
        <a href="#about" className="hover:text-white/70 transition-colors">About</a>
      </div>

      <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold tracking-[0.2em]">
        URBANWEAVES
      </a>

      <div className="flex items-center gap-5 md:gap-7">
        <button aria-label="Search" className="hover:opacity-70 transition-opacity">
          <Search size={22} strokeWidth={1.5} />
        </button>
        <button aria-label="Favorites" className="hover:opacity-70 transition-opacity">
          <Heart size={22} strokeWidth={1.5} />
        </button>
        <button aria-label="Cart" className="hover:opacity-70 transition-opacity relative">
          <ShoppingCart size={22} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[8px] font-bold text-black">
            2
          </span>
        </button>
        <button aria-label="User Profile" className="hover:opacity-70 transition-opacity hidden md:block">
          <User size={22} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
