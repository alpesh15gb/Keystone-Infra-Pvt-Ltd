import { memo } from 'react';
import { motion } from 'framer-motion';

// Memoized components for better performance
export const OptimizedCard = memo(function OptimizedCard({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export const OptimizedMotionDiv = memo(function OptimizedMotionDiv({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true, margin: "-100px" },
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  [key: string]: any;
}) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Optimized image component with lazy loading
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className}`}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      {...props}
    />
  );
});

// Reduced animation wrapper for performance
export const ReducedMotionWrapper = memo(function ReducedMotionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`motion-reduce:animate-none ${className}`}>
      {children}
    </div>
  );
});