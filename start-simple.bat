@echo off
title Keystone Infra Website - Simple Start
color 0B

echo Starting Keystone Infra Website...
echo.

:: Set Windows environment variables
set NODE_ENV=production
set PORT=3000

:: Check if dist folder exists
if not exist dist (
    echo Project needs to be built first.
    echo Building now...
    npm run build
    if %errorlevel% neq 0 (
        echo Build failed. Please check for errors.
        pause
        exit /b 1
    )
)

echo Website will be available at: http://localhost:3000
echo Press Ctrl+C to stop
echo.

:: Start the server directly
node dist/index.js

pause