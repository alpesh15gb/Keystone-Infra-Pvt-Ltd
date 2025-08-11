import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function MissionVisionSection() {
  const content = [
    {
      icon: Target,
      title: "Our Mission",
      items: [
        "Innovative and high quality infra solutions",
        "Investing in people & technology",
        "Sustainable development & expansion",
        "Make clients happy with us"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      items: [
        "Be global leader in infrastructure",
        "Use optimization",
        "Micro level planning",
        "Create good cooperation"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Our Values",
      items: [
        "Reliability and integrity",
        "Passion for innovation",
        "Commitment",
        "Sustainability",
        "Team work & creativity"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mission, Vision & Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our guiding principles that drive excellence in infrastructure development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {content.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}