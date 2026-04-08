"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  { id: 1, image: "/images/Landing_1.jpg", tagline: "LUNARA – Light, Flowing Fashion For Every Mood" },
  { id: 2, image: "/images/Landing_3.jpg", tagline: "DAILOOM – Crafted For Your Daily Look" },
  { id: 3, image: "/images/Landing_2.jpg", tagline: "ACTIVEX – Built To Move, Made To Last" },
];

const menModels = [
  { id: 1, image: "/images/Men_1.jpg", title: "Urban Street", price: "$120" },
  { id: 2, image: "/images/Men_2.jpg", title: "Classic Knit", price: "$85" },
  { id: 3, image: "/images/Men_3.jpg", title: "Modern Fit", price: "$150" },
  { id: 4, image: "/images/Men_4.jpg", title: "Athleisure", price: "$95" },
];

const womenModels = [
  { id: 1, image: "/images/Women_1.jpg", title: "Evening Elegance", price: "$220" },
  { id: 2, image: "/images/Women_2.jpg", title: "Summer Breeze", price: "$180" },
  { id: 3, image: "/images/Woman_3.jpg", title: "Power Suit", price: "$250" },
  { id: 4, image: "/images/Woman_4.jpg", title: "Casual Chic", price: "$140" },
];

const kidsModels = [
  { id: 1, image: "/images/Kid_1.jpg", title: "Playtime Basic", price: "$45" },
  { id: 2, image: "/images/Kid_2.jpg", title: "School Ready", price: "$60" },
  { id: 3, image: "/images/Kid_3.jpg", title: "Party Dress", price: "$85" },
  { id: 4, image: "/images/Kid_4.jpg", title: "Winter Warmth", price: "$95" },
];

