"use client";

import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-5 backdrop-blur-lg bg-black/60 border-b border-white/10 text-white transition-all">
      <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm font-medium uppercase tracking-widest hidden md:flex">
        <a href="#men" className="hover:text-white/70 transition-colors">Men</a>
        <a href="#women" className="hover:text-white/70 transition-colors">Women</a>
        <a href="#kids" className="hover:text-white/70 transition-colors">Kids</a>
      </div>

      <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl font-bold tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
        URBANWEAVES
      </a>

      <div className="flex items-center gap-4 md:gap-7">
        <button aria-label="Search" className="hover:opacity-70 transition-opacity">
          <Search size={22} className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
        </button>
        <button aria-label="Favorites" className="hover:opacity-70 transition-opacity hidden md:block">
          <Heart size={22} strokeWidth={1.5} />
        </button>
        <button aria-label="Cart" className="hover:opacity-70 transition-opacity relative">
          <ShoppingCart size={22} className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[8px] font-bold text-black">
            2
          </span>
        </button>
        <button aria-label="User Profile" className="hover:opacity-70 transition-opacity hidden md:block">
          <User size={22} strokeWidth={1.5} />
        </button>
        <button aria-label="Menu" className="hover:opacity-70 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" strokeWidth={1.5} /> : <Menu size={24} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" strokeWidth={1.5} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-8 gap-8 shadow-2xl">
          <div className="flex flex-col items-center gap-8 md:hidden">
            <a href="#men" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest hover:text-white/70">Men</a>
            <a href="#women" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest hover:text-white/70">Women</a>
            <a href="#kids" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest hover:text-white/70">Kids</a>
          </div>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest hover:text-white/70">About</a>
          
          <div className="flex items-center gap-8 mt-4 md:hidden">
            <button aria-label="Favorites" className="hover:opacity-70 transition-opacity flex flex-col items-center gap-2">
              <Heart size={20} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest">Favorites</span>
            </button>
            <button aria-label="User Profile" className="hover:opacity-70 transition-opacity flex flex-col items-center gap-2">
              <User size={20} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest">Profile</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
