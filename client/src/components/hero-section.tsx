import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe, Server, Database, Network } from "lucide-react";
import bridgeImage from "@/assets/Bridge_construction_site_c5e94daf.png";

export function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-stripe-dark leading-tight mb-6">
              Infrastructure that{" "}
              <span className="bg-gradient-to-r from-stripe-purple to-accent-orange bg-clip-text text-transparent">
                builds your future
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Innovative and high-quality infrastructure solutions. Over 20 years of expertise in 
              civil engineering and infrastructure development across 14 states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-bg-orange text-white px-8 py-4 font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Building
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-stripe-purple text-stripe-purple px-8 py-4 font-semibold hover:bg-stripe-purple hover:text-white transition-all duration-300"
              >
                View Documentation
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                ISO 9001:2015 Certified
              </div>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={16} />
                ISO 45001:2018 Safety
              </div>
              <div className="flex items-center">
                <Globe className="text-accent-orange mr-2" size={16} />
                14 States Coverage
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={bridgeImage} 
                alt="Bridge Construction Project" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6">
                  <div className="text-xl font-bold text-stripe-dark mb-2">Indrawathi-Pahurnar Bridge</div>
                  <div className="text-sm text-gray-600 mb-3">712m length • 26 spans • Connecting 500 villages</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <CheckCircle className="text-green-500 mr-1" size={14} />
                      Completed
                    </span>
                    <span>Chhattisgarh</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
