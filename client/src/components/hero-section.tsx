import { useState, useEffect } from "react";


interface HeroSectionProps {
  isEditMode?: boolean;
}

export function HeroSection({ isEditMode = false }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen overflow-hidden pt-16 md:pt-24 bg-black">
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-24 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/B7MH3cQSZJA?autoplay=1&mute=1&controls=0&loop=1&playlist=B7MH3cQSZJA&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
            className="absolute inset-0 w-full h-full pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>
    </section>
  );
}
