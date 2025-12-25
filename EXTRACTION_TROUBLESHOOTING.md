# Troubleshooting File Extraction

## The Error You're Seeing

```
ERROR: package.json not found
Please run this script from your project root directory
```

This means the setup script can't find the main project files.

## Step-by-Step Fix

### 1. Check Your File Extraction

**Go to where you extracted the files:**
- Look in `C:\keystone-infra\` or wherever you extracted
- You should see these important files:
  - `package.json`
  - `windows-setup.bat`
  - Folders: `client`, `server`, `shared`, `attached_assets`

### 2. Common Issues & Solutions

**Issue A: Files in subfolder**
- Your files might be in `C:\keystone-infra\keystone-infra\`
- **Solution**: Move all files up one level to `C:\keystone-infra\`

**Issue B: Incomplete extraction**
- ZIP didn't extract completely
- **Solution**: Delete the folder and extract again

**Issue C: Wrong location**
- Script is running from Downloads folder
- **Solution**: Copy `windows-setup.bat` to the same folder as `package.json`

### 3. Easy Fix Steps

**Option 1: Re-extract Properly**
1. Delete the current `C:\keystone-infra\` folder
2. Right-click the ZIP file
3. Choose "Extract All..."
4. Set destination as `C:\keystone-infra`
5. Make sure "Show extracted files" is checked
6. Click Extract

**Option 2: Manual Setup**
If ZIP extraction keeps failing:
1. Create folder `C:\keystone-infra\`
2. Open the ZIP file (don't extract)
3. Copy all contents to the folder
4. Make sure `package.json` is directly in `C:\keystone-infra\`

### 4. Verify Correct Structure

Your folder should look exactly like this:
```
C:\keystone-infra\
├── package.json          ← This file MUST be here
├── windows-setup.bat     ← Run this script
├── start-website.bat
├── client\
├── server\
├── shared\
├── attached_assets\
└── other files...
```

### 5. Run Setup Again

1. Navigate to `C:\keystone-infra\`
2. Double-click `windows-setup.bat`
3. It should now find `package.json` and continue

## Alternative Download Methods

### Method 1: Individual File Download
If ZIP download isn't working:
1. **In Replit**, click each file individually
2. **Copy the content** (Ctrl+A, Ctrl+C)
3. **Create new file** on Windows with same name
4. **Paste and save**

### Method 2: Use Replit Shell
1. **In Replit**, open the Shell (bottom panel)
2. **Type**: `ls -la` to see all files
3. **Type**: `tar -czf website.tar.gz *`
4. **Download** the tar.gz file and extract with 7-Zip

### Method 3: Git Clone
If you have Git installed:
```cmd
cd C:\
git clone https://replit.com/@yourusername/your-project-name keystone-infra
```

## Quick Check Commands

Open Command Prompt in your extracted folder:
```cmd
cd C:\keystone-infra
dir
```

You should see `package.json` in the list. If not, the files aren't in the right place.

## Still Having Issues?

**Check these:**
1. **Antivirus**: Might be blocking file extraction
2. **Permissions**: Extract to Desktop first, then move
3. **Disk space**: Make sure you have enough space
4. **File corruption**: Download the ZIP again

**Quick test:**
1. Look for `package.json` file manually
2. Make sure `windows-setup.bat` is in the same folder
3. Right-click `windows-setup.bat` → "Run as administrator"

Your website files should extract and run properly once they're in the correct location!