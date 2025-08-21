@echo off
REM Check if running as Administrator
net session >nul 2>&1
if %errorLevel% == 0 (
    echo Running with Administrator privileges - OK
    echo.
) else (
    echo ERROR: This script must be run as Administrator for port 80 access
    echo.
    echo Please:
    echo 1. Right-click this file
    echo 2. Select "Run as Administrator"
    echo 3. Click "Yes" when prompted
    echo.
    pause
    exit /b 1
)

echo Starting Keystone Infrastructure Server on port 80...
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
    echo Please make sure you're in the correct deployment directory
    pause
    exit /b 1
)

REM Check if dist/public directory exists
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