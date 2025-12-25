import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Trophy, Medal, Crown, Sparkles, ChevronRight, Calendar, MapPin, Zap } from "lucide-react";
import { useState } from "react";

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
    icon: Trophy,
    iconColor: "text-yellow-600",
    bgGradient: "from-yellow-400 to-orange-500",
    tier: "premier"
  },
  {
    title: "Best Contractor Award", 
    location: "Chhattisgarh",
    year: "2017-2018",
    description: "Excellence in civil engineering and construction projects",
    icon: Medal,
    iconColor: "text-amber-600",
    bgGradient: "from-amber-400 to-yellow-500",
    tier: "premier"
  },
  {
    title: "Letter of Appreciation",
    location: "Bijapur District",
    year: "2022",
    description: "From District Collector for exceptional infrastructure work",
    icon: Award,
    iconColor: "text-orange-600",
    bgGradient: "from-orange-400 to-red-500",
    tier: "excellence"
  },
  {
    title: "Engineering Excellence Award",
    location: "Nagaland",
    year: "2022",
    description: "Outstanding road construction and highway development achievements",
    icon: Crown,
    iconColor: "text-purple-600",
    bgGradient: "from-purple-400 to-pink-500",
    tier: "premier"
  },
  {
    title: "Quality Construction Recognition",
    location: "Karnataka",
    year: "2021",
    description: "Superior water management and irrigation infrastructure delivery",
    icon: Sparkles,
    iconColor: "text-blue-600",
    bgGradient: "from-blue-400 to-cyan-500",
    tier: "excellence"
  },
  {
    title: "Community Impact Award",
    location: "Multi-State",
    year: "2024",
    description: "Connecting 500+ villages through transformative infrastructure projects",
    icon: Zap,
    iconColor: "text-green-600",
    bgGradient: "from-green-400 to-teal-500",
    tier: "impact"
  }
];

export function TestimonialsSection() {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>("all");

  const filteredAwards = selectedTier === "all" ? awards : awards.filter(award => award.tier === selectedTier);
  const tierCounts = {
    premier: awards.filter(a => a.tier === "premier").length,
    excellence: awards.filter(a => a.tier === "excellence").length,
    impact: awards.filter(a => a.tier === "impact").length
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Awards &
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Recognition
            </span>
          </motion.h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Celebrated for excellence in infrastructure development, earning prestigious recognitions across multiple states
          </p>
          
          {/* Achievement Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{awards.length}</div>
              <div className="text-amber-800 font-medium">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-amber-800 font-medium">States Recognized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-amber-800 font-medium">Years Running</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Award Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button
            onClick={() => setSelectedTier("all")}
            variant={selectedTier === "all" ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedTier === "all"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105"
                : "border-orange-300 text-orange-700 hover:bg-orange-50"
            }`}
          >
            All Awards ({awards.length})
          </Button>
          <Button
            onClick={() => setSelectedTier("premier")}
            variant={selectedTier === "premier" ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedTier === "premier"
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105"
                : "border-yellow-400 text-yellow-700 hover:bg-yellow-50"
            }`}
          >
            Premier ({tierCounts.premier})
          </Button>
          <Button
            onClick={() => setSelectedTier("excellence")}
            variant={selectedTier === "excellence" ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedTier === "excellence"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg transform scale-105"
                : "border-amber-400 text-amber-700 hover:bg-amber-50"
            }`}
          >
            Excellence ({tierCounts.excellence})
          </Button>
          <Button
            onClick={() => setSelectedTier("impact")}
            variant={selectedTier === "impact" ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedTier === "impact"
                ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105"
                : "border-green-400 text-green-700 hover:bg-green-50"
            }`}
          >
            Impact ({tierCounts.impact})
          </Button>
        </motion.div>

        {/* Premium Awards Gallery */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredAwards.map((award, index) => (
            <motion.div
              key={`${award.title}-${award.year}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onHoverStart={() => setHoveredAward(index)}
              onHoverEnd={() => setHoveredAward(null)}
            >
              {/* Award Card */}
              <Card className="h-full bg-white shadow-lg border-0 rounded-3xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${award.bgGradient}`}></div>
                
                <CardContent className="p-8 relative">
                  {/* Floating Background Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${award.bgGradient} rounded-full blur-2xl`}></div>
                  </div>
                  
                  {/* Award Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${award.bgGradient} rounded-2xl flex items-center justify-center shadow-xl`}
                      animate={hoveredAward === index ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <award.icon className="text-white w-8 h-8" />
                    </motion.div>
                    
                    <div className="text-right">
                      <Badge 
                        className={`bg-gradient-to-r ${award.bgGradient} text-white border-0 font-bold`}
                      >
                        {award.year}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1 capitalize">{award.tier}</div>
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-orange-600 leading-tight group-hover:text-orange-700 transition-colors duration-300">
                      {award.title}
                    </h3>
                    
                    <div className="flex items-center text-amber-700 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {award.location}
                    </div>

                    <p className="text-amber-800 text-sm leading-relaxed">
                      {award.description}
                    </p>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredAward === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-orange-600 hover:bg-orange-50 w-full justify-between"
                      >
                        View Certificate
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Recognition Letters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Government Recognition Letters
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-3xl mx-auto">
            Appreciation letters from Chief Ministers, District Collectors, and Government agencies across multiple states
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-orange-100">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-orange-100 text-sm mb-4 leading-relaxed">{testimonial.content}</p>
                <div className="flex justify-center text-yellow-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="fill-current w-4 h-4" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Recognition Letters
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
