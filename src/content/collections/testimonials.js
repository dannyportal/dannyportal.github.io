/**
 * Testimonials Collection
 * 
 * Manage all your client testimonials here.
 * You can organize by industry, rating, featured, etc.
 */

export const testimonials = [
    {
        id: 1,
        name: "Amy Elswick",
        position: "Art Director / Senior Designer / Brand Strategist",
        company: "Activated Insights",
        src: "/images/testimonials/amy.jpg",
        review: "Danny is the go-to person for anything web-related. He led major site projects, built custom plugins when needed, and communicated clearly at every step. He consistently meets deadlines without sacrificing quality.",
        rating: 5,
        featured: true,
        industry: "Marketing",
        date: "2025-03-10"
    },
    {
        id: 2,
        name: "Tyler Guthrie",
        position: "RevOps leader, CRM systems and process optimization",
        company: "Activated Insights",
        src: "/images/testimonials/tyler.jpg",
        review: "Danny elevated our web presence through multiple brand updates and acquisitions. He has deep WordPress and hosting expertise, solves problems fast, and delivers measurable gains in performance and conversion.",
        rating: 5,
        featured: true,
        industry: "RevOps",
        date: "2025-03-08"
    },
    {
        id: 3,
        name: "Kristen Duell",
        position: "Healthcare and Tech Consultant",
        company: "Activated Insights",
        src: "/images/testimonials/kristen.jpg",
        review: "Danny blends data-driven insight with creative problem-solving. He is detail-oriented, adaptable, and a true team player who consistently finds smart, strategic solutions.",
        rating: 4,
        featured: false,
        industry: "Healthcare",
        date: "2025-02-23"
    },
    {
        id: 4,
        name: "Stephanie Baldwin",
        position: "Content Strategist and Marketer",
        company: "Freelance",
        src: "/images/testimonials/stephanie.jpg",
        review: "Danny fixed our site speed issues in less than a day and has been reliable ever since. He is thorough, fast, and very reasonably priced.",
        rating: 5,
        featured: false,
        industry: "Marketing",
        date: "2021-02-09"
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

