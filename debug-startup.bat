@echo off
title Debug Website Startup
color 0C

echo ========================================
echo   Detailed Website Startup Debug
echo ========================================
echo.

echo Current directory: %CD%
echo.

echo [1] Checking Node.js:
node --version
npm --version
echo.

echo [2] Checking project files:
if exist package.json (echo ✓ package.json found) else (echo ✗ package.json missing)
if exist dist\index.js (echo ✓ Built application found) else (echo ✗ Built application missing)
if exist .env (echo ✓ Environment file found) else (echo ✗ Environment file missing)
echo.

echo [3] Checking what's using port 3000:
netstat -ano | findstr :3000
echo.

echo [4] Setting environment and testing startup:
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.test_key_for_debugging

echo Environment variables set:
echo NODE_ENV=%NODE_ENV%
echo PORT=%PORT%
echo SENDGRID_API_KEY=%SENDGRID_API_KEY%
echo.

echo [5] Attempting to start server with detailed output:
echo If this hangs or shows errors, press Ctrl+C
echo.
echo ========================================
echo   SERVER STARTUP ATTEMPT
echo ========================================

node dist\index.js

echo.
echo Server stopped or failed to start.
echo.
echo [6] Alternative port test:
echo Trying port 8080 instead...
set PORT=8080
node dist\index.js

pause