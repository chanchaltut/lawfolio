import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { autoFillContactForm } from "../utils/modalUtils";

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            quote: "Code Your Idea delivered our e-commerce website in just 3 weeks. The design is clean, fast, and our sales have increased by 40% since launch. Their communication throughout the project was excellent.",
            name: "Priya Sharma",
            role: "Founder, Fashion Store Online",
            rating: 5,
            project: "E-commerce Website"
        },
        {
            quote: "We needed a mobile app for our food delivery startup. The team built us a beautiful Flutter app that works perfectly on both Android and iOS. Launch was smooth and customers love the interface.",
            name: "Rahul Patel",
            role: "CEO, QuickBites",
            rating: 5,
            project: "Mobile App Development"
        },
        {
            quote: "Professional, fast, and exactly what we needed. Our portfolio website showcases our work beautifully and we're getting more inquiries than ever. The SEO optimization they did is working great.",
            name: "Sarah Thompson",
            role: "Creative Director, Design Studio",
            rating: 5,
            project: "Portfolio Website"
        }
    ];

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="w-full bg-[#00e187] py-16 md:py-24 relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h4 className="text-white/80 text-lg font-semibold tracking-widest mb-4 uppercase">Client Success Stories</h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        What Our Clients Say
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    variants={itemVariants}
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
                >
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-[#00e187] rounded-full flex items-center justify-center">
                            <FaQuoteLeft className="text-white text-xl" />
                        </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="inline-block bg-[#00e187]/10 text-[#00e187] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        {currentTestimonial.project}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xl" />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{currentTestimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div>
                        <h4 className="text-[#1a0a2d] text-xl font-bold mb-1">
                            {currentTestimonial.name}
                        </h4>
                        <p className="text-gray-600 text-lg">
                            {currentTestimonial.role}
                        </p>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
                    >
                        <FaChevronRight />
                    </button>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-12">
                    <p className="text-white/90 text-lg mb-6">
                        Ready to be our next success story?
                    </p>
                    <button
                        onClick={() => autoFillContactForm('undecided')}
                        className="bg-white text-[#00e187] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                    >
                        Start Your Project Today
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </motion.section>
    );
};

export default TestimonialSection; 