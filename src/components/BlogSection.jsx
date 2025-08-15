import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import analytics from "../utils/analytics";
import { getRecentArticles } from "../data/blogArticles";

const BlogSection = () => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Get 4 recent articles for preview (1 featured + 3 in grid)
    const recentArticles = getRecentArticles(4);

    const handleViewAllClick = () => {
        analytics.trackButtonClick("view_all_blog", "blog_section");
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

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <motion.section
            ref={sectionRef}
            id="blog"
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="w-full bg-transparent flex flex-col items-center justify-center py-16 px-4"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h5
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-futuristic-cyan-300 text-lg font-semibold tracking-widest mb-4 uppercase"
                    >
                        Blog & Insights
                    </motion.h5>
                    <motion.h2
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6"
                    >
                        Expert Web Development Insights
                    </motion.h2>
                    <motion.p
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-lg text-white/70 max-w-3xl mx-auto mb-8"
                    >
                        Discover strategies, trends, and actionable insights to help your business succeed online.
                        From SEO optimization to conversion strategies, we share everything we know.
                    </motion.p>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link
                            to="/blog"
                            onClick={handleViewAllClick}
                            className="inline-block bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic"
                        >
                            View All Articles
                        </Link>
                    </motion.div>
                </div>

                {/* Featured Article Preview */}
                {recentArticles.filter(article => article.featured).map((article) => (
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
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                        {article.title}
                                    </h3>
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
                                    <Link
                                        to={`/blog/${article.slug}`}
                                        className="inline-block bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic"
                                    >
                                        Read Full Article
                                    </Link>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="bg-gradient-to-br from-futuristic-cyan-500/20 to-futuristic-blue-500/20 rounded-2xl p-8 text-center">
                                        <div className="text-6xl mb-4">📚</div>
                                        <h4 className="text-xl font-semibold text-white mb-2">Latest Insights</h4>
                                        <p className="text-white/70">Stay ahead with our expert analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Recent Articles Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {recentArticles.filter(article => !article.featured).slice(0, 3).map((article, i) => (
                        <motion.article
                            key={article.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link to={`/blog/${article.slug}`}>
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
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Want More Web Development Insights?
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            Explore our full blog for in-depth articles, case studies, and expert strategies
                            to help your business succeed online.
                        </p>
                        <Link
                            to="/blog"
                            onClick={handleViewAllClick}
                            className="inline-block bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic"
                        >
                            Explore All Articles
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BlogSection;
