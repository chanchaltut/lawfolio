import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PortfolioIntroSection = ({ id }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } : {}}
            className="w-full bg-transparent flex flex-col items-center justify-center py-8 px-4"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } } : {}}
                className="flex flex-col items-start"
            >
                <h5 className="text-futuristic-cyan-300 text-lg font-semibold tracking-widest mb-2 uppercase text-left">Portfolio</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-left">Our Work</h2>
                <p className="text-lg text-white/70 text-left max-w-2xl">Explore our latest projects and see how we bring ideas to life.</p>
            </motion.div>
        </motion.section>
    );
};

export default PortfolioIntroSection; 