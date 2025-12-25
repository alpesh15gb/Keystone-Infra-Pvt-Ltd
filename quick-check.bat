@echo off

echo Checking your setup...
echo.

echo Files in current directory:
dir /b | findstr -i "package client server"
echo.

echo Dependencies:
if exist node_modules (echo ✓ Dependencies installed) else (echo ✗ Need to install dependencies)

echo.
echo Build status:
if exist dist\index.js (echo ✓ Website is built) else (echo ✗ Need to build website)

echo.
echo Environment:
if exist .env (echo ✓ Environment file exists) else (echo ✗ Need environment file)

echo.
echo Ready to start: 
if exist dist\index.js (
    if exist .env (
        echo ✓ YES - Your website is ready!
        echo Run: setup-and-start.bat
    ) else (
        echo ✗ Missing .env file
    )
) else (
    echo ✗ Website needs to be built first
    echo Run: setup-and-start.bat
)

pause