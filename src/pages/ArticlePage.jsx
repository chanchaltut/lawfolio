import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import analytics from "../utils/analytics";
import { getArticleBySlug, getRecentArticles } from "../data/blogArticles";

const ArticlePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [recentArticles, setRecentArticles] = useState([]);

    useEffect(() => {
        const foundArticle = getArticleBySlug(slug);
        if (foundArticle) {
            setArticle(foundArticle);
            setRecentArticles(getRecentArticles(5).filter(a => a.slug !== slug));

            // Track article view
            analytics.trackEvent('article_view', {
                article_title: foundArticle.title,
                article_category: foundArticle.category,
                timestamp: new Date().toISOString()
            });

            // Update page title for SEO
            document.title = `${foundArticle.title} - Code Your Idea Blog`;
        } else {
            // Article not found, redirect to blog
            navigate('/blog');
        }
    }, [slug, navigate]);

    const handleBackToBlog = () => {
        navigate('/blog');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!article) {
        return (
            <div className="min-h-screen bg-transparent pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">⏳</div>
                    <p className="text-white/70">Loading article...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Three.js Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4">

                    {/* Floating particles overlay */}
                    <div className="fixed inset-0 pointer-events-none z-20">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-80"></div>
                        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-float opacity-60"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-slow opacity-70"></div>
                        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-pulse-slow opacity-50"></div>
                    </div>
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={handleBackToBlog}
                        className="flex items-center gap-2 text-futuristic-cyan-300 hover:text-futuristic-cyan-200 transition-colors mb-8 group"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Blog
                    </motion.button>

                    {/* Article Header */}
                    <motion.article
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <header className="mb-8">
                            <span className="inline-block bg-futuristic-cyan-500/20 text-futuristic-cyan-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                {article.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/60 mb-6">
                                <span>{article.readTime}</span>
                                <span>•</span>
                                <span>{formatDate(article.publishDate)}</span>
                            </div>
                            <p className="text-xl text-white/80 leading-relaxed">
                                {article.excerpt}
                            </p>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {/* This is where the full article content would go */}
                            {/* For now, we'll show a placeholder */}
                            <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20 text-center mb-8">
                                <div className="text-6xl mb-4">📝</div>
                                <h3 className="text-2xl font-bold text-white mb-4">Full Article Content</h3>
                                <p className="text-white/80 mb-6">
                                    This is where the complete article content would be displayed.
                                    The content would include all the detailed information, examples,
                                    and actionable insights mentioned in the excerpt.
                                </p>
                                <p className="text-white/70 text-sm">
                                    In a real implementation, this would contain the full article text,
                                    images, code examples, and other rich content.
                                </p>
                            </div>

                            {/* Article sections would go here */}
                            <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
                            <p className="text-white/80 mb-6">
                                This article provides valuable insights for business owners looking to
                                understand web development costs and make informed decisions about their
                                online presence.
                            </p>

                            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
                            <p className="text-white/80 mb-6">
                                Understanding the true costs and benefits of custom website development
                                is crucial for making the right investment in your business's future.
                            </p>
                        </div>
                    </motion.article>

                    {/* Related Articles */}
                    {recentArticles.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {recentArticles.map((relatedArticle) => (
                                    <motion.article
                                        key={relatedArticle.id}
                                        whileHover={{ y: -5 }}
                                        className="group cursor-pointer"
                                        onClick={() => navigate(`/blog/${relatedArticle.slug}`)}
                                    >
                                        <div className="rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm bg-white/5 border border-white/10 shadow-glow-blue hover:shadow-futuristic">
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="bg-futuristic-cyan-500/20 text-futuristic-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                                                        {relatedArticle.category}
                                                    </span>
                                                    <span className="text-white/40 text-xs">{relatedArticle.readTime}</span>
                                                </div>

                                                <h3 className="text-lg font-bold text-white group-hover:text-futuristic-cyan-300 transition-colors mb-3 leading-tight">
                                                    {relatedArticle.title}
                                                </h3>

                                                <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">
                                                    {relatedArticle.excerpt}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-white/40 text-xs">
                                                        {formatDate(relatedArticle.publishDate)}
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
                        </motion.section>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Apply These Insights?
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

export default ArticlePage;
