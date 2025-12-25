#!/bin/bash

# Keystone Infra Website Deployment Script
# Make this file executable: chmod +x deploy.sh

set -e

echo "🚀 Starting Keystone Infra Website Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Creating .env file from template..."
    cp .env.example .env
    echo "🔧 Please edit .env file with your configuration:"
    echo "   - SENDGRID_API_KEY"
    echo "   - Update email addresses in server/email.ts"
    read -p "Press Enter when ready to continue..."
fi

# Build the application
echo "🔨 Building application..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not created"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if PM2 is installed
if command -v pm2 &> /dev/null; then
    echo "🔄 PM2 detected - using PM2 for process management"
    
    # Stop existing process if running
    pm2 stop keystone-infra 2>/dev/null || true
    
    # Start with PM2
    pm2 start ecosystem.config.js
    pm2 save
    
    echo "✅ Application started with PM2"
    echo "📊 View status: pm2 status"
    echo "📋 View logs: pm2 logs keystone-infra"
    
else
    echo "💡 PM2 not found - starting with Node.js directly"
    echo "📝 For production, consider installing PM2: npm install -g pm2"
    
    # Start with Node.js
    echo "🚀 Starting application..."
    npm start &
    
    echo "✅ Application started with Node.js"
    echo "🔍 Check process: ps aux | grep node"
fi

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "   1. Configure your web server (Nginx/Apache) to proxy to port 3000"
echo "   2. Set up SSL certificate (Let's Encrypt recommended)"
echo "   3. Test the contact form to ensure emails are working"
echo "   4. Point your domain to this server"
echo ""
echo "🌐 Application will be available at:"
echo "   - Local: http://localhost:3000"
echo "   - Domain: https://yourdomain.com (after DNS setup)"
echo ""
echo "📚 For detailed setup instructions, see DEPLOYMENT.md"