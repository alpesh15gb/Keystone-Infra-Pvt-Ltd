# External IP Access Configuration

## The Problem
Your website works locally but doesn't open from external IPs. This is typically caused by:

1. **Server binding to localhost only** (127.0.0.1) instead of all interfaces (0.0.0.0)
2. **Firewall blocking the port**
3. **Wrong port configuration**

## Solution 1: Fix Server Binding

Your Express server needs to bind to `0.0.0.0` instead of `localhost`:

```javascript
// Instead of:
app.listen(port, 'localhost')

// Use:
app.listen(port, '0.0.0.0')
```

## Solution 2: Open Firewall Port

On Ubuntu/Debian:
```bash
sudo ufw allow 3000
# Or for custom port:
sudo ufw allow YOUR_PORT
```

On CentOS/RHEL:
```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

## Solution 3: Environment Variables

Create/update your `.env` file:
```
HOST=0.0.0.0
PORT=3000
NODE_ENV=production
```

## Solution 4: PM2 Configuration

If using PM2, update your ecosystem.config.js:
```javascript
module.exports = {
  apps: [{
    name: 'keystone-infra',
    script: 'server/index.js',
    env: {
      HOST: '0.0.0.0',
      PORT: 3000,
      NODE_ENV: 'production'
    }
  }]
}
```

## Solution 5: Nginx Proxy (Recommended)

Create `/etc/nginx/sites-available/keystone-infra`:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://0.0.0.0:3000;
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

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/keystone-infra /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Quick Test Commands

1. **Check what's listening on your port:**
```bash
netstat -tlnp | grep :3000
```

2. **Test internal connectivity:**
```bash
curl http://localhost:3000
curl http://127.0.0.1:3000
curl http://0.0.0.0:3000
```

3. **Test external connectivity:**
```bash
curl http://YOUR_SERVER_IP:3000
```

## Production-Ready Start Command

Use this in your production environment:
```bash
HOST=0.0.0.0 PORT=3000 NODE_ENV=production node server/index.js
```