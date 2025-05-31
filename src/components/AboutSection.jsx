import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../assets/images/about/about.png";
import shapeOne from "../assets/images/about/shape-one.png";
import shapeTwo from "../assets/images/about/shape-two.png";

const AboutSection = ({ id }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const leftVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };
    const rightVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
    };
    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative overflow-hidden px-4 md:px-0 py-8"
        >
            {/* Left: Image and shapes */}
            <motion.div className="flex-1 flex flex-col items-center justify-center relative h-full min-w-[350px] max-w-[600px]" variants={leftVariants}>
                {/* Main Image */}
                <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <img src={aboutImg} alt="About" className="w-full h-full object-cover rounded-3xl" />
                    {/* Top icon */}
                    <img src={shapeTwo} alt="Code Icon" className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl shadow-lg p-3" />
                    {/* Left icon */}
                    <img src={shapeOne} alt="Magic Icon" className="absolute top-1/3 -left-12 w-20 h-20 bg-white rounded-2xl shadow-lg p-3" />
                    {/* Green badge */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#00e187] to-[#00c76a] w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-white">
                        <span className="text-white text-4xl font-extrabold leading-none">4+</span>
                        <span className="text-white text-lg font-medium mt-2 text-center">Years in the<br />Success</span>
                    </div>
                </div>
            </motion.div>
            {/* Right: Text content */}
            <motion.div className="flex-1 flex flex-col justify-center items-start max-w-xl mt-24 md:mt-0 md:pl-16 z-10 text-left" variants={rightVariants}>
                <h5 className="text-[#00e187] text-lg font-semibold tracking-widest mb-2 uppercase text-left">Who We Are</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-6 leading-tight text-left">Experience<br />Excellence With Us!</h2>
                <p className="text-lg text-gray-500 mb-4 text-left">When We Promise, We Always Follow Through. We Use Technology and Trust to Drive Our Company.</p>
                <p className="text-base text-gray-600 mb-8 text-left">We select only the finest tech experts for our team. They speed up development and save our clients more than a million dollars annually.</p>
                <button className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all">Contact Us</button>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection; 