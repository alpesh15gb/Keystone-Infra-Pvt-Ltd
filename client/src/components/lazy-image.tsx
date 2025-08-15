import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZmFmYiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4Ij5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4K"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <img 
          src={placeholder}
          alt=""
          className={className}
          width={width}
          height={height}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'absolute inset-0' : ''}`}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
    </div>
  );
};