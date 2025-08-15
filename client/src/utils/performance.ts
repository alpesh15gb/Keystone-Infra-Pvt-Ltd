import React from 'react';

// Performance optimization utilities

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Lazy load non-critical components
export const createLazyComponent = <T extends Record<string, any>>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>
) => {
  return React.lazy(importFn);
};

// Critical resource hints
export const addResourceHints = () => {
  // Preconnect to external domains
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.youtube.com',
    'https://i.ytimg.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (domain.includes('fonts.gstatic.com')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    });
  }
  return null;
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};