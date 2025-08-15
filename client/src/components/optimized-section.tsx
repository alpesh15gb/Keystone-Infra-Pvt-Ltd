import React, { useEffect, useRef, useState } from 'react';
import { createIntersectionObserver } from '../utils/performance';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

// Component that only renders when visible
export const OptimizedSection: React.FC<OptimizedSectionProps> = ({
  children,
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = createIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer?.unobserve(entry.target);
        }
      });
    });

    if (observer && sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [threshold]);

  return (
    <section ref={sectionRef} className={className}>
      {isVisible ? children : (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};