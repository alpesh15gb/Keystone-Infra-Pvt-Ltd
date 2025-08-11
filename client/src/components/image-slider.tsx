import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all slider images
import slider1 from "@assets/slider-1_1754941983527.jpg";
import slider2 from "@assets/slider-2_1754941983528.jpg";
import slider3 from "@assets/slider-3_1754941983528.jpg";
import slider4 from "@assets/slider-4_1754941983528.jpg";
import slider5 from "@assets/slider-5_1754941983528.jpg";
import slider6 from "@assets/slider-6_1754941983528.jpg";
import slider7 from "@assets/slider-7_1754941983528.jpg";
import slider8 from "@assets/slider-8_1754941983529.jpg";
import slider9 from "@assets/slider-9_1754941983529.jpg";
import slider10 from "@assets/slider-10_1754941983529.jpg";
import slider11 from "@assets/slider-11_1754941983529.jpg";
import slider12 from "@assets/slider-12_1754941983529.jpg";

interface SliderImage {
  src: string;
  title: string;
  description: string;
  location: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  title: string;
  subtitle: string;
  autoPlay?: boolean;
  interval?: number;
}

export function ImageSlider({ 
  images, 
  title, 
  subtitle, 
  autoPlay = true, 
  interval = 5000 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Main slider container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 aspect-[16/9] max-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {images[currentIndex].title}
                      </h3>
                      <p className="text-lg mb-2 text-gray-200">
                        {images[currentIndex].description}
                      </p>
                      <p className="text-orange-400 font-semibold">
                        📍 {images[currentIndex].location}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden lg:flex justify-center space-x-2 mt-6 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "border-blue-600 scale-110 shadow-lg"
                    : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Project slider with actual project images
export function ProjectSlider() {
  const projectImages: SliderImage[] = [
    {
      src: slider1,
      title: "Indrawathi-Pahurnar Bridge",
      description: "712m length bridge with 26 spans connecting 500 villages",
      location: "Chhattisgarh"
    },
    {
      src: slider2,
      title: "Institutional Building Complex",
      description: "Modern institutional building with blue and white facade",
      location: "Multi-storey institutional project"
    },
    {
      src: slider3,
      title: "Water Tank Infrastructure",
      description: "Overhead water tanks with modern design and safety features",
      location: "Water supply project"
    },
    {
      src: slider4,
      title: "Airport Development",
      description: "Airport infrastructure and runway development project",
      location: "Aviation infrastructure"
    },
    {
      src: slider5,
      title: "Highway Construction",
      description: "Curved highway construction through forested terrain",
      location: "State highway project"
    },
    {
      src: slider6,
      title: "Water Treatment Plant",
      description: "45 MLD capacity water treatment facility with circular clarifiers",
      location: "Manipur"
    },
    {
      src: slider7,
      title: "Commercial Building",
      description: "Multi-storey commercial building in urban setting",
      location: "Commercial infrastructure"
    },
    {
      src: slider8,
      title: "Pipeline Bridge",
      description: "Water pipeline bridge infrastructure with blue pipelines",
      location: "Water distribution system"
    },
    {
      src: slider9,
      title: "Modern Bridge Design",
      description: "Contemporary bridge architecture over natural waterway",
      location: "Bridge infrastructure"
    },
    {
      src: slider10,
      title: "Arch Bridge Construction",
      description: "Modern arch bridge spanning natural water body",
      location: "Transportation infrastructure"
    },
    {
      src: slider11,
      title: "Major Bridge Project",
      description: "Long span bridge construction over river with multiple supports",
      location: "Major transportation corridor"
    },
    {
      src: slider12,
      title: "Sewerage Treatment Plant",
      description: "16 MLD sewerage treatment facility with circular treatment tanks",
      location: "Urban sanitation project"
    }
  ];

  return (
    <ImageSlider 
      images={projectImages}
      title="Our Project Gallery"
      subtitle="Showcasing excellence in infrastructure development across India"
    />
  );
}