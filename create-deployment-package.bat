@echo off
echo Creating deployment package for Windows Server...
echo.

REM Get current date and time for package name
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%"
set "YYYY=%dt:~0,4%"
set "MM=%dt:~4,2%"
set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%"
set "Min=%dt:~10,2%"
set "datestamp=%YYYY%-%MM%-%DD%_%HH%-%Min%"

REM Create deployment directory
set "deploydir=keystone-infrastructure-deployment_%datestamp%"
mkdir "%deploydir%"

echo Copying files to deployment package...

REM Copy built application
xcopy "dist" "%deploydir%\dist" /s /e /q

REM Copy assets
xcopy "attached_assets" "%deploydir%\attached_assets" /s /e /q

REM Copy server and configuration files
copy "server.js" "%deploydir%\"
copy "ecosystem.config.js" "%deploydir%\"
copy "package-production.json" "%deploydir%\package.json"
copy "web.config" "%deploydir%\"

REM Copy deployment scripts
copy "start.bat" "%deploydir%\"
copy "install-pm2.bat" "%deploydir%\"
copy "backup.bat" "%deploydir%\"

REM Copy documentation
copy "DEPLOYMENT_GUIDE.md" "%deploydir%\"
copy "README-DEPLOYMENT.md" "%deploydir%\README.md"

REM Create logs directory
mkdir "%deploydir%\logs"

echo.
echo Deployment package created successfully!
echo Package location: %deploydir%
echo.
echo To deploy:
echo 1. Copy the entire '%deploydir%' folder to your Windows server
echo 2. Run start.bat to start the server
echo 3. Open http://localhost:3000 in your browser
echo.
pause