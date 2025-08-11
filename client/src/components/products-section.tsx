import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Database, Network, CheckCircle } from "lucide-react";

const products = [
  {
    icon: Cloud,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Cloud Compute",
    description: "Scalable virtual machines and containers with automatic scaling and load balancing.",
    features: ["Auto-scaling instances", "Load balancing", "Container orchestration"],
  },
  {
    icon: Database,
    iconColor: "text-stripe-blue",
    bgColor: "bg-stripe-blue/10",
    title: "Managed Database",
    description: "Fully managed database services with automatic backups, scaling, and monitoring.",
    features: ["Automatic backups", "Multi-region replication", "Performance monitoring"],
  },
  {
    icon: Network,
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange-light",
    title: "Global CDN",
    description: "Ultra-fast content delivery network with edge caching and DDoS protection.",
    features: ["Edge caching", "DDoS protection", "SSL/TLS certificates"],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">Our Infrastructure Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete suite of infrastructure services designed for modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <product.icon className={product.iconColor} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-stripe-dark mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="text-stripe-purple font-semibold p-0 h-auto">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
