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
    <section id="locations" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60 delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-80 delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-50 delay-3000"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            All India Presence
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Spanning across 14 states with 20+ years of infrastructure excellence, 
            delivering transformational projects that connect communities and drive progress.
          </p>
        </motion.div>

        {/* Interactive Map with Logo Markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/80 to-blue-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50 shadow-2xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Our Nationwide Coverage
            </h3>
            <p className="text-amber-200 text-lg">
              Strategic presence across 14 states delivering infrastructure excellence
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
            <p className="text-amber-200 text-sm flex items-center justify-center">
              <img src={keystoneLogo} alt="Keystone Logo" className="w-4 h-4 mr-2" />
              Keystone Infra operational states across India
            </p>
          </div>
        </motion.div>

        {/* Regional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { region: "Northern India", highlight: "Highway Development", icon: "🛣️", color: "from-red-500/20 to-pink-600/20 border-red-500/30" },
            { region: "Southern India", highlight: "Urban Infrastructure", icon: "🏙️", color: "from-blue-500/20 to-cyan-600/20 border-blue-500/30" },
            { region: "Eastern India", highlight: "Bridge Construction", icon: "🌉", color: "from-green-500/20 to-emerald-600/20 border-green-500/30" },
            { region: "Central India", highlight: "Water Management", icon: "💧", color: "from-purple-500/20 to-violet-600/20 border-purple-500/30" }
          ].map((area, index) => (
            <motion.div
              key={area.region}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${area.color} rounded-2xl p-6 border backdrop-blur-sm text-center`}
            >
              <div className="text-3xl mb-3">{area.icon}</div>
              <h4 className="text-white font-bold mb-2">{area.region}</h4>
              <p className="text-amber-200 text-sm">{area.highlight}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Flagship Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Flagship Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h4 className="font-bold text-xl text-white mb-2">Singda Dam</h4>
              <p className="text-orange-100">Manipur • Water Infrastructure</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h4 className="font-bold text-xl text-white mb-2">Indrawathi Bridge</h4>
              <p className="text-orange-100">Chhattisgarh • 712m • 500 Villages Connected</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h4 className="font-bold text-xl text-white mb-2">Police Headquarters</h4>
              <p className="text-orange-100">Manipur • Government Infrastructure</p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}