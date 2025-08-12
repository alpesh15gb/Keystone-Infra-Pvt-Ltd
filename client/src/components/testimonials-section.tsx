import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Award } from "lucide-react";

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

const awards = [
  {
    title: "Best Contractor Award",
    location: "Manipur",
    year: "2023",
    description: "Recognized for outstanding infrastructure development and project delivery",
  },
  {
    title: "Best Contractor Award", 
    location: "Chhattisgarh",
    year: "2017-2018",
    description: "Excellence in civil engineering and construction projects",
  },
  {
    title: "Letter of Appreciation",
    location: "Bijapur District",
    year: "2022",
    description: "From District Collector for exceptional infrastructure work",
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
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Recognized for excellence in infrastructure development across multiple states
          </p>
        </motion.div>

        {/* Recognition Letters and Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-orange-600">{testimonial.name}</div>
                      <div className="text-sm text-amber-700">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-amber-800 mb-4">{testimonial.content}</p>
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

        {/* Awards Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">Awards & Accolades</h3>
            <p className="text-amber-800">Recognized for excellence across multiple states and projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.title}-${award.year}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-600"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Award className="text-orange-600 dark:text-orange-400" size={20} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {award.year}
                  </Badge>
                </div>
                <h4 className="font-bold text-orange-600 mb-1">{award.title}</h4>
                <div className="text-orange-700 font-medium text-sm mb-2">{award.location}</div>
                <p className="text-amber-800 text-xs">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
