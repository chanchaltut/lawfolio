import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import analytics from "../utils/analytics";

const BlogPage = () => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const handleBackToBlog = () => {
        window.location.hash = "#blog";
        analytics.trackButtonClick("back_to_blog", "blog_page");
    };

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-transparent pt-24 pb-16 px-4"
        >
            <div className="max-w-4xl mx-auto">
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

                {/* Featured Article - Custom Website Cost */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <header className="mb-8">
                        <span className="inline-block bg-futuristic-cyan-500/20 text-futuristic-cyan-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            Featured Article
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            How Much Does a Custom Website Really Cost in 2025? [Complete Breakdown]
                        </h1>
                        <div className="flex items-center gap-6 text-white/60 mb-6">
                            <span>Pricing & ROI</span>
                            <span>•</span>
                            <span>8 min read</span>
                            <span>•</span>
                            <span>January 15, 2025</span>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Get the real numbers behind custom website development. We break down every cost component so you can budget accurately for your business website.
                        </p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-6 border border-futuristic-cyan-500/20 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">💰 Quick Cost Summary</h3>
                            <ul className="text-white/80 space-y-2">
                                <li><strong>Basic Business Website:</strong> $3,000 - $8,000</li>
                                <li><strong>E-commerce Website:</strong> $8,000 - $25,000</li>
                                <li><strong>Custom Web Application:</strong> $15,000 - $100,000+</li>
                                <li><strong>Enterprise Solution:</strong> $50,000 - $500,000+</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">The Real Cost Breakdown</h2>
                        <p className="text-white/80 mb-6">
                            Understanding website development costs can be confusing. Many agencies hide fees, and the final price often surprises business owners. Let's break down exactly what you're paying for.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">1. Design & User Experience (20-30% of total cost)</h3>
                        <p className="text-white/80 mb-6">
                            Professional design isn't just about looks—it's about converting visitors into customers. This includes:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• User research and persona development</li>
                            <li>• Wireframing and prototyping</li>
                            <li>• Visual design and branding integration</li>
                            <li>• User experience optimization</li>
                            <li>• Mobile responsiveness design</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">2. Development & Programming (40-50% of total cost)</h3>
                        <p className="text-white/80 mb-6">
                            This is where the technical magic happens. Development costs include:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Frontend development (HTML, CSS, JavaScript)</li>
                            <li>• Backend development (server-side logic)</li>
                            <li>• Database design and implementation</li>
                            <li>• Third-party integrations</li>
                            <li>• Testing and quality assurance</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">3. Content Management System (10-15% of total cost)</h3>
                        <p className="text-white/80 mb-6">
                            A good CMS allows you to update your website without technical knowledge:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• WordPress, Drupal, or custom CMS</li>
                            <li>• Content editing interface</li>
                            <li>• Media management system</li>
                            <li>• User role management</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">4. SEO & Performance Optimization (10-15% of total cost)</h3>
                        <p className="text-white/80 mb-6">
                            What good is a website if no one can find it? SEO optimization includes:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Technical SEO implementation</li>
                            <li>• Page speed optimization</li>
                            <li>• Mobile-first indexing</li>
                            <li>• Schema markup implementation</li>
                            <li>Performance monitoring setup</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">5. Testing & Launch (5-10% of total cost)</h3>
                        <p className="text-white/80 mb-6">
                            Before your website goes live, thorough testing ensures everything works perfectly:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Cross-browser testing</li>
                            <li>• Mobile device testing</li>
                            <li>• Performance testing</li>
                            <li>• Security testing</li>
                            <li>Launch and deployment</li>
                        </ul>

                        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">⚠️ Hidden Costs to Watch Out For</h3>
                            <ul className="text-white/80 space-y-2">
                                <li>• <strong>Content creation:</strong> $500 - $5,000+</li>
                                <li>• <strong>Ongoing maintenance:</strong> $100 - $500/month</li>
                                <li>• <strong>Hosting and domains:</strong> $100 - $1,000/year</li>
                                <li>• <strong>SSL certificates:</strong> $0 - $200/year</li>
                                <li>• <strong>Analytics and tracking:</strong> $0 - $100/month</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Why Custom Development Costs More (And Why It's Worth It)</h2>
                        <p className="text-white/80 mb-6">
                            You might be wondering why custom development costs more than template-based solutions. Here's the breakdown:
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">Template vs. Custom: The Real Comparison</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                                <h4 className="text-xl font-bold text-red-300 mb-4">Template Websites</h4>
                                <ul className="text-white/70 space-y-2 text-sm">
                                    <li>• Limited customization</li>
                                    <li>• Generic design</li>
                                    <li>• Poor SEO performance</li>
                                    <li>• Security vulnerabilities</li>
                                    <li>• Difficult to scale</li>
                                </ul>
                                <p className="text-red-300 font-semibold mt-4">Cost: $500 - $2,000</p>
                            </div>
                            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                                <h4 className="text-xl font-bold text-green-300 mb-4">Custom Websites</h4>
                                <ul className="text-white/70 space-y-2 text-sm">
                                    <li>• Unlimited customization</li>
                                    <li>• Unique brand identity</li>
                                    <li>• SEO-optimized structure</li>
                                    <li>• Enhanced security</li>
                                    <li>• Scalable architecture</li>
                                </ul>
                                <p className="text-green-300 font-semibold mt-4">Cost: $3,000 - $25,000+</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">ROI: How Your Website Investment Pays for Itself</h2>
                        <p className="text-white/80 mb-6">
                            A custom website isn't just an expense—it's an investment that generates returns. Here's how:
                        </p>

                        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">📈 Real ROI Examples</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-bold text-green-300 mb-2">E-commerce Business</h4>
                                    <p className="text-white/70 text-sm">Investment: $15,000<br />Increased Sales: $75,000/year<br />ROI: 400%</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-green-300 mb-2">Service Business</h4>
                                    <p className="text-white/70 text-sm">Investment: $8,000<br />New Clients: 25/month<br />ROI: 300%</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">How to Get the Best Value for Your Budget</h2>
                        <p className="text-white/80 mb-6">
                            Getting a custom website doesn't mean breaking the bank. Here are strategies to maximize value:
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">1. Start with MVP (Minimum Viable Product)</h3>
                        <p className="text-white/80 mb-6">
                            Launch with essential features and add more as your business grows. This approach:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Reduces initial development costs</li>
                            <li>• Gets you to market faster</li>
                            <li>• Allows you to test and iterate</li>
                            <li>• Provides immediate ROI</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">2. Choose the Right Development Partner</h3>
                        <p className="text-white/80 mb-6">
                            Not all agencies are created equal. Look for:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Proven track record in your industry</li>
                            <li>• Transparent pricing and processes</li>
                            <li>• Post-launch support and maintenance</li>
                            <li>• SEO and marketing expertise</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mb-4">3. Plan for Growth</h3>
                        <p className="text-white/80 mb-6">
                            Your website should grow with your business. Consider:
                        </p>
                        <ul className="text-white/80 mb-6 space-y-2">
                            <li>• Scalable architecture</li>
                            <li>• Easy content management</li>
                            <li>• Integration capabilities</li>
                            <li>• Performance optimization</li>
                        </ul>

                        <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20 text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to Invest in Your Online Success?</h3>
                            <p className="text-white/80 mb-6">
                                A custom website is one of the best investments you can make for your business.
                                It's not just about having an online presence—it's about creating a powerful tool that drives growth.
                            </p>
                            <button className="bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic">
                                Get Your Custom Website Quote
                            </button>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
                        <p className="text-white/80 mb-6">
                            Custom website development costs vary significantly based on your needs, but the investment is worth it.
                            A professionally designed and developed website will generate returns that far exceed the initial cost.
                        </p>
                        <p className="text-white/80 mb-6">
                            The key is to work with a development partner who understands your business goals and can deliver a solution
                            that drives real results. Don't let sticker shock prevent you from making this crucial investment in your business's future.
                        </p>
                        <p className="text-white/80">
                            Ready to discuss your website project? Contact us for a detailed quote tailored to your specific needs and budget.
                        </p>
                    </div>
                </motion.article>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-futuristic-cyan-500/10 to-futuristic-blue-500/10 rounded-2xl p-8 border border-futuristic-cyan-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Want More Web Development Insights?
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and get the latest strategies, trends, and tips delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-futuristic-cyan-500 flex-1 max-w-md"
                            />
                            <button className="bg-gradient-to-r from-futuristic-cyan-500 to-futuristic-blue-500 hover:from-futuristic-cyan-600 hover:to-futuristic-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-futuristic">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BlogPage;
