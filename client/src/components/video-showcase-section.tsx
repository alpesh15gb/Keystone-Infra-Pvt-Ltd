import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

export function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videos = [
    {
      id: "wvoxdF185yo",
      title: "Infrastructure Development Project",
      description: "Showcasing our latest infrastructure development initiatives"
    },
    {
      id: "US6l4c8uSLE", 
      title: "Construction Excellence",
      description: "Demonstrating our construction capabilities and quality standards"
    },
    {
      id: "dPn3aRBkfrA",
      title: "Transportation Infrastructure",
      description: "Highway and road construction project highlights"
    },
    {
      id: "p62cJAu31_M",
      title: "Engineering Innovation",
      description: "Advanced engineering solutions and methodologies"
    },
    {
      id: "5XUwqNICWTA",
      title: "Project Management",
      description: "Efficient project execution and management practices"
    },
    {
      id: "ALZtqkYNqg4",
      title: "Quality Assurance",
      description: "Our commitment to quality and safety standards"
    },
    {
      id: "oO1yDu8tuH0",
      title: "Sustainability Focus",
      description: "Environmental responsibility in infrastructure development"
    },
    {
      id: "PddAAZX3aTM",
      title: "Team Excellence",
      description: "Our skilled workforce and collaborative approach"
    },
    {
      id: "2NpgvLuMN5M",
      title: "Future Vision",
      description: "Vision for sustainable infrastructure development"
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
    <section className="py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Video Showcase
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto leading-relaxed">
            Explore our infrastructure projects and engineering excellence through video demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={getThumbnailUrl(video.id)}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => openVideo(video.id)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-orange-500 text-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8" fill="currentColor" />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <button
                    onClick={() => openVideo(video.id)}
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                  >
                    Watch Video
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Experience Our Expertise</h3>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed">
              These videos showcase our commitment to quality, integrity, and sustainable infrastructure development. 
              See how we bring vision to life through engineering excellence.
            </p>
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