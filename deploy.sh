
#!/bin/bash

# GitHub Pages Deployment Script for Vijay Hair Dresser Website

echo "🚀 Starting deployment to GitHub Pages..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Create CNAME file for custom domain (optional)
# echo "yourdomain.com" > dist/CNAME

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Your site should be live at: https://[your-username].github.io/vijay-hair-dresser/"
