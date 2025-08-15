import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
// Lazy load images to improve performance
import highwayConstruction from "@assets/generated_images/Highway_construction_infrastructure_scene_4a33cfd9.png";
import damConstruction from "@assets/generated_images/Dam_construction_engineering_project_5220be38.png";
import bridgeProject from "@assets/generated_images/Bridge_construction_infrastructure_project_67b0e816.png";

export function HeroSection() {
  // Reduce number of images for better performance
  const backgroundImages = useMemo(() => [
    highwayConstruction,
    damConstruction,
    bridgeProject
  ], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // Further increase interval to reduce CPU usage

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Multiple Background Images with Transitions */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${image})`,
              willChange: index === currentImageIndex ? 'opacity' : 'auto'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-20 right-8 z-10 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
                <span className="block">Turning</span>
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vision
                </span>{" "}
                <span className="block">into Infrastructure</span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto px-4"
              >
                Building tomorrow's infrastructure today. Over 20 years of engineering excellence 
                across India with 600+ completed projects spanning 14 states, delivering innovative solutions for complex construction challenges.
              </motion.p>



              {/* Stats/Features */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 md:gap-6 text-white/90 px-4"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span className="font-medium text-sm md:text-base">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
                  <Shield className="text-amber-400 mr-2" size={16} />
                  <span className="font-medium text-sm md:text-base">ISO 45001:2018 Safety</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
                  <Globe className="text-orange-400 mr-2" size={16} />
                  <span className="font-medium text-sm md:text-base">All India Coverage</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
