# Deployment Guide

This guide will help you deploy your portfolio to free cloud hosting services.

## 🚀 Recommended: Vercel (Easiest & Best Performance)

Vercel is the best choice for React/Vite applications. It offers:
- ✅ Zero configuration needed
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN for fast loading
- ✅ Custom domain support
- ✅ Preview deployments for pull requests

### Deployment Steps:

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign up/login with your GitHub account

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

6. **Click "Deploy"**

7. **Done!** Your site will be live at `https://your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** - Vercel will auto-detect your Vite project

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

---

## 🌐 Alternative: Netlify

Netlify is another excellent option with similar features.

### Deployment Steps:

#### Option 1: Deploy via Netlify Dashboard

1. **Push your code to GitHub** (same as Vercel steps above)

2. **Go to [netlify.com](https://netlify.com)** and sign up/login with GitHub

3. **Click "Add new site" → "Import an existing project"**

4. **Select your GitHub repository**

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `./` (leave empty)

6. **Click "Deploy site"**

7. **Done!** Your site will be live at `https://random-name.netlify.app`

#### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Build your project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

---

## 🔧 Other Free Options

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Select "Pages" → "Create a project"
4. Connect GitHub repository
5. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Your code is pushed to GitHub
- [ ] `npm run build` works locally without errors
- [ ] Test the production build: `npm run preview`
- [ ] Update any hardcoded URLs if needed
- [ ] Check that all images/assets load correctly

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- Best performance and global CDN
- Easiest setup (zero config)
- Best developer experience
- Automatic HTTPS
- Free custom domain
- Preview deployments for every PR

**Get started:** [vercel.com](https://vercel.com)

---

## 🔄 Continuous Deployment

Both Vercel and Netlify automatically deploy when you push to your main branch:

1. Make changes locally
2. Commit and push to GitHub
3. Deployment happens automatically!
4. Your site updates in ~1-2 minutes

---

## 🌍 Custom Domain

Both services support free custom domains:

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed

---

## 📊 Performance Tips

- Your site is already optimized with Vite
- Images are optimized automatically
- Code splitting happens automatically
- Both Vercel and Netlify use global CDNs

---

## 🆘 Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check build logs in the dashboard

**404 errors?**
- The `vercel.json` and `netlify.toml` files handle this
- Make sure they're committed to your repo

**Assets not loading?**
- Check that paths are relative (not absolute)
- Verify `dist` folder structure

---

## ✅ Quick Start (Vercel - Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Ready to deploy"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. Go to vercel.com and import your repo
# 3. Click Deploy
# 4. Done! 🎉
```

Your portfolio will be live in under 2 minutes!

