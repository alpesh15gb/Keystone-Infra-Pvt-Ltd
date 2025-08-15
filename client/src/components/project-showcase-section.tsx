import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Award, Play } from "lucide-react";

// Import all project images
import project1 from "@assets/WhatsApp Image 2025-08-13 at 18.22.04_1755123730376.jpeg";
import project2 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05_1755123730376.jpeg";
import project3 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (1)_1755123730376.jpeg";
import project4 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (2)_1755123730376.jpeg";
import project5 from "@assets/WhatsApp Image 2025-08-13 at 18.22.05 (3)_1755123730376.jpeg";
import project6 from "@assets/WhatsApp Image 2025-08-13 at 18.22.06_1755123730376.jpeg";
import project7 from "@assets/WhatsApp Image 2025-08-13 at 18.22.06 (1)_1755123730375.jpeg";
import project8 from "@assets/WhatsApp Image 2025-08-13 at 18.22.06 (2)_1755123730375.jpeg";
import project9 from "@assets/WhatsApp Image 2025-08-13 at 18.22.07_1755123730375.jpeg";
import project10 from "@assets/WhatsApp Image 2025-08-13 at 18.22.07 (1)_1755123730375.jpeg";
import project11 from "@assets/WhatsApp Image 2025-08-13 at 18.22.07 (2)_1755123730375.jpeg";
import project12 from "@assets/WhatsApp Image 2025-08-13 at 18.22.07 (3)_1755123730374.jpeg";
import project13 from "@assets/WhatsApp Image 2025-08-13 at 18.22.08_1755123730374.jpeg";
import project14 from "@assets/WhatsApp Image 2025-08-13 at 18.22.08 (1)_1755123730374.jpeg";
import project15 from "@assets/WhatsApp Image 2025-08-13 at 18.22.08 (2)_1755123730374.jpeg";
import project16 from "@assets/WhatsApp Image 2025-08-13 at 18.22.09_1755123730374.jpeg";
import project17 from "@assets/WhatsApp Image 2025-08-13 at 18.22.09 (1)_1755123730373.jpeg";

const projectItems = [
  {
    type: "video",
    videoId: "wvoxdF185yo",
    title: "Highway Construction Progress",
    description: "Time-lapse documentation of major highway construction project showcasing our engineering excellence",
    location: "National Highway Project",
    category: "Highway Development"
  },
  {
    type: "video",
    videoId: "US6l4c8uSLE",
    title: "Bridge Engineering Excellence",
    description: "Advanced bridge construction techniques and structural engineering solutions in action",
    location: "Interstate Connection",
    category: "Bridge Engineering"
  },
  {
    type: "video",
    videoId: "dPn3aRBkfrA",
    title: "Infrastructure Development Overview",
    description: "Comprehensive overview of our infrastructure development projects and construction methodologies",
    location: "Multi-State Projects",
    category: "Infrastructure Overview"
  },
  {
    type: "video",
    videoId: "p62cJAu31_M",
    title: "Road Construction Technology",
    description: "Modern road construction techniques and equipment deployment for superior infrastructure",
    location: "Regional Road Network",
    category: "Road Development"
  },
  {
    type: "video",
    videoId: "5XUwqNICWTA",
    title: "Heavy Construction Equipment",
    description: "Advanced construction equipment and machinery in operation for large-scale infrastructure projects",
    location: "Construction Sites",
    category: "Construction Technology"
  },
  {
    type: "video",
    videoId: "ALZtqkYNqg4",
    title: "Foundation Engineering Solutions",
    description: "Deep foundation construction and engineering solutions for critical infrastructure development",
    location: "Foundation Projects",
    category: "Foundation Engineering"
  },
  {
    type: "video",
    videoId: "oO1yDu8tuH0",
    title: "Project Execution Excellence",
    description: "Complete project lifecycle from planning to execution showcasing our project management expertise",
    location: "Multiple Locations",
    category: "Project Management"
  },
  {
    type: "video",
    videoId: "PddAAZX3aTM",
    title: "Construction Quality Standards",
    description: "Quality control and construction standards implementation across infrastructure projects",
    location: "Quality Assurance Sites",
    category: "Quality Control"
  },
  {
    type: "video",
    videoId: "2NpgvLuMN5M",
    title: "Infrastructure Innovation Hub",
    description: "Innovative construction methods and technological advancement in infrastructure development",
    location: "Innovation Projects",
    category: "Construction Innovation"
  },
  {
    type: "image",
    src: project10,
    title: "Infrastructure Modernization",
    description: "Upgrading existing infrastructure with modern engineering standards",
    location: "Modernization Project",
    category: "Infrastructure Upgrade"
  },
  {
    type: "image",
    src: project11,
    title: "Environmental Engineering",
    description: "Sustainable infrastructure solutions with environmental considerations",
    location: "Eco-Development Zone",
    category: "Environmental Engineering"
  },
  {
    type: "image",
    src: project12,
    title: "Construction Technology Innovation",
    description: "Implementation of advanced construction technologies and methods",
    location: "Technology Integration Site",
    category: "Construction Technology"
  },
  {
    type: "image",
    src: project13,
    title: "Infrastructure Quality Control",
    description: "Rigorous quality control ensuring infrastructure excellence and durability",
    location: "Quality Assurance Project",
    category: "Quality Control"
  },
  {
    type: "image",
    src: project14,
    title: "Project Management Excellence",
    description: "Comprehensive project management delivering infrastructure on schedule",
    location: "Major Infrastructure Project",
    category: "Project Management"
  },
  {
    type: "image",
    src: project15,
    title: "Safety Engineering Standards",
    description: "Implementation of highest safety standards in infrastructure development",
    location: "Safety-Critical Project",
    category: "Safety Engineering"
  },
  {
    type: "image",
    src: project16,
    title: "Community Infrastructure Development",
    description: "Infrastructure projects enhancing community development and growth",
    location: "Community Development Area",
    category: "Community Infrastructure"
  },
  {
    type: "image",
    src: project17,
    title: "Engineering Innovation Hub",
    description: "Innovative engineering solutions pushing boundaries of infrastructure development",
    location: "Innovation Center",
    category: "Engineering Innovation"
  }
];

export function ProjectShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectItems.length) % projectItems.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-orange-600 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-700">Project Portfolio</span>
          </h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto text-justify leading-relaxed">
            Showcasing our expertise in infrastructure development across diverse sectors. From highway construction to bridge engineering, 
            our projects demonstrate commitment to excellence, innovation, and sustainable development practices that benefit communities nationwide.
          </p>
        </motion.div>

        {/* Image Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Single Item Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {projectItems[currentIndex].type === "image" ? (
              <img
                src={projectItems[currentIndex].src}
                alt={projectItems[currentIndex].title}
                className="w-full h-96 object-cover"
              />
            ) : (
              <div className="relative w-full h-96">
                <iframe
                  src={`https://www.youtube.com/embed/${(projectItems[currentIndex] as any).videoId}?rel=0&modestbranding=1`}
                  title={projectItems[currentIndex].title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            
            {/* Play icon for videos only */}
            {projectItems[currentIndex].type === "video" && (
              <div className="absolute top-4 right-4">
                <Play className="w-8 h-8 text-white opacity-75" />
              </div>
            )}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectItems.map((_, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}