import React from 'react';
import { motion } from 'framer-motion';
import EditableImage from '@/components/editable-image';

interface RoadProject {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  highway: string;
  category: string;
}

interface RoadProjectsGalleryProps {
  isEditMode?: boolean;
}

export function RoadProjectsGallery({ isEditMode = false }: RoadProjectsGalleryProps) {
  const roadProjects: RoadProject[] = [
    {
      id: 'road-1',
      imageSrc: '/images/road-nh63-straight.jpg',
      title: 'NH 63 Highway Construction',
      description: 'National highway construction through forested terrain with precision engineering and environmental consideration',
      highway: 'National Highway 63',
      category: 'Highway Construction'
    },
    {
      id: 'road-2',
      imageSrc: '/images/road-nh63-curved.jpg',
      title: 'NH-63 Curved Section Engineering',
      description: 'Advanced highway engineering with curved alignment through challenging topography and natural water crossings',
      highway: 'National Highway 63',
      category: 'Highway Engineering'
    }
  ];

  const handleImageChange = (id: string, newSrc: string) => {
    // Handle image updates when in edit mode
    console.log(`Image ${id} changed to ${newSrc}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Road Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadProjects.map((project, index) => (
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
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Highway Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      NH-63
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between text-white text-sm">
                        <span className="bg-gray-800 px-3 py-1 rounded-full font-medium">
                          Highway Project
                        </span>
                        <span className="bg-orange-600 px-3 py-1 rounded-full font-medium">
                          National Highway
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.highway}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span>National highway standard construction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Precision engineering through terrain</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span>Environmental impact mitigation</span>
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
          <div className="bg-gradient-to-r from-gray-800 to-slate-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Highway & Road Infrastructure Projects</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              From national highways to rural roads, we construct transportation infrastructure 
              that connects communities and drives economic development across challenging terrains.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors inline-flex items-center gap-2">
              View Road Projects
              <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RoadProjectsGallery;