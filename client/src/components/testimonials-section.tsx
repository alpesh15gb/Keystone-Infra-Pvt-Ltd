import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chief Minister's Office",
    role: "Government of Chhattisgarh",
    content:
      "The major bridge project facilitated connection to 500 villages and was highly appreciated during the inauguration ceremony.",
    initials: "CM",
  },
  {
    name: "District Collector",
    role: "Bijapur District",
    content:
      "Letter of appreciation for outstanding infrastructure development work and timely project completion.",
    initials: "DC",
  },
  {
    name: "NHIDCL",
    role: "National Highway Infrastructure",
    content:
      "Excellent road construction work in Nagaland demonstrating high standards of engineering and project management.",
    initials: "NH",
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
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for excellence in infrastructure development across multiple states
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
