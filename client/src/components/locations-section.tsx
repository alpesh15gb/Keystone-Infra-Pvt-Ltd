import { motion } from "framer-motion";

import indiaMap from "@assets/India-State-and-Capital-Union-Territories_1755108680983.png";
import keystoneLogo from "@assets/Screenshot_2025-08-13_234234-removebg-preview_1755108853673.png";

export function LocationsSection() {
  const states = [
    "Delhi", "Madhya Pradesh", "Chhattisgarh", "Telangana", 
    "Manipur", "Nagaland", "Mizoram", "Rajasthan", 
    "Goa", "Andhra Pradesh", "Karnataka", "Bihar"
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
            Keystone Infra has established itself as a trusted infrastructure partner across multiple states, 
            delivering projects that connect communities and drive economic progress nationwide.
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
              <div className="absolute" style={{ top: '26%', left: '28.5%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Delhi"
                />
              </div>
              
              {/* Madhya Pradesh */}
              <div className="absolute" style={{ top: '40%', left: '32%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Madhya Pradesh"
                />
              </div>
              
              {/* Chhattisgarh */}
              <div className="absolute" style={{ top: '47%', left: '42%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Chhattisgarh"
                />
              </div>
              
              {/* Telangana */}
              <div className="absolute" style={{ top: '62%', left: '38%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Telangana"
                />
              </div>
              
              {/* Manipur */}
              <div className="absolute" style={{ top: '36%', left: '63%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Manipur"
                />
              </div>
              
              {/* Nagaland */}
              <div className="absolute" style={{ top: '32%', left: '64.5%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Nagaland"
                />
              </div>
              
              {/* Mizoram */}
              <div className="absolute" style={{ top: '42%', left: '62%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Mizoram"
                />
              </div>
              
              {/* Rajasthan */}
              <div className="absolute" style={{ top: '30%', left: '23%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Rajasthan"
                />
              </div>
              
              {/* Goa */}
              <div className="absolute" style={{ top: '66%', left: '25.5%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Goa"
                />
              </div>
              
              {/* Andhra Pradesh */}
              <div className="absolute" style={{ top: '70%', left: '37%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Andhra Pradesh"
                />
              </div>
              
              {/* Karnataka */}
              <div className="absolute" style={{ top: '68%', left: '29%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Karnataka"
                />
              </div>
              
              {/* Bihar */}
              <div className="absolute" style={{ top: '33%', left: '41%' }}>
                <motion.img 
                  src={keystoneLogo} 
                  alt="Keystone Infra" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.3 }}
                  title="Bihar"
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

      </div>
    </section>
  );
}