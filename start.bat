@echo off
echo Starting Keystone Infrastructure Server...
echo.
echo IMPORTANT: This script requires Administrator privileges to use port 80
echo If you get permission errors, right-click this file and select "Run as Administrator"
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if server.js exists
if not exist "server.js" (
    echo Error: server.js not found
    echo Please make sure you're in the correct directory
    pause
    exit /b 1
)

REM Check if dist/public directory exists (more important than node_modules for this server)
if not exist "dist\public" (
    echo Error: dist/public directory not found
    echo Please make sure the application has been built and deployed correctly
    pause
    exit /b 1
)

REM Start the server
echo Starting server on port 80...
echo.
echo Server will be available at:
echo   Local:   http://localhost
echo   Network: http://YOUR-SERVER-IP
echo.
echo Press Ctrl+C to stop the server
echo.

node server.js