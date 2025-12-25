@echo off
title Keystone Website - Fixed Path
color 0B

echo ========================================
echo   Keystone Infra Website
echo   Fixed Path Version
echo ========================================
echo.

:: Change to the directory where this script is located
cd /d "%~dp0"

echo Script location: %~dp0
echo Current directory: %CD%
echo.

:: Verify we're in the right place
if not exist package.json (
    echo ERROR: package.json not found
    echo This script must be in your project root folder
    echo Please copy this script to the same folder as package.json
    pause
    exit /b 1
)

echo ✓ Found package.json - we're in the right place
echo.

:: Check if built
if not exist dist\index.js (
    echo Building project first...
    npm run build
    if %errorlevel% neq 0 (
        echo Build failed
        pause
        exit /b 1
    )
)

echo ✓ Found dist\index.js
echo.

:: Set environment
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.windows_test_key

echo Environment set for Windows
echo.
echo Starting your professional website...
echo Available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop
echo ========================================
echo.

:: Use full path to avoid any directory issues
node "%CD%\dist\index.js"

echo.
echo Website stopped.
pause