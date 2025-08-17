# Keystone Infra Pvt. Ltd. - Official Website

A professional infrastructure development company website built with React and Node.js, showcasing 20+ years of experience in transportation, water management, and building construction across India.

## 🏗️ About Keystone Infra

Leading infrastructure development company specializing in:
- Transportation Infrastructure (Highways, Roads, Bridges)
- Water Management Systems (Dams, Treatment Plants)
- Building Construction (Government, Commercial, Educational)
- 600+ completed projects across 14 Indian states

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit: http://localhost:5000

### Production Build
```bash
npm run build
npm start
```

### Simple Production Server
```bash
node simple-windows-server.js
```
Access: http://localhost:9000

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express.js backend
├── shared/          # Shared schemas and types
├── dist/            # Production build
└── attached_assets/ # Project images and documents
```

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **UI Components**: Shadcn/ui, Radix UI
- **State Management**: TanStack Query
- **Build Tool**: Vite
- **Animations**: Framer Motion

## 🌟 Key Features

- Responsive design optimized for all devices
- Performance-optimized with lazy loading
- YouTube video integration with facade loading
- Interactive project carousel with authentic images
- Comprehensive company information and portfolio
- Contact form with email integration
- SEO optimized with meta tags

## 📦 Deployment Options

### 1. Vercel (Static Site - Fixed serverless issues)
- Connect GitHub repository  
- Updated `vercel.json` for static hosting
- No more serverless function crashes
- Contact form needs external service

### 2. Railway (Includes railway.json)
- Connect GitHub repo to Railway
- Uses included `railway.json` configuration
- Auto-deployment with Node.js runtime

### 3. Render (Manual Setup)
- Build: `npm run build`
- Start: `node simple-windows-server.js`
- Publish: `dist/public`

### 4. Netlify (Includes netlify.toml)
- Uses included `netlify.toml` configuration
- Static site with serverless functions

### 5. DigitalOcean/VPS
```bash
# Upload files via SSH
npm install
npm run build
node simple-windows-server.js
```

## 🔧 Environment Variables

Create `.env` file:
```
SENDGRID_API_KEY=your_sendgrid_api_key
NODE_ENV=production
HOST=0.0.0.0
PORT=9000
```

## 📞 Contact Information

**Keystone Infra Pvt. Ltd.**
- Email: info@keystoneinfra.com
- Phone: +91-XXXXXXXXXX
- Website: [Your deployed URL]

## 📄 License

© 2025 Keystone Infra Pvt. Ltd. All rights reserved.

---

**Built with ❤️ for infrastructure excellence**