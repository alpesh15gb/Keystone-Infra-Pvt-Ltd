import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Database, Network, CheckCircle } from "lucide-react";
import highwayImage from "@/assets/Highway_construction_site_464b4d08.png";
import waterImage from "@/assets/Water_treatment_plant_26da84cd.png";
import buildingImage from "@/assets/Building_construction_site_51639ad3.png";

const products = [
  {
    icon: Cloud,
    iconColor: "text-amber-700",
    bgColor: "bg-amber-700/10",
    title: "Transportation Infrastructure",
    description: "Complete road construction including national highways, state highways, and bridges.",
    features: ["National & State Highways", "Bridge Construction", "CC Roads & Major District Roads", "Rigid and Flexible Major District Roads"],
    image: highwayImage,
  },
  {
    icon: Database,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-600/10",
    title: "Water Management",
    description: "Comprehensive water supply, treatment plants, and irrigation systems.",
    features: ["Water Treatment Plants", "Pipeline Distribution", "Sewerage Treatment"],
    image: waterImage,
  },
  {
    icon: Network,
    iconColor: "text-amber-800",
    bgColor: "bg-amber-800/10",
    title: "Building Construction",
    description: "Government commercial buildings, medical facilities, educational institutions, and specialized infrastructure development.",
    features: ["Govt Commercial Buildings", "Govt Medical Facilities", "Educational Institutions", "Non Residential Buildings"],
    image: buildingImage,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-900 via-orange-950/20 to-amber-900/30 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Infrastructure
            </span>{" "}
            <span className="text-white">
              Mastery
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Diversified excellence across transportation networks, water management systems, and construction projects
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-orange-400/20 group-hover:border-orange-400/50 transition-all duration-500">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-0 relative">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Dynamic overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 left-6">
                      <motion.div 
                        className={`w-14 h-14 ${product.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-xl border border-orange-400/30`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <product.icon className={`${product.iconColor} group-hover:text-orange-300 transition-colors duration-300`} size={28} />
                      </motion.div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-orange-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8 relative">
                    {/* Background glow for text area */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-orange-300 mb-4 group-hover:text-orange-200 transition-colors duration-300 relative z-10"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {product.title}
                    </motion.h3>
                    
                    <p className="text-orange-100/80 mb-6 leading-relaxed relative z-10 group-hover:text-orange-100 transition-colors duration-300">
                      {product.description}
                    </p>
                    
                    <div className="space-y-3 relative z-10">
                      {product.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.15) + (idx * 0.1) }}
                        >
                          <CheckCircle className="text-orange-400 flex-shrink-0 group-hover:text-orange-300 transition-colors duration-300" size={18} />
                          <span className="text-sm text-orange-200/80 group-hover:text-orange-200 transition-colors duration-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
