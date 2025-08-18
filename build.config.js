// Alternative build configuration for deployment environments
export default {
  build: {
    entry: './client/index.html',
    outDir: './dist/public',
    root: './client'
  }
}