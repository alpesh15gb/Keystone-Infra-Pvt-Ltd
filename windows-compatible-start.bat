@echo off
echo Building website...
call npm run build

if not exist "dist\public" (
    echo Build failed - dist\public directory not found
    pause
    exit /b 1
)

echo Starting production server...
echo Website will be available at: http://YOUR_SERVER_IP
node simple-windows-server.js
pause