@echo off
title Keystone Website - Simple Server
color 0B

cd /d "%~dp0"

echo ========================================
echo   Keystone Infra - Simple Server Mode
echo ========================================
echo.

if not exist dist\client (
    echo Building website...
    call npm run build
)

echo Starting ultra-simple Windows server...
echo.
echo Your professional website will be at:
echo   http://localhost:3000
echo.
echo Press Ctrl+C to stop
echo.

set PORT=3000
set NODE_ENV=production

node simple-windows-server.js

pause