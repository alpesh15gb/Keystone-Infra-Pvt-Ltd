#!/bin/bash

# Production server start script
# This script starts the server with proper configuration for external access

# Set environment variables
export NODE_ENV=production
export HOST=0.0.0.0
export PORT=${PORT:-3000}

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist/public" ]; then
    echo "Build failed - dist/public directory not found"
    exit 1
fi

# Start the production server
echo "Starting production server on ${HOST}:${PORT}..."
echo "Access from external: http://YOUR_SERVER_IP:${PORT}"
node production-server.js