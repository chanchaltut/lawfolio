import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-0 gap-6 sm:gap-8 md:gap-0">
                {/* Left Content */}
                <motion.div className="flex-1 max-w-xl z-10 w-full text-center md:text-left" variants={textVariants}>
                    <h4 className="text-[#00e187] text-sm sm:text-base md:text-lg font-semibold tracking-widest mb-2 sm:mb-3 md:mb-4 uppercase">Development Agency</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1a0a2d] leading-tight mb-2 sm:mb-3 md:mb-4">
                        Your Idea, Our Code.
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00e187] mb-4 sm:mb-6 md:mb-8 italic">
                        Make it happen.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                        We are a development agency focused on helping startups and small businesses launch fast, responsive websites and mobile apps.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
                        <button
                            onClick={showLetsTalkModal}
                            className="w-full sm:w-auto bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-105"
                        >
                            Let's Talk
                        </button>
                        <button
                            onClick={showQuoteModal}
                            className="w-full sm:w-auto border-2 border-[#00e187] text-[#00e187] hover:bg-[#00e187] hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all hover:scale-105"
                        >
                            Get a Quote
                        </button>
                    </div>
                </motion.div>
                {/* Right Images */}
                <motion.div className="flex-1 flex items-center justify-center relative z-10 min-w-0 min-h-[200px] sm:min-h-[260px] md:min-h-[420px] w-full" variants={imageVariants}>
                    <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                        <img src={heroImg2} alt="Hero 2" className="absolute left-[-1.5rem] top-[1.5rem] sm:left-[-2rem] sm:top-[2rem] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg z-10 transition-all" />
                        <img src={heroImg1} alt="Hero 1" className="absolute left-0 top-0 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl z-20 transition-all" />
                        {/* Soft background effect */}
                        <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 md:-right-10 md:-bottom-10 w-24 h-24 sm:w-32 sm:h-32 md:w-72 md:h-72 bg-[#00e187]/20 rounded-3xl blur-2xl z-0"></div>
                        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-8 md:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-[#a5f3fc]/30 rounded-full blur-2xl z-0"></div>
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