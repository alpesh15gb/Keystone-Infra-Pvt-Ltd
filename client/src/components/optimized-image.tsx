import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy" 
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-amber-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}