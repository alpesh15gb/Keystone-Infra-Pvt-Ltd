@echo off
title Test Basic Server
color 0E

echo Testing if Node.js can create a basic HTTP server...
echo.
echo If this works, we know Node.js is functional.
echo If not, there's a deeper system issue.
echo.
echo Starting basic server test...
echo This should show a success message if working.
echo.

node simple-server-test.js

pause