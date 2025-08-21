@echo off
title Node.js Test
color 0C

echo Testing Node.js installation...
echo.

echo [1] Node.js version:
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not working
    goto :error
)
echo.

echo [2] NPM version:
call npm --version
if %errorlevel% neq 0 (
    echo ERROR: NPM not working
    goto :error
)
echo.

echo [3] Current directory:
cd
echo.

echo [4] Project files:
dir /b | findstr package.json
if %errorlevel% neq 0 (
    echo ERROR: package.json not found in current directory
    echo Make sure you're in the right folder
    goto :error
)
echo SUCCESS: package.json found
echo.

echo [5] Dependencies check:
if exist node_modules (
    echo SUCCESS: node_modules folder exists
) else (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        goto :error
    )
)
echo.

echo [6] Build check:
if exist dist\index.js (
    echo SUCCESS: Built application exists
) else (
    echo Building application...
    call npm run build
    if %errorlevel% neq 0 (
        echo ERROR: Build failed
        goto :error
    )
    if exist dist\index.js (
        echo SUCCESS: Build completed
    ) else (
        echo ERROR: Build didn't create dist\index.js
        goto :error
    )
)
echo.

echo [7] Testing direct node execution:
echo Testing: node dist\index.js
echo.
set NODE_ENV=production
set PORT=3000

echo If this works, you'll see a server message...
timeout /t 3 /nobreak >nul
node dist\index.js

goto :end

:error
echo.
echo ========================================
echo   DIAGNOSTICS
echo ========================================
echo.
echo Current folder contents:
dir /b
echo.
echo Please check:
echo 1. Node.js is installed from nodejs.org
echo 2. You're in the correct project folder
echo 3. All files extracted properly
echo.

:end
echo.
pause