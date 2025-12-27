import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cloud, Database, Network,
  Map, Waypoints, Truck, Navigation, // For Transportation
  Droplets, Waves, Recycle, Sprout, Zap, // For Water
  Building, Building2, Landmark, Stethoscope, Home, // For Buildings
  Factory, LayoutGrid, Cylinder, Anchor, // For Others
  Layers
} from "lucide-react";
import EditableText from "@/components/editable-text";
import EditableImage from "@/components/editable-image";
import transportationExpertiseImage from "@/assets/transportation-expertise.jpg";
import waterManagementImage from "@/assets/water-management.jpg";
import buildingConstructionImage from "@/assets/manipur-police-hq.jpg";
import othersExpertiseImage from "@/assets/others-expertise.jpg";

const products = [
  {
    icon: Cloud,
    iconColor: "text-amber-700",
    bgColor: "bg-amber-700/10",
    title: "Transportation Infrastructure",
    description: "Complete road construction including national highways, state highways, and bridges.",
    features: [
      { name: "National Highway", icon: Map },
      { name: "State Highway", icon: Waypoints },
      { name: "Nagar Nigam Roads", icon: Truck },
      { name: "Bridges", icon: Navigation } // Used Navigation as a placeholder for Bridge
    ],
    image: transportationExpertiseImage,
  },
  {
    icon: Database,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-600/10",
    title: "Water Management",
    description: "Comprehensive water supply, treatment plants, and irrigation systems.",
    features: [
      { name: "Water Treatment Plant", icon: Factory },
      { name: "Water Supply", icon: Droplets },
      { name: "Sewerage Treatment", icon: Recycle },
      { name: "Irrigation", icon: Sprout },
      { name: "HydroPower", icon: Zap }
    ],
    image: waterManagementImage,
  },
  {
    icon: Network,
    iconColor: "text-amber-800",
    bgColor: "bg-amber-800/10",
    title: "Building Construction",
    description: "Government commercial buildings, medical facilities, educational institutions, and specialized infrastructure development.",
    features: [
      { name: "Hospitality", icon: Building },
      { name: "Commercial", icon: Building2 },
      { name: "Institutional", icon: Landmark },
      { name: "Medical", icon: Stethoscope },
      { name: "Pre-fab Structure", icon: Home }
    ],
    image: buildingConstructionImage,
  },
  {
    icon: Layers,
    iconColor: "text-slate-600",
    bgColor: "bg-slate-600/10",
    title: "Others",
    description: "Miscellaneous civil engineering and infrastructure support services tailored to specific project requirements.",
    features: [
      { name: "Canal", icon: Waves },
      { name: "Border Fencing Work", icon: LayoutGrid },
      { name: "Dams", icon: Cylinder },
      { name: "Dredging", icon: Anchor }
    ],
    image: othersExpertiseImage,
  },
];

interface ProductsSectionProps {
  isEditMode?: boolean;
}

export function ProductsSection({ isEditMode = false }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-black/80 backdrop-blur-sm">
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
            className="text-4xl font-bold text-orange-400 mb-4"
          >
            Our Infrastructure Expertise
          </EditableText>
          <EditableText
            id="products-subtitle"
            isEditMode={isEditMode}
            element="p"
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Diversified excellence across transportation, water management, and construction projects
          </EditableText>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to 2 columns to give more space */}
          {products.map((product, index) => {
            const slug = product.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full card-hover bg-white/10 backdrop-blur-sm shadow-lg border-white/10 overflow-hidden group">
                  <div className="flex flex-col h-full">
                    {/* Image Side - Top */}
                    <div className="w-full relative aspect-video">
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

                    {/* Content Side - Bottom */}
                    <div className="w-full p-8 flex flex-col flex-grow">
                      <EditableText
                        id={`product-title-${slug}`}
                        isEditMode={isEditMode}
                        element="h3"
                        className="text-2xl font-bold text-orange-400 mb-4"
                      >
                        {product.title}
                      </EditableText>
                      <EditableText
                        id={`product-desc-${slug}`}
                        isEditMode={isEditMode}
                        element="p"
                        multiline
                        className="text-gray-300 mb-6 text-sm"
                      >
                        {product.description}
                      </EditableText>

                      {/* Features Grid */}
                      <div className="grid grid-cols-3 gap-4 mt-auto">
                        {product.features.map((feature) => (
                          <div key={feature.name} className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-white/10 transition-colors">
                              <feature.icon className="text-orange-500" size={20} />
                            </div>
                            <span className="text-xs text-gray-300 leading-tight">{feature.name}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
