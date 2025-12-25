import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Award } from "lucide-react";

// Optimized: Load only first 6 images initially for better performance
import project1 from "@assets/WhatsApp Image 2025-08-13 at 18.22.04_1755123730376.jpeg";
import project2 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05_1755123730376.jpeg";
import project3 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (1)_1755123730376.jpeg";
import project4 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (2)_1755123730376.jpeg";
import project5 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (3)_1755123730376.jpeg";
import project6 from "@assets/WhatsApp Image 2025-08-13 at 18.22.06_1755123730376.jpeg";

const projectImages = [
  {
    src: project1,
    title: "Highway Infrastructure Development",
    description: "Advanced highway construction with modern engineering solutions",
    location: "National Highway Project",
    category: "Highway Development"
  },
  {
    src: project2,
    title: "Bridge Construction Excellence",
    description: "Major bridge infrastructure connecting communities across regions",
    location: "Interstate Connection",
    category: "Bridge Engineering"
  },
  {
    src: project3,
    title: "Urban Infrastructure Development",
    description: "Comprehensive urban development projects enhancing city connectivity",
    location: "Metropolitan Area",
    category: "Urban Development"
  },
  {
    src: project4,
    title: "Rural Connectivity Project",
    description: "Essential infrastructure bringing connectivity to rural communities",
    location: "Rural Development Zone",
    category: "Rural Infrastructure"
  },
  {
    src: project5,
    title: "Industrial Infrastructure",
    description: "Heavy-duty industrial infrastructure supporting economic growth",
    location: "Industrial Corridor",
    category: "Industrial Development"
  },
  {
    src: project6,
    title: "Transportation Hub Development",
    description: "Multi-modal transportation infrastructure for enhanced connectivity",
    location: "Regional Transport Hub",
    category: "Transportation"
  }
];

export function ProjectShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Project Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-justify leading-relaxed">
            Showcasing our expertise in infrastructure development across diverse sectors. From highway construction to bridge engineering, 
            our projects demonstrate commitment to excellence, innovation, and sustainable development practices that benefit communities nationwide.
          </p>
        </motion.div>

        {/* Image Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Single Image Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={projectImages[currentIndex].src}
              alt={projectImages[currentIndex].title}
              className="w-full h-96 object-cover"
            />
            
            {/* Image Overlay with Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {projectImages[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {projectImages[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}