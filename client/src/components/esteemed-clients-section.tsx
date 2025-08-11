import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function EsteemedClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Client logos and information based on PDF content
  const clients = [
    { name: "NHIDCL", fullName: "National Highways & Infrastructure Development Corporation Ltd", sector: "Infrastructure" },
    { name: "PWD", fullName: "Public Works Department", sector: "Government" },
    { name: "Government of Manipur", fullName: "Government of Manipur", sector: "Government" },
    { name: "Government of Chhattisgarh", fullName: "Government of Chhattisgarh", sector: "Government" },
    { name: "Government of Nagaland", fullName: "Government of Nagaland", sector: "Government" },
    { name: "Government of Bihar", fullName: "Government of Bihar", sector: "Government" },
    { name: "Government of Jharkhand", fullName: "Government of Jharkhand", sector: "Government" },
    { name: "Government of Assam", fullName: "Government of Assam", sector: "Government" },
    { name: "Government of Mizoram", fullName: "Government of Mizoram", sector: "Government" },
    { name: "Collector Office Bijapur", fullName: "Collector Office, Bijapur District", sector: "Administration" },
    { name: "Delhi Development Authority", fullName: "Delhi Development Authority", sector: "Development" },
    { name: "Haryana Government", fullName: "Government of Haryana", sector: "Government" }
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
            Trusted by government agencies and institutions across 14 states for infrastructure development
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
                className="flex-shrink-0 w-64 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
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
                className="flex-shrink-0 w-64 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
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
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">14</div>
            <div className="text-gray-600 dark:text-gray-300">States Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">600+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}