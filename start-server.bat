@echo off
echo 🏗️  Keystone Infrastructure - Local Server Setup
echo ==============================================

REM Check if build exists
if not exist "dist\public" (
    echo 📦 Building production files...
    call npm run build
    if errorlevel 1 (
        echo ❌ Build failed. Please check for errors.
        pause
        exit /b 1
    )
) else (
    echo ✅ Production build found
)

REM Check dependencies and install if needed
echo 📦 Checking dependencies...
npm list express >nul 2>&1
if errorlevel 1 (
    echo Installing express...
    call npm install express
)

npm list @sendgrid/mail >nul 2>&1
if errorlevel 1 (
    echo Installing @sendgrid/mail...
    call npm install @sendgrid/mail
)

echo.
echo 🚀 Starting Keystone Infrastructure website on port 80...
echo 💻 Access your website at: http://localhost
echo.
echo ⚠️  Note: Running on port 80 may require administrator privileges
echo If you get permission errors, run this as administrator or use:
echo PORT=3000 node server.js
echo.

REM Start the server
node server.js

pause