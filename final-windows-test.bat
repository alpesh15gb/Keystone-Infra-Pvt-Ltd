@echo off
title Final Windows Test
color 0A

:: Change to script directory
cd /d "%~dp0"

echo ========================================
echo   Final Windows Compatibility Test
echo ========================================
echo.

echo [1] Rebuilding with simplest server config...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed
    pause
    exit /b 1
)
echo Build completed
echo.

echo [2] Testing different ports...
set NODE_ENV=production
set SENDGRID_API_KEY=SG.test

echo Testing port 8000...
set PORT=8000
timeout /t 2 /nobreak >nul
start /min node dist\index.js
timeout /t 3 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1

echo Testing port 5000...
set PORT=5000
timeout /t 2 /nobreak >nul
start /min node dist\index.js
timeout /t 3 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1

echo [3] Starting on port 3000...
set PORT=3000
echo.
echo If this fails, we'll use a simple HTTP module instead
echo.
echo Your website should be at: http://localhost:3000
echo.

node dist\index.js

pause