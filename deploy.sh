#!/bin/bash

# Clean up previous builds and dependencies
rm -rf .next out node_modules package-lock.json

# Install dependencies without legacy peer deps
npm install

# Build the project
npm run build

# Install Vercel CLI globally if not installed
if ! command -v vercel &> /dev/null; then
    npm install -g vercel
fi

# Run tests if they exist
if [ -f "package.json" ] && grep -q "\"test\":" "package.json"; then
  echo "Running tests..."
  npm test
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod
