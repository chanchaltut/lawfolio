import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import candidClean from "../assets/images/brand/candid-clean.svg";
import chargerQuest from "../assets/images/brand/charger-quest.png";
import greenDot from "../assets/images/brand/logo.svg";
import swiftRacks from "../assets/images/brand/swiftracks.svg";
import versatileDispatch from "../assets/images/brand/versatile-dispatch.svg";
import jeoGroup from "../assets/images/brand/jeo-group.png";

const clients = [
    { src: candidClean, alt: "Candid Clean" },
    { src: chargerQuest, alt: "Charger Quest" },
    { src: greenDot, alt: "Green Dot" },
    { src: swiftRacks, alt: "Swift Racks" },
    { src: versatileDispatch, alt: "Versatile Dispatch" },
    { src: jeoGroup, alt: "Jeo Group" },
];

const VISIBLE_COUNT = 4; // Number of logos visible at once (adjust for responsiveness if needed)
const SLIDE_INTERVAL = 2000; // 2 seconds

const logoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

const TopClientsSection = () => {
    const [startIdx, setStartIdx] = useState(0);
    const total = clients.length;
    const intervalRef = useRef();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setStartIdx((prev) => (prev + 1) % total);
        }, SLIDE_INTERVAL);
        return () => clearInterval(intervalRef.current);
    }, [total]);

    // Create a sliding window of clients
    const visibleClients = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
        visibleClients.push(clients[(startIdx + i) % total]);
    }

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } : {}}
            className="w-full bg-[#f4f7fb] flex flex-col items-center justify-center py-8 px-4"
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
                <h5 className="text-[#3F51B5] text-lg font-semibold tracking-[0.3em] mb-2 uppercase text-center">Top Clients</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d104f] mb-16 text-center">We've built solutions for</h2>
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <div className="flex transition-all duration-700 gap-12 md:gap-20" style={{ minWidth: 0 }}>
                        {visibleClients.map((client, idx) => (
                            <motion.img
                                key={idx}
                                src={client.src}
                                alt={client.alt}
                                className="h-24 w-auto object-contain max-w-[180px] flex-shrink-0"
                                style={{ filter: "grayscale(0%)" }}
                                custom={idx}
                                variants={logoVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                viewport={{ once: true, amount: 0.2 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TopClientsSection; 