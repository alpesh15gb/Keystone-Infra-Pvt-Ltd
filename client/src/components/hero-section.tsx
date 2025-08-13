import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe, Play, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import constructionVideo from "@assets/generated_images/construction_site_video_background_4fd97d5a.png";
import bridgeConstruction from "@assets/generated_images/highway_bridge_construction_8ffb9076.png";
import urbanConstruction from "@assets/generated_images/urban_construction_skyline_f76f4600.png";
import industrialConstruction from "@assets/generated_images/industrial_construction_site_707415e2.png";
import highwayConstruction from "@assets/generated_images/Highway_construction_infrastructure_scene_4a33cfd9.png";
import damConstruction from "@assets/generated_images/Dam_construction_engineering_project_5220be38.png";
import bridgeProject from "@assets/generated_images/Bridge_construction_infrastructure_project_67b0e816.png";
import tunnelConstruction from "@assets/generated_images/Tunnel_construction_engineering_work_1f1e4fa5.png";

export function HeroSection() {
  const backgroundImages = [
    highwayConstruction,
    damConstruction,
    bridgeProject,
    tunnelConstruction,
    constructionVideo,
    bridgeConstruction,
    urbanConstruction,
    industrialConstruction
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Multiple Background Images with Transitions */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat video-background"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
              className="text-center lg:text-left"
            >
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
                <span className="block">Turning</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Vision
                </span>{" "}
                <span className="block">into Infrastructure</span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl"
              >
                Building tomorrow's infrastructure today. Over 20 years of engineering excellence 
                across India, delivering innovative solutions for complex construction challenges.
              </motion.p>



              {/* Stats/Features */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 text-white/90"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <CheckCircle className="text-green-400 mr-2" size={18} />
                  <span className="font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Shield className="text-blue-400 mr-2" size={18} />
                  <span className="font-medium">ISO 45001:2018 Safety</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Globe className="text-orange-400 mr-2" size={18} />
                  <span className="font-medium">India Coverage</span>
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
