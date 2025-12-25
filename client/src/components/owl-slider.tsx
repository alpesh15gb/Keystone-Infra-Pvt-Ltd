import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface SliderImage {
  src: string;
  title: string;
  description: string;
  location: string;
}

interface OwlSliderProps {
  images: SliderImage[];
  title: string;
  subtitle: string;
}

export function OwlSlider({ images, title, subtitle }: OwlSliderProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import and initialize Owl Carousel
    const initOwlCarousel = async () => {
      try {
        // Import jQuery and Owl Carousel
        const jQuery = (await import('jquery')).default;
        await import('owl.carousel');
        
        if (carouselRef.current) {
          const $carousel = jQuery(carouselRef.current);
          
          $carousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              1000: { items: 1 }
            }
          });
        }
      } catch (error) {
        console.warn('Owl Carousel failed to initialize:', error);
      }
    };

    initOwlCarousel();
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="owl-carousel-container">
          <div ref={carouselRef} className="owl-carousel owl-theme">
            {images.map((image, index) => (
              <div key={index} className="item">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 aspect-[16/9] max-h-[600px]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-lg mb-2 text-gray-200">
                        {image.description}
                      </p>
                      <p className="text-orange-400 font-semibold">
                        📍 {image.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .owl-carousel-container .owl-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            transform: translateY(-50%);
            pointer-events: none;
            z-index: 10;
          }
          
          .owl-carousel-container .owl-nav button {
            background: rgba(255, 255, 255, 0.9) !important;
            border-radius: 50% !important;
            width: 50px !important;
            height: 50px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            pointer-events: auto;
            border: none !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            font-size: 18px !important;
            color: #333 !important;
          }
          
          .owl-carousel-container .owl-nav button:hover {
            background: #0066CC !important;
            color: white !important;
            transform: scale(1.1);
          }
          
          .owl-carousel-container .owl-dots {
            text-align: center;
            margin-top: 30px;
          }
          
          .owl-carousel-container .owl-dots .owl-dot {
            display: inline-block;
            margin: 0 5px;
          }
          
          .owl-carousel-container .owl-dots .owl-dot span {
            background: #ccc !important;
            border-radius: 50% !important;
            width: 12px !important;
            height: 12px !important;
            display: block !important;
            transition: all 0.3s ease;
          }
          
          .owl-carousel-container .owl-dots .owl-dot.active span {
            background: #0066CC !important;
            transform: scale(1.3);
          }
          
          .owl-carousel-container {
            position: relative;
          }
        `}</style>
      </div>
    </section>
  );
}

// Project slider with Owl Carousel
export function ProjectOwlSlider() {
  const projectImages: SliderImage[] = [
    {
      src: "/images/slider-1_1754941983527.jpg",
      title: "Indrawathi-Pahurnar Bridge",
      description: "712m length bridge with 26 spans connecting 500 villages",
      location: "Chhattisgarh"
    },
    {
      src: "/images/slider-2_1754941983528.jpg",
      title: "Institutional Building Complex",
      description: "Modern institutional building with blue and white facade",
      location: "Multi-storey institutional project"
    },
    {
      src: "/images/slider-3_1754941983528.jpg",
      title: "Water Tank Infrastructure",
      description: "Overhead water tanks with modern design and safety features",
      location: "Water supply project"
    },
    {
      src: "/images/slider-4_1754941983528.jpg",
      title: "Airport Development",
      description: "Airport infrastructure and runway development project",
      location: "Aviation infrastructure"
    },
    {
      src: "/images/slider-5_1754941983528.jpg",
      title: "Highway Construction",
      description: "Curved highway construction through forested terrain",
      location: "State highway project"
    },
    {
      src: "/images/slider-6_1754941983528.jpg",
      title: "Water Treatment Plant",
      description: "45 MLD capacity water treatment facility with circular clarifiers",
      location: "Manipur"
    },
    {
      src: "/images/slider-7_1754941983528.jpg",
      title: "Commercial Building",
      description: "Multi-storey commercial building in urban setting",
      location: "Commercial infrastructure"
    },
    {
      src: "/images/slider-8_1754941983529.jpg",
      title: "Pipeline Bridge",
      description: "Water pipeline bridge infrastructure with blue pipelines",
      location: "Water distribution system"
    },
    {
      src: "/images/slider-9_1754941983529.jpg",
      title: "Modern Bridge Design",
      description: "Contemporary bridge architecture over natural waterway",
      location: "Bridge infrastructure"
    },
    {
      src: "/images/slider-10_1754941983529.jpg",
      title: "Arch Bridge Construction",
      description: "Modern arch bridge spanning natural water body",
      location: "Transportation infrastructure"
    },
    {
      src: "/images/slider-11_1754941983529.jpg",
      title: "Major Bridge Project",
      description: "Long span bridge construction over river with multiple supports",
      location: "Major transportation corridor"
    },
    {
      src: "/images/slider-12_1754941983529.jpg",
      title: "Sewerage Treatment Plant",
      description: "16 MLD sewerage treatment facility with circular treatment tanks",
      location: "Urban sanitation project"
    }
  ];

  return (
    <OwlSlider 
      images={projectImages}
      title="Our Project Gallery"
      subtitle="Showcasing excellence in infrastructure development across India"
    />
  );
}