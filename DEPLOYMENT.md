# Keystone Infra Website - Deployment Guide

## Prerequisites

1. **Node.js 18+** installed on your server
2. **PM2** for process management (optional but recommended)
3. **SendGrid API Key** for contact form emails
4. **Domain** pointing to your server
5. **SSL Certificate** (Let's Encrypt recommended)

## Quick Deployment Steps

### 1. Upload Files to Your Server

Upload all project files to your server directory (e.g., `/var/www/keystone-infra/`)

### 2. Install Dependencies

```bash
npm install --production
```

### 3. Configure Environment Variables

```bash
# Copy and edit environment file
cp .env.example .env

# Edit with your values
nano .env
```

Required environment variables:
- `SENDGRID_API_KEY`: Your SendGrid API key
- `NODE_ENV=production`
- `PORT=3000` (or your preferred port)

### 4. Update Email Configuration

Edit `server/email.ts` and update:
```javascript
to: 'your-email@example.com',        // Your email address
from: 'verified-sender@yourdomain.com', // Your verified SendGrid sender
```

### 5. Build the Application

```bash
npm run build
```

### 6. Start the Application

#### Option A: Direct Node.js
```bash
npm start
```

#### Option B: PM2 (Recommended)
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save
pm2 startup
```

## Server Configuration

### Nginx Configuration (Recommended)

Create `/etc/nginx/sites-available/keystone-infra`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL Configuration
    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Enable Nginx Site
```bash
sudo ln -s /etc/nginx/sites-available/keystone-infra /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal test
sudo certbot renew --dry-run
```

## Firewall Configuration

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Allow SSH (if not already allowed)
sudo ufw allow OpenSSH

# Enable firewall
sudo ufw enable
```

## Monitoring & Maintenance

### PM2 Commands
```bash
# View status
pm2 status

# View logs
pm2 logs keystone-infra

# Restart application
pm2 restart keystone-infra

# Stop application
pm2 stop keystone-infra

# Monitor with web interface
pm2 monit
```

### Application Health Check
Your application will be available at:
- **Development**: http://localhost:3000
- **Production**: https://yourdomain.com

### Contact Form Testing
1. Visit your website
2. Fill out the contact form
3. Check that you receive an email
4. Check PM2 logs for any errors: `pm2 logs keystone-infra`

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   sudo lsof -i :3000
   sudo kill -9 <PID>
   ```

2. **Email not sending**
   - Verify SendGrid API key in `.env`
   - Check email addresses in `server/email.ts`
   - Verify sender email is verified in SendGrid

3. **Build fails**
   ```bash
   # Clear cache and rebuild
   rm -rf node_modules dist
   npm install
   npm run build
   ```

4. **Permission issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER /var/www/keystone-infra/
   chmod -R 755 /var/www/keystone-infra/
   ```

## File Structure
```
keystone-infra/
├── dist/                 # Built application (generated)
├── client/              # React frontend source
├── server/              # Express backend source
├── shared/              # Shared types and schemas
├── attached_assets/     # Images and static assets
├── .env                 # Environment variables
├── ecosystem.config.js  # PM2 configuration
└── package.json         # Dependencies and scripts
```

## Support

For deployment issues:
1. Check PM2 logs: `pm2 logs keystone-infra`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify all environment variables are set correctly
4. Test SendGrid integration separately if emails aren't working