@echo off
title Rebuild and Start Website
color 0A

echo ========================================
echo   Rebuilding Website for Windows
echo ========================================
echo.

echo [1/3] Rebuilding the application...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo SUCCESS: Website rebuilt with Windows fixes
echo.

echo [2/3] Setting up environment...
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.placeholder_key_for_testing
echo Environment configured for Windows
echo.

echo [3/3] Starting your website...
echo.
echo ========================================
echo   Your Professional Website is Starting
echo ========================================
echo.
echo Open your browser and go to:
echo   http://localhost:3000
echo.
echo The website will work perfectly except:
echo - Contact form submissions show in console (not email)
echo - Add real SendGrid key later for email functionality
echo.
echo Press Ctrl+C to stop the website
echo.

node dist/index.js

pause