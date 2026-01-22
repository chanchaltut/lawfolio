import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import roshanImage from '../assets/roshan_profile.jpeg';

const ProfessionalLawyer = () => {
  return (
    <section className="relative bg-[#1f1f1f] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] opacity-[0.02]">
        <div className="w-full h-full border-2 border-white rounded-full"></div>
        <div className="absolute top-10 left-10 right-10 bottom-10 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 left-20 right-20 bottom-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left Side - Lawyer Image */}
          <div className="relative z-10 order-2 lg:order-1 animate-fadeInLeft opacity-0 animation-delay-300">
            <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-none h-[450px] xs:h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden shadow-2xl mx-auto lg:mx-0 image-zoom-container card-hover">
              <img
                src={roshanImage}
                alt="Professional Lawyer"
                className="w-full h-full object-cover object-top image-zoom"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative z-10 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-white text-[32px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-bold leading-[1.2] mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0 animate-fadeInRight opacity-0">
              Specialized in Cyber Crime & Digital Law
            </h2>

            <p className="text-gray-400 text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 max-w-[600px] mx-auto lg:mx-0 px-4 sm:px-0 animate-fadeInRight opacity-0 animation-delay-200">
              At Juris Associates, we combine traditional legal expertise with cutting-edge knowledge of cyber laws and digital regulations. Our specialized practice in cyber crime law positions us uniquely to handle complex cases involving:
            </p>

            <ul className="text-left max-w-[600px] mx-auto lg:mx-0 mb-8 sm:mb-10 md:mb-12 space-y-3 px-4 sm:px-0 animate-fadeInRight opacity-0 animation-delay-300">
              <li className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] flex items-start gap-3">
                <span className="text-[#c9a870] mt-1">✓</span>
                <span>Bank account freeze/defreeze and financial cyber disputes</span>
              </li>
              <li className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] flex items-start gap-3">
                <span className="text-[#c9a870] mt-1">✓</span>
                <span>Online fraud, crypto scams, and trading app disputes</span>
              </li>
              <li className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] flex items-start gap-3">
                <span className="text-[#c9a870] mt-1">✓</span>
                <span>Social media crimes and digital harassment cases</span>
              </li>
              <li className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] flex items-start gap-3">
                <span className="text-[#c9a870] mt-1">✓</span>
                <span>Traditional criminal, civil, and corporate matters</span>
              </li>
            </ul>

            <a href="tel:9211957859" className="btn-hover-effect group bg-[#c9a870] text-[#1a1a1a] px-7 sm:px-8 md:px-9 py-3 sm:py-4 rounded-full font-bold text-[13px] sm:text-[14px] md:text-[15px] flex items-center gap-3 hover:bg-[#b89860] smooth-hover tracking-wide mx-auto lg:mx-0 animate-fadeInRight opacity-0 animation-delay-500">
              GET LEGAL ADVICE
              <FaArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalLawyer;



