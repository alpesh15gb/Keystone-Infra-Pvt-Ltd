import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState, useRef } from "react";

interface VimeoPlayerProps {
  id: string;
  title: string;
}

function VimeoPlayer({ id, title }: VimeoPlayerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className="w-full h-full bg-black/20">
      {isInView ? (
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&loop=1&muted=1&background=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          className="w-full h-full object-cover"
          title={title}
          style={{ pointerEvents: 'none' }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

interface VideoShowcaseSectionProps {
  isEditMode?: boolean;
}

export function VideoShowcaseSection({ isEditMode = false }: VideoShowcaseSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ["National Highway", "Bridges", "Water and Irrigation Projects", "Buildings"];

  const allVideos = {
    "Bridges": [
      { id: "1149733960", title: "RCC GIRDER 240 METRES", type: "vimeo" },
      { id: "1149733949", title: "RCC GIRDER 210 METRES", type: "vimeo" }
    ],
    "National Highway": [
      { id: "1149733920", title: "Transportation", type: "vimeo" },
      { id: "1149733976", title: "NATIONAL HIGHWAY 63 CONSTRUCTION", type: "vimeo" }
    ],
    "Water and Irrigation Projects": [
      { id: "1149733933", title: "Water and Irrigation Projects", type: "vimeo" },
      { id: "1149733910", title: "Singda Dam", type: "vimeo" }
    ],
    "Buildings": [
      { id: "1149733885", title: "PHQ", type: "vimeo" },
      { id: "1149733865", title: "State Guest House", type: "vimeo" }
    ]
  };



  const getEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-black/80 backdrop-blur-sm">
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
                  <h3 className="text-3xl font-bold text-orange-400 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 shadow-sm">
                    {category}
                  </h3>
                  <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-orange-200"></div>
                </div>

                {/* Videos Grid */}
                {videos.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video: any, index) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:-translate-y-2 h-full flex flex-col">
                          <div className="relative overflow-hidden aspect-video">
                            {video.type === "vimeo" ? (
                              <VimeoPlayer id={video.id} title={video.title} />
                            ) : (
                              <>
                                <img
                                  src={`https://img.youtube.com/vi/${video.id}/${(video as any).thumbnailQuality || 'maxresdefault'}.jpg`}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                  }}
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
                              </>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-orange-400 transition-colors line-clamp-2">
                              {video.title}
                            </h3>
                            {video.type !== "vimeo" && (
                              <div className="mt-auto">
                                <button
                                  onClick={() => openVideo(video.id)}
                                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
                                >
                                  Watch Video
                                  <Play className="w-4 h-4" />
                                </button>
                              </div>
                            )}
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
                    className="flex flex-col items-center justify-center text-center py-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-dashed border-gray-700"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                      <Play className="w-6 h-6 text-gray-400 opacity-50" />
                    </div>
                    <p className="text-lg text-gray-300 font-medium">Coming Soon</p>
                    <p className="text-sm text-gray-400">Video demonstrations for {category} will be available shortly.</p>
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
