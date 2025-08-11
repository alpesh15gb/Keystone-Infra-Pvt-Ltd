# Fix PowerShell Execution Policy Error

## The Error You're Seeing

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

This is a Windows security feature that blocks PowerShell scripts by default.

## Quick Solutions (Choose One)

### Solution 1: Use Command Prompt Version (Easiest)

**Double-click this file instead:**
```
start-website-cmd.bat
```

This bypasses PowerShell entirely and uses Command Prompt.

### Solution 2: Fix PowerShell (Permanent Fix)

**Double-click this file:**
```
fix-powershell.bat
```

Or do it manually:

1. **Right-click PowerShell** → **"Run as Administrator"**
2. **Run this command:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. **Type `Y`** when prompted
4. **Close PowerShell**
5. **Try start-website.bat again**

### Solution 3: Use Command Prompt Directly

1. **Press Windows Key + R**
2. **Type `cmd`** and press Enter
3. **Navigate to your project:**
   ```cmd
   cd C:\keystone-infra
   ```
4. **Start your website:**
   ```cmd
   npm start
   ```

## Why This Happens

Windows PowerShell has security policies that prevent running scripts downloaded from the internet. Since npm uses PowerShell scripts, it gets blocked.

## Recommended Approach

**For immediate use:** Use `start-website-cmd.bat` (bypasses the issue)

**For permanent fix:** Run `fix-powershell.bat` as Administrator

## Alternative Commands

If npm still doesn't work, use these direct commands:

**Build the website:**
```cmd
node "%APPDATA%\npm\node_modules\npm\bin\npm-cli.js" run build
```

**Start the website:**
```cmd
node dist/index.js
```

## Verification

After fixing, test with:
```cmd
npm --version
```

Should show version number without errors.

Your website will work perfectly once this PowerShell issue is resolved!