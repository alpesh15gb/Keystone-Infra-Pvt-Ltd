import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import adbLogo from "@assets/Asian_Development_Bank_logo.svg_1754946187555.png";
import biharLogo from "@assets/bihar_1754946187557.png";
import chhattisgarhLogo from "@assets/chattisgarh_1754946187558.png";
import ndbBankLogo from "@assets/download_1754946187558.png";
import hudcoLogo from "@assets/hudco_1754946187558.png";
import krdclLogo from "@assets/krdcl_logo1_1754946187558.png";
import manipurPoliceLogo from "@assets/Manipur_Police_Logo_(India).svg_1754946187558.png";
import morthLogo from "@assets/morth_1754946187558.png";
import mpLogo from "@assets/MP-Mukhyamantri-Pratibha-Kiran-Yojana_1754946187558.jpg";
import nhidclLogo from "@assets/nhidcl_1754946187558.jpg";
import nhsiLogo from "@assets/nhsi_1754946187558.png";
import necLogo from "@assets/North-Eastern-Council_1754946187559.jpg";
import ongcLogo from "@assets/ongc_1754946187559.png";
import phedLogo from "@assets/phed-manipur_1754946187559.png";
import pwdLogo from "@assets/pwd_1754946187559.png";
import worldBankLogo from "@assets/the world bank_1754946187559.png";

export function EsteemedClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Client logos and information with actual logo images
  const clients = [
    { name: "NHIDCL", fullName: "National Highways & Infrastructure Development Corporation Ltd", sector: "Infrastructure", logo: nhidclLogo },
    { name: "PWD", fullName: "Public Works Department", sector: "Government", logo: pwdLogo },
    { name: "MORTH", fullName: "Ministry of Road Transport & Highways", sector: "Government", logo: morthLogo },
    { name: "Government of Bihar", fullName: "Government of Bihar", sector: "Government", logo: biharLogo },
    { name: "Government of Chhattisgarh", fullName: "Government of Chhattisgarh", sector: "Government", logo: chhattisgarhLogo },
    { name: "Government of MP", fullName: "Government of Madhya Pradesh", sector: "Government", logo: mpLogo },
    { name: "North Eastern Council", fullName: "North Eastern Council, Govt. of India", sector: "Government", logo: necLogo },
    { name: "Asian Development Bank", fullName: "Asian Development Bank", sector: "International", logo: adbLogo },
    { name: "The World Bank", fullName: "The World Bank Group", sector: "International", logo: worldBankLogo },
    { name: "ONGC", fullName: "Oil and Natural Gas Corporation", sector: "PSU", logo: ongcLogo },
    { name: "HUDCO", fullName: "Housing and Urban Development Corporation", sector: "Finance", logo: hudcoLogo },
    { name: "NHAI", fullName: "National Highways Authority of India", sector: "Infrastructure", logo: nhsiLogo },
    { name: "KRDCL", fullName: "Karnataka Rural Development Corporation", sector: "Development", logo: krdclLogo },
    { name: "PHED Manipur", fullName: "Public Health Engineering Department, Manipur", sector: "Government", logo: phedLogo },
    { name: "Manipur Police", fullName: "Manipur Police Department", sector: "Government", logo: manipurPoliceLogo },
    { name: "NDB Bank", fullName: "National Development Bank", sector: "Finance", logo: ndbBankLogo }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    // Pause on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, scrollDelay);
      return newInterval;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by government agencies and institutions across India for infrastructure development
          </p>
        </motion.div>

        {/* Moving client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-hidden animate-scroll"
            style={{ 
              width: '200%'
            }}
          >
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-72 bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center border border-gray-200 dark:border-gray-600"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {client.fullName}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {client.sector}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-72 bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center border border-gray-200 dark:border-gray-600"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {client.fullName}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">16+</div>
            <div className="text-gray-600 dark:text-gray-300">Esteemed Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">14</div>
            <div className="text-gray-600 dark:text-gray-300">States Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">600+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}