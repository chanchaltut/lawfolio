import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaMobile, FaReact, FaNodeJs } from "react-icons/fa";
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
            icon: <FaCode className="text-5xl text-[#00e187] mb-6" />,
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
            icon: <FaMobile className="text-5xl text-[#00e187] mb-6" />,
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
            className="w-full bg-gray-50 py-16 md:py-24 pt-24 md:pt-32"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <h4 className="text-[#00e187] text-lg font-semibold tracking-widest mb-4 uppercase">Our Services</h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a0a2d] leading-tight mb-6">
                        Two Things We Do Exceptionally Well
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                        >
                            <div className="flex flex-col items-center">
                                {service.icon}
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1a0a2d] mb-2 group-hover:text-[#00e187] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#00e187] font-semibold text-lg mb-4 italic">
                                    {service.subtitle}
                                </p>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="mb-8 w-full">
                                    <h4 className="font-semibold text-[#1a0a2d] mb-4 text-center">What We Deliver:</h4>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center justify-center gap-3">
                                                <div className="w-2 h-2 bg-[#00e187] rounded-full flex-shrink-0"></div>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="w-full">
                                    <h4 className="font-semibold text-[#1a0a2d] mb-4 text-center">Technologies:</h4>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {service.tech.map((tech, idx) => (
                                            <div key={idx} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                                                <span className="text-[#00e187]">{tech.icon}</span>
                                                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
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
                    <h3 className="text-2xl font-bold text-[#1a0a2d] mb-4">
                        Ready to Build Your Next Project?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Let's discuss your idea and see how we can bring it to life with clean code and smart design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                            onClick={() => autoFillContactForm('undecided')}
                            className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                        >
                            Start Your Project
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="border-2 border-[#00e187] text-[#00e187] hover:bg-[#00e187] hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
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