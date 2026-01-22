import React from 'react';

const LegalSupport = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '2.5k+', label: 'Cases Successfully Resolved' },
    { number: '100+', label: 'Cyber Crime Cases Handled' },
    { number: '50+', label: 'Corporate Clients Served' }
  ];

  return (
    <section id="about" className="relative bg-[#1f1f1f] py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-white text-center text-[32px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-bold leading-[1.2] mb-6 sm:mb-8 px-4 animate-fadeInUp opacity-0">
          About Juris Associates
        </h2>

        {/* Description */}
        <div className="text-center max-w-[900px] mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-20 px-4">
          <p className="text-gray-300 text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-4 animate-fadeInUp opacity-0 animation-delay-200">
            Juris Associates is a client-centric legal consultancy firm led by <span className="text-[#c9a870] font-semibold">Adv. Roshan Kumar</span>, offering advisory and litigation services across all major areas of law, including criminal law, civil disputes, corporate advisory, and regulatory compliance, with particular expertise in cyber crime and digital financial fraud matters.
          </p>
          <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed animate-fadeInUp opacity-0 animation-delay-300">
            Our mission is to protect our clients' legal rights while delivering practical, timely, and ethical legal solutions. With a strong understanding of cyber laws and evolving digital regulations, we are well-equipped to handle both traditional legal matters and modern technology-driven disputes.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          {/* Main Image */}
          <div className="w-full max-w-[1200px] mx-auto mb-0 animate-scaleIn opacity-0 animation-delay-400">
            <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden image-zoom-container card-hover">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                alt="Legal Consultation Meeting"
                className="w-full h-full object-cover image-zoom"
              />
            </div>
          </div>

          {/* Statistics Bar - Overlapping the image */}
          <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 animate-fadeInUp opacity-0 animation-delay-600">
            <div className="bg-[#c9a870] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] shadow-2xl overflow-hidden card-hover">
              {/* Decorative circles in background */}
              <div className="absolute top-4 left-8 w-16 h-16 border-2 border-[#b89860] rounded-full opacity-30 hidden md:block"></div>
              <div className="absolute top-8 left-12 w-10 h-10 border-2 border-[#b89860] rounded-full opacity-30 hidden md:block"></div>
              <div className="absolute bottom-4 right-8 w-20 h-20 border-2 border-[#b89860] rounded-full opacity-30 hidden md:block"></div>
              <div className="absolute bottom-8 right-12 w-12 h-12 border-2 border-[#b89860] rounded-full opacity-30 hidden md:block"></div>

              {/* Stats Grid */}
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-14">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center ${index < 2 ? 'border-b-2 lg:border-b-0 pb-4 lg:pb-0' : ''
                      } ${index === 0 || index === 2 ? 'lg:border-r-2 pr-4 lg:pr-0' : ''
                      } ${index === 1 ? 'lg:border-r-2 lg:pr-0' : ''
                      } border-[#1a1a1a] border-opacity-20`}
                  >
                    <div className="text-[#1a1a1a] text-[36px] xs:text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-bold mb-1 sm:mb-2 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-[#1a1a1a] text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;



