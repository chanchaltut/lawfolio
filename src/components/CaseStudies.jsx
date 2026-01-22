import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaShieldHalved, FaGavel, FaHouseChimneyUser, FaBuilding, FaLandmark } from 'react-icons/fa6';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  const practiceAreas = [
    {
      id: 1,
      title: 'Cyber Crime & Digital Law',
      subtitle: 'Core Focus',
      icon: <FaShieldHalved className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      services: [
        'Bank Account Freeze & Defreeze Matters',
        'Online Investment & Trading App Fraud',
        'Crypto Fraud & P2P Trading Disputes',
        'Identity Theft & Impersonation',
        'Social Media Crime & Cyber Harassment',
        'Online Extortion, Blackmail & Defamation',
        'Wrongful Cyber Allegations & Defense'
      ],
      color: '#c9a870'
    },
    {
      id: 2,
      title: 'Criminal Law',
      subtitle: 'Expert Defense',
      icon: <FaGavel className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      services: [
        'FIR, Bail & Anticipatory Bail',
        'Criminal Trial & Appeals',
        'White Collar Crimes',
        'Economic Offences',
        'Cheque Bounce Cases'
      ],
      color: '#b89860'
    },
    {
      id: 3,
      title: 'Civil Law',
      subtitle: 'Comprehensive Solutions',
      icon: <FaHouseChimneyUser className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
      services: [
        'Property & Real Estate Disputes',
        'Recovery Suits',
        'Injunctions & Declarations',
        'Family & Matrimonial Matters',
        'Consumer Protection Cases'
      ],
      color: '#c9a870'
    },
    {
      id: 4,
      title: 'Corporate & Commercial Law',
      subtitle: 'Business Advisory',
      icon: <FaBuilding className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      services: [
        'Company, LLP & Firm Registration',
        'Corporate Compliance & Advisory',
        'Contract Drafting & Review',
        'Regulatory Matters',
        'Employment & Labour Law'
      ],
      color: '#b89860'
    },
    {
      id: 5,
      title: 'Banking & Financial Law',
      subtitle: 'Financial Disputes',
      icon: <FaLandmark className="text-[40px] sm:text-[50px] md:text-[60px]" />,
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
      services: [
        'Lien Removal',
        'NOC from Police/Cyber Cell',
        'Disputed Transaction Resolution',
        'Recovery & Enforcement Proceedings'
      ],
      color: '#c9a870'
    }
  ];

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

  return (
    <section 
      id="practice" 
      className="relative bg-[#202020] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
          <div className="text-center lg:text-left order-2 lg:order-1 practice-carousel animate-fadeInLeft opacity-0 animation-delay-300">
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

            <h3 className="text-white text-[24px] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold leading-[1.3] mb-6 sm:mb-8 md:mb-10 max-w-[400px] mx-auto lg:mx-0">
              {practiceAreas[currentSlide].title}
            </h3>

            {/* Services List */}
            <ul className="text-left max-w-[400px] mx-auto lg:mx-0 mb-8 space-y-2">
              {practiceAreas[currentSlide].services.map((service, index) => (
                <li 
                  key={index} 
                  className="text-gray-400 text-[13px] sm:text-[14px] flex items-start gap-2 smooth-hover-fast hover:text-[#c9a870] hover:translate-x-2"
                  style={{
                    animation: `fadeInLeft 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <span className="text-[#c9a870] mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
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
              className={`relative h-2 rounded-full smooth-hover ${
                index === currentSlide 
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
      `}</style>
    </section>
  );
};

export default CaseStudies;
