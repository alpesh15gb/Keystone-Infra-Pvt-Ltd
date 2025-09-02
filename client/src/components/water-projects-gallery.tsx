import React from 'react';
import { motion } from 'framer-motion';
import EditableImage from '@/components/editable-image';

interface WaterProject {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  capacity: string;
  category: string;
}

interface WaterProjectsGalleryProps {
  isEditMode?: boolean;
}

export function WaterProjectsGallery({ isEditMode = false }: WaterProjectsGalleryProps) {
  const waterProjects: WaterProject[] = [
    {
      id: 'water-1',
      imageSrc: '/images/water-treatment-plant-45mld.jpg',
      title: '45 MLD Water Treatment Plant',
      description: 'State-of-the-art water treatment facility with advanced purification systems and dual circular clarifiers',
      capacity: '45 Million Litres per Day',
      category: 'Water Treatment'
    }
  ];

  const handleImageChange = (id: string, newSrc: string) => {
    // Handle image updates when in edit mode
    console.log(`Image ${id} changed to ${newSrc}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        
        {/* Water Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waterProjects.map((project, index) => (
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
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  {isEditMode ? (
                    <EditableImage
                      id={project.id}
                      src={project.imageSrc}
                      alt={project.title}
                      isEditMode={isEditMode}
                      onImageChange={handleImageChange}
                      className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700 ease-in-out"
                    />
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.capacity}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between text-white text-sm">
                        <span className="bg-blue-600 px-3 py-1 rounded-full font-medium">
                          Water Infrastructure
                        </span>
                        <span className="bg-cyan-600 px-3 py-1 rounded-full font-medium">
                          45 MLD Capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-700 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Capacity: {project.capacity}
                    </span>
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Dual circular clarifiers for enhanced treatment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Advanced filtration and purification systems</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Modern control room and monitoring facilities</span>
                    </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Water Infrastructure Solutions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              From water treatment plants to distribution systems, we design and construct 
              comprehensive water infrastructure solutions for communities and industries.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Explore Water Projects
              <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WaterProjectsGallery;