import { motion } from "framer-motion";
import { Rocket, Shield, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Rocket,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Lightning Fast",
    description: "Deploy in seconds with our optimized infrastructure and global edge network.",
  },
  {
    icon: Shield,
    iconColor: "text-stripe-blue",
    bgColor: "bg-stripe-blue/10",
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and advanced threat protection.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange-light",
    title: "Auto Scaling",
    description: "Scale automatically based on demand with intelligent resource management.",
  },
  {
    icon: Headphones,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "24/7 Support",
    description: "Expert support team available around the clock to help you succeed.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">Why Choose InfraCore</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for developers, trusted by enterprises
          </p>
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
              <h3 className="text-xl font-bold text-stripe-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
