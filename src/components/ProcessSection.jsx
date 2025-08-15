import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLightbulb, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const ProcessSection = ({ id }) => {
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

    const steps = [
        {
            icon: <FaLightbulb className="text-white text-3xl" />,
            title: "Discovery",
            description: "Understanding your business and goals.",
            details: "We dive deep into your vision, target audience, and business objectives to create a roadmap for success."
        },
        {
            icon: <FaPalette className="text-white text-3xl" />,
            title: "Design",
            description: "UI/UX that makes users stay and click.",
            details: "We create intuitive, conversion-focused designs that guide users toward your business goals."
        },
        {
            icon: <FaCode className="text-white text-3xl" />,
            title: "Development",
            description: "Clean, scalable, future-ready code.",
            details: "We build robust, maintainable solutions that grow with your business and adapt to changing needs."
        },
        {
            icon: <FaRocket className="text-white text-3xl" />,
            title: "Launch & Growth",
            description: "Your project live and making money.",
            details: "We ensure smooth deployment and provide ongoing support to maximize your return on investment."
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
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        From Idea to Launch — We've Got You
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        A proven 4-step process that transforms your vision into a revenue-generating digital product.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={staggerChildren}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center group"
                        >
                            {/* Step Number */}
                            <div className="relative mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-futuristic-blue-500 to-futuristic-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Step Content */}
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-futuristic-cyan-300 font-semibold text-lg mb-4">
                                {step.description}
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {step.details}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Let's begin with discovery and turn your idea into a reality that drives results.
                    </p>
                    <button className="btn-futuristic font-semibold px-8 py-4 rounded-full text-lg">
                        Start Your Project
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProcessSection;
