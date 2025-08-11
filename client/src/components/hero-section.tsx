import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Globe, Server, Database, Network } from "lucide-react";

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
                scales with you
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build, deploy, and scale your applications with our modern infrastructure platform.
              From containers to serverless, we've got you covered.
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
                99.9% Uptime SLA
              </div>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-2" size={16} />
                SOC 2 Certified
              </div>
              <div className="flex items-center">
                <Globe className="text-accent-orange mr-2" size={16} />
                Global Edge Network
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-stripe-light to-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    className="bg-stripe-purple/10 rounded-lg p-4 text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Server className="text-stripe-purple mx-auto mb-2" size={32} />
                    <div className="text-sm font-medium">Compute</div>
                  </motion.div>
                  <motion.div
                    className="bg-stripe-blue/10 rounded-lg p-4 text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Database className="text-stripe-blue mx-auto mb-2" size={32} />
                    <div className="text-sm font-medium">Storage</div>
                  </motion.div>
                  <motion.div
                    className="bg-accent-orange-light rounded-lg p-4 text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Network className="text-accent-orange mx-auto mb-2" size={32} />
                    <div className="text-sm font-medium">Network</div>
                  </motion.div>
                </div>
                <div className="space-y-3">
                  {["API Gateway", "Load Balancer", "Container Orchestration"].map((service) => (
                    <div key={service} className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
                      <span className="text-sm">{service}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
