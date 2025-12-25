import { useState, useEffect } from "react";


interface HeroSectionProps {
  isEditMode?: boolean;
}

export function HeroSection({ isEditMode = false }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen overflow-hidden pt-16 md:pt-24 bg-black">
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-24 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain object-center"
        >
          <source src="/videos/CompanyProfile.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
