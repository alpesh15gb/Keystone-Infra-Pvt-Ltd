import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Database, Network, CheckCircle } from "lucide-react";
import EditableText from "@/components/editable-text";
import EditableImage from "@/components/editable-image";
import transportationExpertiseImage from "@/assets/transportation-expertise.jpg";
import waterManagementImage from "@/assets/water-management.jpg";
import buildingConstructionImage from "@/assets/manipur-police-hq.jpg";

const products = [
  {
    icon: Cloud,
    iconColor: "text-amber-700",
    bgColor: "bg-amber-700/10",
    title: "Transportation Infrastructure",
    description: "Complete road construction including national highways, state highways, and bridges.",
    features: ["National & State Highways", "Bridge Construction", "CC Roads & Major District Roads", "Rigid and Flexible Major District Roads"],
    image: transportationExpertiseImage,
  },
  {
    icon: Database,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-600/10",
    title: "Water Management",
    description: "Comprehensive water supply, treatment plants, and irrigation systems.",
    features: ["Water Treatment Plants", "Pipeline Distribution", "Sewerage Treatment"],
    image: waterManagementImage,
  },
  {
    icon: Network,
    iconColor: "text-amber-800",
    bgColor: "bg-amber-800/10",
    title: "Building Construction",
    description: "Government commercial buildings, medical facilities, educational institutions, and specialized infrastructure development.",
    features: ["Govt Commercial Buildings", "Govt Medical Facilities", "Educational Institutions", "Non Residential Buildings"],
    image: buildingConstructionImage,
  },
];

interface ProductsSectionProps {
  isEditMode?: boolean;
}

export function ProductsSection({ isEditMode = false }: ProductsSectionProps) {
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
          <EditableText
            id="products-title"
            isEditMode={isEditMode}
            element="h2"
            className="text-4xl font-bold text-orange-600 mb-4"
          >
            Our Infrastructure Expertise
          </EditableText>
          <EditableText
            id="products-subtitle"
            isEditMode={isEditMode}
            element="p"
            className="text-xl text-amber-800 max-w-3xl mx-auto"
          >
            Diversified excellence across transportation, water management, and construction projects
          </EditableText>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const slug = product.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover bg-white shadow-lg border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <EditableImage
                        id={`product-image-${slug}`}
                        src={product.image}
                        alt={product.title}
                        isEditMode={isEditMode}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 ${product.bgColor} rounded-lg flex items-center justify-center backdrop-blur-md`}>
                          <product.icon className={product.iconColor} size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <EditableText
                        id={`product-title-${slug}`}
                        isEditMode={isEditMode}
                        element="h3"
                        className="text-2xl font-bold text-orange-600 mb-4"
                      >
                        {product.title}
                      </EditableText>
                      <EditableText
                        id={`product-desc-${slug}`}
                        isEditMode={isEditMode}
                        element="p"
                        multiline
                        className="text-amber-800 mb-6"
                      >
                        {product.description}
                      </EditableText>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-amber-800">
                            <CheckCircle className="text-green-500 mr-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
