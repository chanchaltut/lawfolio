import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import icon1 from "../assets/images/icons/icon-1.png";
import icon2 from "../assets/images/icons/icon-2.png";
import icon3 from "../assets/images/icons/icon-3.png";
import icon4 from "../assets/images/icons/icon-4.png";
import serviceSide from "../assets/images/service/shape-one.png";

const services = [
    {
        icon: icon1,
        title: "Web and App Development",
        desc: "Code Your Idea offers comprehensive web and mobile app development solutions, harnessing cutting-edge technologies to bring your ideas to life.",
    },
    {
        icon: icon2,
        title: "UI/UX Design",
        desc: "Code Your Idea delivers intuitive UI/UX solutions, transforming user experiences into captivating visual journeys.",
    },
    {
        icon: icon3,
        title: "Digital Marketing",
        desc: "Code Your Idea amplifies your brand's reach through dynamic digital marketing solutions, driving engagement and growth across online platforms.",
    },
    {
        icon: icon4,
        title: "Search Engine Optimization",
        desc: "Code Your Idea elevates your online presence with SEO solutions that propel your website's visibility and rankings to new heights.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

const ServicesSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } : {}}
            className="w-full bg-[#f4f7fb] flex flex-col items-center justify-center py-8 px-4"
        >
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 z-10 relative">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-2xl shadow-xl border-t-4 border-[#00e187] p-8 flex flex-col md:flex-row items-start gap-6 min-h-[220px] hover:shadow-2xl transition-shadow text-left"
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-[#1a0a2d] mb-2 text-left">{service.title}</h3>
                            <p className="text-gray-600 text-base text-left">{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Decorative background shape */}
            <img src={serviceSide} alt="decor" className="hidden md:block absolute right-0 bottom-0 w-1/3 max-w-[400px] z-0 pointer-events-none select-none" />
        </motion.section>
    );
};

export default ServicesSection; 