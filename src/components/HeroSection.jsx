import React from "react";
import heroImg1 from "../assets/images/portfolio/websites/The Lab Toronto/1-25.jpg";
import heroImg2 from "../assets/images/portfolio/websites/The Lab Toronto/8-7.jpg";

const HeroSection = () => (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8fbff] to-[#f3f7fa] flex items-center justify-center relative overflow-hidden mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-0 gap-8 md:gap-0">
            {/* Left Content */}
            <div className="flex-1 max-w-xl z-10 w-full text-center md:text-left">
                <h4 className="text-[#00e187] text-base md:text-lg font-semibold tracking-widest mb-3 md:mb-4 uppercase">Web and App Development</h4>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a0a2d] leading-tight mb-4 md:mb-6">
                    Exceptional web & <br className="hidden xs:inline" /> app empowerment
                </h1>
                <p className="text-base xs:text-lg text-gray-600 mb-6 md:mb-8">
                    Elevate your business with our cutting-edge web and app development services, tailored to your needs.
                </p>
                <button className="bg-[#00e187] hover:bg-[#00c76a] text-white font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full text-base md:text-lg shadow-lg transition-all">
                    Get Your Custom App Now
                </button>
            </div>
            {/* Right Images */}
            <div className="flex-1 flex items-center justify-center relative z-10 min-w-[220px] min-h-[260px] md:min-w-[350px] md:min-h-[420px] w-full">
                <div className="relative w-[220px] h-[260px] md:w-[350px] md:h-[420px] flex flex-col items-center justify-center">
                    <img src={heroImg1} alt="Hero 1" className="rounded-2xl md:rounded-3xl w-[180px] h-[120px] md:w-[320px] md:h-[220px] object-cover shadow-xl absolute top-0 left-1/2 -translate-x-1/2 z-20" />
                    <img src={heroImg2} alt="Hero 2" className="rounded-2xl md:rounded-3xl w-[120px] h-[90px] md:w-[220px] md:h-[180px] object-cover shadow-lg absolute bottom-0 left-0 z-10" />
                    {/* Soft background effect */}
                    <div className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-32 h-32 md:w-72 md:h-72 bg-[#00e187]/20 rounded-3xl blur-2xl z-0"></div>
                    <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-32 md:h-32 bg-[#a5f3fc]/30 rounded-full blur-2xl z-0"></div>
                </div>
            </div>
        </div>
        {/* Decorative dots */}
        <div className="hidden md:block absolute top-32 left-1/2 -translate-x-1/2 z-0">
            <div className="flex gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 bg-[#00e187] rounded-full opacity-40"></span>
                ))}
            </div>
        </div>
    </section>
);

export default HeroSection; 