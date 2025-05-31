import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImg1 from "../assets/images/slider/img-one.png";
import heroImg2 from "../assets/images/slider/img-two.png";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const HeroSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 });
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full min-h-screen bg-gradient-to-br from-[#f8fbff] to-[#f3f7fa] flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 py-8"
        >
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-0 gap-8 md:gap-0">
                {/* Left Content */}
                <motion.div className="flex-1 max-w-xl z-10 w-full text-center md:text-left" variants={textVariants}>
                    <h4 className="text-[#00e187] text-base md:text-lg font-semibold tracking-widest mb-3 md:mb-4 uppercase">Web and App Development</h4>
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a0a2d] leading-tight mb-4 md:mb-6">
                        Exceptional web & <br className="hidden xs:inline" /> app empowerment
                    </h1>
                    <p className="text-base xs:text-lg text-gray-600 mb-6 md:mb-8">
                        Elevate your business with our cutting-edge web and app development services, tailored to your needs.
                    </p>
                    <button className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full text-base md:text-lg shadow-lg transition-all">
                        Get Your Custom App Now
                    </button>
                </motion.div>
                {/* Right Images */}
                <motion.div className="flex-1 flex items-center justify-center relative z-10 min-w-0 min-h-[260px] md:min-w-0 md:min-h-[420px] w-full" variants={imageVariants}>
                    <div className="relative w-[180px] h-[180px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                        <img src={heroImg2} alt="Hero 2" className="absolute left-[-2rem] top-[2rem] w-[180px] h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-2xl md:rounded-3xl shadow-lg z-10 transition-all" />
                        <img src={heroImg1} alt="Hero 1" className="absolute left-0 top-0 w-[180px] h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-2xl md:rounded-3xl shadow-xl z-20 transition-all" />
                        {/* Soft background effect */}
                        <div className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-32 h-32 md:w-72 md:h-72 bg-[#00e187]/20 rounded-3xl blur-2xl z-0"></div>
                        <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-32 md:h-32 bg-[#a5f3fc]/30 rounded-full blur-2xl z-0"></div>
                    </div>
                </motion.div>
            </div>
            {/* Decorative dots */}
            <div className="hidden md:block absolute top-32 left-1/2 -translate-x-1/2 z-0">
                <div className="flex gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} className="w-2 h-2 bg-[#00e187] rounded-full opacity-40"></span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection; 