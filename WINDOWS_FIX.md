# Windows Environment Variable Fix

## The Problem
Windows Command Prompt doesn't understand Unix-style environment variables like:
```
NODE_ENV=production node dist/index.js
```

## Quick Solution

**Use this file instead:**
```
start-simple.bat
```

This sets the environment variables properly for Windows.

## Alternative Manual Fix

**Option 1: Use Command Prompt**
```cmd
cd C:\keystone-infra
set NODE_ENV=production
set PORT=3000
node dist/index.js
```

**Option 2: Direct Node Start**
```cmd
cd C:\keystone-infra
node dist/index.js
```
(The app will use default settings)

## What the Fixed Script Does

1. **Sets Windows environment variables:**
   ```cmd
   set NODE_ENV=production
   set PORT=3000
   ```

2. **Starts the server:**
   ```cmd
   node dist/index.js
   ```

## Testing Your Website

Once started successfully, open browser to:
- **http://localhost:3000**

You should see:
- Keystone Infra homepage loads
- All images display correctly
- Navigation works
- Contact form appears

The environment variable issue is now resolved for Windows!