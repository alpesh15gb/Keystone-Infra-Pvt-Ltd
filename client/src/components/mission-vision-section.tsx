import { motion } from "framer-motion";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import missionImage from "@assets/generated_images/Infrastructure_construction_mission_scene_c7a51f3c.png";
import visionImage from "@assets/generated_images/Future_smart_city_vision_290da73b.png";
import valuesImage from "@assets/generated_images/Team_values_and_collaboration_01fa5a58.png";

export function MissionVisionSection() {
  const content = [
    {
      icon: Target,
      title: "Our Mission",
      subtitle: "Building Excellence Today",
      description: "We are committed to delivering innovative and high-quality infrastructure solutions that transform communities and drive progress.",
      items: [
        "Innovative and high quality infra solutions",
        "Investing in people & technology",
        "Sustainable development & expansion",
        "Make clients happy with us"
      ],
      image: missionImage,
      color: "from-amber-700 to-amber-800",
      bgColor: "from-amber-50 to-amber-100"
    },
    {
      icon: Eye,
      title: "Our Vision",
      subtitle: "Shaping Tomorrow's Infrastructure",
      description: "To be a global leader in infrastructure development, creating sustainable solutions that connect communities and enable prosperity.",
      items: [
        "Be global leader in infrastructure",
        "Use optimization techniques",
        "Micro level planning approach",
        "Create meaningful cooperation"
      ],
      image: visionImage,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Heart,
      title: "Our Values",
      subtitle: "Principles That Guide Us",
      description: "Our core values form the foundation of everything we do, ensuring integrity, innovation, and excellence in every project.",
      items: [
        "Reliability and integrity",
        "Passion for innovation",
        "Commitment to excellence",
        "Environmental sustainability",
        "Team work & creativity"
      ],
      image: valuesImage,
      color: "from-amber-600 to-amber-700",
      bgColor: "from-amber-50 to-amber-100"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-orange-600 mb-6">
            What Drives Us
          </h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto">
            Our mission, vision, and values are more than words – they're the foundation of every project we deliver and every relationship we build.
          </p>
        </motion.div>

        <div className="space-y-20">
          {content.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20`}></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 text-center">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${section.bgColor} rounded-full mb-4`}>
                  <span className={`text-sm font-medium bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {section.subtitle}
                  </span>
                </div>
                
                <h3 className="text-4xl font-bold text-orange-600 mb-6">
                  {section.title}
                </h3>
                
                <p className="text-lg text-amber-800 mb-8 leading-relaxed text-justify">
                  {section.description}
                </p>

                <div className="grid sm:grid-cols-1 gap-4 max-w-lg mx-auto">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start justify-start space-x-3 text-left"
                    >
                      <ArrowRight className={`w-5 h-5 mt-1 text-orange-500 flex-shrink-0`} />
                      <span className="text-amber-800 text-sm font-medium leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}