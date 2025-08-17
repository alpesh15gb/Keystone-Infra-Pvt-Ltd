#!/bin/bash

# Netlify deployment script for Keystone Infra
echo "Building for Netlify deployment..."

# Build the project
npm run build

echo "Build completed. Files ready for Netlify deployment."
echo "Drag and drop the 'dist/public' folder to Netlify deploy page."
echo ""
echo "Or use Netlify CLI:"
echo "npm install -g netlify-cli"
echo "netlify deploy --prod --dir=dist/public"