import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Ruler, Droplets, Building2, ChevronRight, Calendar, Users, Trophy, Eye, ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

// Import project images
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

const iconicProjects = [
  {
    icon: Building2,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Indrawathi - Pahurnar Bridge",
    location: "Chhattisgarh",
    details: "712 Mts length • 26 Spans • 26.5 Mts span length",
    description: "Major bridge facilitating connection to 500 villages, appreciated by Hon'ble Chief Minister",
    client: "PWD",
    status: "Completed",
    image: slider7,
    year: "2023",
    category: "Infrastructure",
    impact: "500+ Villages Connected"
  },
  {
    icon: Droplets,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Water Treatment Plant",
    location: "Manipur",
    details: "45 MLD capacity • 305 KM pipeline • 13 overhead tanks",
    description: "Comprehensive water supply system providing clean water to all rural households",
    client: "Government of Manipur",
    status: "Operational",
    image: slider12,
    year: "2022",
    category: "Water Management",
    impact: "1M+ People Served"
  },
  {
    icon: Droplets,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Sewerage Treatment Plant",
    location: "Manipur",
    details: "16 MLD capacity • City-wide coverage",
    description: "Advanced sewerage treatment facility supplying clean water to all city households",
    client: "Urban Development",
    status: "Operational",
    image: slider11,
    year: "2022",
    category: "Environmental",
    impact: "Clean City Initiative"
  },
  {
    icon: Building2,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Highway Construction",
    location: "Multiple States",
    details: "200+ KM roads • 50+ bridges • Grade separators",
    description: "Multi-state highway development connecting rural areas to urban centers",
    client: "MORTH",
    status: "Ongoing",
    image: slider1,
    year: "2024",
    category: "Transportation",
    impact: "Enhanced Connectivity"
  },
  {
    icon: Building2,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Residential Complex",
    location: "Hyderabad",
    details: "500 units • Modern amenities • Green building",
    description: "Sustainable residential development with modern infrastructure and green spaces",
    client: "HMDA",
    status: "Completed",
    image: slider6,
    year: "2023",
    category: "Residential",
    impact: "2000+ Residents"
  },
  {
    icon: Droplets,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Dam Construction",
    location: "Karnataka",
    details: "Major irrigation project • 100+ villages benefit",
    description: "Large-scale water storage and irrigation infrastructure for agricultural development",
    client: "State Irrigation Dept",
    status: "Completed",
    image: slider3,
    year: "2021",
    category: "Irrigation",
    impact: "Agricultural Growth"
  }
];

const projectStats = [
  {
    number: "629",
    unit: "+",
    label: "Projects Completed",
    color: "text-orange-600",
    icon: Trophy,
    gradient: "from-orange-500 to-amber-600"
  },
  {
    number: "14",
    unit: "",
    label: "States Coverage", 
    color: "text-orange-600",
    icon: MapPin,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    number: "20",
    unit: "+",
    label: "Years Experience",
    color: "text-orange-600",
    icon: Calendar,
    gradient: "from-orange-600 to-amber-500"
  },
  {
    number: "500",
    unit: "+",
    label: "Villages Connected",
    color: "text-orange-600", 
    icon: Users,
    gradient: "from-amber-600 to-orange-500"
  },
];

const projectCategories = [
  "All Projects",
  "Infrastructure", 
  "Water Management",
  "Transportation", 
  "Environmental",
  "Residential",
  "Irrigation"
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All Projects" 
    ? iconicProjects 
    : iconicProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Iconic Projects
            </span>{" "}
            <span className="text-gray-900">Gallery</span>
          </motion.h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Discover our portfolio of groundbreaking infrastructure projects that have transformed communities across 14 states in India
          </p>
        </motion.div>

        {/* Enhanced Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {projectStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-75 rounded-2xl blur group-hover:blur-sm transition-all duration-300"
                   style={{background: `linear-gradient(135deg, #f97316, #fbbf24)`}}></div>
              <div className="relative bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                    <span className="text-2xl ml-1">{stat.unit}</span>
                  </div>
                  <p className="text-amber-800 font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105"
                  : "border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Enhanced Project Cards Grid */}
        <motion.div
          layout
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="h-full bg-white shadow-lg border-0 rounded-3xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-0 font-medium">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" 
                        ? "bg-green-500 hover:bg-green-600 border-0" 
                        : "bg-blue-500 hover:bg-blue-600 border-0 text-white"}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1">
                      <span className="text-white font-bold text-sm">{project.year}</span>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-gray-900"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 ${project.bgColor} rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <project.icon className={`${project.iconColor} w-7 h-7`} />
                    </div>
                    
                    <motion.div
                      animate={hoveredProject === index ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-amber-700 text-sm mb-4">
                    <MapPin size={16} className="mr-2" />
                    {project.location}
                  </div>
                  
                  <div className="text-orange-700 text-sm font-medium mb-4 bg-orange-50 rounded-lg p-3">
                    {project.details}
                  </div>
                  
                  <p className="text-amber-800 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2">
                      <Trophy className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-orange-700 font-medium text-sm">{project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-amber-700">
                      <strong>Client:</strong> {project.client}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Join the 500+ communities we've transformed. Let's build something extraordinary together.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project Today
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}