@echo off
title Keystone Website - Direct Start
color 0A

echo ========================================
echo   Keystone Website - Direct Start
echo ========================================
echo.

echo [1] Checking current directory...
cd
echo.

echo [2] Checking for required files...
if exist dist\index.js (
    echo SUCCESS: Built application found
) else (
    echo Building application first...
    call npm run build
    if not exist dist\index.js (
        echo ERROR: Build failed or dist\index.js not created
        pause
        exit /b 1
    )
    echo SUCCESS: Application built
)
echo.

echo [3] Setting environment...
set NODE_ENV=production
set PORT=3000
echo Environment: %NODE_ENV%
echo Port: %PORT%
echo.

echo [4] Starting website...
echo.
echo Your website will be at: http://localhost:3000
echo.
echo Starting now...
echo ========================================
echo.

node dist\index.js

echo.
echo Website stopped.
pause