import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../assets/images/about/about.png";

const AboutSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const leftVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="about"
            className="w-full bg-white py-16 md:py-24 pt-24 md:pt-32"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    {/* Left - Image */}
                    <motion.div className="flex-1" variants={leftVariants}>
                        <div className="relative">
                            <img
                                src={aboutImg}
                                alt="About Code Your Idea"
                                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00e187] rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#a5f3fc] rounded-full opacity-30 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div className="flex-1 text-left" variants={rightVariants}>
                        <h4 className="text-[#00e187] text-lg font-semibold tracking-widest mb-4 uppercase text-left">About Us</h4>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a0a2d] leading-tight mb-6 text-left">
                            We're Code Your Idea
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed text-left">
                            We're a small, focused team that builds real, functional products for real people. Founded in 2023, based in India, we specialize in turning your ideas into digital reality through clean websites and powerful mobile apps.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed text-left">
                            Our mission is simple: help startups and small businesses launch faster with technology that works. No fluff, no unnecessary complexity – just solid development that gets results.
                        </p>

                        {/* Values Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#1a0a2d] mb-4 text-left">Our Values</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-2 h-2 bg-[#00e187] rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-[#1a0a2d] text-left">Speed</h4>
                                        <p className="text-gray-600 text-left">Fast development, quick launches, no endless delays</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-2 h-2 bg-[#00e187] rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-[#1a0a2d] text-left">Communication</h4>
                                        <p className="text-gray-600 text-left">Clear updates, honest timelines, always available</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-2 h-2 bg-[#00e187] rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-[#1a0a2d] text-left">Clarity</h4>
                                        <p className="text-gray-600 text-left">Simple solutions, clean code, no confusion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection; 