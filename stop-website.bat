@echo off
title Stop Keystone Infra Website

echo Stopping Keystone Infra Website...

:: Find and kill Node.js processes running on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    taskkill /PID %%a /F >nul 2>&1
)

echo Website stopped successfully.
pause