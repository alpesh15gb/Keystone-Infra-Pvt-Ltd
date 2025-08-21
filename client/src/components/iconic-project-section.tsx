import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Zap, Award, ArrowRight, Star, Trophy, Gauge, Play } from "lucide-react";
import slider1 from "@assets/slider-1_1754941983527.jpg";
import bridgeVideo from "@assets/AQO2YnGpFZRhVj6bvJYhbquIPNUA8ePRrKSDva6lc2YNCU_-BriLjAbhDQqaAN2rAeIi_y7UQtyzsUAsASXl-p5VTAXwthdC5a5gXbDdDziKMw_1755065168445.mp4";

export function IconicProjectSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Trophy className="w-5 h-5 text-orange-600" />
            <span className="text-orange-700 font-medium">Flagship Achievement</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Iconic
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Project
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Showcasing our most prestigious infrastructure achievement that defines excellence in engineering
          </motion.p>
        </motion.div>

        {/* Iconic Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-orange-500/20 transition-all duration-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] relative">
                  {!showVideo ? (
                    <>
                      <img
                        src={slider1}
                        alt="Construction of Bridge at Tarud River"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Video Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setShowVideo(true)}
                        >
                          <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <video
                      src={bridgeVideo}
                      controls
                      className="w-full h-full object-cover"
                      autoPlay
                      onEnded={() => setShowVideo(false)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-orange-500/90 text-white border-0 backdrop-blur-sm">
                        <Award className="w-3 h-3 mr-1" />
                        Engineering Excellence
                      </Badge>
                      <Badge className="bg-green-500/90 text-white border-0 backdrop-blur-sm">
                        <Zap className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                      <Badge className="bg-blue-500/90 text-white border-0 backdrop-blur-sm">
                        <Play className="w-3 h-3 mr-1" />
                        Video Available
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <CardContent className="p-12 flex flex-col justify-center space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-orange-600 text-sm font-medium uppercase tracking-wider">
                      Signature Project
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Construction of Bridge at Tarud River in Km.22/2 Chhatisgarh
                  </h3>
                  
                  <p className="text-amber-800 text-lg leading-relaxed mb-8">
                    A critical infrastructure project featuring advanced bridge construction techniques over the Tarud River. This engineering marvel showcases our expertise in water crossing infrastructure, connecting communities while ensuring environmental sustainability and resilient design standards.
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">125</div>
                    <div className="text-amber-800 text-sm">Meters Length</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">₹25</div>
                    <div className="text-amber-800 text-sm">Crores Value</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
                    <div className="text-amber-800 text-sm">Months</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
                    <div className="text-amber-800 text-sm">Lives Impacted</div>
                  </motion.div>
                </div>

                {/* Project Highlights */}
                <div className="space-y-4">
                  <div className="flex items-center text-amber-800">
                    <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Tarud River, Km.22/2 Chhatisgarh</span>
                  </div>
                  
                  <div className="flex items-center text-amber-800">
                    <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Completed on schedule with quality standards</span>
                  </div>
                  
                  <div className="flex items-center text-amber-800">
                    <Users className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Created 500+ employment opportunities</span>
                  </div>
                  
                  <div className="flex items-center text-amber-800">
                    <Gauge className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Advanced concrete bridge construction</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="text-amber-800 font-medium">Bridge Engineering Excellence</span>
          </div>
          
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3">
            <Trophy className="w-5 h-5 text-orange-600" />
            <span className="text-amber-800 font-medium">Quality Construction Award</span>
          </div>
          
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-green-600" />
            <span className="text-amber-800 font-medium">Environmental Compliance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}