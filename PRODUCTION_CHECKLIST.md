# Production Deployment Checklist

## Before Deployment

### 1. Email Configuration ✅
- [ ] Update email addresses in `server/email.ts`:
  - `to: 'your-actual-email@domain.com'`
  - `from: 'verified-sender@yourdomain.com'`
- [ ] Verify sender email in SendGrid dashboard
- [ ] Test SendGrid API key is working

### 2. Environment Setup ✅
- [ ] Copy `.env.example` to `.env`
- [ ] Set `SENDGRID_API_KEY` in `.env`
- [ ] Set `NODE_ENV=production`
- [ ] Set `PORT` (default: 3000)

### 3. Server Requirements ✅
- [ ] Node.js 18+ installed
- [ ] PM2 installed globally (`npm install -g pm2`)
- [ ] Nginx or Apache configured
- [ ] SSL certificate obtained
- [ ] Firewall configured (ports 80, 443, SSH)

### 4. Domain & DNS ✅
- [ ] Domain pointing to server IP
- [ ] A record configured
- [ ] WWW subdomain configured (optional)

## Deployment Process

### 1. Upload Files ✅
```bash
# Upload all project files to server
rsync -avz --exclude node_modules ./ user@server:/var/www/keystone-infra/
```

### 2. Run Deployment Script ✅
```bash
cd /var/www/keystone-infra/
chmod +x deploy.sh
./deploy.sh
```

### 3. Configure Web Server ✅
- [ ] Nginx configuration file created
- [ ] Site enabled in Nginx
- [ ] SSL certificate configured
- [ ] Nginx reloaded

## Post-Deployment Testing

### 1. Basic Functionality ✅
- [ ] Website loads at https://yourdomain.com
- [ ] All pages accessible (Home, About, Services, etc.)
- [ ] Images and assets loading correctly
- [ ] Mobile responsiveness working

### 2. Contact Form Testing ✅
- [ ] Contact form submits successfully
- [ ] Success message appears
- [ ] Email received in your inbox
- [ ] Email formatting looks professional

### 3. Performance Testing ✅
- [ ] Page load speed acceptable
- [ ] Images optimized and loading fast
- [ ] Carousel animations working smoothly
- [ ] No JavaScript errors in browser console

### 4. Security Testing ✅
- [ ] HTTPS working and SSL certificate valid
- [ ] HTTP redirects to HTTPS
- [ ] Security headers configured
- [ ] Contact form validates input properly

## Monitoring Setup

### 1. Application Monitoring ✅
- [ ] PM2 monitoring working (`pm2 monit`)
- [ ] Application auto-restart on crash
- [ ] Log rotation configured

### 2. Server Monitoring ✅
- [ ] Disk space monitoring
- [ ] Memory usage monitoring
- [ ] CPU usage monitoring
- [ ] SSL certificate expiry monitoring

## Maintenance Tasks

### Daily ✅
- [ ] Check PM2 status (`pm2 status`)
- [ ] Monitor application logs (`pm2 logs`)

### Weekly ✅
- [ ] Review contact form submissions
- [ ] Check server resource usage
- [ ] Verify backup systems working

### Monthly ✅
- [ ] Update Node.js dependencies
- [ ] Review security updates
- [ ] Test SSL certificate renewal

## Emergency Contacts

### Service Providers ✅
- **Hosting Provider**: [Your hosting company details]
- **Domain Registrar**: [Your domain registrar details]
- **SendGrid Support**: https://support.sendgrid.com

### Backup Procedures ✅
- [ ] Database backup (if applicable)
- [ ] File system backup
- [ ] Configuration backup
- [ ] SSL certificate backup

## Rollback Plan

### If Issues Occur ✅
1. **Quick Fix**: Restart application with `pm2 restart keystone-infra`
2. **Rollback**: Replace with previous working version
3. **Emergency**: Serve static maintenance page

### Emergency Commands ✅
```bash
# Stop application
pm2 stop keystone-infra

# View logs
pm2 logs keystone-infra --lines 100

# Restart Nginx
sudo systemctl restart nginx

# Check server resources
top
df -h
free -m
```

---

**Last Updated**: [Date]
**Deployed Version**: [Version number]
**Deployed By**: [Your name]