#!/bin/bash

# Hostinger Quick Setup Script for Keystone Infra Website
# Run this script on your Hostinger server after uploading files

echo "🏗️  Hostinger Deployment - Keystone Infra Website"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your project root directory."
    exit 1
fi

# Check Node.js version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node -v 2>/dev/null || echo "not found")
if [ "$NODE_VERSION" = "not found" ]; then
    echo "❌ Node.js not found. Please ensure Node.js is installed via Hostinger panel."
    exit 1
fi
echo "✅ Node.js $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing production dependencies..."
npm install --production --silent

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚙️  Setting up environment variables..."
    cp .env.example .env
    echo ""
    echo "🔧 IMPORTANT: Please update .env file with your settings:"
    echo "   1. Add your SENDGRID_API_KEY"
    echo "   2. Set NODE_ENV=production"
    echo "   3. Update email addresses in server/email.ts"
    echo ""
    echo "📝 Edit .env file now? (y/n)"
    read -r edit_env
    if [ "$edit_env" = "y" ] || [ "$edit_env" = "Y" ]; then
        nano .env
    fi
fi

# Build the application
echo "🔨 Building application for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi

echo "✅ Build completed successfully!"

# Create startup info
echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "📋 Next steps in Hostinger Panel:"
echo "   1. Go to Advanced → Node.js"
echo "   2. Create New Application:"
echo "      - Application Root: $(pwd)"
echo "      - Startup File: dist/index.js"
echo "      - Node Version: 18.x+"
echo "   3. Add Environment Variables:"
echo "      - NODE_ENV=production"
echo "      - PORT=3000"
echo "      - SENDGRID_API_KEY=your_key"
echo "   4. Start Application"
echo ""
echo "📧 Email Configuration:"
echo "   - Update server/email.ts with your email addresses"
echo "   - Verify sender email in SendGrid"
echo "   - Add DNS records for SendGrid (if needed)"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://yourdomain.com"
echo ""
echo "📚 For detailed instructions, see HOSTINGER_DEPLOYMENT.md"

# Check if git is available for future updates
if command -v git &> /dev/null; then
    echo ""
    echo "💡 Future updates:"
    echo "   git pull origin main && npm run build"
    echo "   Then restart application in Hostinger panel"
fi

echo ""
echo "✅ Ready for Hostinger deployment!"