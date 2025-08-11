@echo off
title Rebuild for Windows
color 0A

echo ========================================
echo   Rebuilding for Windows Compatibility
echo ========================================
echo.

echo [1/3] Rebuilding with Windows server fixes...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo SUCCESS: Built with Windows compatibility
echo.

echo [2/3] Testing simple server first...
echo Creating test server...
node simple-server-test.js &
timeout /t 3 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1
echo Test completed
echo.

echo [3/3] Starting your website...
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.test_key

echo.
echo ========================================
echo   Starting Keystone Infra Website
echo ========================================
echo.
echo Your website should open at: http://localhost:3000
echo.

node dist/index.js

pause