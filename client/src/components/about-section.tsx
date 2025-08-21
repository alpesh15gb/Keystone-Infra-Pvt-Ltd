import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building,
    iconColor: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-100",
    borderColor: "border-orange-200",
    number: "20+",
    label: "Years Experience",
    description: "Established in 2005",
  },
  {
    icon: MapPin,
    iconColor: "text-amber-600", 
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
    borderColor: "border-amber-200",
    number: "14",
    label: "States Coverage",
    description: "All India presence",
  },
  {
    icon: Award,
    iconColor: "text-orange-700",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-300",
    number: "600+",
    label: "Completed Projects",
    description: "Major infrastructure",
  },
  {
    icon: Users,
    iconColor: "text-amber-700",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderColor: "border-amber-300",
    number: "ISO",
    label: "Certified Company",
    description: "Quality & Safety standards",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KeystoneInfra
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-amber-900 leading-relaxed mb-6 text-justify">
              Keystone Infra Pvt Ltd, founded by <span className="font-semibold text-orange-600">D.M. Ramesh in 2005</span>, is an established civil engineering 
              and infrastructure development company with over <span className="font-semibold text-orange-600">20 years of experience</span>.
            </p>
            <p className="text-lg text-amber-800 leading-relaxed text-justify">
              An <span className="font-semibold text-orange-600">ISO 9001:2015 certified</span> infrastructure company focusing on improving efficiency, promoting economic growth and reducing 
              environmental impact. We strive to provide exceptional service and build long-term relationships 
              with our clients, partners and communities.
            </p>
          </div>
        </motion.div>



        <motion.div
          className="bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">

            <div>
              <h3 className="text-3xl font-bold text-orange-600 mb-8">
                Our Mission
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-amber-800 font-medium">Innovative and high Quality infrastructure solutions</span>
                </motion.li>
                <motion.li 
                  className="flex items-start p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-amber-800 font-medium">Investing in people & technology</span>
                </motion.li>
                <motion.li 
                  className="flex items-start p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-amber-800 font-medium">Sustainable development & expansion</span>
                </motion.li>
                <motion.li 
                  className="flex items-start p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-amber-800 font-medium">Make clients happy with exceptional service</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}