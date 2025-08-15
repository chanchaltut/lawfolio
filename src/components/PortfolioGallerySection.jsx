import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import analytics from "../utils/analytics";
import rentYaardBanner from "../assets/images/portfolio/Rent Yaard Banner.png";
import jeoBanner from "../assets/images/portfolio/JEO Banner.png";
import totBanner from "../assets/images/portfolio/ToT Banner.png";

const projects = [
    {
        title: "Rent Yaard",
        category: "Rental Marketplace",
        img: rentYaardBanner,
        description: "From zero to launch-ready in 4 weeks.",
        results: "Built for scale, ready for growth",
        website: "https://www.rentyaard.com/"
    },
    {
        title: "JEO Groups",
        category: "Business Platform",
        img: jeoBanner,
        description: "Comprehensive business management solution.",
        results: "Streamlined operations platform",
        website: "https://jeo-official-project.netlify.app/"
    },
    {
        title: "Trails of Teak",
        category: "Hotel & Resort Website",
        img: totBanner,
        description: "Luxury hotel and resort booking platform.",
        results: "Full-stack hospitality website",
        website: "https://trails-of-teak.netlify.app/"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const PortfolioGallerySection = () => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={sectionRef}
            id="portfolio"
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="w-full bg-transparent flex flex-col items-center justify-center py-8 px-4"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Recent Work That Speaks for Itself</h2>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-center">Three major projects that demonstrate our ability to deliver results-driven solutions.</p>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl overflow-hidden group transition-transform hover:-translate-y-2 cursor-pointer backdrop-blur-sm bg-white/5 border border-white/10 shadow-glow-blue hover:shadow-futuristic"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => {
                                analytics.trackPortfolioClick(project.title);
                                window.open(project.website, '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
                            <div className="p-6 flex flex-col items-start">
                                <span className="text-futuristic-cyan-300 text-sm font-semibold uppercase mb-2 text-left">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-futuristic-cyan-300 transition-colors text-left mb-3">{project.title}</h3>
                                <p className="text-white/80 text-lg mb-3 italic text-left">"{project.description}"</p>
                                <p className="text-futuristic-cyan-300 text-sm font-medium text-left">{project.results}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </motion.section>
    );
};

export default PortfolioGallerySection; 