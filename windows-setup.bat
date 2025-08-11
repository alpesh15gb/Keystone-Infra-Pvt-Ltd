@echo off
title Keystone Infra Website - Windows Setup
color 0A

echo.
echo ========================================
echo  Keystone Infra Website - Windows Setup
echo ========================================
echo.

:: Check if Node.js is installed
echo [1/6] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please download and install Node.js from https://nodejs.org/
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo SUCCESS: Node.js is installed
node --version
echo.

:: Check if we're in the right directory
echo [2/6] Checking project files...
if not exist package.json (
    echo ERROR: package.json not found
    echo.
    echo This usually means one of these issues:
    echo 1. Files weren't extracted properly
    echo 2. Script is in wrong folder
    echo 3. ZIP download was incomplete
    echo.
    echo SOLUTIONS:
    echo 1. Make sure you extracted ALL files from the ZIP
    echo 2. Look for package.json file in your extracted folder
    echo 3. Run this script from the same folder as package.json
    echo 4. Try downloading the ZIP again from Replit
    echo.
    echo Current folder contents:
    dir /b
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo SUCCESS: Project files found
echo.

:: Install dependencies
echo [3/6] Installing dependencies...
echo This may take a few minutes...
npm install --silent
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo SUCCESS: Dependencies installed
echo.

:: Create .env file if it doesn't exist
echo [4/6] Setting up environment variables...
if not exist .env (
    copy .env.example .env >nul
    echo SUCCESS: Created .env file from template
    echo.
    echo IMPORTANT: Please edit .env file with your settings:
    echo - Add your SENDGRID_API_KEY
    echo - Update email addresses in server\email.ts
    echo.
    echo Would you like to edit .env file now? (Y/N)
    set /p edit_env=
    if /i "%edit_env%"=="Y" (
        notepad .env
    )
) else (
    echo SUCCESS: .env file already exists
)
echo.

:: Build the application
echo [5/6] Building application...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo SUCCESS: Application built successfully
echo.

:: Create start script if it doesn't exist
if not exist start-website.bat (
    echo @echo off > start-website.bat
    echo title Keystone Infra Website >> start-website.bat
    echo echo Starting Keystone Infra Website... >> start-website.bat
    echo echo Website will be available at: http://localhost:3000 >> start-website.bat
    echo echo Press Ctrl+C to stop the website >> start-website.bat
    echo echo. >> start-website.bat
    echo npm start >> start-website.bat
    echo pause >> start-website.bat
)

:: Final setup information
echo [6/6] Setup Complete!
echo.
echo ==========================================
echo  Your Keystone Infra Website is Ready!
echo ==========================================
echo.
echo Next Steps:
echo 1. Update your email settings in server\email.ts
echo 2. Add your SENDGRID_API_KEY to .env file
echo 3. Start your website by running: start-website.bat
echo.
echo Your website will be available at:
echo   http://localhost:3000
echo.
echo For network access, use your PC's IP address:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do echo   http://%%b:3000
)
echo.
echo Configuration Files:
echo - Environment: .env
echo - Email settings: server\email.ts
echo.
echo Documentation:
echo - Windows Guide: WINDOWS_SETUP.md
echo - General Deployment: DEPLOYMENT.md
echo.
echo Would you like to start the website now? (Y/N)
set /p start_now=
if /i "%start_now%"=="Y" (
    echo.
    echo Starting website...
    start-website.bat
) else (
    echo.
    echo Setup complete! Run 'start-website.bat' when ready.
)

echo.
echo Press any key to exit...
pause >nul