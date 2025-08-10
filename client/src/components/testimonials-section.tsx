import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechStart",
    content:
      "InfraCore has transformed how we deploy and scale our applications. The auto-scaling feature alone has saved us thousands in infrastructure costs.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead DevOps, GlobalCorp",
    content:
      "The security features and compliance certifications gave us confidence to migrate our entire infrastructure to InfraCore. Best decision we've made.",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "Founder, AppVenture",
    content:
      "From startup to scale, InfraCore has been with us every step of the way. Their support team is incredibly responsive and knowledgeable.",
    initials: "EW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">Trusted by Developers Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about InfraCore
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarFallback className="bg-gray-300 text-gray-600">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-stripe-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
