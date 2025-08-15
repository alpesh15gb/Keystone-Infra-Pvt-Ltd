# SSL Certificate Setup Guide

## Option 1: Replit Deployment (Easiest)

1. Click "Deploy" in your Replit project
2. Choose deployment type (Autoscale/Reserved VM)
3. Add custom domain in Settings → "Link a domain"
4. SSL certificate is provided automatically
5. Your site will be accessible via HTTPS

## Option 2: Manual Server Setup

### Using Let's Encrypt (Free SSL)

1. **Install Certbot**
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

2. **Get SSL Certificate**
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. **Update Server Configuration**
Add to your server setup:
```bash
# Install nginx
sudo apt install nginx

# Configure nginx for SSL
sudo nano /etc/nginx/sites-available/keystone-infra
```

4. **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
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
}
```

5. **Auto-renewal Setup**
```bash
sudo crontab -e
# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet
```

## Option 3: Hostinger Deployment

If using Hostinger hosting:

1. **Upload project files** to public_html
2. **SSL is included** with most Hostinger plans
3. **Enable SSL** in hPanel → SSL/TLS
4. **Force HTTPS** in hPanel settings

## Recommendation

**Use Replit Deployment** - it's the simplest option with automatic SSL handling, scaling, and maintenance-free setup.