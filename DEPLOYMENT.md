
# Vijay Hair Dresser Website - Deployment Guide

## Overview
This is a modern, mobile-responsive React website for Vijay Hair Dresser, a traditional Berber hairdressing salon with 25 years of experience.

## Features
- 🎨 Modern design with Berber cultural heritage
- 📱 Fully mobile-responsive
- 🌙 Dark/Light theme toggle
- 🗺️ Google Maps integration
- 📞 WhatsApp integration for bookings
- 🖱️ Custom cursor animations and trails
- ⭐ Client reviews section
- 🖼️ Image gallery of work
- 📋 Service listings with pricing
- 🎯 Smooth scrolling navigation

## Technologies Used
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/UI components
- Lucide React icons
- React Router DOM

## Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Local Development
1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd vijay-hair-dresser
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open browser to `http://localhost:5173`

## Deployment Options

### 1. GitHub Pages (Free)
1. In your GitHub repository, go to Settings > Pages
2. Source: Deploy from a branch
3. Branch: Select `gh-pages` or create one
4. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### 2. Vercel (Recommended - Free)
1. Connect your GitHub repo to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### 3. Netlify (Free)
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on push

## Environment Configuration

### Google Maps Integration
The website uses Google Maps embed. To customize the location:
1. Replace the iframe `src` in `src/components/MapSection.tsx`
2. Update the Google Maps link in the same component

### Contact Information
Update contact details in `src/pages/Index.tsx`:
- Phone numbers
- WhatsApp number
- Address
- Business hours
- Social media links

### Customization
- Colors: Edit `tailwind.config.ts` for Berber color scheme
- Images: Replace Unsplash URLs with your own images
- Content: Update text content in `src/pages/Index.tsx`

## Performance Optimizations
- Images are lazy-loaded and optimized
- Code splitting with React.lazy (when needed)
- Minified CSS and JavaScript in production
- Optimized animations for 60fps

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## SEO Optimization
- Semantic HTML structure
- Meta tags for social sharing
- Alt text for all images
- Fast loading times
- Mobile-first design

## License
MIT License - feel free to customize for your business needs.

## Support
For technical support or customization requests, please create an issue in the GitHub repository.

---

**Built with ❤️ for traditional Berber hairdressing heritage**
