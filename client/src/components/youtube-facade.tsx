import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

export const YouTubeFacade = ({
  videoId,
  title,
  className = "w-full h-full"
}: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&autoplay=1`}
        title={title}
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div
      className={`${className} bg-gray-900 relative cursor-pointer group overflow-hidden`}
      onClick={handleLoad}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </div>
      </div>
      
      {/* YouTube logo */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-xs font-bold">
        YouTube
      </div>
    </div>
  );
};