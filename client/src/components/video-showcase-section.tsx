import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

interface VideoShowcaseSectionProps {
  isEditMode?: boolean;
}

export function VideoShowcaseSection({ isEditMode = false }: VideoShowcaseSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ["Bridges", "National Highway", "Water and Irrigation Projects", "Buildings"];

  const allVideos = {
    "Bridges": [
      { id: "p62cJAu31_M", title: "RCC GIRDER 240 METRES" },
      { id: "ALZtqkYNqg4", title: "RCC GIRDER 210 METRES" }
    ],
    "National Highway": [
      { id: "be6xI7063w8", title: "Transportation" },
      { id: "dPn3aRBkfrA", title: "NATIONAL HIGHWAY 63 CONSTRUCTION" }
    ],
    "Water and Irrigation Projects": [
      { id: "buaAEmTJs-w", title: "Water and Irrigation Projects" },
      { id: "EKYB8EGORr0", title: "Singda Dam" }
    ],
    "Buildings": [
      { id: "2NpgvLuMN5M", title: "School Building" }
    ]
  };



  const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
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
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Experience Our Expertise</h3>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed">
              These videos showcase our commitment to quality, integrity, and sustainable infrastructure development.
              See how we bring vision to life through engineering excellence.
            </p>
          </div>
        </motion.div>

        <div className="space-y-20">
          {categories.map((category) => {
            const videos = allVideos[category as keyof typeof allVideos] || [];

            return (
              <div key={category} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-orange-200"></div>
                  <h3 className="text-3xl font-bold text-orange-600 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-100 shadow-sm">
                    {category}
                  </h3>
                  <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-orange-200"></div>
                </div>

                {/* Videos Grid */}
                {videos.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:-translate-y-2 h-full flex flex-col">
                          <div className="relative overflow-hidden aspect-video">
                            <img
                              src={getThumbnailUrl(video.id)}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-orange-600 mb-4 group-hover:text-orange-700 transition-colors line-clamp-2">
                              {video.title}
                            </h3>
                            <div className="mt-auto">
                              <button
                                onClick={() => openVideo(video.id)}
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                              >
                                Watch Video
                                <Play className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center py-12 bg-white/30 backdrop-blur-sm rounded-3xl border border-dashed border-orange-200"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                      <Play className="w-6 h-6 text-orange-400 opacity-50" />
                    </div>
                    <p className="text-lg text-amber-800 font-medium">Coming Soon</p>
                    <p className="text-sm text-amber-600">Video demonstrations for {category} will be available shortly.</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>



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
