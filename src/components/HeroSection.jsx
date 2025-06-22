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
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-futuristic-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-futuristic-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-futuristic-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Hero Title */}
                <div ref={titleRef} className="mb-8">
                    <h4 className="text-futuristic-cyan-400 text-sm sm:text-base font-semibold tracking-widest mb-4 uppercase animate-fade-in">
                        Next-Generation Development Agency
                    </h4>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                        <span className="block mb-2 text-white">
                            Power Your Ideas with
                        </span>
                        <span className="text-gradient block">
                            AI-Powered Innovation
                        </span>
                    </h1>
                </div>

                {/* Hero Subtitle */}
                <div ref={subtitleRef} className="mb-12 max-w-4xl mx-auto">
                    <HighlightedText className="text-xl sm:text-2xl text-futuristic-cyan-100 leading-relaxed">
                        We create cutting-edge digital experiences that blend artificial intelligence,
                        immersive 3D technology, and futuristic design to transform your vision into reality.
                    </HighlightedText>
                </div>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <button
                        onClick={() => {
                            analytics.trackButtonClick('start_project', 'hero');
                            showQuoteModal();
                        }}
                        className="btn-futuristic text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project →
                    </button>
                    <button
                        onClick={() => {
                            analytics.trackButtonClick('explore_services', 'hero');
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-10 py-4 text-lg font-semibold text-white border-2 border-futuristic-blue-400 rounded-xl overflow-hidden transition-all duration-300 hover:border-futuristic-cyan-400"
                    >
                        <span className="relative z-10">Explore Services</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-futuristic-blue-500/20 to-futuristic-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <InfoCard className="text-center" delay={0.2}>
                        <div className="w-16 h-16 bg-gradient-to-br from-futuristic-blue-500 to-futuristic-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">AI-Powered Solutions</h3>
                        <p className="text-futuristic-cyan-100">Cutting-edge artificial intelligence that learns and adapts to your needs</p>
                    </InfoCard>

                    <InfoCard className="text-center" delay={0.4}>
                        <div className="w-16 h-16 bg-gradient-to-br from-futuristic-purple-500 to-futuristic-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">3D & Immersive</h3>
                        <p className="text-futuristic-cyan-100">Next-generation 3D rendering and immersive user experiences</p>
                    </InfoCard>

                    <InfoCard className="text-center" delay={0.6}>
                        <div className="w-16 h-16 bg-gradient-to-br from-futuristic-cyan-500 to-futuristic-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Future-Ready</h3>
                        <p className="text-futuristic-cyan-100">Built with tomorrow's technology, designed for today's success</p>
                    </InfoCard>
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
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 border-2 border-futuristic-blue-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-futuristic-blue-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 