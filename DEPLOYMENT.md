# Deployment Guide - Keystone Infra Website

## GitHub Repository Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit - Keystone Infra website"
```

### 2. Connect to GitHub
```bash
git remote add origin https://github.com/yourusername/keystone-infra-website.git
git branch -M main
git push -u origin main
```

## Deployment Options

### Option 1: Vercel (STATIC HOSTING - RECOMMENDED)
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Import your repository
4. Build command: `npm run build`
5. Output directory: `dist/public`
6. Deploy as static site

**Pros**: Free, automatic deployments, fast CDN, no serverless function issues
**Note**: Contact form will need external service (Formspree, Netlify Forms, etc.)

### Option 2: Railway (Node.js Optimized)
1. Visit [railway.app](https://railway.app)
2. Connect GitHub repository
3. Auto-deploy with Node.js runtime
4. Pay-as-you-use pricing (~$5/month)

**Pros**: Excellent Node.js support, database options, automatic scaling

### Option 3: Render (Free Tier Available)
1. Visit [render.com](https://render.com)
2. Connect GitHub repository
3. Choose "Web Service"
4. Build: `npm run build`
5. Start: `node simple-windows-server.js`

**Pros**: Free tier, easy setup, automatic SSL

### Option 4: DigitalOcean App Platform
1. Visit [digitalocean.com](https://digitalocean.com)
2. Create new app from GitHub
3. Select Node.js environment
4. Auto-deploy on git push

**Pros**: Reliable infrastructure, predictable pricing

## Environment Variables Setup

For any deployment platform, add these environment variables:

```
NODE_ENV=production
HOST=0.0.0.0
PORT=3000
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

## Custom Domain Setup

After deployment, you can add your custom domain:
1. Purchase domain from registrar
2. Add domain in hosting platform settings
3. Update DNS records as instructed
4. SSL certificate automatically provided

## File Structure for Deployment

Your repository includes:
- ✅ **Source code** (client/, server/, shared/)
- ✅ **Built files** (dist/public/)
- ✅ **Production server** (simple-windows-server.js)
- ✅ **Package.json** with build scripts
- ✅ **Documentation** (README.md, this file)

## Build Commands

Most platforms will automatically detect:
- **Build Command**: `npm run build`
- **Start Command**: `npm start` or `node simple-windows-server.js`
- **Install Command**: `npm install`

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Contact form works (if SendGrid configured)
- [ ] Responsive design works on mobile
- [ ] All navigation links function
- [ ] Performance metrics are good

## Troubleshooting

### Build Fails - "Could not resolve entry module"
This error occurs when the build system can't find the entry point. Solutions:

**For Vercel (Static Site):**
- Updated `vercel.json` now configures static hosting
- Build command: `npm run build`
- Output directory: `dist/public`
- No serverless function crashes

**For Vercel (If you need full backend):**
- Consider Railway or Render instead
- Vercel serverless functions have limitations for Express apps

**For Railway:**
- Use the included `railway.json` configuration  
- Build and start commands auto-detected

**For Render:**
- Build command: `npm run build`
- Start command: `node simple-windows-server.js`
- Publish directory: `dist/public`

**General Build Issues:**
- Check Node.js version compatibility (use Node 18+)
- Ensure all dependencies in package.json
- Review build logs for specific errors

### White Page Issue
- Verify static files are served correctly
- Check browser console for JavaScript errors
- Ensure production server serves from correct path

### Email Form Not Working
- Add SENDGRID_API_KEY environment variable
- Verify sender email is authenticated in SendGrid
- Check server logs for email sending errors

## Support

For deployment issues, refer to:
- Platform-specific documentation
- GitHub Issues in your repository
- Community forums for each platform

Your website is production-ready and optimized for deployment!