import { motion } from "framer-motion";
import { MapPin, Building2, Globe, Trophy, Zap } from "lucide-react";

import indiaMap from "@assets/MAP EDITED_1755555415200.jpg";


export function LocationsSection() {
  const states = [
    "Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi", "Haryana", 
    "Jharkhand", "Karnataka", "Madhya Pradesh", "Manipur", "Odisha", 
    "Punjab", "Telangana", "Uttar Pradesh", "West Bengal"
  ];

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-60 delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-80 delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-pulse opacity-50 delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            All India Presence
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto leading-relaxed">
            Spanning across India with 20+ years of infrastructure excellence, 
            delivering transformational projects that connect communities and drive progress.
          </p>
        </motion.div>

        {/* Interactive Map with Logo Markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-100 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">
              Our Nationwide Coverage
            </h3>
            <p className="text-amber-800 text-lg">
              Strategic presence across India delivering infrastructure excellence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={indiaMap} 
              alt="India Map with Keystone Infra Project Locations" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-amber-800 text-lg font-medium">
              Keystone Infra project locations across India marked with our logo
            </p>
          </div>
        </motion.div>




      </div>
    </section>
  );
}