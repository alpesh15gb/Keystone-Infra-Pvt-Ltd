# Windows Server Deployment Guide

This guide will help you deploy your Keystone Infrastructure website on your Windows server.

## Prerequisites

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version for Windows
   - Make sure to check "Add to PATH" during installation

2. **Port Access**
   - Ensure port 3000 is available (or change in configuration)
   - Configure Windows Firewall if needed
   - For external access, configure your router/network firewall

## Deployment Steps

### Option 1: Simple Deployment (Recommended for testing)

1. **Download the project files** to your Windows server
   - Copy all files to a folder like `C:\keystone-infrastructure\`

2. **Open Command Prompt as Administrator**
   - Navigate to your project folder:
     ```cmd
     cd C:\keystone-infrastructure
     ```

3. **Install dependencies**
   ```cmd
   npm install express
   ```

4. **Start the server**
   - Double-click `start.bat` OR
   - Run in command prompt: `node server.js`

5. **Access your website**
   - Local: http://localhost:3000
   - Network: http://[YOUR-SERVER-IP]:3000

### Option 2: Production Deployment with PM2 (Recommended for production)

1. **Install PM2 Process Manager**
   - Double-click `install-pm2.bat` OR
   - Run in command prompt: `npm install -g pm2`

2. **Create logs directory**
   ```cmd
   mkdir logs
   ```

3. **Start with PM2**
   ```cmd
   pm2 start ecosystem.config.js
   ```

4. **Useful PM2 commands**
   ```cmd
   pm2 list                         # View running processes
   pm2 logs keystone-infrastructure # View logs
   pm2 restart keystone-infrastructure # Restart app
   pm2 stop keystone-infrastructure # Stop app
   pm2 monit                        # Monitor resources
   ```

5. **Setup PM2 to start on boot** (Optional)
   ```cmd
   pm2 startup
   pm2 save
   ```

## Configuration Options

### Change Port
Edit `server.js` and modify:
```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to your desired port
```

### Enable HTTPS (Optional)
For production, consider using a reverse proxy like:
- **IIS** (Internet Information Services) - Built into Windows Server
- **Nginx** for Windows
- **Apache** for Windows

### Environment Variables
Create a `.env` file for configuration:
```
PORT=3000
NODE_ENV=production
```

## Troubleshooting

### Common Issues

1. **"Node.js not found"**
   - Ensure Node.js is installed and added to PATH
   - Restart command prompt after installation

2. **Port already in use**
   - Change the port in `server.js`
   - Or stop the process using the port

3. **Permission errors**
   - Run command prompt as Administrator
   - Check folder permissions

4. **Cannot access from other computers**
   - Check Windows Firewall settings
   - Configure router port forwarding
   - Ensure server is bound to `0.0.0.0` (already configured)

### Performance Tips

1. **Enable compression** (add to server.js):
   ```javascript
   import compression from 'compression';
   app.use(compression());
   ```

2. **Set up caching headers** for static files

3. **Monitor with PM2**:
   ```cmd
   pm2 monit
   ```

## File Structure

```
keystone-infrastructure/
├── dist/public/              # Built frontend files
├── logs/                     # Application logs (PM2)
├── server.js                 # Main server file
├── ecosystem.config.js       # PM2 configuration
├── start.bat                 # Simple start script
├── install-pm2.bat          # PM2 installation script
└── package.json             # Dependencies
```

## Security Considerations

1. **Keep Node.js updated**
2. **Use HTTPS in production**
3. **Configure proper firewall rules**
4. **Regular security updates**
5. **Monitor logs for suspicious activity**

## Maintenance

1. **View logs**: `pm2 logs keystone-infrastructure`
2. **Monitor performance**: `pm2 monit`
3. **Restart if needed**: `pm2 restart keystone-infrastructure`
4. **Update application**: Replace files and restart

---

For any issues or questions about deployment, refer to this guide or check the application logs.