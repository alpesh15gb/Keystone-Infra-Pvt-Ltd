import React from 'react';
import { motion } from 'framer-motion';
import EditableImage from '@/components/editable-image';

interface BuildingProject {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
}

interface BuildingProjectsGalleryProps {
  isEditMode?: boolean;
}

export function BuildingProjectsGallery({ isEditMode = false }: BuildingProjectsGalleryProps) {
  const buildingProjects: BuildingProject[] = [
    {
      id: 'building-1',
      imageSrc: '/images/building-girls-hostel.jpg',
      title: 'Girls Hostel Building Education City',
      description: 'Modern educational residential facility with contemporary design and student amenities',
      category: 'Educational'
    },
    {
      id: 'building-2',
      imageSrc: '/images/building-police-hq.jpg',
      title: 'Police Head Quarter Building',
      description: 'Multi-story government administrative complex with modern security infrastructure',
      category: 'Government'
    },
    {
      id: 'building-3',
      imageSrc: '/images/building-school.jpg',
      title: 'School Building',
      description: 'Educational institution building with modern classroom facilities and learning spaces',
      category: 'Educational'
    },
    {
      id: 'building-4',
      imageSrc: '/images/building-sports-stadium.jpg',
      title: 'Sports Stadium',
      description: 'Professional sports facility with modern infrastructure and spectator amenities',
      category: 'Sports & Recreation'
    },
    {
      id: 'building-5',
      imageSrc: '/images/building-state-guest-house.jpg',
      title: 'State Guest House',
      description: 'Government hospitality facility with premium accommodation and conference facilities',
      category: 'Hospitality'
    },
    {
      id: 'building-6',
      imageSrc: '/images/building-interior-1.jpg',
      title: 'Premium Interior Design',
      description: 'Luxury interior spaces with modern furnishings and sophisticated design elements',
      category: 'Interiors'
    },
    {
      id: 'building-7',
      imageSrc: '/images/building-interior-2.jpg',
      title: 'Executive Suite Interior',
      description: 'High-end interior design with premium materials and contemporary aesthetics',
      category: 'Interiors'
    },
    {
      id: 'building-8',
      imageSrc: '/images/building-atrium.jpg',
      title: 'Grand Atrium Design',
      description: 'Multi-story atrium with glass railings and modern architectural elements',
      category: 'Commercial'
    },
    {
      id: 'building-9',
      imageSrc: '/images/building-lobby.jpg',
      title: 'Executive Lobby',
      description: 'Sophisticated lobby design with marble flooring and modern lighting systems',
      category: 'Commercial'
    },
    {
      id: 'building-10',
      imageSrc: '/images/building-guest-room.jpg',
      title: 'Guest Room Design',
      description: 'Premium guest accommodation with modern amenities and elegant furnishing',
      category: 'Hospitality'
    }
  ];

  const handleImageChange = (id: string, newSrc: string) => {
    // Handle image updates when in edit mode
    console.log(`Image ${id} changed to ${newSrc}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        
        {/* Building Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {buildingProjects.map((project, index) => (
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
                <div className="relative h-48 overflow-hidden rounded-t-xl">
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
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium">
                        View Project Details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-amber-700 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildingProjectsGallery;