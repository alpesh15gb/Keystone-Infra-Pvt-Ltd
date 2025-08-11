import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Leaf, Users } from "lucide-react";

const certifications = [
  {
    icon: Award,
    iconColor: "text-stripe-purple",
    bgColor: "bg-stripe-purple/10",
    title: "Quality Management",
    standard: "ISO 9001:2015",
    description: "Quality Management Systems ensuring consistent service delivery and customer satisfaction.",
    year: "2015",
  },
  {
    icon: Users,
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange-light",
    title: "Health & Safety",
    standard: "ISO 45001:2018",
    description: "Health and Safety Management systems in compliance with international standards.",
    year: "2018",
  },
  {
    icon: Leaf,
    iconColor: "text-stripe-blue",
    bgColor: "bg-stripe-blue/10",
    title: "Environmental Management",
    standard: "ISO 14001:2015",
    description: "Environmental Management Systems ensuring sustainable and eco-friendly operations.",
    year: "2015",
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

export function CertificationsSection() {
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
          <h2 className="text-4xl font-bold text-stripe-dark mb-4">Certifications & Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to international quality, safety, and environmental standards
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg border-0 card-hover">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${cert.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className={cert.iconColor} size={32} />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    Since {cert.year}
                  </Badge>
                  <h3 className="text-xl font-bold text-stripe-dark mb-2">{cert.title}</h3>
                  <div className="text-lg font-semibold text-accent-orange mb-3">{cert.standard}</div>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          className="bg-stripe-light rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-stripe-dark mb-4">Awards & Recognition</h3>
            <p className="text-gray-600">Recognized for excellence across multiple states and projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.title}-${award.year}`}
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                    <Award className="text-accent-orange" size={20} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {award.year}
                  </Badge>
                </div>
                <h4 className="font-bold text-stripe-dark mb-1">{award.title}</h4>
                <div className="text-stripe-blue font-medium text-sm mb-2">{award.location}</div>
                <p className="text-gray-600 text-xs">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}