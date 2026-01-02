# 📚 Content Management Guide

## Understanding Static Export with Content Collections

**Good news!** Static export doesn't mean you can't manage content. Here's how it works:

### How It Works

1. **Source Code (Your Control):** You organize content in collections (projects, blog posts, testimonials, etc.)
2. **Build Process:** When you run `npm run build`, Next.js processes all your content and generates static HTML files
3. **Deployment:** The static HTML files are deployed to GitHub Pages
4. **Updates:** When you update content, you rebuild and redeploy

### The Workflow

```
Edit Content → Build → Deploy → Live Site
     ↓           ↓        ↓
  Collections  Static   GitHub
              HTML      Pages
```

---

## 📁 Content Collections Structure

Your content is organized in `src/content/collections/`:

```
src/content/
├── collections/
│   ├── projects.js      # Your portfolio projects
│   ├── testimonials.js  # Client testimonials
│   └── blog.js          # Blog posts (optional)
└── index.js             # Central export hub
```

---

## 🎯 Managing Projects Collection

### Location: `src/content/collections/projects.js`

### Adding a New Project

```javascript
{
    id: 7,  // Unique ID
    slug: "my-new-project",  // URL-friendly name
    title: "My New Project",
    category: "Design",  // Used for filtering
    tags: ["UI/UX", "Web Design"],
    description: "Project description here...",
    src: "/images/projects/my-project.jpg",
    featured: true,  // Show on homepage?
    date: "2024-07-01",
    client: "Client Name",
    link: "https://project-url.com",
    technologies: ["React", "Next.js", "Tailwind"]
}
```

### Using Projects in Components

```javascript
import { 
    getAllProjects, 
    getProjectsByCategory,
    getFeaturedProjects,
    getAllCategories 
} from '@/content';

// Get all projects
const allProjects = getAllProjects();

// Get projects by category
const designProjects = getProjectsByCategory('Design');

// Get featured projects
const featured = getFeaturedProjects();

// Get all categories for filter buttons
const categories = getAllCategories();
```

### Available Helper Functions

- `getAllProjects()` - Get all projects
- `getProjectById(id)` - Get specific project
- `getProjectBySlug(slug)` - Get project by slug
- `getProjectsByCategory(category)` - Filter by category
- `getProjectsByTag(tag)` - Filter by tag
- `getFeaturedProjects()` - Get featured only
- `getAllCategories()` - Get all unique categories
- `getAllTags()` - Get all unique tags
- `getProjectsByDate(limit)` - Get sorted by date

---

## 💬 Managing Testimonials

### Location: `src/content/collections/testimonials.js`

### Adding a Testimonial

```javascript
{
    id: 5,
    name: "John Doe",
    position: "CEO",
    company: "Company Name",
    src: "/images/testimonials/john.jpg",
    review: "Great work!",
    rating: 5,
    featured: true,
    industry: "Technology",
    date: "2024-07-01"
}
```

### Using Testimonials

```javascript
import { 
    getAllTestimonials,
    getFeaturedTestimonials,
    getTestimonialsByIndustry 
} from '@/content';

const featured = getFeaturedTestimonials();
const techTestimonials = getTestimonialsByIndustry('Technology');
```

---

## 📝 Managing Blog Posts (Optional)

### Location: `src/content/collections/blog.js`

If you want to add a blog section, manage posts here:

```javascript
{
    id: 4,
    slug: "my-blog-post",
    title: "My Blog Post Title",
    excerpt: "Short description...",
    content: "Full blog content...",
    author: "Your Name",
    date: "2024-07-01",
    category: "Development",
    tags: ["Next.js", "React"],
    featuredImage: "/images/blog/post.jpg",
    featured: true,
    readTime: "5 min read"
}
```

---

## 🔄 Updating Content Workflow

### Step 1: Edit Content Files
Open the collection file (e.g., `src/content/collections/projects.js`) and add/edit your content.

