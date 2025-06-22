import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: 10, suffix: "+", label: "Active Clients" },
    { value: 96, suffix: "%", label: "Client Retention" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
];

const StatsSection = () => {
    const [visible, setVisible] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const ref = useRef();
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;
        setVisible(true);
    }, [inView]);

    useEffect(() => {
        if (!visible) return;
        const duration = 1200;
        const steps = 30;
        let frame = 0;
        const interval = setInterval(() => {
            frame++;
            setCounts(stats.map((stat, i) => {
                const target = stat.value;
                return Math.round((target * frame) / steps);
            }));
            if (frame >= steps) clearInterval(interval);
        }, duration / steps);
        return () => clearInterval(interval);
    }, [visible]);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } : {}}
            className="w-full py-16 md:py-24 bg-transparent"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } } : {}}
                className="w-full max-w-6xl mx-auto rounded-2xl backdrop-blur-sm bg-gradient-to-r from-futuristic-blue-600/30 via-black/40 to-futuristic-purple-600/30 border border-white/10 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 md:py-20 gap-8 md:gap-0 shadow-futuristic"
            >
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start justify-center text-center md:text-left flex-1 w-full">
                        <span className="text-5xl md:text-6xl font-bold text-white antialiased drop-shadow-md text-center md:text-left">
                            {counts[i]}{stat.suffix}
                        </span>
                        <span className="block text-xl md:text-2xl font-medium text-white antialiased drop-shadow-md mt-2 text-center md:text-left">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default StatsSection; 