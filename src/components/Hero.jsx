import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaChevronLeft, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollToTopOpacity, setScrollToTopOpacity] = useState(0);
  const intervalRef = useRef(null);
  const mouseMoveTimeoutRef = useRef(null);
  const lastMouseMoveTimeRef = useRef(Date.now());
  const shouldShowButtonRef = useRef(false);

  const slides = [
    {
      id: 1,
      redHeading: "Expert Legal Advisory:",
      whiteHeading: "Your Rights, Our Priority",
      description: "Experience the difference with Juris Associates, where every client's story is heard and every legal challenge is met with unwavering dedication. We're here to defend your rights and secure your future.",
      ctaText: "LEARN MORE ABOUT US",
      ctaLink: "/about",
      backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
    },
    {
      id: 2,
      redHeading: "Explore Our Services:",
      whiteHeading: "Every Sector, Every Need",
      description: "Discover the breadth of our legal expertise across various industries and sectors. Juris Associates provides clear, effective legal strategies designed for your unique challenges.",
      ctaText: "EXPLORE OUR PRACTICE AREAS",
      ctaLink: "/#practice",
      backgroundImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
    },
    {
      id: 3,
      redHeading: "Connect with Confidence:",
      whiteHeading: "We're Here to Help",
      description: "Ready for a legal partner who truly listens? Reach out to Juris Associates today for personalized service and expert advice tailored to your world.",
      ctaText: "CONTACT US NOW",
      ctaLink: "/contact",
      backgroundImage: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=1920&q=80"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000); // Change slide every 6 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  // Scroll to top button visibility and opacity logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 1.8; // 180vh

      if (scrollPosition >= threshold) {
        shouldShowButtonRef.current = true;
        setShowScrollToTop(true);
      } else {
        shouldShowButtonRef.current = false;
        setShowScrollToTop(false);
        setScrollToTopOpacity(0);
      }
    };

    const handleMouseMove = () => {
      lastMouseMoveTimeRef.current = Date.now();

      // Show immediately on mouse movement if button should be visible
      if (shouldShowButtonRef.current) {
        setScrollToTopOpacity(1);

        // Clear existing timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }

        // Set timeout to fade after 3000ms of inactivity
        mouseMoveTimeoutRef.current = setTimeout(() => {
          const timeSinceLastMove = Date.now() - lastMouseMoveTimeRef.current;
          if (timeSinceLastMove >= 3000 && shouldShowButtonRef.current) {
            setScrollToTopOpacity(0);
          }
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      // If we're not on home page, navigate first
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => {
            const element = document.querySelector(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="relative min-h-screen h-screen overflow-hidden group">
        {/* Slider Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.backgroundImage}
                  alt={slide.whiteHeading}
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80";
                  }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
                  {/* Golden Heading */}
                  <h2
                    className={`text-[#c9a870] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: '0.2s' }}
                  >
                    {slide.redHeading}
                  </h2>

                  {/* White Heading */}
                  <h1
                    className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-700 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: '0.4s' }}
                  >
                    {slide.whiteHeading}
                  </h1>

                  {/* Description */}
                  <p
                    className={`text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: '0.6s' }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-700 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: '0.8s' }}
                  >
                    <button
                      onClick={() => scrollToSection(slide.ctaLink)}
                      className="bg-[#c9a870] hover:bg-[#b89860] text-[#1a1a1a] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-md font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Transparent by default, visible on hover with golden color */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-transparent group-hover:bg-[#c9a870]/90 text-white w-10 h-32 sm:w-12 sm:h-36 md:w-14 md:h-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-transparent group-hover:bg-[#c9a870]/90 text-white w-10 h-32 sm:w-12 sm:h-36 md:w-14 md:h-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
        </button>

        {/* Floating Buttons Container - Bottom Right */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
          {/* WhatsApp Button - Enhanced UI */}
          <a
            href="https://wa.me/919211957859"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-[#c9a870] to-[#b89860] hover:from-[#b89860] hover:to-[#a88750] text-[#1a1a1a] px-3 sm:px-4 py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[50px] sm:min-w-[140px] w-[50px] sm:w-auto border border-[#c9a870]/20"
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaWhatsapp className="text-base sm:text-lg flex-shrink-0 relative z-10" />
            <span className="hidden sm:inline font-bold text-xs sm:text-sm whitespace-nowrap relative z-10">WhatsApp</span>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#c9a870] to-[#b89860] rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10"></div>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-[#c9a870] w-8'
                : 'bg-white/50 w-2 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Scroll to Top Button - Bottom Right, above WhatsApp */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-br from-[#c9a870] to-[#b89860] hover:from-[#b89860] hover:to-[#a88750] text-[#1a1a1a] w-14 h-14 rounded-lg flex items-center justify-center transition-opacity duration-700 ease-in-out shadow-lg hover:shadow-xl border border-[#c9a870]/20 group"
          style={{ opacity: scrollToTopOpacity }}
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <FaArrowUp className="text-lg relative z-10" />
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#c9a870] to-[#b89860] rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10"></div>
        </button>
      )}
    </>
  );
};

export default Hero;
