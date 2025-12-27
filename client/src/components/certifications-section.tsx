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
    bgColor: "bg-transparent",
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



interface CertificationsSectionProps {
  isEditMode?: boolean;
}

export function CertificationsSection({ isEditMode = false }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Certifications & Standards</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <Card className="h-full bg-white/10 backdrop-blur-sm shadow-lg border-white/10 card-hover">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${cert.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className={cert.iconColor} size={32} />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    Since {cert.year}
                  </Badge>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{cert.title}</h3>
                  <div className="text-lg font-semibold text-orange-500 mb-3">{cert.standard}</div>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}