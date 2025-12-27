import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface HeroSectionProps {
  isEditMode?: boolean;
}

export function HeroSection({ isEditMode = false }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current && videoRef.current.duration) {
      const seekTime = (value[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(value[0]);
    }
  };

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen overflow-hidden pt-16 md:pt-24 bg-black group">
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-24 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>

            <div className="flex-1">
              <Slider
                defaultValue={[0]}
                value={[progress]}
                max={100}
                step={0.1}
                className="cursor-pointer"
                onValueChange={handleSeek}
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
