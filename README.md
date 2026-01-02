# 🎨 Bentos Portfolio - Next.js Template

A modern, responsive portfolio template built with Next.js, ready to deploy on GitHub Pages.

## ✨ Features

- 🎯 **Content Management System** - Organize projects, testimonials, and more into collections
- 🏷️ **Categories & Tags** - Filter and organize content easily
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Static Export** - Fast loading, SEO-friendly, GitHub Pages compatible
- 🎨 **Modern Design** - Beautiful UI with smooth animations
- 🔄 **Auto Deployment** - GitHub Actions workflow included

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd bentos-next
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 3. Customize Your Portfolio

**Key Files:**
- `src/content/collections/projects.js` - Your portfolio projects
- `src/content/collections/testimonials.js` - Client testimonials
- `src/components/sections/hero.jsx` - Hero section (name, bio, social links)
- `src/app/layout.js` - Site metadata

### 4. Build & Deploy
```bash
npm run build
git push
```

GitHub Actions will automatically deploy to GitHub Pages!

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete step-by-step deployment guide
- **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** - How to manage your content collections
- **[STATIC_EXPORT_EXPLAINED.md](./STATIC_EXPORT_EXPLAINED.md)** - Understanding static export with content management
- **[QUICK_START.md](./QUICK_START.md)** - Quick reference guide

## 🗂️ Content Management

### Understanding Static Export

**Question:** "If it's static, how can I control content and categorize it?"

**Answer:** Static export means the **final output** is static HTML, but your **source code** has full content management!

- ✅ Organize into collections (projects, testimonials, blog)
- ✅ Categorize everything (Design, Development, Marketing, etc.)
- ✅ Filter by category, tags, featured status
- ✅ Add metadata, descriptions, links
- ✅ Create relationships between content

**Workflow:** Edit content → Build → Deploy → Live site

See **[STATIC_EXPORT_EXPLAINED.md](./STATIC_EXPORT_EXPLAINED.md)** for details.

### Managing Projects

Edit `src/content/collections/projects.js`:

```javascript
{
    id: 1,
    slug: "my-project",
    title: "My Project",
    category: "Design",  // For filtering
    tags: ["UI/UX", "Web"],
    description: "Project description...",
    src: "/images/projects/project.jpg",
    featured: true,
    date: "2024-01-15"
}
```

Use helper functions:
```javascript
import { 
    getProjectsByCategory,
    getAllCategories,
    getFeaturedProjects 
} from '@/content';
```

See **[CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)** for complete guide.

## 📁 Project Structure

```
bentos-next/
├── src/
│   ├── app/                    # Pages (Home, About, Contact, etc.)
│   ├── components/            # React components
│   │   └── sections/          # Page sections
│   ├── content/               # 🆕 Content Management System
│   │   ├── collections/       # Your content collections
│   │   │   ├── projects.js    # Portfolio projects
│   │   │   ├── testimonials.js
│   │   │   └── blog.js
│   │   └── index.js           # Central export hub
│   └── assets/                # CSS and assets
├── public/                     # Static files (images, etc.)
└── .github/
    └── workflows/             # GitHub Actions deployment
```

## 🎯 Key Features

### Content Collections
- Projects with categories, tags, and metadata
- Testimonials with ratings and industries
- Blog posts (optional)
- Easy to extend with new collections

### Helper Functions
- Filter by category, tag, featured status
- Get by ID, slug, date
- Search functionality
- Automatic category detection

### GitHub Pages Ready
- Static export configured
- GitHub Actions workflow included
- Automatic deployment on push

## 🔧 Configuration

### For Custom Repository Name

If your repo isn't `username.github.io`, update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // Add this
  trailingSlash: true,          // Add this
};
```

## 📝 Customization Checklist

- [ ] Update site title & description (`src/app/layout.js`)
- [ ] Replace profile image (`public/images/about/profile.png`)
- [ ] Update hero section (`src/components/sections/hero.jsx`)
- [ ] Add your projects (`src/content/collections/projects.js`)
- [ ] Update testimonials (`src/content/collections/testimonials.js`)
- [ ] Customize About page (`src/app/about/page.js`)
- [ ] Update contact information
- [ ] Replace logo (`public/images/logo.png`)
- [ ] Add project images to `public/images/projects/`

## 🚀 Deployment

### Automatic (Recommended)

1. Push to GitHub
2. Go to **Settings → Pages**
3. Select **GitHub Actions** as source
4. Done! Auto-deploys on every push

### Manual

```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

See **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for detailed instructions.

## 🐛 Troubleshooting

**npm not found?** → Install Node.js from https://nodejs.org/

**Build fails?** → Run `npm install` again

**Images not loading?** → Make sure paths start with `/` (e.g., `/images/...`)

**404 on GitHub Pages?** → Add `basePath` in `next.config.mjs` if repo name isn't `username.github.io`

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Content Management Guide](./CONTENT_MANAGEMENT_GUIDE.md)

## 📄 License

This is a template. Customize it for your portfolio!

---

**Need Help?** Check the guides in this directory:
- `DEPLOYMENT_GUIDE.md` - How to deploy
- `CONTENT_MANAGEMENT_GUIDE.md` - How to manage content
- `STATIC_EXPORT_EXPLAINED.md` - How static export works
- `QUICK_START.md` - Quick reference

Happy building! 🎉
