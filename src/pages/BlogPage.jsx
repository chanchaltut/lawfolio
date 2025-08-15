import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import analytics from "../utils/analytics";
import { blogArticles, getArticlesByCategory } from "../data/blogArticles";

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const navigate = useNavigate();

    const categories = ["All", ...new Set(blogArticles.map(article => article.category))];

    const filteredArticles = blogArticles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleArticleClick = (article) => {
        analytics.trackBlogClick(article.title);
        // Navigate to individual article page
        navigate(`/blog/${article.slug}`);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchQuery(""); // Reset search when changing category
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Three.js Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Floating particles overlay */}
                    <div className="fixed inset-0 pointer-events-none z-20">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-60"></div>
                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-float opacity-80"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-slow opacity-70"></div>
                        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-pulse-slow opacity-50"></div>
                    </div>
                    {/* Header */}
                    <motion.div
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-futuristic-cyan-300 hover:text-futuristic-cyan-200 transition-colors mb-8 group"
                        >
                            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                            Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                            Discover strategies, trends, and actionable insights to help your business succeed online.
                            From SEO optimization to conversion strategies, we share everything we know.
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-futuristic-cyan-500 max-w-md"
                            />
                            <div className="flex flex-wrap gap-2 justify-center">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                            ? "bg-futuristic-cyan-500 text-white"
                                            : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <p className="text-white/60 text-sm">
                            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                        </p>
                    </motion.div>

                    {/* Featured Article */}
                    {filteredArticles.filter(article => article.featured).map((article) => (
                        <motion.div
                            key={article.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="mb-16"
                        >
                            <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-3xl p-8 border border-futuristic-cyan-500/20 backdrop-blur-sm">
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    <div className="lg:w-1/2">
                                        <span className="inline-block bg-futuristic-cyan-500/20 text-futuristic-cyan-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                            Featured Article
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                            {article.title}
                                        </h2>
                                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                                            <span>{article.category}</span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                            <span>•</span>
                                            <span>{formatDate(article.publishDate)}</span>
                                        </div>
                                        <button
                                            onClick={() => handleArticleClick(article)}
                                            className="bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic"
                                        >
                                            Read Full Article
                                        </button>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="bg-gradient-to-br from-futuristic-cyan-500/20 to-futuristic-blue-500/20 rounded-2xl p-8 text-center">
                                            <div className="text-6xl mb-4">📚</div>
                                            <h4 className="text-xl font-semibold text-white mb-2">Featured Content</h4>
                                            <p className="text-white/70">Premium insights to grow your business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.filter(article => !article.featured).map((article, i) => (
                            <motion.article
                                key={article.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => handleArticleClick(article)}
                            >
                                <div className="rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm bg-white/5 border border-white/10 shadow-glow-blue hover:shadow-futuristic hover:-translate-y-2 h-full">
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-futuristic-cyan-500/20 text-futuristic-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                                                {article.category}
                                            </span>
                                            <span className="text-white/40 text-xs">{article.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white group-hover:text-futuristic-cyan-300 transition-colors mb-3 leading-tight flex-grow">
                                            {article.title}
                                        </h3>

                                        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-white/40 text-xs">
                                                {formatDate(article.publishDate)}
                                            </span>
                                            <span className="text-futuristic-cyan-300 text-sm font-medium group-hover:text-futuristic-cyan-200 transition-colors">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredArticles.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-white mb-4">No Articles Found</h3>
                            <p className="text-white/70 mb-6">
                                Try adjusting your search terms or category filter to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                }}
                                className="bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mt-16"
                    >
                        <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Transform Your Business Online?
                            </h3>
                            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                                Get the same expertise and strategies we write about applied to your website.
                                Let's build something amazing together.
                            </p>
                            <Link
                                to="/#contact"
                                className="inline-block bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
