# Running Keystone Infra Website on Windows

## Prerequisites

### 1. Install Node.js
1. Download Node.js from https://nodejs.org/
2. Choose **LTS version** (18.x or higher)
3. Run installer and follow default options
4. Verify installation:
   ```cmd
   node --version
   npm --version
   ```

### 2. Install Git (Optional)
1. Download from https://git-scm.com/download/win
2. Install with default settings
3. This helps with future updates

## Quick Setup

### 1. Download Your Website Files
- Extract all project files to a folder like `C:\keystone-infra\`
- Make sure you have all the files including `package.json`

### 2. Run the Windows Setup Script
```cmd
cd C:\keystone-infra
windows-setup.bat
```

Or follow manual steps below:

### 3. Manual Setup Steps

**Open Command Prompt as Administrator:**
```cmd
# Navigate to your project folder
cd C:\keystone-infra

# Install dependencies
npm install

# Create environment file
copy .env.example .env

# Build the application
npm run build

# Start the website
npm start
```

## Configuration

### 1. Environment Variables (.env file)
Edit `.env` file with Notepad:
```
NODE_ENV=production
PORT=3000
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

### 2. Email Settings
Edit `server\email.ts` with your email addresses:
- Line 25: Replace with your email address
- Line 26: Replace with your SendGrid verified sender

## Starting Your Website

### Option 1: Using Batch File
```cmd
start-website.bat
```

### Option 2: Manual Start
```cmd
cd C:\keystone-infra
npm start
```

Your website will be available at: **http://localhost:3000**

## Testing

### 1. Website Testing
- Open browser and go to `http://localhost:3000`
- Check all pages load correctly
- Test the contact form
- Verify images and carousel work

### 2. Contact Form Testing
1. Fill out the contact form
2. Submit the message
3. Check your email for the notification
4. Verify the email looks professional

## Accessing from Other Devices

### On Your Local Network
1. Find your Windows PC's IP address:
   ```cmd
   ipconfig
   ```
2. Look for "IPv4 Address" (example: 192.168.1.100)
3. Access from other devices: `http://192.168.1.100:3000`

### Configure Windows Firewall
1. Open Windows Defender Firewall
2. Click "Allow an app or feature through Windows Defender Firewall"
3. Click "Change Settings" → "Allow another app"
4. Browse and select Node.js
5. Check both Private and Public networks

## Making It Accessible from Internet

### Option 1: Port Forwarding (Router Setup)
1. Access your router admin panel (usually 192.168.1.1)
2. Find "Port Forwarding" or "Virtual Server"
3. Forward external port 80 → internal IP:3000
4. Your website will be accessible via your public IP

### Option 2: Dynamic DNS Service
1. Sign up for free service like No-IP or DuckDNS
2. Configure your router to update the service
3. Access via your chosen domain name

### Option 3: Tunneling Service (Quick Test)
```cmd
# Install ngrok for quick testing
npm install -g ngrok

# Start your website first
npm start

# In another command prompt
ngrok http 3000
```

## Windows Service (Advanced)

### Install as Windows Service
```cmd
# Install PM2 globally
npm install -g pm2
npm install -g pm2-windows-service

# Install PM2 as Windows service
pm2-service-install

# Start your website with PM2
pm2 start ecosystem.config.js
pm2 save
```

Benefits:
- Starts automatically when Windows boots
- Restarts if it crashes
- Runs in background

## Troubleshooting

### Port Already in Use
```cmd
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID 1234 /F
```

### Node.js Not Found
- Restart Command Prompt after installing Node.js
- Check if Node.js was added to PATH environment variable

### Website Not Loading
1. Check if the build was successful (dist folder exists)
2. Verify all dependencies installed without errors
3. Check the console for error messages

### Email Not Working
1. Verify SENDGRID_API_KEY in .env file
2. Check email addresses in server\email.ts
3. Ensure SendGrid sender email is verified

## Performance Tips

### For Better Performance:
1. **Use SSD storage** for faster file access
2. **Close unnecessary programs** to free up memory
3. **Use wired internet** connection if possible
4. **Keep Windows updated** for security

### For Development:
```cmd
# Development mode with hot reload
npm run dev
```

## File Locations

```
C:\keystone-infra\
├── dist\                 # Built application
├── client\              # React frontend
├── server\              # Express backend
├── attached_assets\     # Images and files
├── .env                 # Your configuration
├── package.json         # Dependencies
└── windows-setup.bat    # Setup script
```

## Updating Your Website

When you make changes:
```cmd
cd C:\keystone-infra
npm run build
# Restart the application
```

Your professional Keystone Infra website will be running perfectly on Windows!