import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#121212] overflow-hidden">
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
            <h1 className="text-white text-[36px] xs:text-[42px] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[72px] leading-[1.1] font-bold mb-6 sm:mb-8 md:mb-10 tracking-tight px-2 sm:px-0">
              I Proudly Fight<br />
              For Your Rights
            </h1>
            
            <button className="bg-[#c9a870] text-[#1a1a1a] px-6 sm:px-7 md:px-8 py-[14px] sm:py-[15px] md:py-[16px] rounded-full font-bold text-[13px] sm:text-[14px] flex items-center gap-2 sm:gap-3 hover:bg-[#b89860] transition-all hover:gap-3 sm:hover:gap-4 group tracking-wider mx-auto lg:mx-0">
              CONTACT US TODAY
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Gavel Image - Positioned at bottom left - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block absolute bottom-[-80px] xl:bottom-[-120px] left-[-20px] xl:left-[-30px] w-[280px] lg:w-[320px] xl:w-[380px] h-[260px] lg:h-[300px] xl:h-[350px] rounded-[20px] xl:rounded-[25px] overflow-hidden shadow-2xl border-2 xl:border-4 border-[#2a2a2a]">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80" 
                alt="Justice Gavel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content - Lawyer Image */}
          <div className="relative z-10 flex justify-center lg:justify-end pt-6 sm:pt-8 mt-8 lg:mt-0">
            <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[460px] xl:w-[520px] h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[580px] xl:h-[600px] rounded-[20px] sm:rounded-[22px] md:rounded-[25px] overflow-hidden shadow-2xl border-2 sm:border-3 md:border-4 border-[#2a2a2a]">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" 
                alt="Professional Lawyer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Gavel Image - Mobile View (Below main content) */}
        <div className="lg:hidden relative z-10 mt-12 sm:mt-16 flex justify-center">
          <div className="w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[380px] h-[280px] xs:h-[310px] sm:h-[350px] rounded-[20px] sm:rounded-[25px] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#2a2a2a]">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80" 
              alt="Justice Gavel" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

