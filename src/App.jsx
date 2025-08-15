import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import LetsBuildSuccessSection from './components/LetsBuildSuccessSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioGallerySection from './components/PortfolioGallerySection';
import TestimonialSection from './components/TestimonialSection';
import TopClientsSection from './components/TopClientsSection';
import ContactFooterSection from './components/ContactFooterSection';
import ScrollToTop from './components/ScrollToTop';
import ThreeBackground from './components/ThreeBackground';
import CursorMask from './components/CursorMask';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    const initAnimations = () => {
      // Smooth reveal animations for sections
      gsap.utils.toArray('section, .section').forEach((section, index) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    };

    // Wait for components to mount
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <HeroSection />
          <AboutSection id="about" />
          <StatsSection id="stats" />
          <ServicesSection id="services" />
          <PortfolioGallerySection id="portfolio" />
          <LetsBuildSuccessSection />
          <TestimonialSection id="testimonials" />
          <TopClientsSection />
          <ContactFooterSection id="contact" />
        </main>
        <ScrollToTop />
      </div>

      {/* Floating particles overlay */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-float opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-slow opacity-70"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-pulse-slow opacity-50"></div>
      </div>

      {/* Premium Cursor Mask - temporarily disabled */}
      {/* <CursorMask /> */}
    </div>
  );
}

export default App;
