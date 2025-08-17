#!/bin/bash

# Vercel build script for Keystone Infra website
echo "Starting build process..."

# Install dependencies
npm install

# Build the project
npm run build

echo "Build completed successfully!"
echo "Static files available in dist/public/"

# List generated files for verification
ls -la dist/public/