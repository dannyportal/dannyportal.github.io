# 🚀 Quick Start Guide

## Installation & Setup (5 minutes)

### 1. Install Dependencies
```bash
cd bentos-next
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### 3. Customize Your Portfolio

**Key Files to Edit:**
- `src/app/layout.js` - Site title & description
- `src/utlits/fackData/projectData.jsx` - Your projects
- `src/components/sections/hero.jsx` - Hero section (name, bio, social links)
- `src/app/about/page.js` - About page content
- `public/images/about/profile.png` - Your profile photo
- `public/images/projects/` - Your project images

### 4. Build for Production
```bash
npm run build
```

### 5. Deploy to GitHub Pages

**Quick Steps:**
1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** → Select **GitHub Actions** as source
4. Your site will deploy automatically!

**Full detailed guide:** See `DEPLOYMENT_GUIDE.md`

---

## 📁 Project Structure

```
bentos-next/
├── src/
│   ├── app/              # Pages (Home, About, Contact, etc.)
│   ├── components/       # React components
│   │   └── sections/    # Page sections (Hero, Portfolio, etc.)
│   ├── utlits/          # Utilities & data
│   │   └── fackData/    # Data files (projects, menu, etc.)
│   └── assets/          # CSS and assets
├── public/              # Static files (images, etc.)
└── .github/
    └── workflows/       # GitHub Actions deployment
```

---

## 🎨 Customization Checklist

- [ ] Update site title & description (`src/app/layout.js`)
- [ ] Replace profile image (`public/images/about/profile.png`)
- [ ] Update hero section with your info (`src/components/sections/hero.jsx`)
- [ ] Add your projects (`src/utlits/fackData/projectData.jsx`)
- [ ] Update social media links (Hero section)
- [ ] Customize About page (`src/app/about/page.js`)
- [ ] Update contact information
- [ ] Replace logo (`public/images/logo.png`)
- [ ] Add your project images to `public/images/projects/`

---

## 🐛 Common Issues

**npm not found?** → Install Node.js from https://nodejs.org/

**Build fails?** → Run `npm install` again

**Images not loading?** → Make sure paths start with `/` (e.g., `/images/...`)

**404 on GitHub Pages?** → If repo name isn't `username.github.io`, add `basePath` in `next.config.mjs`

---

## 📚 Need More Help?

See the complete **DEPLOYMENT_GUIDE.md** for detailed instructions.

