@echo off
title Website Troubleshooting
color 0C

echo.
echo ========================================
echo    Website Troubleshooting Helper
echo ========================================
echo.

echo [1/5] Checking if Node.js is working...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found or not working
    echo Please reinstall Node.js from https://nodejs.org/
    goto :end
)
echo SUCCESS: Node.js is working
node --version
echo.

echo [2/5] Checking if project was built...
if not exist dist (
    echo ERROR: Project not built yet
    echo Running build now...
    npm run build
    if %errorlevel% neq 0 (
        echo ERROR: Build failed
        goto :end
    )
    echo SUCCESS: Build completed
) else (
    echo SUCCESS: Project is built
)
echo.

echo [3/5] Checking if port 3000 is available...
netstat -ano | findstr :3000 >nul
if %errorlevel% equ 0 (
    echo WARNING: Port 3000 is already in use
    echo Finding what's using port 3000:
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
        echo Process ID: %%a
        tasklist /FI "PID eq %%a" 2>nul | findstr /V "INFO:"
    )
    echo.
    echo Would you like to kill the process using port 3000? (Y/N)
    set /p kill_process=
    if /i "%kill_process%"=="Y" (
        for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
            taskkill /PID %%a /F >nul 2>&1
        )
        echo Process killed. Port 3000 should now be free.
    )
) else (
    echo SUCCESS: Port 3000 is available
)
echo.

echo [4/5] Checking environment file...
if not exist .env (
    echo WARNING: .env file missing
    if exist .env.example (
        copy .env.example .env >nul
        echo Created .env from template
    ) else (
        echo Creating basic .env file...
        echo NODE_ENV=production > .env
        echo PORT=3000 >> .env
        echo SENDGRID_API_KEY=your_key_here >> .env
    )
) else (
    echo SUCCESS: .env file exists
)
echo.

echo [5/5] Testing website startup...
echo Starting website in test mode...
echo If this works, you should see "express serving on port" message
echo Press Ctrl+C to stop the test
echo.
echo ========================================
echo.

npm start

:end
echo.
echo ========================================
echo.
echo If the website still doesn't work:
echo 1. Make sure Windows Firewall allows Node.js
echo 2. Try running as Administrator
echo 3. Check if antivirus is blocking the connection
echo 4. Try a different port by editing .env file
echo.
echo For more help, check WINDOWS_SETUP.md
echo.
pause