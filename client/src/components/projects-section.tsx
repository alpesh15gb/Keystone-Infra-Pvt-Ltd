import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, Droplets, Building2 } from "lucide-react";

const iconicProjects = [
  {
    icon: Building2,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Indrawathi - Pahurnar Bridge",
    location: "Chhattisgarh",
    details: "712 Mts length • 26 Spans • 26.5 Mts span length",
    description: "Major bridge facilitating connection to 500 villages, appreciated by Hon'ble Chief Minister",
    client: "PWD",
    status: "Completed",
  },
  {
    icon: Droplets,
    iconColor: "text-stripe-blue",
    bgColor: "bg-stripe-blue/10",
    title: "Water Treatment Plant",
    location: "Manipur",
    details: "45 MLD capacity • 305 KM pipeline • 13 overhead tanks",
    description: "Comprehensive water supply system providing clean water to all rural households",
    client: "Government of Manipur",
    status: "Operational",
  },
  {
    icon: Droplets,
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange-light",
    title: "Sewerage Treatment Plant",
    location: "Manipur",
    details: "16 MLD capacity • City-wide coverage",
    description: "Advanced sewerage treatment facility supplying clean water to all city households",
    client: "Urban Development",
    status: "Operational",
  },
];

const projectStats = [
  {
    number: "305",
    unit: "KM",
    label: "Pipeline Distribution",
    color: "text-stripe-blue",
  },
  {
    number: "45",
    unit: "MLD",
    label: "Water Treatment Capacity",
    color: "text-stripe-purple",
  },
  {
    number: "13",
    unit: "No's",
    label: "Overhead Tanks",
    color: "text-accent-orange",
  },
  {
    number: "712",
    unit: "Mts",
    label: "Bridge Length",
    color: "text-stripe-blue",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Iconic Projects</h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Pioneering infrastructure development across transportation, water management, and urban development
          </p>
        </motion.div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.number}
                  <span className="text-lg ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-amber-800">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Iconic Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {iconicProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg border-0 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                      <project.icon className={project.iconColor} size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-orange-600 mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-amber-700 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                  </div>
                  
                  <div className="text-orange-700 text-sm font-medium mb-3">
                    {project.details}
                  </div>
                  
                  <p className="text-amber-800 text-sm mb-4">{project.description}</p>
                  
                  <div className="text-xs text-amber-700">
                    <strong>Client:</strong> {project.client}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Geographic Coverage */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">Project Locations</h3>
            <p className="text-amber-800">Expanding over horizons - Operating across 14 states in India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {[
              "Delhi NCR", "Haryana", "Assam", "Nagaland", "Manipur",
              "Mizoram", "Bihar", "Jharkhand", "Madhya Pradesh", "Chhattisgarh",
              "Telangana", "Andhra Pradesh", "Goa", "Karnataka"
            ].map((state, index) => (
              <motion.div
                key={state}
                className="bg-stripe-light rounded-lg p-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="text-sm font-medium text-stripe-dark">{state}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-orange rounded-full mr-2"></div>
                06 Completed Projects
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-stripe-blue rounded-full mr-2"></div>
                14 States Coverage
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}