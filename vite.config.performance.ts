import { defineConfig } from 'vite';
import { resolve } from 'path';

// Performance optimization for Vite build
export const performanceConfig = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? 
            chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') : 
            'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `${extType}/[name]-[hash][extname]`;
        }
      }
    },
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['web-vitals']
  }
};