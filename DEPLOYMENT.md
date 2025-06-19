
# Vijay Hair Dresser Website - Deployment Guide

## Overview
This is a modern, mobile-responsive React website for Vijay Hair Dresser, a traditional Berber hairdressing salon with 25 years of experience.

## 🚀 Quick GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Actions will automatically deploy** (if `.github/workflows/deploy.yml` exists)

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Your site will be live at: `https://[username].github.io/[repository-name]/`

### Method 2: Manual Deployment

1. **Install deployment package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"

## 🔧 Prerequisites

Make sure you have these installed:
- Node.js 18+ 
- npm or yarn
- Git

## 📦 Required Dependencies

All necessary dependencies are included:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Shadcn/UI components
- Lucide React (icons)
- React Router DOM
- TypeScript

## 🛠️ Local Development

```bash
# Clone repository
git clone [your-repo-url]
cd vijay-hair-dresser

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Alternative Deployment Options

### Vercel (Recommended for React apps)
1. Connect GitHub repo to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Auto-deploy on push

### Netlify
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on push

## 🐛 Common Issues & Solutions

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets Not Loading
- Check that `base` URL in `vite.config.ts` matches your repository name
- Ensure all image paths are correct

### Routing Issues
- The app uses React Router with proper configuration for GitHub Pages
- Hash routing is configured for compatibility

### GitHub Pages Not Updating
- Check GitHub Actions logs
- Ensure `gh-pages` branch exists
- Verify Pages source is set correctly

## 📋 Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build completes without errors (`npm run build`)
- [ ] Repository pushed to GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enforced (recommended)

## 🎨 Features Included

- ✅ Mobile-responsive design
- ✅ Dark/Light theme toggle
- ✅ Google Maps integration
- ✅ WhatsApp booking integration
- ✅ Custom cursor animations
- ✅ Image gallery
- ✅ Client reviews
- ✅ Service listings
- ✅ Social media links
- ✅ Smooth scrolling navigation

## 📞 Support

For deployment issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure build process completes successfully
4. Check GitHub repository settings

## 🔗 Live Demo

Once deployed, your website will be available at:
`https://[your-username].github.io/[repository-name]/`

---

**Built with ❤️ for traditional Berber hairdressing heritage**
