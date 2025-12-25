@echo off
title Keystone Infra - Complete Setup
color 0A

echo ========================================
echo   Keystone Infra - Complete Setup
echo ========================================
echo.

echo Current directory: %CD%
echo.

echo [1/4] Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo SUCCESS: Dependencies installed
echo.

echo [2/4] Building the website...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo SUCCESS: Website built
echo.

echo [3/4] Setting up environment...
if not exist .env (
    copy .env.example .env >nul 2>&1
    echo Created .env file
)
set NODE_ENV=production
set PORT=3000
echo Environment configured
echo.

echo [4/4] Starting your website...
echo.
echo ========================================
echo   Your website is starting...
echo ========================================
echo.
echo Open your browser and go to:
echo   http://localhost:3000
echo.
echo The website will start in 3 seconds...
timeout /t 3 /nobreak >nul

node dist/index.js

echo.
echo Website stopped.
pause