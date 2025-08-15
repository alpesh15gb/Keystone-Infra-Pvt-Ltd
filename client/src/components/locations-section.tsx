import { motion } from "framer-motion";
import { MapPin, Building2, Globe, Trophy, Zap } from "lucide-react";

import indiaMap from "@assets/India-State-and-Capital-Union-Territories_1755108680983.png";
import keystoneLogo from "@assets/Screenshot_2025-08-13_234234-removebg-preview_1755108853673.png";

export function LocationsSection() {
  const states = [
    "Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi", "Haryana", 
    "Jharkhand", "Karnataka", "Madhya Pradesh", "Manipur", "Odisha", 
    "Punjab", "Telangana", "Uttar Pradesh", "West Bengal"
  ];

  return (
    <section id="locations" className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full animate-pulse opacity-20 delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-25 delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-30 delay-3000"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Pan-India Infrastructure Excellence
          </h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            With <span className="font-bold text-orange-400">20+ years of proven expertise</span> across <span className="font-bold text-orange-400">14 states</span>, 
            Keystone Infra has established itself as a trusted infrastructure partner, delivering 
            <span className="font-bold text-orange-400">600+ successful projects</span> that connect communities and drive economic progress nationwide.
          </p>
        </motion.div>

        {/* Interactive Map with Logo Markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">
              Strategic Nationwide Operations
            </h3>
            <p className="text-amber-800 text-lg">
              From highways to hospitals, bridges to buildings - transforming India's infrastructure landscape
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={indiaMap} 
              alt="India Map with Keystone Infra Presence" 
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Logo markers positioned over operational states */}
            <div className="absolute inset-0">
              {/* Delhi */}
              <div className="absolute" style={{ top: '28%', left: '29%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Delhi"
                />
              </div>
              
              {/* Punjab */}
              <div className="absolute" style={{ top: '22%', left: '26%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Punjab"
                />
              </div>
              
              {/* Haryana */}
              <div className="absolute" style={{ top: '26%', left: '27%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Haryana"
                />
              </div>
              
              {/* Uttar Pradesh */}
              <div className="absolute" style={{ top: '32%', left: '35%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Uttar Pradesh"
                />
              </div>
              
              {/* Bihar */}
              <div className="absolute" style={{ top: '35%', left: '42%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Bihar"
                />
              </div>
              
              {/* Jharkhand */}
              <div className="absolute" style={{ top: '42%', left: '43%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Jharkhand"
                />
              </div>
              
              {/* West Bengal */}
              <div className="absolute" style={{ top: '42%', left: '48%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="West Bengal"
                />
              </div>
              
              {/* Odisha */}
              <div className="absolute" style={{ top: '50%', left: '44%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Odisha"
                />
              </div>
              
              {/* Chhattisgarh */}
              <div className="absolute" style={{ top: '45%', left: '38%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Chhattisgarh"
                />
              </div>
              
              {/* Madhya Pradesh */}
              <div className="absolute" style={{ top: '42%', left: '33%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Madhya Pradesh"
                />
              </div>
              
              {/* Telangana */}
              <div className="absolute" style={{ top: '58%', left: '33%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Telangana"
                />
              </div>
              
              {/* Andhra Pradesh */}
              <div className="absolute" style={{ top: '65%', left: '34%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Andhra Pradesh"
                />
              </div>
              
              {/* Karnataka */}
              <div className="absolute" style={{ top: '72%', left: '30%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Karnataka"
                />
              </div>
              
              {/* Manipur */}
              <div className="absolute" style={{ top: '38%', left: '64%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Manipur"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-amber-700 text-sm flex items-center justify-center">
              <img src={keystoneLogo} alt="Keystone Logo" className="w-4 h-4 mr-2" />
              Keystone Infra operational states across India
            </p>
          </div>
        </motion.div>

        {/* All-India Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold text-orange-600 mb-2">14+</h4>
            <p className="text-amber-800 font-medium">States Covered</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold text-amber-700 mb-2">600+</h4>
            <p className="text-amber-800 font-medium">Projects Completed</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold text-orange-700 mb-2">20+</h4>
            <p className="text-amber-800 font-medium">Years of Excellence</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold text-amber-700 mb-2">₹1000+</h4>
            <p className="text-amber-800 font-medium">Crores Project Value</p>
          </div>
        </motion.div>

        {/* Regional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
            <MapPin className="text-orange-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-orange-600 mb-3">Northern India</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              Major highway projects in Delhi, Punjab, Haryana, and Uttar Pradesh connecting key economic corridors
            </p>
            <div className="flex items-center mt-3 text-xs text-amber-700">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Highway Construction • Government Buildings
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
            <MapPin className="text-amber-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-amber-600 mb-3">Eastern India</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              Infrastructure development in West Bengal, Bihar, and Jharkhand focusing on connectivity and urban development
            </p>
            <div className="flex items-center mt-3 text-xs text-amber-700">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
              Roads • Water Management • Medical Facilities
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
            <MapPin className="text-orange-700 mb-4" size={32} />
            <h4 className="text-xl font-bold text-orange-700 mb-3">Southern India</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              Comprehensive projects in Andhra Pradesh, Telangana, and Karnataka including educational institutions and hospitals
            </p>
            <div className="flex items-center mt-3 text-xs text-amber-700">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
              Educational • Healthcare • Commercial Buildings
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}