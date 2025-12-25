@echo off
title Keystone Infra Website (No Email)
color 0B

echo ========================================
echo   Keystone Infra Website Starting
echo ========================================
echo.

echo Setting up environment...
set NODE_ENV=production
set PORT=3000
set SENDGRID_API_KEY=SG.placeholder_key_for_testing

echo.
echo Starting your professional website...
echo.
echo Open your browser and go to:
echo   http://localhost:3000
echo.
echo NOTE: Contact form emails won't work until you add your real SendGrid API key
echo      but the website will function perfectly otherwise.
echo.
echo Press Ctrl+C to stop the website
echo.

node dist/index.js

pause