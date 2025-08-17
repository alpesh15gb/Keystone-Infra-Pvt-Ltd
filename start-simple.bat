@echo off
echo ============================================
echo KEYSTONE INFRA WEBSITE - PRODUCTION SERVER
echo ============================================
echo.
echo Building website for production...
call npm run build

if not exist "dist\public" (
    echo ERROR: Build failed - no dist\public folder
    echo Please check for build errors above
    pause
    exit /b 1
)

echo.
echo SUCCESS: Website built successfully!
echo.
echo Starting production server on port 80...
echo.
echo *** YOUR WEBSITE WILL BE AVAILABLE AT: ***
echo     http://YOUR_SERVER_IP
echo.
echo Press Ctrl+C to stop the server
echo.

node simple-windows-server.js