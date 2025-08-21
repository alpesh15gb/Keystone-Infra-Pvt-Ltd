# Keystone Infrastructure - Windows Server Deployment

## Quick Start

1. **Extract** all files to your desired directory (e.g., `C:\keystone-infrastructure\`)
2. **Right-click** `start.bat` and select "Run as Administrator" (required for port 80)
3. **Open browser** and go to `http://localhost`

**Important**: Port 80 requires Administrator privileges on Windows.

## Files Included

- `dist/public/` - Built website files (HTML, CSS, JS, images)
- `server.js` - Production server (no dependencies required)
- `start.bat` - Simple startup script
- `ecosystem.config.js` - PM2 configuration for production
- `package-production.json` - Minimal package.json for production
- `web.config` - IIS configuration (optional)
- `backup.bat` - Backup script
- `install-pm2.bat` - PM2 installation script
- `DEPLOYMENT_GUIDE.md` - Complete deployment guide

## Server Features

✅ **Zero Dependencies** - Uses Node.js built-in modules only  
✅ **Static File Serving** - Serves all website assets  
✅ **Client-Side Routing** - Supports React Router navigation  
✅ **API Endpoints** - Handles contact forms and job applications  
✅ **Health Check** - `/api/health` endpoint for monitoring  
✅ **CORS Enabled** - Ready for external API calls  

## Production Features

- **PM2 Process Management** - Auto-restart, logging, monitoring
- **Windows Service** - Can run as Windows service
- **IIS Integration** - Optional IIS reverse proxy setup
- **Backup System** - Automated backup scripts
- **Health Monitoring** - Built-in health check endpoint

## Support

- Default Port: **80** (configurable in server.js)
- Administrator Rights: Required for port 80
- Logs: Console output or PM2 logs
- Status: Check `/api/health` endpoint
- Backup: Run `backup.bat` anytime

For detailed setup instructions, see `DEPLOYMENT_GUIDE.md`