export default function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Update active slide indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(scrollPosition / windowHeight);
        setActiveSlide(index);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="h-screen w-full overflow-hidden bg-background">
      <div 
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* === LANDING HERO CAROUSEL === */}
        <div id="home">
          {slides.map((slide, i) => (
            <section key={`hero-${slide.id}`} className="h-screen w-full snap-start relative flex items-center justify-center">
              <div className="absolute inset-0">
                <Image 
                  src={slide.image} 
                  alt={slide.tagline}
                  fill
                  className="object-cover object-center brightness-[0.7]"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>

              <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 max-w-5xl drop-shadow-2xl uppercase tracking-[0.15em]"
                >
                  {slide.tagline.split("–")[0]}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-[0.2em] max-w-2xl uppercase"
                >
                  {slide.tagline.split("–")[1]?.trim()}
                </motion.p>
              </div>
            </section>
          ))}
        </div>

        {/* === MEN SECTION === */}
        <div id="men">
          {/* Men's Cover */}
          <section className="h-screen w-full snap-start relative flex flex-col md:flex-row bg-zinc-950">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
              <Image src="/images/Men_cover.jpg" alt="Men's Collection Cover" fill className="object-cover brightness-[0.8]" />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 text-center bg-zinc-950 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('/images/Men_background_1.jpg')] bg-cover mix-blend-overlay" />
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 className="relative z-10 flex flex-col items-center"
               >
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white mb-6">Men</h2>
                <p className="text-zinc-400 mb-8 max-w-md font-light tracking-wide text-lg">Modern fit for the urban lifestyle.</p>
               </motion.div>
            </div>
          </section>

          {/* Men's Collection Cards */}
          <section className="h-screen w-full snap-start relative flex items-center justify-center p-8 z-10">
            {/* Background */}
            <div className="absolute inset-0 z-[-1]">
              <Image src="/images/Men_background_1.jpg" alt="Men Background" fill className="object-cover brightness-[0.25]" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <main className="container mx-auto px-6 h-full flex flex-col justify-center pt-16">
              <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-white border-l-4 border-white pl-4">Men&apos;s Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {menModels.map((model) => (
                  <Card key={model.id} className="overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform duration-500 rounded-3xl group relative aspect-[3/4]">
                    <CardContent className="p-0 h-full w-full">
                      <Image
                        src={model.image}
                        alt={model.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                        <h3 className="font-semibold text-xl tracking-wider mb-1 uppercase drop-shadow-md">{model.title}</h3>
                        <p className="text-white/80 font-medium">{model.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </main>
          </section>
        </div>

        {/* === WOMEN SECTION === */}
        <div id="women">
          {/* Women's Cover */}
          <section className="h-screen w-full snap-start relative flex flex-col md:flex-row-reverse bg-zinc-950">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
              <Image src="/images/Woman_cover_1.jpg" alt="Women's Collection" fill className="object-cover brightness-[0.8]" />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 text-center bg-zinc-900 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('/images/Women_background_1.jpg')] bg-cover mix-blend-overlay" />
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 className="relative z-10 flex flex-col items-center"
               >
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white mb-6">Women</h2>
                <p className="text-zinc-400 mb-8 max-w-md font-light tracking-wide text-lg">Elegance and comfort uniquely woven.</p>
               </motion.div>
            </div>
          </section>

          {/* Women's Collection Cards */}
          <section className="h-screen w-full snap-start relative flex items-center justify-center p-8 z-10">
            <div className="absolute inset-0 z-[-1]">
              <Image src="/images/Women_background_1.jpg" alt="Women Background" fill className="object-cover brightness-[0.25]" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <main className="container mx-auto px-6 h-full flex flex-col justify-center pt-16">
              <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-white border-l-4 border-white pl-4">Women&apos;s Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {womenModels.map((model) => (
                  <Card key={model.id} className="overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform duration-500 rounded-3xl group relative aspect-[3/4]">
                    <CardContent className="p-0 h-full w-full">
                      <Image
                        src={model.image}
                        alt={model.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                        <h3 className="font-semibold text-xl tracking-wider mb-1 uppercase drop-shadow-md">{model.title}</h3>
                        <p className="text-white/80 font-medium">{model.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </main>
          </section>
        </div>

        {/* === KIDS SECTION === */}
        <div id="kids">
          {/* Kids Cover */}
          <section className="h-screen w-full snap-start relative flex flex-col md:flex-row bg-zinc-950">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex">
               <div className="w-1/2 h-full relative">
                 <Image src="/images/Kid_cover.jpg" alt="Kids Collection 1" fill className="object-cover brightness-[0.8]" />
               </div>
               <div className="w-1/2 h-full relative">
                 <Image src="/images/Kid_cover_2.jpg" alt="Kids Collection 2" fill className="object-cover brightness-[0.8]" />
               </div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 text-center bg-zinc-950 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('/images/Thread_background.jpg')] bg-cover mix-blend-overlay" />
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 className="relative z-10 flex flex-col items-center"
               >
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white mb-6">Kids</h2>
                <p className="text-zinc-400 mb-8 max-w-md font-light tracking-wide text-lg">Durable styles for little adventurers.</p>
               </motion.div>
            </div>
          </section>

          {/* Kids Collection Cards */}
          <section className="h-screen w-full snap-start relative flex items-center justify-center p-8 z-10">
            <div className="absolute inset-0 z-[-1]">
              <Image src="/images/Thread_background.jpg" alt="Kids Background" fill className="object-cover brightness-[0.25]" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <main className="container mx-auto px-6 h-full flex flex-col justify-center pt-16">
              <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-white border-l-4 border-white pl-4">Kids Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {kidsModels.map((model) => (
                  <Card key={model.id} className="overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform duration-500 rounded-3xl group relative aspect-[3/4]">
                    <CardContent className="p-0 h-full w-full">
                      <Image
                        src={model.image}
                        alt={model.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                        <h3 className="font-semibold text-xl tracking-wider mb-1 uppercase drop-shadow-md">{model.title}</h3>
                        <p className="text-white/80 font-medium">{model.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </main>
          </section>
        </div>

        {/* === ABOUT & CONTACT SECTION === */}
        <section id="about" className="h-screen w-full snap-start relative flex flex-col md:flex-row bg-zinc-950">
          <div className="w-full md:w-1/2 h-[30vh] md:h-full relative">
            <Image
              src="/images/Men_background_1.jpg"
              alt="About Background"
              fill
              className="object-cover brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>

          <div className="w-full md:w-1/2 h-[70vh] md:h-full overflow-y-auto bg-zinc-950 flex flex-col justify-center px-8 md:px-16 py-16 text-white hide-scrollbar">
            <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.25em] uppercase text-center mb-16 text-white drop-shadow-lg">
              URBANWEAVES
            </h1>

            <div className="max-w-xl mx-auto w-full space-y-10">
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 mb-6">About Us</h2>
                <div className="space-y-6 text-sm tracking-wide">
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Our Tale</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">Founded with a passion for premium textiles, UrbanWeaves bridges the gap between classic artistry and modern trends. We believe in flowing fashion that empowers.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Our Store</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">Located in the heart of the fashion district, our physical and digital spaces are designed as luxurious retreats for mindful shoppers.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Terms & Conditions</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">Quality is our guarantee. Read our full terms of service regarding purchases and material authentications online.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 mb-6">Policies</h2>
                <div className="grid grid-cols-2 gap-6 text-sm tracking-wide">
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Return Policy</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">30 days from purchase. Tags must remain intact.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Refund Policy</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">Processed within 5-7 business days to original payment method.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 mb-6">Contact Us</h2>
                <div className="grid grid-cols-2 gap-6 text-sm tracking-wide">
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Customer Care</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">+1 (800) 555-0199</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-widest uppercase text-xs">Customer Email</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">help@urbanweaves.com</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex justify-center gap-10">
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-all">FB</a>
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-all">TW</a>
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-all">IG</a>
              <a href="#" className="text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-all">IN</a>
            </div>
          </div>
        </section>

      </div>

      {/* Side Slider Navigation */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className="group relative flex items-center justify-center p-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span 
              className={cn(
                "w-[3px] transition-all duration-500 rounded-full",
                activeSlide === i 
                  ? "h-8 bg-white" 
                  : "h-2 bg-white/30 group-hover:bg-white/60 group-hover:h-4"
              )}
            />
          </button>
        ))}
      </div>
    </main>
  );
}
