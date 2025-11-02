@echo off
echo ============================================
echo  Deleting Old React + Express Folders
echo ============================================
echo.
echo This will delete:
echo - client/ (Old React frontend)
echo - server/ (Old Express backend)
echo.
echo Make sure VS Code and all terminals are closed!
echo.
pause

echo.
echo Deleting client folder...
rmdir /s /q client
if exist client (
    echo ERROR: Could not delete client folder. Close VS Code and try again.
) else (
    echo SUCCESS: client folder deleted!
)

echo.
echo Deleting server folder...
rmdir /s /q server
if exist server (
    echo ERROR: Could not delete server folder. Close VS Code and try again.
) else (
    echo SUCCESS: server folder deleted!
)

echo.
echo ============================================
echo  Cleanup Complete!
echo ============================================
echo.
echo Your Next.js project is now clean!
echo.
pause

