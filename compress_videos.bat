@echo off
echo Starting video compression...
echo This script requires FFMPEG to be installed and in your system PATH.

if not exist "client\public\videos\compressed" mkdir "client\public\videos\compressed"

for %%f in (client\public\videos\*.mp4) do (
    echo Compressing %%~nxf...
    ffmpeg -i "%%f" -vcodec libx264 -crf 28 -preset medium -acodec aac -b:a 128k "client\public\videos\compressed\%%~nxf"
)

echo Compression complete! Check client\public\videos\compressed for files.
echo You can then replace the original files with these compressed versions.
pause
