# Port 80 Deployment Setup - Keystone Infra Website

## ✅ CONFIGURED FOR PORT 80

Your website is now configured to run on port 80 (standard HTTP port).

**Benefits of Port 80:**
- No need to specify port in URL
- Access via: `http://YOUR_SERVER_IP` (not http://YOUR_SERVER_IP:3000)
- Standard web port that all browsers expect

## IMPORTANT REQUIREMENTS

### 1. Root/Administrator Access Required
Port 80 requires elevated privileges on most systems:

**Linux/Ubuntu:**
```bash
sudo node simple-windows-server.js
# OR
sudo ./production-start.sh
```

**Windows (Run as Administrator):**
- Right-click `start-simple.bat` → "Run as administrator"
- Or open Command Prompt as Administrator

### 2. No Other Web Server Running
Ensure no other web server is using port 80:

**Check what's using port 80:**
```bash
# Linux
sudo netstat -tlnp | grep :80
sudo lsof -i :80

# Windows
netstat -ano | findstr :80
```

**Stop conflicting services:**
```bash
# Stop Apache
sudo systemctl stop apache2

# Stop Nginx  
sudo systemctl stop nginx

# Stop IIS (Windows)
net stop w3svc
```

## DEPLOYMENT COMMANDS

### Production Deployment:
```bash
# Linux (requires sudo)
sudo HOST=0.0.0.0 PORT=80 node simple-windows-server.js

# Windows (run as administrator)
start-simple.bat
```

### Alternative Ports (if 80 is blocked):
```bash
# Port 8080 (common alternative)
PORT=8080 node simple-windows-server.js

# Port 3000 (development standard)
PORT=3000 node simple-windows-server.js
```

## CLOUD HOSTING CONSIDERATIONS

### AWS/DigitalOcean/VPS:
- Port 80 usually available by default
- May need to configure security groups/firewall
- No sudo required on most cloud platforms

### Shared Hosting:
- Port 80 often restricted
- Use alternative ports (8080, 3000) 
- Check with hosting provider

### Docker Deployment:
```bash
docker run -p 80:80 keystone-infra-website
```

## FIREWALL CONFIGURATION

### Allow Port 80:
```bash
# Ubuntu/Debian
sudo ufw allow 80

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --reload

# Windows Firewall
netsh advfirewall firewall add rule name="HTTP Port 80" dir=in action=allow protocol=TCP localport=80
```

## STATUS: ✅ READY FOR PORT 80
All configuration files updated:
- ✅ `simple-windows-server.js` - Default port 80
- ✅ `production-start.sh` - Port 80 environment
- ✅ `.env.example` - Port 80 configuration
- ✅ Batch files updated for no-port URLs
- ✅ Deployment configs updated

Your website will be accessible at: **http://YOUR_SERVER_IP** (no port number needed)