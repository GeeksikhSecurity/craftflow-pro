#!/bin/bash

# Clean up
rm -rf .next out node_modules package-lock.json

# Install dependencies
npm install

# Build the project
npm run build

# Install Vercel CLI globally if not installed
if ! command -v vercel &> /dev/null; then
    npm install -g vercel
fi

# Deploy to Vercel
vercel deploy --prod --yes
