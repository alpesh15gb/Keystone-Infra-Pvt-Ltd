import React from 'react';
import { motion } from 'framer-motion';
import EditableText from '@/components/editable-text';
import EditableImage from '@/components/editable-image';

interface BridgeProject {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  length: string;
  spans: string;
}

interface BridgeProjectsGalleryProps {
  isEditMode?: boolean;
}

export function BridgeProjectsGallery({ isEditMode = false }: BridgeProjectsGalleryProps) {
  const bridgeProjects: BridgeProject[] = [
    {
      id: 'bridge-1',
      imageSrc: '/images/bridge-105m-5spans.jpg',
      title: 'RCC Girder Bridge - 105 mts Length',
      description: '5 spans of 21 mtr each',
      length: '105 meters',
      spans: '5 spans'
    },
    {
      id: 'bridge-2',
      imageSrc: '/images/bridge-210m.jpg',
      title: 'RCC Girder Bridge - 210 mtr Length',
      description: 'Major river crossing infrastructure',
      length: '210 meters',
      spans: 'Multi-span'
    },
    {
      id: 'bridge-3',
      imageSrc: '/images/bridge-240m-12spans.jpg',
      title: 'RCC Girder Bridge - 240 mtr Length',
      description: '12 spans of 20 mtr each',
      length: '240 meters',
      spans: '12 spans'
    },
    {
      id: 'bridge-4',
      imageSrc: '/images/bridge-480m-16spans.jpg',
      title: 'RCC Girder Bridge - 480 mtr Length',
      description: '16 spans of 30 mtr each',
      length: '480 meters',
      spans: '16 spans'
    },
    {
      id: 'bridge-5',
      imageSrc: '/images/bridge-636m-24spans.jpg',
      title: 'RCC Girder Bridge - 636 mtr Length',
      description: '24 spans of 26.5 mtr each',
      length: '636 meters',
      spans: '24 spans'
    },
    {
      id: 'bridge-6',
      imageSrc: '/images/bridge-689m-26spans.jpg',
      title: 'RCC Girder Bridge - 689 mtr Length',
      description: '26 spans of 26.5 mtr each',
      length: '689 meters',
      spans: '26 spans'
    }
  ];

  const handleImageChange = (id: string, newSrc: string) => {
    // Handle image updates when in edit mode
    console.log(`Image ${id} changed to ${newSrc}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">

        {/* Bridge Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridgeProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Project Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {isEditMode ? (
                    <EditableImage
                      id={project.id}
                      src={project.imageSrc}
                      alt={project.title}
                      isEditMode={isEditMode}
                      onImageChange={handleImageChange}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Overlay with project specs */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between text-white text-sm">
                        <span className="bg-orange-600 px-3 py-1 rounded-full font-medium">
                          {project.length}
                        </span>
                        <span className="bg-amber-600 px-3 py-1 rounded-full font-medium">
                          {project.spans}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-amber-700 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      Length: {project.length}
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.spans}
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Bridge Solution?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              From small river crossings to major highway bridges, we design and construct 
              infrastructure solutions tailored to your specific requirements and terrain challenges.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
              Discuss Your Project
              <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BridgeProjectsGallery;