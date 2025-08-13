import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Award } from "lucide-react";

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
  },
  {
    src: project7,
    title: "Structural Engineering Excellence",
    description: "Advanced structural engineering solutions for complex projects",
    location: "Infrastructure Complex",
    category: "Structural Engineering"
  },
  {
    src: project8,
    title: "Foundation Engineering",
    description: "Deep foundation solutions for critical infrastructure projects",
    location: "Major Development Site",
    category: "Foundation Work"
  },
  {
    src: project9,
    title: "Road Network Expansion",
    description: "Comprehensive road network development improving regional connectivity",
    location: "Regional Road Network",
    category: "Road Development"
  },
  {
    src: project10,
    title: "Infrastructure Modernization",
    description: "Upgrading existing infrastructure with modern engineering standards",
    location: "Modernization Project",
    category: "Infrastructure Upgrade"
  },
  {
    src: project11,
    title: "Environmental Engineering",
    description: "Sustainable infrastructure solutions with environmental considerations",
    location: "Eco-Development Zone",
    category: "Environmental Engineering"
  },
  {
    src: project12,
    title: "Construction Technology Innovation",
    description: "Implementation of advanced construction technologies and methods",
    location: "Technology Integration Site",
    category: "Construction Technology"
  },
  {
    src: project13,
    title: "Infrastructure Quality Control",
    description: "Rigorous quality control ensuring infrastructure excellence and durability",
    location: "Quality Assurance Project",
    category: "Quality Control"
  },
  {
    src: project14,
    title: "Project Management Excellence",
    description: "Comprehensive project management delivering infrastructure on schedule",
    location: "Major Infrastructure Project",
    category: "Project Management"
  },
  {
    src: project15,
    title: "Safety Engineering Standards",
    description: "Implementation of highest safety standards in infrastructure development",
    location: "Safety-Critical Project",
    category: "Safety Engineering"
  },
  {
    src: project16,
    title: "Community Infrastructure Development",
    description: "Infrastructure projects enhancing community development and growth",
    location: "Community Development Area",
    category: "Community Infrastructure"
  },
  {
    src: project17,
    title: "Engineering Innovation Hub",
    description: "Innovative engineering solutions pushing boundaries of infrastructure development",
    location: "Innovation Center",
    category: "Engineering Innovation"
  }
];

export function ProjectShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Highway Development", "Bridge Engineering", "Urban Development", "Rural Infrastructure", "Industrial Development"];

  const filteredProjects = selectedCategory === "All" 
    ? projectImages 
    : projectImages.filter(project => project.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(filteredProjects.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(filteredProjects.length / 3)) % Math.ceil(filteredProjects.length / 3));
  };

  const visibleProjects = filteredProjects.slice(currentIndex * 3, (currentIndex + 1) * 3);

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={filteredProjects.length <= 3}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={filteredProjects.length <= 3}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Project Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 px-12"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, index) => (
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
          )}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">17+</div>
            <div className="text-gray-300">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">6</div>
            <div className="text-gray-300">Project Categories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-300">Quality Standards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-300">Project Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}