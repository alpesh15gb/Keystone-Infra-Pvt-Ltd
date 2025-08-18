import { motion } from "framer-motion";
import { Heart, GraduationCap, Droplets, TreePine, Users, Stethoscope } from "lucide-react";

export function CSRSection() {
  const csrInitiatives = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Building schools and providing scholarships to deserving students",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Ensuring clean water supply to rural and underserved communities",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Sports Sponsorship",
      description: "Supporting local sports teams and tournaments for community engagement",
      color: "from-orange-600 to-amber-600"
    },
    {
      icon: TreePine,
      title: "Environmental Sustainability",
      description: "Investing in sustainable infrastructure to reduce carbon footprint",
      color: "from-amber-600 to-orange-500"
    },
    {
      icon: Heart,
      title: "Cultural Events",
      description: "Funding cultural events and festivals to preserve local traditions",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Initiatives",
      description: "Organizing medical camps and healthcare support for communities",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const highlights = [
    {
      title: "Hero-I League Sponsorship",
      description: "Co-sponsored Hero-I league 2022-23 at NEROCA Football Club, Imphal, Manipur. Invested in local sports tournaments and equipment to create lasting community impact.",
      image: "🏆"
    },
    {
      title: "Medical Camp Organization",
      description: "Organized medical camps in Imphal to ensure community health and well-being. Providing essential healthcare services to maintain productivity of individuals and families.",
      image: "🏥"
    }
  ];

  return (
    <section id="csr" className="py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Corporate Social Responsibility
          </h2>
          <p className="text-xl text-amber-900 max-w-4xl mx-auto text-justify leading-relaxed">
            As an infrastructure company, we prioritize giving back to society and making a positive impact in the communities we serve. Building lasting relationships with stakeholders for a sustainable future.
          </p>
        </motion.div>

        {/* CSR Initiatives Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {csrInitiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${initiative.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-orange-600">
                  {initiative.title}
                </h3>
              </div>
              <p className="text-amber-800 text-sm leading-relaxed text-center">
                {initiative.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Featured CSR Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 group hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{highlight.image}</div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-amber-800 leading-relaxed text-justify">
                {highlight.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8 text-center shadow-xl">
            <Heart className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our CSR Commitment</h3>
            <p className="text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
              We invest in sustainable infrastructure projects, engage in community development programs, 
              and work towards creating a positive impact that contributes to a sustainable future for all. 
              Our goal is to build lasting relationships with stakeholders while making meaningful contributions 
              to the communities we serve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}