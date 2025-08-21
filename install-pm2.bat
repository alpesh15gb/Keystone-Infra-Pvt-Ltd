@echo off
echo Installing PM2 Process Manager...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Install PM2 globally
echo Installing PM2 globally...
npm install -g pm2

if %errorlevel% neq 0 (
    echo Error: Failed to install PM2
    echo You may need to run this as Administrator
    pause
    exit /b 1
)

echo.
echo PM2 installed successfully!
echo.
echo You can now use these commands:
echo   pm2 start ecosystem.config.js    - Start the application
echo   pm2 stop keystone-infrastructure - Stop the application
echo   pm2 restart keystone-infrastructure - Restart the application
echo   pm2 logs keystone-infrastructure - View logs
echo   pm2 monit                        - Monitor all processes
echo   pm2 list                         - List all processes
echo.
pause