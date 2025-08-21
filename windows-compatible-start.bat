@echo off
title Keystone Website - Windows Compatible
color 0B

echo ========================================
echo   Keystone Infra Website
echo   Windows Compatible Version
echo ========================================
echo.

echo Checking system compatibility...
echo Platform: Windows
echo Node.js: 
node --version
echo.

echo Setting up Windows-friendly environment...
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.windows_test_key

echo.
echo Starting server with Windows compatibility mode...
echo.
echo Your professional website will be available at:
echo   http://localhost:3000
echo.
echo Contact form submissions will appear in this console.
echo Press Ctrl+C to stop the website.
echo.
echo Starting now...
echo ========================================

echo Current directory: %CD%
echo Looking for dist/index.js...
if exist dist\index.js (
    echo ✓ Found dist\index.js
) else (
    echo ✗ dist\index.js not found in current directory
    echo Directory contents:
    dir /b
    echo.
    echo Please make sure you're running this from your project folder
    pause
    exit /b 1
)

node "%CD%\dist\index.js"

echo.
echo Website stopped.
pause