@echo off
title Setup Environment File
color 0E

echo ========================================
echo   Environment Setup
echo ========================================
echo.

if not exist .env (
    echo Creating .env file...
    copy .env.example .env >nul 2>&1
    echo NODE_ENV=production > .env
    echo PORT=3000 >> .env
    echo SENDGRID_API_KEY=your_sendgrid_key_here >> .env
    echo.
    echo Created .env file with default settings
) else (
    echo .env file already exists
)

echo.
echo Current .env contents:
type .env
echo.

echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. To test website without email: start-without-email.bat
echo 2. To add SendGrid API key: edit .env file
echo 3. To start with full email: setup-and-start.bat
echo.

echo Would you like to edit the .env file now? (Y/N)
set /p edit_env=
if /i "%edit_env%"=="Y" (
    notepad .env
)

pause