import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    number: "20+",
    label: "Years Experience",
    description: "Established in 2005",
  },
  {
    icon: MapPin,
    iconColor: "text-stripe-blue", 
    bgColor: "bg-stripe-blue/10",
    number: "14",
    label: "States Coverage",
    description: "Pan-India presence",
  },
  {
    icon: Award,
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange-light",
    number: "06",
    label: "Completed Projects",
    description: "Major infrastructure",
  },
  {
    icon: Users,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    number: "ISO",
    label: "Certified Company",
    description: "Quality & Safety standards",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">About Keystone Infra</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Keystone Infra Pvt Ltd, founded by D.M. Ramesh in 2005, is an established civil engineering 
            and infrastructure development company. An ISO 9001:2015 certified infrastructure company 
            focusing on improving efficiency, promoting economic growth and reducing environmental impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg border-0 text-center card-hover">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={stat.iconColor} size={32} />
                  </div>
                  <div className="text-3xl font-bold text-stripe-dark mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-stripe-light rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-stripe-dark mb-6">Our Leadership</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stripe-purple/10 rounded-lg flex items-center justify-center">
                    <Users className="text-stripe-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stripe-dark">D.M. Ramesh</h4>
                    <p className="text-gray-600 text-sm">Managing Director & Founder</p>
                    <p className="text-sm text-gray-500 mt-1">30+ years experience in infrastructure and civil construction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stripe-blue/10 rounded-lg flex items-center justify-center">
                    <Users className="text-stripe-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stripe-dark">D. Karthik Amar</h4>
                    <p className="text-gray-600 text-sm">Director</p>
                    <p className="text-sm text-gray-500 mt-1">Leading housing projects across 4 states</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange-light rounded-lg flex items-center justify-center">
                    <Users className="text-accent-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stripe-dark">D. Lakshmi Chowdary</h4>
                    <p className="text-gray-600 text-sm">Director</p>
                    <p className="text-sm text-gray-500 mt-1">15+ years with the organization</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-stripe-dark mb-6">Our Mission</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Innovative and high Quality infrastructure solutions
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Investing in people & technology
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Sustainable development & expansion
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Make clients happy with exceptional service
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}