### Step 2: Test Locally
```bash
npm run dev
```
Visit http://localhost:3000 to see your changes.

### Step 3: Build
```bash
npm run build
```
This generates static HTML files in the `out` folder.

### Step 4: Deploy
Push to GitHub and the GitHub Actions workflow will automatically deploy:
```bash
git add .
git commit -m "Update portfolio projects"
git push
```

---

## 🎨 Organizing by Categories

### Current Categories
- Design
- Game
- Branding
- Marketing

### Adding New Categories
Just use a new category name in your project:
```javascript
{
    category: "Web Development",  // New category!
    // ... rest of project
}
```

The system automatically detects new categories and adds them to filters.

---

## 🏷️ Using Tags

Tags allow multiple classifications per project:

```javascript
{
    tags: ["UI/UX", "Mobile", "React Native"]
}
```

Filter by tag:
```javascript
import { getProjectsByTag } from '@/content';
const mobileProjects = getProjectsByTag('Mobile');
```

---

## 📊 Content Relationships

You can create relationships between content:

### Example: Link Projects to Testimonials
```javascript
// In projects.js
{
    id: 1,
    testimonialId: 1,  // Link to testimonial
    // ...
}

// In testimonials.js
{
    id: 1,
    projectId: 1,  // Link back to project
    // ...
}
```

### Example: Featured Content
```javascript
// Get all featured content
const featuredProjects = getFeaturedProjects();
const featuredTestimonials = getFeaturedTestimonials();
const featuredPosts = getFeaturedPosts();
```

---

## 🔍 Advanced Queries

### Get Recent Projects
```javascript
import { getProjectsByDate } from '@/content';
const recentProjects = getProjectsByDate(3);  // Latest 3
```

### Filter by Multiple Criteria
```javascript
import { getAllProjects } from '@/content';

const projects = getAllProjects()
    .filter(p => p.category === 'Design')
    .filter(p => p.featured === true)
    .filter(p => p.tags.includes('UI/UX'));
```

### Search Projects
```javascript
const searchProjects = (query) => {
    return getAllProjects().filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
};
```

---

## 💡 Tips & Best Practices

1. **Keep IDs Unique:** Always use unique IDs across all collections
2. **Use Slugs:** Slugs are URL-friendly and better for SEO
3. **Add Descriptions:** Helpful for SEO and previews
4. **Use Featured Flag:** Control what appears on homepage
5. **Organize Images:** Keep all images in `public/images/`
6. **Date Format:** Use YYYY-MM-DD format for dates
7. **Version Control:** Commit content changes to Git

---

## 🚀 Quick Reference

### Add New Project
→ Edit `src/content/collections/projects.js`

### Add New Testimonial
→ Edit `src/content/collections/testimonials.js`

### Add New Blog Post
→ Edit `src/content/collections/blog.js`

### Use in Components
→ Import from `@/content`

### Update & Deploy
→ Edit → Build → Push to GitHub

---

## ❓ FAQ

**Q: Can I add more collections?**
A: Yes! Create a new file in `src/content/collections/` and export it from `index.js`

**Q: Can I use a database instead?**
A: For static export, you need to use files. For dynamic content, you'd need a different hosting solution (not GitHub Pages).

**Q: How do I add images?**
A: Add images to `public/images/` and reference them with paths starting with `/`

**Q: Can I organize projects into subcategories?**
A: Yes! Add a `subcategory` field and create helper functions to filter by it.

**Q: How often do I need to rebuild?**
A: Every time you update content. The GitHub Actions workflow does this automatically when you push.

---

## 📖 Next Steps

1. **Customize Projects:** Add your real projects to `projects.js`
2. **Update Testimonials:** Add real client testimonials
3. **Add Your Images:** Replace placeholder images
4. **Create More Collections:** Add services, skills, etc.
5. **Build & Deploy:** Test locally, then push to GitHub

Your content is fully manageable - you just rebuild when you make changes!

