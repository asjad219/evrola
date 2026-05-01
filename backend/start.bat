@echo off
REM Quick Start Script for Evrola Backend

echo.
echo ============================================
echo   Evrola Backend - Quick Start
echo ============================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo Error: package.json not found. Please run this from the backend folder.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✓ Dependencies installed successfully!
) else (
    echo ✓ Dependencies already installed
)

echo.
echo ============================================
echo   Configuration Check
echo ============================================
echo.

REM Check if .env exists
if not exist ".env" (
    echo ⚠ .env file not found!
    echo Please copy .env.example to .env and update with your credentials
    pause
    exit /b 1
)

echo ✓ .env file found

echo.
echo ============================================
echo   Starting Backend Server...
echo ============================================
echo.
echo Server will run on http://localhost:3001
echo Press Ctrl+C to stop
echo.

call npm start
pause
