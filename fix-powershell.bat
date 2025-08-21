@echo off
title Fix PowerShell Execution Policy
color 0E

echo.
echo ========================================
echo   Fix PowerShell Execution Policy
echo ========================================
echo.

echo This will fix the npm PowerShell script execution error.
echo.
echo Current PowerShell execution policy:
powershell -Command "Get-ExecutionPolicy"
echo.

echo Setting execution policy to allow npm scripts...
echo This requires Administrator privileges.
echo.

:: Try to set execution policy
powershell -Command "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force" 2>nul

if %errorlevel% equ 0 (
    echo SUCCESS: Execution policy updated
    echo.
    echo New execution policy:
    powershell -Command "Get-ExecutionPolicy"
    echo.
    echo You can now run npm commands normally.
    echo Try running start-website.bat again.
) else (
    echo.
    echo Could not set automatically. Please run this manually:
    echo.
    echo 1. Right-click PowerShell and "Run as Administrator"
    echo 2. Run this command:
    echo    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    echo 3. Type Y when prompted
    echo.
    echo Or use the alternative methods below...
)

echo.
echo ========================================
echo Alternative Solutions:
echo ========================================
echo.
echo 1. Use Command Prompt instead of PowerShell
echo    - Open cmd.exe (not PowerShell)
echo    - Run your npm commands there
echo.
echo 2. Use the direct node commands:
echo    - node dist/index.js (to start website)
echo.
echo 3. Run with PowerShell bypass:
echo    - powershell -ExecutionPolicy Bypass -File start-website.bat
echo.
pause