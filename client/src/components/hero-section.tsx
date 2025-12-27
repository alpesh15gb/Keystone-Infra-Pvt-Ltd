import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface HeroSectionProps {
  isEditMode?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function HeroSection({ isEditMode = false }: HeroSectionProps) {
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('hero-player', {
        videoId: 'RBFc8xNinD8',
        playerVars: {
          autoplay: 1,
          controls: 0, // Disable native controls to remove clutter
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          playlist: 'RBFc8xNinD8'
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            setDuration(event.target.getDuration());
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // Update play state based on actual player state
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startProgressTracking(event.target);
            } else {
              setIsPlaying(false);
              stopProgressTracking();
            }
          }
        }
      });
    };

    return () => {
      stopProgressTracking();
    };
  }, []);

  const startProgressTracking = (playerInstance: any) => {
    stopProgressTracking();
    progressInterval.current = setInterval(() => {
      if (playerInstance && playerInstance.getCurrentTime) {
        const currentTime = playerInstance.getCurrentTime();
        const totalDuration = playerInstance.getDuration();
        if (totalDuration) {
          setProgress((currentTime / totalDuration) * 100);
        }
      }
    }, 1000);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (value: number[]) => {
    if (player) {
      const seekTime = (value[0] / 100) * duration;
      player.seekTo(seekTime, true);
      setProgress(value[0]);
    }
  };

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen overflow-hidden pt-16 md:pt-24 bg-black group">
      <div className="absolute left-0 right-0 bottom-0 top-16 md:top-24 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div id="hero-player" className="absolute inset-0 w-full h-full" />
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
