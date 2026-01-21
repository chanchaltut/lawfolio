import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Riding Solo To The Rescue Of Her Beloved Nonprofits',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
      description: 'low can refer to a state of being or offer condition that is below average or minimal in degree, quantity, or quality. For the instance, After the economic'
    },
    {
      id: 2,
      title: 'Corporate Law Excellence In Action',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
      description: 'Successfully navigated complex corporate merger resulting in favorable outcome for all stakeholders involved in the process'
    },
    {
      id: 3,
      title: 'Landmark Property Rights Case',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      description: 'Defended property rights in landmark case that set precedent for future legal proceedings in the region'
    },
    {
      id: 4,
      title: 'Family Law Success Story',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
      description: 'Achieved amicable resolution in complex family matter with focus on protecting children\'s best interests'
    }
  ];

  const brands = [
    { name: 'Calvin Klein', logo: 'Calvin Klein' },
    { name: 'VERSACE', logo: 'VERSACE' },
    { name: 'ZARA', logo: 'ZARA' },
    { name: 'GUCCI', logo: 'GUCCI' },
    { name: 'PRADA', logo: 'PRADA' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="relative bg-[#202020] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-white text-[36px] xs:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[70px] font-bold mb-4 sm:mb-6">
            My Case Studies
          </h2>
          <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] max-w-[700px] mx-auto px-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum.
          </p>
        </div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          
          {/* Left Side - Title and Navigation */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-white text-[24px] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold leading-[1.3] mb-6 sm:mb-8 md:mb-10 max-w-[400px] mx-auto lg:mx-0">
              {caseStudies[currentSlide].title}
            </h3>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#c9a870] hover:text-[#c9a870] transition-all duration-300"
                aria-label="Previous case study"
              >
                <FaArrowLeft className="text-lg sm:text-xl" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#c9a870] hover:text-[#c9a870] transition-all duration-300"
                aria-label="Next case study"
              >
                <FaArrowRight className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>

          {/* Right Side - Image and Description with Counter */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Counter */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 z-10">
                <span className="text-white text-[50px] xs:text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-bold opacity-80">
                  {currentSlide + 1} <span className="text-gray-500">/ {caseStudies.length}</span>
                </span>
              </div>

              {/* Image */}
              <div className="w-full max-w-[550px] mx-auto lg:mx-0 h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden shadow-2xl mb-6 sm:mb-8">
                <img 
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Description */}
              <div className="max-w-[550px] mx-auto lg:mx-0 px-4 sm:px-0">
                <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {caseStudies[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="border-t border-gray-700 pt-10 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="text-gray-600 hover:text-gray-400 transition-colors duration-300 text-center"
              >
                <span className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-light tracking-wider uppercase">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;


