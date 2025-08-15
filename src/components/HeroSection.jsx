import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import analytics from "../utils/analytics";
import { showLetsTalkModal, showQuoteModal } from "../utils/modalUtils";
import { HighlightedText } from "./AnimatedText";
import FuturisticCard, { InfoCard } from "./FuturisticCard";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const floatingElementsRef = useRef(null);

    useEffect(() => {
        if (!heroRef.current) return;

        // Hero entrance animation
        const tl = gsap.timeline();

        tl.fromTo(heroRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
        )
            .fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );

        // Floating elements animation
        if (floatingElementsRef.current) {
            const elements = floatingElementsRef.current.children;
            gsap.to(elements, {
                y: -20,
                duration: 3,
                stagger: 0.2,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        }

        // Mouse parallax effect
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;

            gsap.to(floatingElementsRef.current, {
                x: x,
                y: y,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-futuristic-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-futuristic-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-futuristic-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Side - Content */}
                    <div className="text-left">
                        {/* Hero Title */}
                        <div ref={titleRef} className="mb-8">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
                                Websites & Apps That Don't Just Look Good — They Sell.
                            </h1>
                        </div>

                        {/* Hero Subtitle */}
                        <div ref={subtitleRef} className="mb-12 max-w-2xl">
                            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                                We build high-converting digital products that turn clicks into customers. From idea to launch, we're your partner in results.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div ref={ctaRef} className="mb-16">
                            <button
                                onClick={() => {
                                    analytics.trackButtonClick('start_project', 'hero');
                                    showQuoteModal();
                                }}
                                className="btn-futuristic text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
                            >
                                Start Project →
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Animated Orbit */}
                    <div className="relative w-full h-[600px] flex items-center justify-center">
                        {/* Central Element */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 z-20">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">20k+</div>
                                <div className="text-lg text-gray-300">Specialists</div>
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                            {/* Profile Circles - Multiple orbits */}
                            {/* Inner Orbit */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white/50 animate-spin-slow"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-1s' }}></div>

                            {/* Middle Orbit */}
                            <div className="absolute top-1/4 right-0 transform translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-2s' }}></div>
                            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-3s' }}></div>

                            {/* Outer Orbit */}
                            <div className="absolute top-1/6 right-1/6 transform translate-x-1/2 w-18 h-18 bg-gradient-to-br from-red-400 to-pink-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-4s' }}></div>
                            <div className="absolute bottom-1/6 left-1/6 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-5s' }}></div>
                            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-teal-400 to-green-400 rounded-full border-2 border-white/50 animate-spin-slow" style={{ animationDelay: '-6s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Clients / Trust Logos Bar */}
                <div className="mt-20 text-center">
                    <h3 className="text-lg font-semibold text-gray-400 mb-8">
                        Trusted by Brands Who Mean Business
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                        <div className="text-white font-semibold text-lg">Rent Yaard</div>
                        <div className="text-white font-semibold text-lg">Galaxy EdTech</div>
                        <div className="text-white font-semibold text-lg">JEO Groups</div>
                        <div className="text-white font-semibold text-lg">Trails of Teak</div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-futuristic-blue-400 rounded-full opacity-60 animate-float"></div>
                <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-futuristic-cyan-400 rounded-full opacity-80 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-futuristic-purple-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-futuristic-blue-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 border-2 border-futuristic-blue-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-futuristic-blue-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 