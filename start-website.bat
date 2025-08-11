@echo off
title Keystone Infra Website
color 0B

echo.
echo ========================================
echo      Keystone Infra Website Server
echo ========================================
echo.
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

:: Start the website
npm start

echo.
echo Website stopped.
pause