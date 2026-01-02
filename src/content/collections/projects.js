/**
 * Projects Collection
 * 
 * This is your main projects database. You can:
 * - Add new projects
 * - Organize by category
 * - Add tags, descriptions, links, etc.
 * 
 * When you build, Next.js will generate static pages from this data.
 */

export const projects = [
    {
        id: 1,
        slug: "mobile-app-design",
        title: "Mobile Application Design",
        category: "Design",
        tags: ["UI/UX", "Mobile", "App Design"],
        description: "A beautiful mobile application design with modern UI/UX principles.",
        src: "/images/projects/work1.jpg",
        featured: true,
        date: "2024-01-15",
        client: "Tech Startup Inc.",
        link: "https://example.com",
        technologies: ["Figma", "React Native", "Firebase"]
    },
    {
        id: 2,
        slug: "website-makeup",
        title: "Website Makeup Design",
        category: "Game",
        tags: ["Web Design", "E-commerce"],
        description: "Complete website redesign with modern aesthetics.",
        src: "/images/projects/work2.jpg",
        featured: false,
        date: "2024-02-20",
        client: "Fashion Brand",
        link: "https://example.com",
        technologies: ["Next.js", "Tailwind CSS", "Stripe"]
    },
    {
        id: 3,
        slug: "brand-identity-motion",
        title: "Brand Identity and Motion Design",
        category: "Branding",
        tags: ["Branding", "Animation", "Logo Design"],
        description: "Complete brand identity package with motion graphics.",
        src: "/images/projects/work3.jpg",
        featured: true,
        date: "2024-03-10",
        client: "Creative Agency",
        link: "https://example.com",
        technologies: ["After Effects", "Illustrator", "Premiere Pro"]
    },
    {
        id: 4,
        slug: "mobile-app-marketing",
        title: "Mobile Application Design",
        category: "Marketing",
        tags: ["Marketing", "Mobile", "Strategy"],
        description: "Marketing campaign for mobile application launch.",
        src: "/images/projects/work4.jpg",
        featured: false,
        date: "2024-04-05",
        client: "Startup XYZ",
        link: "https://example.com",
        technologies: ["Google Ads", "Social Media", "Analytics"]
    },
    {
        id: 5,
        slug: "brand-identity-design",
        title: "Brand Identity and Motion Design",
        category: "Design",
        tags: ["Branding", "Design System"],
        description: "Comprehensive brand identity for emerging company.",
        src: "/images/projects/work3.jpg",
        featured: false,
        date: "2024-05-12",
        client: "New Company",
        link: "https://example.com",
        technologies: ["Figma", "Illustrator", "Photoshop"]
    },
    {
        id: 6,
        slug: "marketing-campaign",
        title: "Brand Identity and Motion Design",
        category: "Marketing",
        tags: ["Digital Marketing", "SEO", "Content"],
        description: "Full-scale digital marketing campaign.",
        src: "/images/projects/work4.jpg",
        featured: false,
        date: "2024-06-18",
        client: "E-commerce Store",
        link: "https://example.com",
        technologies: ["SEO Tools", "Content Management", "Analytics"]
    },
];

/**
 * Collection Helper Functions
 * These functions help you query and filter your collections
 */

// Get all projects
export const getAllProjects = () => projects;

// Get project by ID
export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
};

// Get project by slug
export const getProjectBySlug = (slug) => {
    return projects.find(project => project.slug === slug);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
    if (category === 'All') return projects;
    return projects.filter(project => project.category === category);
};

// Get projects by tag
export const getProjectsByTag = (tag) => {
    return projects.filter(project => 
        project.tags.some(projectTag => 
            projectTag.toLowerCase() === tag.toLowerCase()
        )
    );
};

// Get featured projects
export const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
};

// Get all unique categories
export const getAllCategories = () => {
    const categories = new Set(projects.map(project => project.category));
    return ['All', ...Array.from(categories)];
};

// Get all unique tags
export const getAllTags = () => {
    const tags = new Set();
    projects.forEach(project => {
        project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
};

// Get projects sorted by date (newest first)
export const getProjectsByDate = (limit = null) => {
    const sorted = [...projects].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    return limit ? sorted.slice(0, limit) : sorted;
};

