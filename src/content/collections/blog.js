/**
 * Blog Posts Collection
 * 
 * Manage your blog posts here.
 * You can add categories, tags, featured images, etc.
 */

export const blogPosts = [
    {
        id: 1,
        slug: "getting-started-with-nextjs",
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js framework.",
        content: "Full blog post content here...",
        author: "Your Name",
        date: "2024-01-15",
        category: "Development",
        tags: ["Next.js", "React", "Web Development"],
        featuredImage: "/images/blog/blog1.jpg",
        featured: true,
        readTime: "5 min read"
    },
    {
        id: 2,
        slug: "design-trends-2024",
        title: "Design Trends for 2024",
        excerpt: "Explore the latest design trends shaping the digital landscape.",
        content: "Full blog post content here...",
        author: "Your Name",
        date: "2024-02-20",
        category: "Design",
        tags: ["Design", "UI/UX", "Trends"],
        featuredImage: "/images/blog/blog2.jpg",
        featured: true,
        readTime: "7 min read"
    },
    {
        id: 3,
        slug: "portfolio-tips",
        title: "Tips for Building a Great Portfolio",
        excerpt: "Essential tips for creating a portfolio that stands out.",
        content: "Full blog post content here...",
        author: "Your Name",
        date: "2024-03-10",
        category: "Career",
        tags: ["Portfolio", "Career", "Tips"],
        featuredImage: "/images/blog/blog3.jpg",
        featured: false,
        readTime: "6 min read"
    },
];

// Helper functions
export const getAllPosts = () => blogPosts;
export const getPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category) => {
    return blogPosts.filter(post => post.category === category);
};
export const getPostsByTag = (tag) => {
    return blogPosts.filter(post => 
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
};
export const getRecentPosts = (limit = 5) => {
    return [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
};

