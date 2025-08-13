import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Zap, Building2 } from "lucide-react";

import indiaMap from "@assets/generated_images/Clean_India_outline_map_8b59e628.png";
import governmentBuilding from "@assets/generated_images/state_government_building_fa9560c7.png";

export function LocationsSection() {



  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              All India
            </span>{" "}
            Presence
          </motion.h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transforming infrastructure across 14 states with cutting-edge engineering solutions
          </p>
        </motion.div>



        {/* Interactive Map - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Interactive Coverage Map</h3>
            <div className="relative">
              <img 
                src={indiaMap} 
                alt="India Infrastructure Map" 
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[600px] object-contain mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Flagship Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <img src={governmentBuilding} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-center">Flagship Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Building2 className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Singda Dam</h4>
                  <p className="text-orange-100 text-sm">Manipur • Water Infrastructure</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Building2 className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Indrawathi Bridge</h4>
                  <p className="text-orange-100 text-sm">Chhattisgarh • 712m • 500 Villages Connected</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Building2 className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Police Headquarters</h4>
                  <p className="text-orange-100 text-sm">Manipur • Government Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}