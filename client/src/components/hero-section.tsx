import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe, Play, ArrowRight } from "lucide-react";
import constructionVideo from "@assets/generated_images/construction_site_video_background_4fd97d5a.png";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat video-background"
          style={{ backgroundImage: `url(${constructionVideo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
                <span className="block">Turning</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Vision
                </span>{" "}
                <span className="block">into Infrastructure</span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl"
              >
                Building tomorrow's infrastructure today. Over 20 years of engineering excellence 
                across 14 states, delivering innovative solutions for complex construction challenges.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm px-10 py-6 text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Play className="mr-2" size={20} />
                  Watch Our Story
                </Button>
              </motion.div>

              {/* Stats/Features */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 text-white/90"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <CheckCircle className="text-green-400 mr-2" size={18} />
                  <span className="font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Shield className="text-blue-400 mr-2" size={18} />
                  <span className="font-medium">ISO 45001:2018 Safety</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Globe className="text-orange-400 mr-2" size={18} />
                  <span className="font-medium">14 States Coverage</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
