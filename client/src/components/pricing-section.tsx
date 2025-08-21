import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Transportation",
    description: "Roads, Highways & Bridges",
    price: "EPC",
    period: " Model",
    features: ["National & State Highways", "Bridge Construction", "Major District Roads", "CC Roads"],
    popular: false,
  },
  {
    name: "Water Management",
    description: "Treatment & Distribution",
    price: "Turnkey",
    period: " Solutions",
    features: [
      "Water Treatment Plants",
      "Pipeline Distribution",
      "Sewerage Treatment",
      "Irrigation Systems",
      "Overhead Tanks",
    ],
    popular: true,
  },
  {
    name: "Building Construction",
    description: "Commercial & Institutional",
    price: "Custom",
    period: " Design",
    features: [
      "Hospitality Projects",
      "Medical Facilities",
      "Commercial Buildings",
      "Pre-fab Structures",
      "Institutional Buildings",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Service Categories</h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Engineering, Procurement & Construction (EPC) solutions across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="gradient-bg-orange text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <Card
                className={`h-full bg-white shadow-lg ${
                  plan.popular ? "border-2 border-stripe-purple" : "border-0"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">{plan.name}</h3>
                    <p className="text-amber-800 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-orange-700">
                      {plan.price}
                      <span className="text-lg font-normal text-amber-700">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "gradient-bg-orange text-white hover:shadow-lg"
                        : "border-2 border-stripe-purple text-stripe-purple hover:bg-stripe-purple hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Building Construction" ? "Get Quote" : "Learn More"}
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
