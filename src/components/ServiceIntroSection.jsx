import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceIntroSection = ({ id }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } : {}}
            className="w-full bg-white flex flex-col items-center justify-center py-8 px-4"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } } : {}}
                className="flex flex-col items-center"
            >
                <h5 className="text-[#00e187] text-lg font-semibold tracking-widest mb-2 uppercase">Our Services</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-4 text-center">Two Things We Do Exceptionally Well</h2>
                <p className="text-lg text-gray-400 text-center max-w-2xl">We've chosen to focus on just two services so we can deliver exceptional results every time.</p>
            </motion.div>
        </motion.section>
    );
};

export default ServiceIntroSection; 