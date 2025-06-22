import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import analytics from "../utils/analytics";
import heroImg1 from "../assets/images/slider/img-one.png";
import heroImg2 from "../assets/images/slider/img-two.png";
import { showLetsTalkModal, showQuoteModal } from "../utils/modalUtils";

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
    const inView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-screen bg-gradient-to-br from-[#f8fbff] to-[#f3f7fa] flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 py-8"
        >
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-0 gap-20 sm:gap-8 md:gap-0">
                {/* Left Content */}
                <motion.div className="flex-1 max-w-xl z-10 w-full text-center md:text-left" variants={textVariants}>
                    <h4 className="text-[#3F51B5] text-sm sm:text-base md:text-lg font-semibold tracking-widest mb-2 sm:mb-3 md:mb-4 uppercase">Development Agency</h4>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#333F48] leading-tight mb-6">
                        Turning Your Ideas into
                        <span className="text-[#3F51B5] block mt-2">Digital Reality</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
                        We create stunning websites and powerful applications that help businesses grow and succeed in the digital world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="bg-[#3F51B5] hover:bg-[#5C6BC0] text-white hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                            onClick={() => analytics.trackButtonClick('start_project', 'hero')}
                        >
                            Start Your Project
                        </a>
                        <a
                            href="#services"
                            className="bg-white hover:bg-gray-50 text-[#3F51B5] font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center border-2 border-[#3F51B5]"
                            onClick={() => analytics.trackButtonClick('explore_services', 'hero')}
                        >
                            Explore Services
                        </a>
                    </div>
                </motion.div>
                {/* Right Images */}
                <motion.div className="flex-1 flex items-center justify-center relative z-10 mr-[-2rem] min-w-0 min-h-[200px] sm:min-h-[260px] md:min-h-[420px] w-full" variants={imageVariants}>
                    <div className="relative w-[360px] h-[360px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                        <img src={heroImg2} alt="Hero 2" className="absolute left-[-2rem] top-[2rem] w-[360px] h-[360px] md:w-[320px] md:h-[320px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl z-10 transition-all" />
                        <img
                            src={heroImg1}
                            alt="Hero 1"
                            className="absolute left-0 top-0 w-[360px] h-[360px] md:w-[320px] md:h-[320px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                        />
                        {/* Soft background effect */}
                        <div className="absolute inset-0 rounded-3xl bg-[#3F51B5]/20 z-0"></div>
                    </div>
                </motion.div>
            </div>
            {/* Decorative dots */}
            <div className="hidden md:block absolute top-32 left-1/2 -translate-x-1/2 z-0">
                <div className="flex gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} className="w-2 h-2 bg-[#3F51B5] rounded-full opacity-40"></span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection; 