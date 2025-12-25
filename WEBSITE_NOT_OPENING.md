# Website Not Opening - Troubleshooting Guide

## Quick Diagnostics

Run the troubleshooting script to identify the issue:
```
Double-click: troubleshoot-website.bat
```

## Common Issues & Solutions

### 1. Port 3000 Already in Use

**Symptoms:** Error message about port being in use
**Solution:**
```cmd
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID 1234 /F

# Or use the troubleshoot script to do this automatically
```

### 2. Build Not Completed

**Symptoms:** Website starts but shows errors
**Solution:**
```cmd
cd C:\keystone-infra
npm run build
npm start
```

### 3. Windows Firewall Blocking

**Symptoms:** Website runs but can't access from browser
**Solution:**
1. Open **Windows Defender Firewall**
2. Click **"Allow an app or feature through Windows Defender Firewall"**
3. Click **"Change Settings"** → **"Allow another app"**
4. Browse and select **Node.js**
5. Check both **Private** and **Public** networks
6. Click **OK**

### 4. Browser Cache Issues

**Symptoms:** Website loads but looks broken
**Solution:**
1. Press **Ctrl+F5** to hard refresh
2. Or clear browser cache
3. Try different browser (Chrome, Firefox, Edge)

### 5. Dependencies Not Installed

**Symptoms:** Errors about missing modules
**Solution:**
```cmd
cd C:\keystone-infra
npm install
npm run build
npm start
```

### 6. Environment Variables Missing

**Symptoms:** Website starts but contact form doesn't work
**Solution:**
1. Check `.env` file exists
2. Add required variables:
```
NODE_ENV=production
PORT=3000
SENDGRID_API_KEY=your_actual_key
```

## Step-by-Step Debugging

### Step 1: Verify Startup
```cmd
cd C:\keystone-infra
npm start
```

**What to look for:**
- Should show: `express serving on port 5000` or similar
- No error messages
- Process doesn't immediately exit

### Step 2: Test Browser Access
1. Open browser
2. Go to: `http://localhost:3000`
3. Should show Keystone Infra website

### Step 3: Check Network Access
Find your PC's IP:
```cmd
ipconfig
```
Test from another device: `http://192.168.1.xxx:3000`

## Alternative Ports

If port 3000 doesn't work, try different port:

**Edit .env file:**
```
PORT=8080
```

**Then access:** `http://localhost:8080`

## Running as Administrator

Sometimes Windows requires admin rights:
1. Right-click **Command Prompt**
2. Select **"Run as administrator"**
3. Navigate to your project:
```cmd
cd C:\keystone-infra
npm start
```

## Antivirus Issues

Some antivirus software blocks Node.js:
1. **Temporarily disable** antivirus
2. **Start website** and test
3. **Add exception** for Node.js and your project folder
4. **Re-enable** antivirus

## Manual Startup Check

**Test if Node.js works:**
```cmd
node --version
npm --version
```

**Test if project is ready:**
```cmd
cd C:\keystone-infra
dir
# Should see: package.json, dist folder, .env file
```

**Test build:**
```cmd
npm run build
# Should complete without errors
```

## Success Indicators

**When working correctly, you should see:**

**In Command Prompt:**
```
> rest-express@1.0.0 start
> NODE_ENV=production node dist/index.js
[timestamp] [express] serving on port 3000
```

**In Browser (http://localhost:3000):**
- Keystone Infra website loads
- All images display
- Navigation works
- Contact form appears

## Still Not Working?

### Check These Files Exist:
- `C:\keystone-infra\package.json`
- `C:\keystone-infra\dist\index.js`
- `C:\keystone-infra\.env`

### Try Complete Restart:
1. **Close all** Command Prompt windows
2. **Restart your computer**
3. **Run troubleshoot-website.bat**
4. **Follow the prompts**

### Alternative Simple Test:
```cmd
cd C:\keystone-infra
node -e "console.log('Node.js works'); process.exit(0)"
npm -v
```

If basic Node.js doesn't work, reinstall Node.js from https://nodejs.org/

Your website should open successfully at `http://localhost:3000` once these issues are resolved!