#!/bin/bash

echo ""
echo "============================================"
echo "  Evrola Backend - Quick Start"
echo "============================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Please run this from the backend folder."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Error: Failed to install dependencies"
        exit 1
    fi
    echo "✓ Dependencies installed successfully!"
else
    echo "✓ Dependencies already installed"
fi

echo ""
echo "============================================"
echo "  Configuration Check"
echo "============================================"
echo ""

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠ .env file not found!"
    echo "Please copy .env.example to .env and update with your credentials"
    exit 1
fi

echo "✓ .env file found"

echo ""
echo "============================================"
echo "  Starting Backend Server..."
echo "============================================"
echo ""
echo "Server will run on http://localhost:3001"
echo "Press Ctrl+C to stop"
echo ""

npm start
