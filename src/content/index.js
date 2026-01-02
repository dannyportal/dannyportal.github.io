/**
 * Content Management System
 * 
 * This is your central content hub. Import all your collections here
 * and use them throughout your application.
 * 
 * Even though the final output is static HTML, you can still:
 * - Organize content into collections
 * - Filter and query content
 * - Manage categories and tags
 * - Add metadata and relationships
 * 
 * When you build, Next.js processes all this data and generates
 * static HTML pages. You just need to rebuild and redeploy when
 * you update content.
 */

// Import all collections
export { 
    projects,
    getAllProjects,
    getProjectById,
    getProjectBySlug,
    getProjectsByCategory,
    getProjectsByTag,
    getFeaturedProjects,
    getAllCategories,
    getAllTags,
    getProjectsByDate
} from './collections/projects';

export {
    testimonials,
    getAllTestimonials,
    getFeaturedTestimonials,
    getTestimonialsByIndustry,
    getTestimonialsByRating
} from './collections/testimonials';

export {
    blogPosts,
    getAllPosts,
    getPostBySlug,
    getFeaturedPosts,
    getPostsByCategory,
    getPostsByTag,
    getRecentPosts
} from './collections/blog';

/**
 * Usage Examples:
 * 
 * import { getProjectsByCategory, getAllCategories } from '@/content';
 * 
 * // Get all design projects
 * const designProjects = getProjectsByCategory('Design');
 * 
 * // Get all categories for filter buttons
 * const categories = getAllCategories();
 * 
 * // Get featured projects
 * import { getFeaturedProjects } from '@/content';
 * const featured = getFeaturedProjects();
 */

