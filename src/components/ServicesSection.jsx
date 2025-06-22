import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaMobile, FaReact, FaNodeJs, FaShoppingCart, FaSearch, FaServer, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { autoFillContactForm, scrollToSection } from "../utils/modalUtils";

const ServicesSection = ({ id }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const services = [
        {
            icon: <FaCode className="text-white text-2xl" />,
            title: "Website Development",
            subtitle: "Fast, responsive, tailored",
            description: "Beautiful websites that convert visitors into customers. Every site is built for speed, optimized for search engines, and designed to grow with your business.",
            features: [
                "Static & Dynamic Sites",
                "E-commerce Solutions",
                "Portfolio Websites",
                "Business Websites",
                "SEO Optimized"
            ],
            tech: [
                { name: "React", icon: <FaReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "Node.js", icon: <FaNodeJs /> }
            ]
        },
        {
            icon: <FaMobile className="text-white text-2xl" />,
            title: "App Development",
            subtitle: "Cross-platform, scalable",
            description: "Native-feeling mobile apps that work perfectly on both Android and iOS. Built for performance, designed for growth, ready to scale with your success.",
            features: [
                "Android & iOS Apps",
                "Cross-platform Development",
                "Real-time Features",
                "Scalable Backend",
                "App Store Ready"
            ],
            tech: [
                { name: "React Native", icon: <FaReact /> },
                { name: "Node.js", icon: <FaNodeJs /> }
            ]
        }
    ];

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id={id}
            className="w-full bg-transparent py-16 md:py-24 pt-24 md:pt-32"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <h4 className="text-futuristic-cyan-300 text-lg font-semibold tracking-widest mb-4 uppercase">Our Services</h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        What We Can Do For You
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        We've chosen to focus on just two services so we can deliver exceptional results every time.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerChildren}
                    className="grid md:grid-cols-2 gap-8 md:gap-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="rounded-3xl p-8 md:p-10 transition-all duration-300 group text-center backdrop-blur-sm bg-white/5 border border-white/10 shadow-glow-blue hover:shadow-futuristic"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-futuristic-blue-500 to-futuristic-cyan-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-futuristic-cyan-300 font-semibold text-lg mb-4 italic">
                                    {service.subtitle}
                                </p>
                                <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="mb-8 w-full">
                                    <h4 className="font-semibold text-white mb-4 text-center">What We Deliver:</h4>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center justify-center gap-3">
                                                <div className="w-2 h-2 bg-futuristic-cyan-400 rounded-full flex-shrink-0"></div>
                                                <span className="text-white/70">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="w-full">
                                    <h4 className="font-semibold text-white mb-4 text-center">Technologies:</h4>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {service.tech.map((tech, idx) => (
                                            <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                                                <span className="text-futuristic-cyan-300">{tech.icon}</span>
                                                <span className="text-sm font-medium text-white/80">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Build Your Next Project?
                    </h3>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Let's discuss your idea and see how we can bring it to life with clean code and smart design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                            onClick={() => autoFillContactForm('undecided')}
                            className="btn-futuristic font-semibold px-8 py-4 rounded-full text-lg"
                        >
                            Start Your Project
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="border-2 border-futuristic-blue-400 text-white hover:bg-futuristic-blue-500/20 font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                        >
                            View Our Work
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSection; 