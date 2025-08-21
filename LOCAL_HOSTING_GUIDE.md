# 🏠 Local Hosting Guide - Keystone Infrastructure Website

## 🚀 Quick Start

Your website is ready to run on your local system on port 80. Choose your operating system:

### 🐧 Linux/Mac
```bash
# Option 1: Run on port 80 (requires sudo)
sudo bash start-server.sh

# Option 2: Run on different port (no sudo needed)
PORT=3000 node server.js
```

### 🪟 Windows
```cmd
# Option 1: Run as Administrator on port 80
start-server.bat

# Option 2: Run on different port (normal user)
set PORT=3000 && node server.js
```

## 📁 What You Get

✅ **Full Website**: Complete Keystone Infrastructure website  
✅ **Working Contact Form**: Collects and processes inquiries  
✅ **Job Applications**: Career form functionality  
✅ **Professional Design**: Responsive, mobile-friendly interface  
✅ **Fast Performance**: Optimized static files served efficiently  

## 🌐 Access Your Website

After starting the server:
- **Port 80**: http://localhost (requires admin privileges)
- **Port 3000**: http://localhost:3000 (normal user)
- **Network Access**: http://your-ip-address:80 (accessible from other devices)

## 📧 Email Configuration (Optional)

To enable contact form emails:

1. **Get SendGrid API Key** (free tier available):
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create API key with "Mail Send" permissions

2. **Set Environment Variable**:
   ```bash
   # Linux/Mac
   export SENDGRID_API_KEY=your_api_key_here
   
   # Windows
   set SENDGRID_API_KEY=your_api_key_here
   ```

3. **Update Email Addresses** in `server.js`:
   - Line 31: `to: 'your-email@company.com'`
   - Line 32: `from: 'noreply@company.com'`
   - Line 72: `to: 'hr@company.com'`

## 🔧 Advanced Configuration

### Custom Port
```bash
PORT=8080 node server.js
```

### Background Service (Linux/Mac)
```bash
# Install PM2 globally
npm install -g pm2

# Start as background service
pm2 start server.js --name keystone-website

# Auto-start on system boot
pm2 startup
pm2 save
```

### Windows Service
Use `node-windows` package to create a Windows service for automatic startup.

## 📊 Server Features

- **Static File Serving**: Optimized delivery of website assets
- **API Endpoints**: `/api/contact` and `/api/apply` for forms
- **Error Handling**: Graceful error responses and logging
- **CORS Support**: Cross-origin requests handled properly
- **Graceful Shutdown**: Clean server termination

## 🔍 Troubleshooting

**Port 80 Permission Denied**:
- Use `sudo` on Linux/Mac or "Run as Administrator" on Windows
- Alternative: Use port 3000 or higher

**Build Not Found**:
- Run `npm run build` to create production files
- Ensure `dist/public` directory exists

**Dependencies Missing**:
- Run `npm install express @sendgrid/mail`
- Check Node.js version (requires v18+)

## 🎯 Production Deployment

For production hosting, consider:
- **Reverse Proxy**: Use Nginx or Apache in front of Node.js
- **SSL Certificate**: Enable HTTPS for security
- **Process Manager**: Use PM2 or systemd for reliability
- **Firewall**: Configure proper security rules

Your Keystone Infrastructure website is now ready for professional local hosting! 🏗️