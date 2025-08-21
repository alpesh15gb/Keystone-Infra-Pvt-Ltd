#!/bin/bash

echo "🏗️  Keystone Infrastructure - Local Server Setup"
echo "=============================================="

# Check if build exists
if [ ! -d "dist/public" ]; then
    echo "📦 Building production files..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Build failed. Please check for errors."
        exit 1
    fi
else
    echo "✅ Production build found"
fi

# Check if running as root for port 80
if [ "$EUID" -ne 0 ]; then
    echo ""
    echo "⚠️  Port 80 requires administrator privileges"
    echo "Please run one of these commands:"
    echo ""
    echo "Option 1 - Run as administrator:"
    echo "sudo bash start-server.sh"
    echo ""
    echo "Option 2 - Use different port (e.g., 3000):"
    echo "PORT=3000 node server.js"
    echo ""
    exit 1
fi

# Install express and sendgrid if not already installed
echo "📦 Checking dependencies..."
npm list express > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Installing express..."
    npm install express
fi

npm list @sendgrid/mail > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Installing @sendgrid/mail..."
    npm install @sendgrid/mail
fi

echo ""
echo "🚀 Starting Keystone Infrastructure website on port 80..."
echo "💻 Access your website at: http://localhost"
echo ""

# Start the server
node server.js