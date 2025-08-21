@echo off
echo Starting Keystone Infrastructure Server...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if package.json exists
if not exist "package.json" (
    echo Error: package.json not found
    echo Please make sure you're in the correct directory
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Start the server
echo Starting server on port 3000...
echo.
echo Server will be available at:
echo   Local:   http://localhost:3000
echo   Network: http://YOUR-SERVER-IP:3000
echo.
echo Press Ctrl+C to stop the server
echo.

node server.js