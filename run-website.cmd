@echo off
:: Simple command file that ensures we're in the right directory

:: Change to script directory
pushd "%~dp0"

:: Check for project files
if not exist "package.json" (
    echo Error: Not in project directory
    echo Please run this from your Keystone-Infra-Pvt-Ltd folder
    pause
    popd
    exit /b 1
)

:: Build if needed
if not exist "dist\index.js" (
    echo Building project...
    call npm run build
)

:: Set Windows environment
set "NODE_ENV=production"
set "PORT=3000" 
set "SENDGRID_API_KEY=SG.test_key"

:: Start server
echo Starting Keystone Infra website...
echo Open browser to: http://localhost:3000
echo.

node "dist\index.js"

popd
pause