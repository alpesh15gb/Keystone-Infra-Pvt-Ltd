import { motion } from "framer-motion";
import { MapPin, Building2, Users, Calendar } from "lucide-react";

export function LocationsSection() {
  const states = [
    "Delhi NCR", "Haryana", "Assam", "Nagaland", "Bihar", "Manipur", 
    "Mizoram", "Madhya Pradesh", "Jharkhand", "Chhattisgarh", 
    "Telangana", "Andhra Pradesh", "Goa", "Karnataka"
  ];

  const highlights = [
    {
      icon: Building2,
      title: "600+ Projects Completed",
      description: "Successfully delivered across 14 states"
    },
    {
      icon: MapPin,
      title: "14 States Coverage",
      description: "Expanding horizons across India"
    },
    {
      icon: Users,
      title: "500+ Villages Connected",
      description: "Through our infrastructure projects"
    },
    {
      icon: Calendar,
      title: "20 Years of Excellence",
      description: "Established in 2005, growing strong"
    }
  ];

  return (
    <section id="locations" className="py-16 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expanding Over Horizons
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our infrastructure development projects span across 14 states, connecting communities and building the future of India
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* States Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            States Where We Operate
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:from-blue-100 hover:to-orange-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium text-sm">
                  {state}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Iconic Projects Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Notable Project Locations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Singda Dam</h4>
                <p className="text-blue-100 text-sm">Manipur</p>
              </div>
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Indrawathi-Pahurnar Bridge</h4>
                <p className="text-blue-100 text-sm">Chhattisgarh</p>
              </div>
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">Police Headquarters</h4>
                <p className="text-blue-100 text-sm">Manipur</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}