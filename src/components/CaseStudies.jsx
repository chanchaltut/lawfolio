import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaShieldHalved, FaGavel, FaHouseChimneyUser, FaBuilding, FaLandmark, FaScaleBalanced, FaBriefcase, FaHeart } from 'react-icons/fa6';
import { PRACTICE_AREAS } from '../utils/constants';
import { PRACTICE_AREA_ROUTES } from '../utils/practiceAreaRoutes';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Icon mapping for practice areas
  const iconMap = {
    'fa-shield-halved': FaShieldHalved,
    'fa-gavel': FaGavel,
    'fa-house-chimney-user': FaHouseChimneyUser,
    'fa-building': FaBuilding,
    'fa-landmark': FaLandmark,
    'fa-scale-balanced': FaScaleBalanced,
    'fa-briefcase': FaBriefcase,
    'fa-heart': FaHeart
  };

  // Transform practice areas data for component use
  const practiceAreas = PRACTICE_AREAS.map((area, index) => {
    const IconComponent = iconMap[area.icon] || FaShieldHalved;
    return {
      ...area,
      title: area.category,
      icon: <IconComponent className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      color: index % 2 === 0 ? '#c9a870' : '#b89860'
    };
  });

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % practiceAreas.length);
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, practiceAreas.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % practiceAreas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + practiceAreas.length) % practiceAreas.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Swipe detection for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      id="practice"
      className="relative bg-[#202020] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-white text-[36px] xs:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[70px] font-bold mb-4 sm:mb-6 animate-fadeInUp opacity-0">
            Our Practice Areas
          </h2>
          <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] max-w-[700px] mx-auto px-4 leading-relaxed animate-fadeInUp opacity-0 animation-delay-200">
            Juris Associates provides comprehensive legal services across multiple domains, with specialized expertise in cyber crime and digital law under the guidance of Adv. Roshan Kumar.
          </p>
        </div>

        {/* Practice Area Content with Smooth Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">

          {/* Left Side - Title, Icon and Navigation */}
          <div className="text-center lg:text-left order-2 lg:order-1 practice-carousel animate-fadeInLeft opacity-0 animation-delay-300 h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex flex-col justify-between">
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="text-[#c9a870] smooth-hover">
                  {practiceAreas[currentSlide].icon}
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-[#c9a870] text-[#1a1a1a] px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wider mb-4 smooth-hover hover:scale-105">
                  {practiceAreas[currentSlide].subtitle}
                </span>
              </div>

              <Link 
                to={PRACTICE_AREA_ROUTES[practiceAreas[currentSlide].category] || '#'}
                className="block"
              >
                <h3 className="text-white text-[24px] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold leading-[1.3] mb-4 sm:mb-6 max-w-[500px] mx-auto lg:mx-0 hover:text-[#c9a870] transition-colors">
                  {practiceAreas[currentSlide].title}
                </h3>
              </Link>

              {/* Description */}
              {practiceAreas[currentSlide].description && (
                <p className="text-[#c9a870] text-[14px] sm:text-[15px] md:text-[16px] font-semibold mb-4 max-w-[500px] mx-auto lg:mx-0">
                  {practiceAreas[currentSlide].description}
                </p>
              )}

              {/* Overview */}
              {practiceAreas[currentSlide].overview && (
                <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mb-4 max-w-[500px] mx-auto lg:mx-0">
                  {practiceAreas[currentSlide].overview}
                </p>
              )}

              {/* Services List */}
              <ul className="text-left max-w-[500px] mx-auto lg:mx-0 mb-6 space-y-2">
                {practiceAreas[currentSlide].services.slice(0, 5).map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-[12px] sm:text-[13px] flex items-start gap-2 smooth-hover-fast hover:text-[#c9a870] hover:translate-x-2"
                    style={{
                      animation: `fadeInLeft 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <span className="text-[#c9a870] mt-1 flex-shrink-0">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Arrows - Fixed at bottom (Hidden on mobile, visible on desktop) */}
            <div className="hidden lg:flex items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-4 flex-shrink-0">
              <button
                onClick={prevSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#c9a870] hover:text-[#c9a870] smooth-hover hover:scale-110"
                aria-label="Previous practice area"
              >
                <FaArrowLeft className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#c9a870] hover:text-[#c9a870] smooth-hover hover:scale-110"
                aria-label="Next practice area"
              >
                <FaArrowRight className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>

          {/* Right Side - Image with Counter */}
          <div className="order-1 lg:order-2 animate-fadeInRight opacity-0 animation-delay-400">
            <div className="relative">
              {/* Counter */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 z-10">
                <span className="text-white text-[50px] xs:text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-bold opacity-80">
                  {currentSlide + 1} <span className="text-gray-500">/ {practiceAreas.length}</span>
                </span>
              </div>

              {/* Image with smooth transition */}
              <div className="w-full max-w-[550px] mx-auto lg:mx-0 h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden shadow-2xl practice-card image-zoom-container">
                <img
                  src={practiceAreas[currentSlide].image}
                  alt={practiceAreas[currentSlide].title}
                  className="w-full h-full object-cover practice-carousel image-zoom"
                  key={currentSlide}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Practice Area Indicators with Auto-scroll Progress */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 animate-fadeInUp opacity-0 animation-delay-600">
          {practiceAreas.map((area, index) => (
            <button
              key={area.id}
              onClick={() => goToSlide(index)}
              className={`relative h-2 rounded-full smooth-hover ${index === currentSlide
                ? 'w-12 bg-[#c9a870]'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to ${area.title}`}
            >
              {/* Progress bar for active slide */}
              {index === currentSlide && !isPaused && (
                <div
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  style={{
                    animation: 'progressBar 4s linear forwards',
                    transformOrigin: 'left'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Detailed Content Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-5xl mx-auto animate-fadeInUp opacity-0 animation-delay-700">
          <div className="bg-[#1a1a1a] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] max-h-[700px] overflow-y-auto practice-carousel">
            {/* What We Do Section */}
            {practiceAreas[currentSlide].whatWeDo && (
              <div className="mb-8">
                <h4 className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4 text-[#c9a870]">
                  What We Do
                </h4>
                <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  {practiceAreas[currentSlide].whatWeDo}
                </p>
              </div>
            )}

            {/* Our Expertise Includes / Services */}
            <div className="mb-8">
              <h4 className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4 text-[#c9a870]">
                Our Expertise Includes
              </h4>
              <ul className="space-y-3">
                {practiceAreas[currentSlide].services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] flex items-start gap-3"
                  >
                    <span className="text-[#c9a870] mt-1 flex-shrink-0">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Juris Associates Difference */}
            {practiceAreas[currentSlide].difference && (
              <div>
                <h4 className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4 text-[#c9a870]">
                  The Juris Associates Difference
                </h4>
                <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  {practiceAreas[currentSlide].difference}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Custom scrollbar for practice area sections */
        .practice-carousel::-webkit-scrollbar {
          width: 6px;
        }

        .practice-carousel::-webkit-scrollbar-track {
          background: #2a2a2a;
          border-radius: 10px;
        }

        .practice-carousel::-webkit-scrollbar-thumb {
          background: #c9a870;
          border-radius: 10px;
        }

        .practice-carousel::-webkit-scrollbar-thumb:hover {
          background: #b89860;
        }

        /* For Firefox */
        .practice-carousel {
          scrollbar-width: thin;
          scrollbar-color: #c9a870 #2a2a2a;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
