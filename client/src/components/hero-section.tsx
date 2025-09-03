import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe, Play, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import EditableText from "@/components/editable-text";
import EditableImage from "@/components/editable-image";
// Lazy load images for better performance
import highwayConstruction from "@assets/generated_images/Highway_construction_infrastructure_scene_4a33cfd9.png";
import damConstruction from "@assets/generated_images/Dam_construction_engineering_project_5220be38.png";
import bridgeProject from "@assets/generated_images/Bridge_construction_infrastructure_project_67b0e816.png";

interface HeroSectionProps {
  isEditMode?: boolean;
}

export function HeroSection({ isEditMode = false }: HeroSectionProps) {
  // State for background images (can be updated via visual editor)
  const [backgroundImages, setBackgroundImages] = useState([
    highwayConstruction,
    damConstruction,
    bridgeProject
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (id: string, newSrc: string) => {
    const imageIndex = parseInt(id.split('-')[2]) - 1; // Extract index from id like 'hero-background-1'
    if (imageIndex >= 0 && imageIndex < backgroundImages.length) {
      const newImages = [...backgroundImages];
      newImages[imageIndex] = newSrc;
      setBackgroundImages(newImages);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-24">
      {/* Multiple Background Images with Transitions */}
      <div className="absolute inset-0 w-full h-full top-24">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat video-background"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: 1
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
      <div className="relative z-10 w-full h-full flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Main Heading */}
              <EditableText
                id="hero-title"
                isEditMode={isEditMode}
                element="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
              >
                <span className="block">Turning</span>
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vision
                </span>{" "}
                <span className="block">into Infrastructure</span>
              </EditableText>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <EditableText
                  id="hero-subtitle"
                  isEditMode={isEditMode}
                  element="p"
                  multiline={true}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl px-4"
                >
                  Building tomorrow's infrastructure today. Over 20 years of engineering excellence 
                  across India, delivering innovative solutions for complex construction challenges.
                </EditableText>
              </motion.div>



              {/* Stats/Features */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-start gap-3 md:gap-6 text-white/90 px-4"
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
