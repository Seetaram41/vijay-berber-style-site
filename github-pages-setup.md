
# GitHub Pages Setup Instructions

## Step 1: Install GitHub Pages Deployment Package

Run this command in your project root:
```bash
npm install --save-dev gh-pages
```

## Step 2: Add Deployment Scripts to package.json

Add these scripts to your package.json file in the "scripts" section:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

## Step 3: Update Repository Settings

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

## Step 4: Deploy Your Website

Run these commands:
```bash
# Install dependencies
npm install

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

## Step 5: Access Your Live Website

Your website will be available at:
`https://[your-github-username].github.io/vijay-hair-dresser/`

## Troubleshooting

If you encounter issues:

1. **Build Errors**: Make sure all dependencies are installed
2. **Routing Issues**: The base URL is configured for GitHub Pages
3. **Assets Not Loading**: Check that all image URLs are relative or absolute
4. **Console Errors**: Check browser developer tools for specific errors

## Custom Domain (Optional)

To use a custom domain:
1. Add a CNAME file to your `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings
