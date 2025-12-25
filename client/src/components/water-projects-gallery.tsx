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
      title: 'Water Treatment Plant',
      description: 'State-of-the-art water treatment facility with advanced purification systems and dual circular clarifiers',
      capacity: '45 Million Litres per Day',
      category: 'Water Treatment'
    },
    {
      id: 'water-2',
      imageSrc: '/images/sewerage-treatment-plant-16mld-1.jpg',
      title: 'Sewerage Treatement Plant ',
      description: 'Modern sewerage treatment plant featuring advanced processing units and circular sedimentation tanks',
      capacity: '16 Million Litres per Day',
      category: 'Water Treatment'
    },
    {
      id: 'water-3',
      imageSrc: '/images/sewerage-treatment-plant-16mld-2.jpg',
      title: 'Sewerage Treatement Plant',
      description: 'Aerial view of the 16 MLD sewerage treatment plant highlighting multiple treatment basins and infrastructure',
      capacity: '16 Million Litres per Day',
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EditableImage
                src={project.imageSrc}
                alt={project.title}
                isEditMode={isEditMode}
                onImageChange={(newSrc) => handleImageChange(project.id, newSrc)}
                className="rounded-lg h-64 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-500">{project.capacity}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WaterProjectsGallery;
