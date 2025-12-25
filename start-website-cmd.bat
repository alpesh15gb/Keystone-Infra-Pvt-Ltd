@echo off
title Keystone Infra Website (CMD Version)
color 0B

echo.
echo ========================================
echo      Keystone Infra Website Server
echo      (Command Prompt Version)
echo ========================================
echo.
echo This version bypasses PowerShell execution policy issues.
echo.

:: Check if Node.js is accessible
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found in PATH
    echo Please make sure Node.js is installed and added to PATH
    pause
    exit /b 1
)

echo Node.js version: 
node --version
echo.

:: Check if project is built
if not exist dist (
    echo Building website first...
    echo This may take a moment...
    echo.
    
    :: Use node directly instead of npm
    node "%APPDATA%\npm\node_modules\npm\bin\npm-cli.js" run build
    
    if %errorlevel% neq 0 (
        echo ERROR: Build failed
        echo Trying alternative build method...
        
        :: Alternative: use npx
        npx vite build
        
        if %errorlevel% neq 0 (
            echo ERROR: Both build methods failed
            echo Please check your Node.js installation
            pause
            exit /b 1
        )
    )
    
    echo Build completed successfully!
    echo.
)

echo Starting your professional website...
echo.
echo Website URL: http://localhost:3000
echo.
echo Network Access:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do echo   http://%%b:3000
)
echo.
echo Press Ctrl+C to stop the website
echo.

:: Set environment variable for Windows and start
echo Starting server...
set NODE_ENV=production
set PORT=3000
node dist/index.js

echo.
echo Website stopped.
pause