import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#121212] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circle pattern */}
        <div className="absolute top-[15%] left-[-20%] sm:left-[-15%] md:left-[-10%] w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] opacity-[0.03]">
          <div className="w-full h-full border border-white rounded-full"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 sm:top-10 sm:left-10 sm:right-10 sm:bottom-10 md:top-14 md:left-14 md:right-14 md:bottom-14 border border-white rounded-full"></div>
          <div className="absolute top-16 left-16 right-16 bottom-16 sm:top-20 sm:left-20 sm:right-20 sm:bottom-20 md:top-28 md:left-28 md:right-28 md:bottom-28 border border-white rounded-full"></div>
          <div className="absolute top-24 left-24 right-24 bottom-24 sm:top-28 sm:left-28 sm:right-28 sm:bottom-28 md:top-40 md:left-40 md:right-40 md:bottom-40 border border-white rounded-full"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-9rem)] md:min-h-[calc(100vh-8rem)]">

          {/* Left Content */}
          <div className="relative z-10 pt-4 sm:pt-8 md:pt-12 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6 animate-fadeInUp opacity-0 animation-delay-100">
              <span className="bg-[#c9a870] bg-opacity-10 border border-[#c9a870] text-[#c9a870] px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wider">
                CYBER CRIME SPECIALIST
              </span>
            </div>

            <h1 className="text-white text-[36px] xs:text-[42px] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[72px] leading-[1.1] font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0 animate-fadeInUp opacity-0 animation-delay-200">
              Adv. Roshan Kumar
            </h1>

            <h2 className="text-[#c9a870] text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-6 sm:mb-8 px-2 sm:px-0 animate-fadeInUp opacity-0 animation-delay-300">
              Cyber Crime & Corporate Legal Consultant
            </h2>

            <p className="text-gray-300 text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-[600px] mx-auto lg:mx-0 px-2 sm:px-0 animate-fadeInUp opacity-0 animation-delay-400">
              Specializing in bank account defreezing, lien removal, and cyber-related financial disputes. Providing PAN-India legal support for investment fraud, crypto and P2P trading issues, and wrongful cyber crime implications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 animate-fadeInUp opacity-0 animation-delay-500">
              <a href="tel:9211957859" className="flex items-center gap-2 text-gray-400 text-[13px] sm:text-[14px] hover:text-[#c9a870] smooth-hover-fast">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold">9211957859</span>
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="text-gray-400 text-[13px] sm:text-[14px] flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Kolkata, West Bengal
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 animate-fadeInUp opacity-0 animation-delay-600">
              <span className="text-gray-400 text-[12px] sm:text-[13px] tracking-wider">📍 PAN-India Practice</span>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="text-gray-400 text-[12px] sm:text-[13px] tracking-wider">⚖️ Bank Account Defreezing Expert</span>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="text-gray-400 text-[12px] sm:text-[13px] tracking-wider">🔐 Cyber Law Specialist</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start animate-fadeInUp opacity-0 animation-delay-700">
              <a href="tel:9211957859" className="btn-hover-effect bg-[#c9a870] text-[#1a1a1a] px-6 sm:px-7 md:px-8 py-[14px] sm:py-[15px] md:py-[16px] rounded-full font-bold text-[13px] sm:text-[14px] flex items-center gap-2 sm:gap-3 hover:bg-[#b89860] smooth-hover group tracking-wider">
                FREE CONSULTATION
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a href="mailto:roshankgupta479@gmail.com" className="border-2 border-[#c9a870] text-[#c9a870] px-6 sm:px-7 md:px-8 py-[14px] sm:py-[15px] md:py-[16px] rounded-full font-bold text-[13px] sm:text-[14px] flex items-center gap-2 sm:gap-3 hover:bg-[#c9a870] hover:text-[#1a1a1a] smooth-hover tracking-wider">
                EMAIL US
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Lawyer Image */}
          <div className="relative z-10 flex justify-center lg:justify-end pt-6 sm:pt-8 mt-8 lg:mt-0">
            <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[460px] xl:w-[520px] h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[580px] xl:h-[600px] rounded-[20px] sm:rounded-[22px] md:rounded-[25px] overflow-hidden shadow-2xl border-2 sm:border-3 md:border-4 border-[#c9a870] animate-scaleIn opacity-0 animation-delay-300 image-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Professional Legal Consultant - Cyber Crime Lawyer"
                className="w-full h-full object-cover object-top image-zoom"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80";
                }}
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a] bg-opacity-90 backdrop-blur-sm p-4 rounded-xl border border-[#c9a870]">
                <p className="text-[#c9a870] font-bold text-[14px] sm:text-[15px] mb-1">Adv. Roshan Kumar</p>
                <p className="text-gray-300 text-[12px] sm:text-[13px]">Bank Account Defreezing & Lien Removal Expert</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default Hero;
