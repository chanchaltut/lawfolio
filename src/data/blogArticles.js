export const blogArticles = [
    {
        id: 1,
        title: "How Much Does a Custom Website Really Cost in 2025? [Complete Breakdown]",
        excerpt: "Get the real numbers behind custom website development. We break down every cost component so you can budget accurately for your business website.",
        category: "Pricing & ROI",
        readTime: "8 min read",
        publishDate: "2025-01-15",
        slug: "custom-website-cost-2025",
        featured: true,
        metaDescription: "Discover the real costs of custom website development in 2025. Complete breakdown of pricing, hidden costs, and ROI analysis for business owners.",
        keywords: ["custom website cost", "website development pricing", "web design cost 2025", "website ROI", "business website investment"]
    },
    {
        id: 2,
        title: "Why Cheap Web Development Ends Up Costing You More",
        excerpt: "Discover the hidden costs of budget web development and why investing in quality upfront saves you thousands in the long run.",
        category: "Business Strategy",
        readTime: "6 min read",
        publishDate: "2025-01-12",
        slug: "cheap-web-development-hidden-costs",
        featured: false,
        metaDescription: "Learn why cheap website development often costs more in the long run. Hidden costs, security risks, and why quality investment pays off.",
        keywords: ["cheap website development", "web development costs", "website quality investment", "hidden development costs", "business website strategy"]
    },
    {
        id: 3,
        title: "The 5-Step Process We Use to Deliver High-Converting Websites",
        excerpt: "Learn our proven methodology that has helped businesses increase conversions by 300%+ through strategic web design and development.",
        category: "Process & Methodology",
        readTime: "10 min read",
        publishDate: "2025-01-10",
        slug: "5-step-high-converting-websites",
        featured: false,
        metaDescription: "Discover our proven 5-step process for creating high-converting websites. Learn the methodology that increases conversions by 300%+.",
        keywords: ["high converting websites", "website conversion process", "web design methodology", "conversion optimization", "website development process"]
    },
    {
        id: 4,
        title: "Website Development Trends for 2025: What Every Business Owner Should Know",
        excerpt: "Stay ahead of the curve with the latest web development trends that will shape how businesses connect with customers online.",
        category: "Industry Trends",
        readTime: "12 min read",
        publishDate: "2025-01-08",
        slug: "website-development-trends-2025",
        featured: false,
        metaDescription: "Stay ahead with 2025 web development trends. AI integration, performance optimization, and emerging technologies for business websites.",
        keywords: ["web development trends 2025", "website technology trends", "AI in web development", "future of websites", "business technology trends"]
    },
    {
        id: 5,
        title: "10 Must-Have Features for Your Business Website in 2025",
        excerpt: "From AI-powered chatbots to advanced analytics, discover the essential features that will make your website stand out and convert visitors.",
        category: "Features & Functionality",
        readTime: "15 min read",
        publishDate: "2025-01-05",
        slug: "must-have-website-features-2025",
        featured: false,
        metaDescription: "Discover 10 essential website features for 2025. AI chatbots, advanced analytics, and features that boost conversions and user experience.",
        keywords: ["website features 2025", "business website must-haves", "AI website features", "conversion optimization", "website functionality"]
    },
    {
        id: 6,
        title: "SEO-Friendly Web Design: How to Build a Site That Google Loves",
        excerpt: "Master the art of creating websites that rank well in search engines while providing an exceptional user experience.",
        category: "SEO & Marketing",
        readTime: "14 min read",
        publishDate: "2025-01-03",
        slug: "seo-friendly-web-design-google-ranking",
        featured: false,
        metaDescription: "Learn how to create SEO-friendly websites that rank well on Google. Technical SEO, user experience, and search engine optimization strategies.",
        keywords: ["SEO friendly web design", "Google ranking", "website SEO", "search engine optimization", "technical SEO"]
    },
    {
        id: 7,
        title: "E-Commerce Website Development: How to Boost Sales by 50% in 6 Months",
        excerpt: "Real strategies and case studies showing how proper e-commerce development can dramatically increase your online revenue.",
        category: "E-Commerce",
        readTime: "18 min read",
        publishDate: "2025-01-01",
        slug: "ecommerce-website-boost-sales-50-percent",
        featured: false,
        metaDescription: "Boost your e-commerce sales by 50% with proven website development strategies. Real case studies and actionable optimization techniques.",
        keywords: ["ecommerce website development", "boost online sales", "ecommerce optimization", "online store conversion", "ecommerce ROI"]
    },
    {
        id: 8,
        title: "Progressive Web Apps vs Native Apps: Which Is Right for Your Business?",
        excerpt: "Make an informed decision about your mobile strategy with our comprehensive comparison of PWA vs native app development.",
        category: "Mobile Development",
        readTime: "11 min read",
        publishDate: "2024-12-28",
        slug: "progressive-web-apps-vs-native-apps",
        featured: false,
        metaDescription: "PWA vs Native Apps: Which mobile strategy is right for your business? Compare costs, performance, and user experience to make the best choice.",
        keywords: ["progressive web apps", "native apps", "mobile app development", "PWA vs native", "mobile strategy"]
    },
    {
        id: 9,
        title: "How Restaurants Can Use Mobile Apps to Drive More Orders",
        excerpt: "Transform your restaurant business with mobile app development strategies that increase orders and customer loyalty.",
        category: "Industry Case Study",
        readTime: "9 min read",
        publishDate: "2024-12-25",
        slug: "restaurant-mobile-apps-drive-orders",
        featured: false,
        metaDescription: "Transform your restaurant with mobile apps. Learn strategies to increase orders, improve customer loyalty, and boost revenue with mobile technology.",
        keywords: ["restaurant mobile apps", "food delivery apps", "restaurant technology", "mobile ordering", "restaurant digital transformation"]
    },
    {
        id: 10,
        title: "The Hidden Dangers of Using Pre-Made Website Templates",
        excerpt: "Understand the risks and limitations of template-based websites and why custom development is often the better choice.",
        category: "Web Development",
        readTime: "7 min read",
        publishDate: "2024-12-22",
        slug: "hidden-dangers-website-templates",
        featured: false,
        metaDescription: "Discover the hidden dangers of website templates. Security risks, SEO limitations, and why custom development is often the better choice for businesses.",
        keywords: ["website templates", "template risks", "custom vs template", "website security", "template limitations"]
    }
];

export const getArticleBySlug = (slug) => {
    return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
    return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = () => {
    return blogArticles.filter(article => article.featured);
};

export const getRecentArticles = (limit = 5) => {
    return blogArticles
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit);
};
