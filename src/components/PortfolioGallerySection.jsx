import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import airwayHealth from "../assets/images/portfolio/websites/Airway Health/Thumb/AirwayHealth-Cover.jpg";
import chargerQuest from "../assets/images/portfolio/websites/Charger Quest/Thumb/Charger-Quest-cover.jpg";
import techdense from "../assets/images/portfolio/websites/Techdense/Thumb/thumb-img.jpg";
import swiftracks from "../assets/images/portfolio/websites/Swiftracks/Thumb/sr-cover.jpg";
import pourwater from "../assets/images/portfolio/websites/Pourwater/Thumb/Pourwater-Cover-1.jpg";
import versatileDispatch from "../assets/images/portfolio/websites/Versatile Dispatch/Thumb/thumb-img.jpg";
import theLabToronto from "../assets/images/portfolio/websites/The Lab Toronto/Thumb/Cover-7.jpg";
import candidClean from "../assets/images/portfolio/websites/Candid Clean/Thumb/Cover-5.jpg";
import greenDot from "../assets/images/portfolio/websites/Green Dot/Thumb/green-dot-cover.jpg";
import picdin from "../assets/images/portfolio/websites/Picdin/Thumb/picdin-cover.jpg";
import yekrakBook from "../assets/images/portfolio/websites/Yekrak Book/Thumb/Cover-21.webp";
import wellRun from "../assets/images/portfolio/websites/Well Run/Thumb/Cover-20.webp";
import alignApp from "../assets/images/portfolio/websites/Align App/Thumb/AlignApp-Cover.jpg";

const projects = [
    { title: "Airway Health", category: "Websites", img: airwayHealth },
    { title: "Charger Quest", category: "Websites", img: chargerQuest },
    { title: "Techdense", category: "Websites", img: techdense },
    { title: "Swiftracks", category: "SASS Applications", img: swiftracks },
    { title: "Pourwater", category: "Websites", img: pourwater },
    { title: "Versatile Dispatch", category: "Websites", img: versatileDispatch },
    { title: "The Lab Toronto", category: "Websites", img: theLabToronto },
    { title: "Candid Clean", category: "Websites", img: candidClean },
    { title: "Green Dot", category: "Websites", img: greenDot },
    { title: "Picdin", category: "Websites", img: picdin },
    { title: "Yekrak Book", category: "Websites", img: yekrakBook },
    { title: "Well Run", category: "Websites", img: wellRun },
    { title: "Align App", category: "SASS Applications", img: alignApp },
];

const categories = ["All", "Websites", "SASS Applications"];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const PortfolioGallerySection = () => {
    const [active, setActive] = React.useState("All");
    const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={sectionRef}
            id="portfolio"
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="w-full bg-[#f4f7fb] flex flex-col items-center justify-center py-8 px-4"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h5 className="text-[#00e187] text-lg font-semibold tracking-widest mb-2 uppercase text-left">Portfolio</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a0a2d] mb-4 text-left">Our Amazing Work</h2>
                <p className="text-lg text-gray-500 mb-8 max-w-2xl text-left">Here are some recent successful projects where Code Your Idea received positive customer feedback for our services.</p>
                {/* Filter Tabs */}
                <div className="flex gap-8 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`text-lg font-medium transition-colors bg-transparent shadow-none border-none px-[0.5rem] ${active === cat ? "text-[#00e187]" : "text-[#1a0a2d] hover:text-[#00e187]"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2 cursor-pointer"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-4 flex flex-col items-start">
                                <span className="text-[#00e187] text-xs font-semibold uppercase mb-1 text-left">{project.category}</span>
                                <h3 className="text-xl font-bold text-[#1a0a2d] group-hover:text-[#00e187] transition-colors text-left">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default PortfolioGallerySection; 