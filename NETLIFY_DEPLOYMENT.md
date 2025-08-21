# Keystone Infrastructure - Netlify Deployment Guide

## 🚀 Your Website is Now Ready for Netlify!

I've cleaned up all unnecessary files and prepared your Keystone Infrastructure website for professional Netlify hosting.

### ✅ Files Cleaned Up
- Removed all server files (Express.js backend)
- Deleted deployment documentation files
- Removed Replit-specific configurations
- Cleaned up attached assets screenshots

### 📁 Key Files for Netlify
- `netlify.toml` - Deployment configuration
- `netlify/functions/contact.js` - Contact form handler
- `netlify/functions/apply.js` - Job application handler
- `_redirects` - SPA routing configuration

## 🌐 Deploy to Netlify

### Option 1: Drag & Drop (Quickest)
1. Build your project: `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://netlify.com/drop)
3. Your site will be live instantly!

### Option 2: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-deploy on every push

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 🔑 Environment Variables

Set these in Netlify Dashboard → Site Settings → Environment Variables:

```
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

**Get SendGrid API Key:**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Go to Settings → API Keys
3. Create new API key with Mail Send permissions
4. Copy the key to Netlify environment variables

## 📧 Email Configuration

Update these email addresses in the Netlify functions:
- `netlify/functions/contact.js` → Change `to` and `from` email addresses
- `netlify/functions/apply.js` → Change `to` and `from` email addresses

## ✨ Your Professional Website Features

- **Fast Loading**: Optimized for performance
- **Contact Forms**: Powered by SendGrid
- **Job Applications**: Professional careers page
- **Mobile Responsive**: Works on all devices
- **SEO Optimized**: Professional search visibility
- **Secure HTTPS**: Free SSL certificate

## 🎯 Expected URL Structure

After deployment:
- Main site: `https://your-site-name.netlify.app`
- Contact form: Posts to `/.netlify/functions/contact`
- Job applications: Posts to `/.netlify/functions/apply`

Your Keystone Infrastructure website is now ready for professional hosting on Netlify!