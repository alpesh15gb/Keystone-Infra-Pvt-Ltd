import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, MapPin } from "lucide-react";
import EditableText from '@/components/editable-text';

const stats = [
  {
    icon: Building,
    iconColor: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-100",
    borderColor: "border-orange-200",
    number: "20+",
    label: "Years Experience",
    description: "Established in 2005",
  },
  {
    icon: MapPin,
    iconColor: "text-amber-600",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
    borderColor: "border-amber-200",
    number: "14",
    label: "States Coverage",
    description: "All India presence",
  },
  {
    icon: Award,
    iconColor: "text-orange-700",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-300",
    number: "600+",
    label: "Completed Projects",
    description: "Major infrastructure",
  },
  {
    icon: Users,
    iconColor: "text-amber-700",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderColor: "border-amber-300",
    number: "ISO",
    label: "Certified Company",
    description: "Quality & Safety standards",
  },
];

interface AboutSectionProps {
  isEditMode?: boolean;
}

export function AboutSection({ isEditMode = false }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center mb-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              About Us
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <EditableText
              id="about-description-1"
              isEditMode={isEditMode}
              element="p"
              multiline={true}
              className="text-xl text-amber-900 leading-relaxed mb-6 text-justify"
            >
              Keystone Infra Pvt Ltd, founded by D.M.Ramesh in 2005, is an established civil engineering and infrastructure development company that has successfully completed numerous projects.
            </EditableText>
            <EditableText
              id="about-description-2"
              isEditMode={isEditMode}
              element="p"
              multiline={true}
              className="text-lg text-amber-800 leading-relaxed text-justify"
            >
              An ISO 9001 : 2008 certified infrastructure company focusing on improving efficiency, promoting economic growth and reducing environmental impact. We strive to provide exceptional service and build long-term relationships with our clients, partners and communities.
            </EditableText>
          </div>
        </motion.div>




      </div >
    </section >
  );
}