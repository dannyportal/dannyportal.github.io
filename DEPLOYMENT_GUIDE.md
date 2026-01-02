# Complete Guide: Install, Customize & Deploy to GitHub Pages

This guide will walk you through installing the Bentos portfolio theme, customizing it for your portfolio, and deploying it to GitHub Pages.

## 📋 Prerequisites

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. **Git** (for version control and GitHub Pages)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

3. **GitHub Account** (for hosting)

---

## 🚀 Step 1: Install Dependencies

1. Open your terminal/command prompt
2. Navigate to the project directory:
   ```bash
   cd bentos-next
   ```

3. Install all dependencies:
   ```bash
   npm install
   ```

   This will install all required packages (React, Next.js, Bootstrap, Framer Motion, etc.)

---

## 🧪 Step 2: Test Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

3. You should see your portfolio template running locally!

4. Press `Ctrl + C` in the terminal to stop the server when you're done testing.

---

## ✏️ Step 3: Customize Your Portfolio

### 3.1 Update Personal Information

#### Update Site Metadata
Edit `src/app/layout.js`:
- Change the `title` and `description` in the metadata object

#### Update Projects
Edit `src/utlits/fackData/projectData.jsx`:
- Replace the example projects with your own
- Update images in `public/images/projects/` folder
- Modify titles, categories, and descriptions

#### Update Navigation Menu
Edit `src/utlits/fackData/menuList.jsx`:
- Customize menu items if needed

#### Update About Page
Edit `src/app/about/page.js`:
- Add your personal information, skills, experience

#### Update Contact Information
Edit `src/components/sections/contact/`:
- Update contact form and contact options

#### Update Profile Image
- Replace `public/images/about/profile.png` with your photo

#### Update Logo
- Replace `public/images/logo.png` with your logo

### 3.2 Customize Colors & Styling

- Edit `src/app/global.css` for global styles
- Check `src/assets/css/` for additional stylesheets

### 3.3 Update Footer & Header

- Edit `src/components/sections/footer.jsx` for footer content
- Edit `src/components/sections/header.jsx` for header/navigation

---

## 🏗️ Step 4: Build for Production

Before deploying, test the production build:

```bash
npm run build
```

This creates an `out` folder with static files ready for deployment.

---

## 📦 Step 5: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended - Automatic)

1. **Create a GitHub Repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `my-portfolio`)
   - **DO NOT** initialize with README, .gitignore, or license

2. **Initialize Git in Your Project:**
   ```bash
   cd bentos-next
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

3. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow file (`.github/workflows/deploy.yml`) is already configured!

5. **Trigger Deployment:**
   - The deployment will automatically start after pushing
   - Or manually trigger it: **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

6. **Access Your Site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes for the first deployment

### Option B: Manual Deployment

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Create a `gh-pages` branch:**
   ```bash
   git checkout -b gh-pages
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Select `gh-pages` branch and `/` folder
   - Save

---

## 🔧 Troubleshooting

### Issue: npm command not found
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Build fails
**Solution:** 
- Make sure all dependencies are installed: `npm install`
- Check for any syntax errors in your customizations
- Review the error messages in the terminal

### Issue: Images not loading on GitHub Pages
**Solution:** 
- Make sure image paths start with `/` (e.g., `/images/projects/work1.jpg`)
- Images should be in the `public` folder

### Issue: 404 errors on GitHub Pages
**Solution:** 
- If your repo name is not `username.github.io`, you may need to add a `basePath` in `next.config.mjs`:
  ```javascript
  basePath: '/your-repo-name',
  trailingSlash: true,
  ```
- Then rebuild: `npm run build`

### Issue: Styles not loading
**Solution:**
- Clear browser cache
- Check that all CSS files are in the `public` or `src/assets/css` folders
- Verify paths in your components

---

## 📝 Next Steps

1. **Customize Content:** Update all placeholder text with your information
2. **Add Your Projects:** Replace example projects with your real work
3. **Update Images:** Add your photos and project screenshots
4. **Test Responsiveness:** Check your site on mobile devices
5. **SEO Optimization:** Update meta tags, descriptions, and alt text for images
6. **Custom Domain (Optional):** Add your own domain in GitHub Pages settings

---

## 🎉 You're Done!

Your portfolio is now live on GitHub Pages! Share your link with the world.

**Need Help?**
- Check the Next.js documentation: https://nextjs.org/docs
- GitHub Pages documentation: https://docs.github.com/en/pages

