import { motion } from "framer-motion";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface SliderImage {
  src: string;
  title: string;
  description: string;
  location?: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  title?: string;
  subtitle?: string;
}

export function ImageSlider({ images, title, subtitle }: ImageSliderProps) {
  const options = {
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>',
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  };

  return (
    <section className="py-20 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && <h2 className="text-4xl font-bold text-stripe-dark mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="owl-carousel-container">
            <OwlCarousel className="owl-theme" {...options}>
              {images.map((image, index) => (
                <div key={index} className="item">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-[600px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 max-w-2xl">
                        <h3 className="text-2xl font-bold text-stripe-dark mb-2">{image.title}</h3>
                        <p className="text-gray-600 mb-2">{image.description}</p>
                        {image.location && (
                          <p className="text-sm text-stripe-blue font-medium">{image.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .owl-carousel-container .owl-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          transform: translateY(-50%);
          pointer-events: none;
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
      `}</style>
    </section>
  );
}

// Default slider with placeholder images (you can replace these with your actual project images)
export function ProjectSlider() {
  const defaultImages: SliderImage[] = [
    {
      src: "/api/placeholder/1200/600",
      title: "Highway Construction Project",
      description: "Major highway development connecting rural areas to urban centers",
      location: "National Highway - Nagaland"
    },
    {
      src: "/api/placeholder/1200/600", 
      title: "Water Treatment Facility",
      description: "45 MLD capacity water treatment plant serving urban population",
      location: "Manipur"
    },
    {
      src: "/api/placeholder/1200/600",
      title: "Bridge Infrastructure", 
      description: "Modern bridge construction facilitating connectivity to 500 villages",
      location: "Indrawathi-Pahurnar, Chhattisgarh"
    }
  ];

  return (
    <ImageSlider 
      images={defaultImages}
      title="Our Project Gallery"
      subtitle="Showcasing excellence in infrastructure development across India"
    />
  );
}