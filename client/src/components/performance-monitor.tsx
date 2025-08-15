import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Add resource hints for performance
    const addResourceHints = () => {
      const domains = [
        { href: 'https://fonts.googleapis.com', crossorigin: false },
        { href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://www.youtube.com', crossorigin: false },
        { href: 'https://i.ytimg.com', crossorigin: false }
      ];
      
      domains.forEach(({ href, crossorigin }) => {
        // Check if link already exists
        const existing = document.querySelector(`link[href="${href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = href;
          if (crossorigin) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        }
      });
    };

    addResourceHints();

    // Optional: Add performance timing if needed
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData && process.env.NODE_ENV === 'development') {
          console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        }
      });
    }
  }, []);

  return null;
};