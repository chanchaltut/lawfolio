import React from 'react';

const Marquee = () => {
  const marqueeText = [
    'JUSTICE',
    'INTEGRITY', 
    'EXCELLENCE',
    'TRUST',
    'EXPERTISE',
    'CONFIDENTIAL'
  ];

  return (
    <section className="relative bg-[#1a1a1a] border-y border-[#2a2a2a] overflow-hidden py-6 sm:py-8 md:py-10 animate-fadeIn opacity-0 animation-delay-200">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set */}
          <div className="marquee-text flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {marqueeText.map((text, index) => (
              <React.Fragment key={`first-${index}`}>
                <span className="text-[#3a3a3a] text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ textShadow: '2px 2px 0px #2a2a2a' }}>
                  {text}
                </span>
                <span className="text-[#c9a870] text-[30px] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px]">✦</span>
              </React.Fragment>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="marquee-text flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {marqueeText.map((text, index) => (
              <React.Fragment key={`second-${index}`}>
                <span className="text-[#3a3a3a] text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ textShadow: '2px 2px 0px #2a2a2a' }}>
                  {text}
                </span>
                <span className="text-[#c9a870] text-[30px] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px]">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;



