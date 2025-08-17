@echo off
echo Testing if files exist and server works...

if not exist "dist\public\index.html" (
    echo ERROR: index.html not found, building first...
    call npm run build
)

if not exist "dist\public\index.html" (
    echo CRITICAL ERROR: Build failed
    pause
    exit /b 1
)

echo Files found! Starting server test...
echo.
echo Testing on http://localhost:9000 first...
start "" "http://localhost:9000"

node simple-windows-server.js