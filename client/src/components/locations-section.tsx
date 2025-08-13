import { motion } from "framer-motion";
import { MapPin, Building2, Users, Calendar, Zap, Award, Globe } from "lucide-react";
import { useState } from "react";
import indiaMap from "@assets/generated_images/India_infrastructure_map_0e73f079.png";
import governmentBuilding from "@assets/generated_images/state_government_building_fa9560c7.png";

export function LocationsSection() {
  const [selectedState, setSelectedState] = useState(0);

  const stateProjects = [
    {
      state: "Delhi NCR",
      projects: 45,
      highlight: "Metro Infrastructure",
      description: "Advanced urban infrastructure development",
      color: "from-red-500 to-pink-500"
    },
    {
      state: "Haryana",
      projects: 38,
      highlight: "Highway Networks",
      description: "Connecting rural and urban areas",
      color: "from-green-500 to-teal-500"
    },
    {
      state: "Assam",
      projects: 42,
      highlight: "Bridge Construction",
      description: "Connecting communities across rivers",
      color: "from-blue-500 to-indigo-500"
    },
    {
      state: "Nagaland",
      projects: 28,
      highlight: "Rural Infrastructure",
      description: "Development of remote areas",
      color: "from-purple-500 to-violet-500"
    },
    {
      state: "Bihar",
      projects: 52,
      highlight: "Educational Facilities",
      description: "Schools and institutional buildings",
      color: "from-orange-500 to-red-500"
    },
    {
      state: "Manipur",
      projects: 67,
      highlight: "Singda Dam Project",
      description: "Major water infrastructure development",
      color: "from-cyan-500 to-blue-500"
    },
    {
      state: "Mizoram",
      projects: 31,
      highlight: "Mountain Roads",
      description: "Challenging terrain infrastructure",
      color: "from-emerald-500 to-green-500"
    },
    {
      state: "Madhya Pradesh",
      projects: 44,
      highlight: "Industrial Projects",
      description: "Supporting industrial growth",
      color: "from-amber-500 to-orange-500"
    },
    {
      state: "Jharkhand",
      projects: 39,
      highlight: "Mining Infrastructure",
      description: "Supporting mining operations",
      color: "from-slate-500 to-gray-600"
    },
    {
      state: "Chhattisgarh",
      projects: 58,
      highlight: "Indrawathi Bridge",
      description: "712m bridge connecting 500 villages",
      color: "from-rose-500 to-pink-500"
    },
    {
      state: "Telangana",
      projects: 41,
      highlight: "Smart City Projects",
      description: "Modern urban development",
      color: "from-violet-500 to-purple-500"
    },
    {
      state: "Andhra Pradesh",
      projects: 47,
      highlight: "Coastal Infrastructure",
      description: "Ports and coastal development",
      color: "from-teal-500 to-cyan-500"
    },
    {
      state: "Goa",
      projects: 23,
      highlight: "Tourism Infrastructure",
      description: "Supporting tourism industry",
      color: "from-yellow-500 to-amber-500"
    },
    {
      state: "Karnataka",
      projects: 49,
      highlight: "Tech Corridors",
      description: "IT infrastructure development",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const totalProjects = stateProjects.reduce((sum, state) => sum + state.projects, 0);

  const achievements = [
    {
      icon: Building2,
      title: `${totalProjects}+ Projects`,
      subtitle: "Completed Successfully",
      value: totalProjects,
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Globe,
      title: "14 States",
      subtitle: "All India Presence",
      value: 14,
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Users,
      title: "500+ Villages",
      subtitle: "Communities Connected",
      value: 500,
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Award,
      title: "20 Years",
      subtitle: "Of Excellence",
      value: 20,
      color: "from-purple-600 to-pink-600"
    }
  ];

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

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-75 rounded-2xl blur group-hover:blur-sm transition-all duration-300"
                   style={{backgroundImage: `linear-gradient(135deg, ${achievement.color.split(' ')[1]}, ${achievement.color.split(' ')[3]})`}}></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-blue-200 text-sm">{achievement.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Map and States */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Interactive Coverage Map</h3>
              <div className="relative">
                <img 
                  src={indiaMap} 
                  alt="India Infrastructure Map" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4">
                    <p className="text-gray-800 font-semibold text-center">
                      🏗️ Active in {stateProjects.length} States • {totalProjects}+ Projects Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive States List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">State-wise Projects</h3>
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white/10">
              {stateProjects.map((state, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedState(index)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                    selectedState === index 
                      ? 'bg-white/20 border-2 border-orange-400' 
                      : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${state.color}`}></div>
                      <div>
                        <h4 className="font-semibold text-white">{state.state}</h4>
                        <p className="text-blue-200 text-sm">{state.highlight}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">{state.projects}</div>
                      <div className="text-blue-200 text-xs">Projects</div>
                    </div>
                  </div>
                  {selectedState === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-white/20"
                    >
                      <p className="text-blue-100 text-sm">{state.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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