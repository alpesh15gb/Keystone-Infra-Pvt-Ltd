# Hosting on Hostinger - Complete Guide

## Hostinger Plan Requirements

**Recommended Plans:**
- **VPS Hosting** (Best option) - Full control, Node.js support
- **Business Hosting** - Shared hosting with Node.js apps
- **Cloud Hosting** - Scalable option

**Minimum Requirements:**
- Node.js 18+ support
- SSH access
- Custom domain support
- SSL certificate included

## Step-by-Step Hostinger Deployment

### 1. Prepare Your Hostinger Account

1. **Purchase hosting plan** with Node.js support
2. **Set up your domain** in Hostinger panel
3. **Enable SSH access** in hosting panel
4. **Note your SSH credentials** from Hostinger dashboard

### 2. Connect to Your Hostinger Server

```bash
# SSH into your Hostinger server
ssh username@your-server-ip

# Or use Hostinger's built-in terminal in their panel
```

### 3. Upload Your Website Files

**Option A: Using Hostinger File Manager**
1. Zip your entire project folder
2. Upload via Hostinger File Manager
3. Extract in your domain's public_html folder

**Option B: Using Git (Recommended)**
```bash
# Clone your project
cd public_html
git clone your-repository-url keystone-infra
cd keystone-infra
```

**Option C: Using SCP/SFTP**
```bash
# Upload from your computer
scp -r ./ username@your-server:/home/username/public_html/
```

### 4. Set Up Node.js Application

**In Hostinger Panel:**
1. Go to **Advanced → Node.js**
2. **Create New Application**
3. Set **Application Root**: `/public_html/keystone-infra`
4. Set **Application URL**: `yourdomain.com`
5. Set **Application Startup File**: `dist/index.js`
6. **Node.js Version**: 18.x or higher

### 5. Configure Environment Variables

**In Hostinger Node.js Panel:**
1. Go to your application settings
2. Add **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=3000
   SENDGRID_API_KEY=your_sendgrid_key_here
   ```

### 6. Install Dependencies and Build

**Via SSH terminal:**
```bash
cd /home/username/public_html/keystone-infra

# Install dependencies
npm install --production

# Build the application
npm run build
```

### 7. Update Email Configuration

Edit `server/email.ts` with your details:
```javascript
to: 'your-email@yourdomain.com',        // Your actual email
from: 'noreply@yourdomain.com',         // Your domain email
```

### 8. Start Your Application

**In Hostinger Node.js Panel:**
1. Click **Start Application**
2. Monitor the **Application Status**
3. Check **Application Logs** for any errors

## Hostinger-Specific Configuration

### Domain Setup
1. **Point domain to Hostinger** nameservers
2. **SSL Certificate** - Auto-enabled by Hostinger
3. **DNS Management** - Configure in Hostinger panel

### Email Setup for SendGrid
1. **Verify your domain** in SendGrid
2. **Add DNS records** in Hostinger DNS panel:
   - CNAME: `em1234.yourdomain.com` → `u1234.wl.sendgrid.net`
   - TXT: `yourdomain.com` → `v=spf1 include:sendgrid.net ~all`

### File Structure in Hostinger
```
public_html/
├── keystone-infra/          # Your application
│   ├── dist/               # Built application
│   ├── client/             # React source
│   ├── server/             # Express source
│   ├── package.json
│   └── .env
└── (other domains/files)
```

## Hostinger Management Commands

### Using Hostinger Terminal
```bash
# Navigate to your app
cd public_html/keystone-infra

# View application status
ps aux | grep node

# Check logs
tail -f logs/app.log

# Restart application (via Hostinger panel)
# Go to Node.js section → Restart Application
```

### Updating Your Website
```bash
# Pull latest changes
git pull origin main

# Rebuild
npm run build

# Restart via Hostinger panel
```

## Testing Your Deployment

### 1. Website Access
- **Primary URL**: `https://yourdomain.com`
- **Test all pages**: Home, About, Services, Contact
- **Check mobile**: Responsive design working

### 2. Contact Form Testing
1. Fill out contact form
2. Submit message
3. Check your email inbox
4. Verify professional email formatting

### 3. Performance Check
- **Page speed**: Test with Google PageSpeed Insights
- **SSL**: Verify green lock icon in browser
- **Images**: All project images loading correctly

## Hostinger-Specific Features

### Automatic Backups
- **Daily backups** included in most plans
- **Restore from backup** via Hostinger panel
- **Download backup** for local storage

### Security Features
- **Cloudflare protection** included
- **DDoS protection** automatic
- **Web Application Firewall** enabled

### Performance Optimization
- **LiteSpeed Cache** available
- **CDN integration** with Cloudflare
- **SSD storage** for faster loading

## Troubleshooting Hostinger Issues

### Common Problems

**1. Application Won't Start**
```bash
# Check Node.js version in Hostinger panel
# Verify startup file path: dist/index.js
# Check environment variables are set
```

**2. Domain Not Working**
- Verify nameservers point to Hostinger
- Check DNS propagation (can take 24-48 hours)
- Ensure domain is added in Hostinger panel

**3. Email Not Sending**
- Verify SendGrid API key in environment variables
- Check SendGrid sender verification
- Add SPF/DKIM records in Hostinger DNS

**4. SSL Issues**
- SSL is automatic on Hostinger
- Force HTTPS redirect in Hostinger panel
- Check domain verification

### Getting Help
- **Hostinger Live Chat**: 24/7 support
- **Knowledge Base**: help.hostinger.com
- **Community Forum**: Hostinger community
- **Ticket System**: Via Hostinger panel

## Cost Estimate

**Hostinger VPS (Recommended):**
- **VPS 1**: $3.99/month - Perfect for your website
- **Includes**: 1 vCPU, 4GB RAM, 50GB SSD
- **Features**: Full root access, SSH, free SSL

**Hostinger Business:**
- **Business Plan**: $2.99/month
- **Includes**: Node.js apps, free SSL, daily backups
- **Limitation**: Shared hosting environment

## Migration Checklist

- [ ] Hostinger account set up
- [ ] Domain configured
- [ ] Files uploaded
- [ ] Node.js application created
- [ ] Environment variables set
- [ ] Dependencies installed
- [ ] Application built and started
- [ ] Email configuration updated
- [ ] DNS records for SendGrid added
- [ ] SSL certificate verified
- [ ] Contact form tested
- [ ] Website fully functional

Your Keystone Infra website will be live and professional on Hostinger!