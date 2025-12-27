import { motion } from "framer-motion";
import { Rocket, Shield, TrendingUp, Headphones } from "lucide-react";
import EditableText from "@/components/editable-text";

const features = [
  {
    icon: Rocket,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Innovation & Quality",
    description: "Innovative and high-quality infrastructure solutions with cutting-edge technology.",
  },
  {
    icon: Shield,
    iconColor: "text-stripe-blue",
    bgColor: "bg-stripe-blue/10",
    title: "Reliability & Integrity",
    description: "Commitment to reliability, integrity, and passion for innovation in every project.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-accent-orange",
    bgColor: "bg-transparent",
    title: "Sustainable Development",
    description: "Focus on sustainable development and expansion with environmental responsibility.",
  },
  {
    icon: Headphones,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Client Satisfaction",
    description: "Dedicated to making clients happy with exceptional service and long-term relationships.",
  },
];

interface FeaturesSectionProps {
  isEditMode?: boolean;
}

export function FeaturesSection({ isEditMode = false }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EditableText
            id="features-title"
            isEditMode={isEditMode}
            element="h2"
            className="text-4xl font-bold text-orange-600 mb-4"
          >
            Our Mission & Values
          </EditableText>
          <EditableText
            id="features-subtitle"
            isEditMode={isEditMode}
            element="p"
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Where Quality Meets Integrity Vision Builds Sustainablility
          </EditableText>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={feature.iconColor} size={36} />
              </div>
              <EditableText
                id={`feature-title-${index}`}
                isEditMode={isEditMode}
                element="h3"
                className="text-xl font-bold text-orange-400 mb-3"
              >
                {feature.title}
              </EditableText>
              <EditableText
                id={`feature-desc-${index}`}
                isEditMode={isEditMode}
                element="p"
                multiline
                className="text-gray-300"
              >
                {feature.description}
              </EditableText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
