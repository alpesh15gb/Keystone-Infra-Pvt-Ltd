import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

export function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  
  const videos = [
    {
      id: "wvoxdF185yo",
      title: "Tarud River Bridge"
    },
    {
      id: "US6l4c8uSLE", 
      title: "Paspul Vaghu Bridge"
    },
    {
      id: "dPn3aRBkfrA",
      title: "NH63R"
    },
    {
      id: "p62cJAu31_M",
      title: "Mingachal Bridge"
    },
    {
      id: "5XUwqNICWTA",
      title: "Giligicha Bridge"
    },
    {
      id: "ALZtqkYNqg4",
      title: "Chintavaghu Bridge"
    },
    {
      id: "oO1yDu8tuH0",
      title: "Chhindanar Bridge 2"
    },
    {
      id: "PddAAZX3aTM",
      title: "Chhindanar Bridge 1"
    },
    {
      id: "2NpgvLuMN5M",
      title: "Bijapur School Building"
    }
  ];

  const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const getEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-950/20 to-amber-900/30 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Project
            </span>{" "}
            <span className="text-white">
              Showcase
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience our infrastructure mastery through immersive video demonstrations of completed projects
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-orange-400/20 group-hover:border-orange-400/50 transition-all duration-500">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={getThumbnailUrl(video.id)}
                    alt={video.title}
                    className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Dynamic overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Play button with enhanced animation */}
                  <button
                    onClick={() => openVideo(video.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full p-5 shadow-2xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      animate={hoveredVideo === video.id ? { scale: 1.1, boxShadow: "0 0 30px rgba(251, 146, 60, 0.6)" } : { scale: 1 }}
                    >
                      <Play className="w-8 h-8" fill="currentColor" />
                    </motion.div>
                  </button>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 relative">
                  {/* Background glow for text area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-orange-300 mb-6 group-hover:text-orange-200 transition-colors duration-300 relative z-10"
                    animate={hoveredVideo === video.id ? { y: -2 } : { y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {video.title}
                  </motion.h3>
                  
                  <motion.button
                    onClick={() => openVideo(video.id)}
                    className="inline-flex items-center gap-3 text-orange-400 hover:text-orange-300 font-semibold text-base transition-all duration-300 relative z-10 group/btn"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      Watch Project
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover/btn:w-full transition-all duration-300"></span>
                    </span>
                    <motion.div
                      animate={{ rotate: hoveredVideo === video.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative bg-gradient-to-r from-slate-800 via-orange-900 to-slate-800 text-white rounded-3xl p-12 shadow-2xl border border-orange-400/30 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Engineering Excellence in Motion
              </motion.h3>
              <motion.p 
                className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                These authentic project videos demonstrate our unwavering commitment to quality, integrity, 
                and sustainable infrastructure development. Witness how we transform vision into reality through 
                cutting-edge engineering solutions across India.
              </motion.p>
              
              {/* Stats or highlights */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">9</div>
                  <div className="text-orange-200 font-medium">Featured Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">12+</div>
                  <div className="text-orange-200 font-medium">States Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">20+</div>
                  <div className="text-orange-200 font-medium">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getEmbedUrl(selectedVideo)}
                  title="Video Player"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}