import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ShakaPlayerWrapper } from "./shaka-player-wrapper";

interface LocalVideoPreviewProps {
  src: string;
  title: string;
  poster?: string;
  onPlayClick: (currentTime: number) => void;
}

function LocalVideoPreview({ src, title, poster, onPlayClick }: LocalVideoPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const handleClick = () => {
    if (videoRef.current) {
      onPlayClick(videoRef.current.currentTime);
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-full bg-black/20 relative group cursor-pointer"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-opacity duration-300"
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
      />
      {/* Overlay to intercept clicks */}
      <div className="absolute inset-0 z-10 cursor-pointer bg-black/10 group-hover:bg-transparent transition-colors" />

      {/* Play Button Overlay (Always visible on mobile/tablet via opacity logic if needed, or just hover)
          User requested autoplay, so play button might be redundant if it's already playing?
          But explicit action is good. We'll keep the hover style. 
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="bg-orange-500/80 text-white rounded-full p-4 shadow-lg backdrop-blur-sm">
          <Play className="w-8 h-8" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

interface VideoShowcaseSectionProps {
  isEditMode?: boolean;
}

interface SelectedVideo {
  src: string;
  title: string;
  poster?: string;
  startTime?: number;
}

export function VideoShowcaseSection({ isEditMode = false }: VideoShowcaseSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);

  const categories = ["National Highway", "Bridges", "Water and Irrigation Projects", "Buildings"];

  const allVideos = {
    "Bridges": [
      { src: "/videos/rcc-girder-240m.mp4", title: "RCC GIRDER 240 METRES", poster: "/videos/rcc-girder-240m-thumb.jpg" },
      { src: "/videos/rcc-girder-210m.mp4", title: "RCC GIRDER 210 METRES", poster: "/videos/rcc-girder-210m-thumb.jpg" }
    ],
    "National Highway": [
      { src: "/videos/transportation.mp4", title: "Transportation", poster: "/videos/transportation-thumb.jpg" },
      { src: "/videos/highway-63.mp4", title: "NATIONAL HIGHWAY 63 CONSTRUCTION", poster: "/videos/highway-63-thumb.jpg" }
    ],
    "Water and Irrigation Projects": [
      { src: "/videos/water-irrigation.mp4", title: "Water and Irrigation Projects", poster: "/videos/water-irrigation-thumb.jpg" },
      { src: "/videos/singda-dam.mp4", title: "Singda Dam", poster: "/videos/singda-dam-thumb.jpg" },
      { src: "/videos/nambul-river.mp4", title: "NAMBUL RIVER REJUVENATION PROJECT" }
    ],
    "Buildings": [
      { src: "/videos/guest-house.mp4", title: "State Guest House", poster: "/videos/guest-house-thumb.jpg" },
      { src: "/videos/IIIT.mp4", title: "IIIT MANIPUR CAMPUS DEVELOPMENT" }
    ]
  };

  const openVideo = (video: any, startTime: number = 0) => {
    setSelectedVideo({ ...video, startTime });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="gallery" className="py-20 bg-black/80 backdrop-blur-sm">
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
                        key={video.src}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div
                          className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                          onClick={() => openVideo(video)}
                        >
                          <div className="relative overflow-hidden aspect-video">
                            <LocalVideoPreview
                              src={video.src}
                              title={video.title}
                              poster={video.poster}
                              onPlayClick={(time) => openVideo(video, time)}
                            />
                          </div>

                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-orange-400 transition-colors line-clamp-2">
                              {video.title}
                            </h3>
                            <div className="mt-auto">
                              <button
                                onClick={() => openVideo(video, 0)}
                                className="inline-flex items-center gap-2 text-orange-400 group-hover:text-orange-300 font-medium text-sm transition-colors cursor-pointer"
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

        {/* Video Modal - Rendered via Portal to avoid z-index/transform issues */}
        {selectedVideo && createPortal(
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm" onClick={closeVideo}>
            <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10" onClick={e => e.stopPropagation()}>
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-[100] text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full aspect-video bg-black">
                <ShakaPlayerWrapper
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  startTime={selectedVideo.startTime}
                  autoPlay
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
