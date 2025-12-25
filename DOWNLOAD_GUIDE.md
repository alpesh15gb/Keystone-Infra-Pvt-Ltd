# How to Download Your Website Files to Windows

## Method 1: Download as ZIP (Easiest)

### Step 1: Download from Replit
1. **In your Replit project**, look for the **three dots menu** (⋯) in the file explorer
2. Click **"Download as ZIP"**
3. Save the ZIP file to your Downloads folder (e.g., `keystone-infra.zip`)

### Step 2: Extract on Windows
1. **Right-click** the downloaded ZIP file
2. Select **"Extract All..."**
3. Choose destination folder: `C:\keystone-infra\`
4. Click **"Extract"**

## Method 2: Git Clone (If you have Git)

### If Git is installed:
```cmd
# Open Command Prompt
cd C:\
git clone [your-replit-git-url] keystone-infra
cd keystone-infra
```

## Method 3: Manual File Copy

### Download Individual Files:
1. **In Replit**, click on each file in the file explorer
2. **Copy the content** (Ctrl+A, then Ctrl+C)
3. **Create the same file** on Windows in Notepad
4. **Paste and save** with the exact same filename

**Important Files to Copy:**
- `package.json`
- `package-lock.json`
- `.env.example`
- `windows-setup.bat`
- `start-website.bat`
- All folders: `client/`, `server/`, `shared/`, `attached_assets/`

## After Extraction

### Your folder structure should look like:
```
C:\keystone-infra\
├── client\
├── server\
├── shared\
├── attached_assets\
├── package.json
├── windows-setup.bat
├── start-website.bat
└── .env.example
```

### Next Steps:
1. **Install Node.js** from https://nodejs.org/
2. **Double-click** `windows-setup.bat`
3. **Follow the setup** prompts
4. **Start your website** with `start-website.bat`

## Troubleshooting

### ZIP File Won't Extract:
- Try using **7-Zip** (free download)
- Or use Windows built-in "Extract All"

### Missing Files:
- Make sure you downloaded the complete ZIP
- Check that all folders were extracted
- Verify `package.json` exists in the main folder

### Permission Issues:
- Extract to a folder you have write access to
- Avoid extracting to Program Files
- Try extracting to Desktop first, then move

Your website files will be ready to run on Windows!