import { useState, useEffect, useRef } from "react";
import Player from "@vimeo/player";
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
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      // Ensure initial state matches
      player.setVolume(0); // Muted by default for autoplay
      player.play().catch((error) => console.error("Error playing:", error));

      player.on("play", () => setIsPlaying(true));
      player.on("pause", () => setIsPlaying(false));
      player.on("timeupdate", (data) => {
        setProgress(data.seconds);
      });
      player.on("loaded", () => {
        player.getDuration().then((d) => setDuration(d));
      });
      player.getDuration().then((d) => setDuration(d));

      // Clean up
      return () => {
        player.destroy();
      };
    }
  }, []);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      const newMutedState = !isMuted;
      playerRef.current.setVolume(newMutedState ? 0 : 1);
      setIsMuted(newMutedState);
    }
  };

  const handleSeek = (value: number[]) => {
    if (playerRef.current) {
      const seekTime = value[0];
      playerRef.current.setCurrentTime(seekTime);
      setProgress(seekTime);
    }
  };

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen overflow-hidden pt-16 md:pt-24 bg-black group">
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-24 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1149729750?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
            className="absolute inset-0 w-full h-full bg-black"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Company profile video"
          />
        </div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        {/* Video Controls - Only show Play/Pause and Mute */}
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
                value={[progress]}
                max={duration || 100}
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
