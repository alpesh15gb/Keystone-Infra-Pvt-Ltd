import { motion } from "framer-motion";
import { MapPin, Building2, Globe, Trophy, Zap } from "lucide-react";

import indiaMap from "@/assets/india-map-locations.jpg";


interface LocationsSectionProps {
  isEditMode?: boolean;
}

export function LocationsSection({ isEditMode = false }: LocationsSectionProps) {
  const states = [
    "Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi", "Haryana",
    "Jharkhand", "Karnataka", "Madhya Pradesh", "Manipur", "Odisha",
    "Punjab", "Telangana", "Uttar Pradesh", "West Bengal"
  ];

  return (
    <section id="locations" className="py-20 bg-black/80 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Completed Projects
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl mb-16"
        >


          <div className="max-w-4xl mx-auto">
            <img
              src={indiaMap}
              alt="India Map with Keystone Infra Project Locations"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>




      </div>
    </section>
  );
}