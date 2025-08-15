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

# Start the server
echo "Starting server on ${HOST}:${PORT}..."
node server/index.js