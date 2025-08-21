@echo off
echo Creating backup of Keystone Infrastructure...
echo.

REM Get current date and time for backup folder name
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%"
set "YYYY=%dt:~0,4%"
set "MM=%dt:~4,2%"
set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%"
set "Min=%dt:~10,2%"
set "Sec=%dt:~12,2%"
set "datestamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"

REM Create backup directory
set "backupdir=backup_%datestamp%"
mkdir "%backupdir%"

echo Copying files to %backupdir%...

REM Copy important files (excluding node_modules and logs)
xcopy "dist" "%backupdir%\dist" /s /e /q
xcopy "attached_assets" "%backupdir%\attached_assets" /s /e /q
copy "server.js" "%backupdir%\"
copy "ecosystem.config.js" "%backupdir%\"
copy "package*.json" "%backupdir%\"
copy "web.config" "%backupdir%\"
copy "DEPLOYMENT_GUIDE.md" "%backupdir%\"

echo.
echo Backup completed successfully!
echo Backup location: %backupdir%
echo.
pause