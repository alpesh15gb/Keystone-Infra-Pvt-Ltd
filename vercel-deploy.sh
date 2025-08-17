#!/bin/bash
# Pre-build the static files locally and deploy
echo "Building static files..."
npm run build
echo "Static files built successfully"
echo "Upload dist/public directory to Vercel as static files"