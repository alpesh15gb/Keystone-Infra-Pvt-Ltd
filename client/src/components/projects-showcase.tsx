import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EditableText from '@/components/editable-text';

interface Project {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  specs?: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  projects: Project[];
}

interface ProjectsShowcaseProps {
  isEditMode?: boolean;
}

export function ProjectsShowcase({ isEditMode = false }: ProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<Record<string, number>>({
    bridges: 0,
    buildings: 0,
    interiors: 0,
    water: 0,
    roads: 0
  });

  const categories: ProjectCategory[] = [
    {
      id: 'bridges',
      title: 'Bridge Engineering',
      description: 'RCC Girder Bridges connecting communities across diverse terrains',
      color: 'amber-700',
      bgColor: 'from-amber-50 to-orange-50',
      projects: [
        {
          id: 'bridge-1',
          imageSrc: '/images/bridge-105m-5spans.jpg',
          title: 'RCC Girder Bridge - 105 mts Length',
          description: '5 spans of 21 mtr each',
          specs: '105 meters • 5 spans'
        },
        {
          id: 'bridge-2',
          imageSrc: '/images/bridge-210m.jpg',
          title: 'RCC Girder Bridge - 210 mtr Length',
          description: 'Major river crossing infrastructure',
          specs: '210 meters • Multi-span'
        },
        {
          id: 'bridge-3',
          imageSrc: '/images/bridge-240m-12spans.jpg',
          title: 'RCC Girder Bridge - 240 mtr Length',
          description: '12 spans of 20 mtr each',
          specs: '240 meters • 12 spans'
        },
        {
          id: 'bridge-4',
          imageSrc: '/images/bridge-480m-16spans.jpg',
          title: 'RCC Girder Bridge - 480 mtr Length',
          description: '16 spans of 30 mtr each',
          specs: '480 meters • 16 spans'
        },
        {
          id: 'bridge-5',
          imageSrc: '/images/bridge-636m-24spans.jpg',
          title: 'RCC Girder Bridge - 636 mtr Length',
          description: '24 spans of 26.5 mtr each',
          specs: '636 meters • 24 spans'
        },
        {
          id: 'bridge-6',
          imageSrc: '/images/bridge-689m-26spans.jpg',
          title: 'RCC Girder Bridge - 689 mtr Length',
          description: '26 spans of 26.5 mtr each',
          specs: '689 meters • 26 spans'
        }
      ]
    },
    {
      id: 'buildings',
      title: 'Building Construction',
      description: 'Educational, government, and commercial building projects',
      color: 'amber-800',
      bgColor: 'from-orange-50 to-amber-100',
      projects: [
        {
          id: 'building-1',
          imageSrc: '/images/building-girls-hostel.jpg',
          title: 'Girls Hostel Building Education City',
          description: 'Modern educational residential facility with contemporary design',
          specs: 'Educational • Residential'
        },
        {
          id: 'building-2',
          imageSrc: '/images/building-police-hq.jpg',
          title: 'Police Head Quarter Building',
          description: 'Multi-story government administrative complex',
          specs: 'Government • Administrative'
        },
        {
          id: 'building-3',
          imageSrc: '/images/building-school.jpg',
          title: 'School Building in Education City',
          description: 'Educational institution with modern classroom facilities',
          specs: 'Educational • Academic'
        },
        {
          id: 'building-4',
          imageSrc: '/images/building-sports-stadium.jpg',
          title: 'Sports Stadium',
          description: 'Professional sports facility with modern infrastructure',
          specs: 'Sports • Recreation'
        },
        {
          id: 'building-5',
          imageSrc: '/images/building-state-guest-house.jpg',
          title: 'Manipur State Guest House',
          description: 'Government hospitality facility with premium accommodation',
          specs: 'Hospitality • Government'
        }
      ]
    },
    {
      id: 'interiors',
      title: 'Interior Design',
      description: 'Premium interior spaces and architectural finishing',
      color: 'orange-600',
      bgColor: 'from-orange-50 to-amber-50',
      projects: [
        {
          id: 'interior-1',
          imageSrc: '/images/building-interior-1.jpg',
          title: 'Modern Interior Design',
          description: 'Contemporary interior spaces with elegant finishes and lighting',
          specs: 'Interior • Modern Design'
        },
        {
          id: 'interior-2',
          imageSrc: '/images/building-interior-2.jpg',
          title: 'Premium Interior Finishing',
          description: 'High-end interior design with luxury amenities and furnishing',
          specs: 'Interior • Premium Finishing'
        },
        {
          id: 'interior-3',
          imageSrc: '/images/building-atrium.jpg',
          title: 'Atrium Interior Design',
          description: 'Spacious atrium with modern architectural elements',
          specs: 'Atrium • Architectural'
        },
        {
          id: 'interior-4',
          imageSrc: '/images/building-lobby.jpg',
          title: 'Executive Lobby Design',
          description: 'Professional lobby space with contemporary design elements',
          specs: 'Lobby • Executive'
        },
        {
          id: 'interior-5',
          imageSrc: '/images/building-guest-room.jpg',
          title: 'Guest Room Interior',
          description: 'Comfortable guest accommodation with modern amenities',
          specs: 'Guest Room • Hospitality'
        }
      ]
    },
    {
      id: 'water',
      title: 'Water Infrastructure',
      description: 'Advanced water treatment and distribution systems',
      color: 'orange-700',
      bgColor: 'from-amber-50 to-orange-100',
      projects: [
        {
          id: 'water-1',
          imageSrc: '/images/water-treatment-plant-45mld.jpg',
          title: '45 MLD Water Treatment Plant',
          description: 'State-of-the-art facility with dual circular clarifiers',
          specs: '45 Million Litres/Day • Advanced Treatment'
        }
      ]
    },
    {
      id: 'roads',
      title: 'Highway Construction',
      description: 'National highways and road infrastructure projects',
      color: 'amber-900',
      bgColor: 'from-orange-50 to-amber-50',
      projects: [
        {
          id: 'road-1',
          imageSrc: '/images/road-nh63-straight.jpg',
          title: 'NH 63 Highway Construction',
          description: 'National highway through forested terrain',
          specs: 'National Highway 63 • Precision Engineering'
        },
        {
          id: 'road-2',
          imageSrc: '/images/road-nh63-curved.jpg',
          title: 'NH-63 Curved Section Engineering',
          description: 'Advanced curved alignment through challenging topography',
          specs: 'National Highway 63 • Curved Alignment'
        }
      ]
    }
  ];

  const nextSlide = (categoryId: string, maxSlides: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % maxSlides
    }));
  };

  const prevSlide = (categoryId: string, maxSlides: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === 0 ? maxSlides - 1 : prev[categoryId] - 1
    }));
  };

  const currentCategory = categories[activeCategory];
  const currentSlideIndex = currentSlide[currentCategory.id] || 0;
  const currentProject = currentCategory.projects[currentSlideIndex];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <EditableText
            id="projects-title"
            isEditMode={isEditMode}
            element="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-3 md:mb-4 px-4"
          >
            Our Project Portfolio
          </EditableText>
          <EditableText
            id="projects-subtitle"
            isEditMode={isEditMode}
            element="p"
            className="text-lg md:text-xl text-amber-800 mb-4 md:mb-6 px-4"
          >
            Excellence in Infrastructure Development
          </EditableText>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto"></div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-amber-800 hover:bg-orange-50 shadow-md border-2 border-orange-200'
              }`}
            >
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">
                {category.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${currentCategory.bgColor} rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 mx-2 md:mx-0`}
          >
            {/* Category Header */}
            <div className="text-center mb-6 md:mb-8">
              <EditableText
                id={`category-title-${currentCategory.id}`}
                isEditMode={isEditMode}
                element="h3"
                className="text-2xl md:text-3xl font-bold text-orange-600 mb-2 md:mb-3 px-2"
              >
                {currentCategory.title}
              </EditableText>
              <EditableText
                id={`category-description-${currentCategory.id}`}
                isEditMode={isEditMode}
                element="p"
                className="text-amber-800 max-w-2xl mx-auto text-sm md:text-base px-4"
              >
                {currentCategory.description}
              </EditableText>
            </div>

            {/* Project Slider */}
            <div className="relative">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
                {/* Content Section - Above Image */}
                <div className="p-4 md:p-8 lg:p-10 text-center">
                  <div className="text-orange-600 text-xs md:text-sm font-semibold mb-2">
                    {currentProject.specs}
                  </div>
                  <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-amber-900 mb-3 md:mb-4 leading-tight px-2">
                    {currentProject.title}
                  </h4>
                  <p className="text-amber-800 leading-relaxed mb-3 md:mb-4 max-w-3xl mx-auto text-sm md:text-base px-2">
                    {currentProject.description}
                  </p>
                  
                  {/* Project Counter */}
                  <div className="text-xs md:text-sm text-orange-600">
                    Project {currentSlideIndex + 1} of {currentCategory.projects.length}
                  </div>
                </div>

                {/* Image Section - Full Width */}
                <div className="relative">
                  <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden group">
                    <img
                      src={currentProject.imageSrc}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Navigation Arrows */}
                    {currentCategory.projects.length > 1 && (
                      <>
                        <button
                          onClick={() => prevSlide(currentCategory.id, currentCategory.projects.length)}
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-orange-600/90 hover:bg-orange-600 text-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200"
                        >
                          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                        <button
                          onClick={() => nextSlide(currentCategory.id, currentCategory.projects.length)}
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-orange-600/90 hover:bg-orange-600 text-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200"
                        >
                          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                      </>
                    )}

                    {/* Slide Indicators */}
                    {currentCategory.projects.length > 1 && (
                      <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 md:space-x-2">
                        {currentCategory.projects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(prev => ({ ...prev, [currentCategory.id]: index }))}
                            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                              index === currentSlideIndex
                                ? 'bg-orange-600'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProjectsShowcase;