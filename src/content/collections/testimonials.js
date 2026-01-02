/**
 * Testimonials Collection
 * 
 * Manage all your client testimonials here.
 * You can organize by industry, rating, featured, etc.
 */

export const testimonials = [
    {
        id: 1,
        name: "Zonathon Doe",
        position: "CEO & Founder X",
        company: "Tech Startup X",
        src: "/images/testimonials/author1.jpg",
        review: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
        rating: 5,
        featured: true,
        industry: "Technology",
        date: "2024-01-10"
    },
    {
        id: 2,
        name: "Liana Marie",
        position: "Lead Designer Meta",
        company: "Meta",
        src: "/images/testimonials/author2.jpg",
        review: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
        rating: 5,
        featured: true,
        industry: "Design",
        date: "2024-02-15"
    },
    {
        id: 3,
        name: "Zonathon Doe",
        position: "CEO & Founder X",
        company: "Tech Startup X",
        src: "/images/testimonials/author1.jpg",
        review: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
        rating: 4,
        featured: false,
        industry: "Technology",
        date: "2024-03-20"
    },
    {
        id: 4,
        name: "Liana Marie",
        position: "Lead Designer Meta",
        company: "Meta",
        src: "/images/testimonials/author2.jpg",
        review: "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
        rating: 5,
        featured: false,
        industry: "Design",
        date: "2024-04-25"
    },
];

// Helper functions
export const getAllTestimonials = () => testimonials;
export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);
export const getTestimonialsByIndustry = (industry) => {
    return testimonials.filter(t => t.industry === industry);
};
export const getTestimonialsByRating = (minRating) => {
    return testimonials.filter(t => t.rating >= minRating);
};

