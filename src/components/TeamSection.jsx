import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adv. Roshan Kumar',
      role: 'Cyber Crime & Digital Law Specialist',
      image: '/public/roshan_profile.jpeg',
      expertise: 'Bank Account Defreezing, Lien Removal & Cyber Crime Defense',
      phone: '9211957859',
      email: 'roshankgupta479@gmail.com',
      featured: true
    },
    {
      id: 2,
      name: 'Senior Legal Associate',
      role: 'Criminal & Civil Law Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      expertise: 'Expert in criminal defense and civil litigation matters',
      featured: false
    },
    {
      id: 3,
      name: 'Corporate Legal Advisor',
      role: 'Corporate & Commercial Law',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      expertise: 'Providing corporate compliance and commercial contract solutions',
      featured: false
    }
  ];

  const whyChooseUs = [
    'Full-Service Legal Consultancy',
    'Specialized Cyber Crime Practice',
    'Pan-India Client Representation',
    'Ethical, Confidential & Transparent',
    'Quick Response & Professional Handling'
  ];

  return (
    <>
      {/* Team Members Section */}
      <section className="relative bg-[#202020] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-white text-[32px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-bold mb-4 sm:mb-6 leading-[1.2] px-2 animate-fadeInUp opacity-0">
              Meet Our Legal Expert<br className="hidden sm:block" />
              <span className="block sm:inline"> Adv. Roshan Kumar</span>
            </h2>
            <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] max-w-[700px] mx-auto px-4 leading-relaxed animate-fadeInUp opacity-0 animation-delay-200">
              Our team of experienced legal professionals is dedicated to protecting your rights and delivering result-oriented solutions across all practice areas.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`group bg-[#2a2a2a] rounded-[15px] sm:rounded-[20px] overflow-hidden hover:bg-[#323232] card-hover animate-fadeInUp opacity-0 ${
                  member.featured ? 'lg:col-span-3 lg:max-w-[800px] lg:mx-auto' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.2 + 0.3}s`
                }}
              >
                <div className={`${member.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
                  {/* Image */}
                  <div className={`w-full ${
                    member.featured 
                      ? 'h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]' 
                      : 'h-[320px] xs:h-[360px] sm:h-[380px] md:h-[420px] lg:h-[450px]'
                  } overflow-hidden image-zoom-container`}>
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 image-zoom"
                      onError={(e) => {
                        if (member.featured) {
                          e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80";
                        }
                      }}
                    />
                  </div>
                  
                  {/* Info */}
                  <div className={`p-6 sm:p-7 md:p-8 ${
                    member.featured 
                      ? 'border-t-4 lg:border-t-0 lg:border-l-4 border-[#c9a870] lg:flex lg:flex-col lg:justify-center' 
                      : 'text-center border-t-4 border-[#c9a870]'
                  }`}>
                    <h3 className={`text-white text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] ${
                      member.featured ? 'lg:text-[32px] xl:text-[36px]' : ''
                    } font-bold mb-2`}>
                      {member.name}
                    </h3>
                    <p className={`text-[#c9a870] text-[13px] xs:text-[14px] sm:text-[15px] ${
                      member.featured ? 'lg:text-[17px]' : ''
                    } tracking-wide mb-2 font-semibold`}>
                      {member.role}
                    </p>
                    <p className={`text-gray-400 text-[12px] xs:text-[13px] ${
                      member.featured ? 'lg:text-[15px] mb-6' : ''
                    } leading-relaxed mb-4`}>
                      {member.expertise}
                    </p>

                    {/* Featured Contact Info */}
                    {member.featured && (
                      <div className="space-y-3 mb-6">
                        <a 
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-[#c9a870] smooth-hover-fast"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          <span className="font-semibold">{member.phone}</span>
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-[#c9a870] smooth-hover-fast"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                          </svg>
                          <span className="font-semibold text-sm">{member.email}</span>
                        </a>
                      </div>
                    )}

                    {/* Featured CTA Button */}
                    {member.featured && (
                      <a
                        href={`tel:${member.phone}`}
                        className="btn-hover-effect inline-flex items-center gap-2 bg-[#c9a870] text-[#1a1a1a] px-6 py-3 rounded-full font-bold text-[14px] hover:bg-[#b89860] smooth-hover"
                      >
                        Contact Now
                        <FaArrowRight className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative bg-[#1a1a1a] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-white text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold mb-6 sm:mb-8 leading-[1.2] px-2 sm:px-0 animate-fadeInLeft opacity-0">
                Why Choose Juris Associates?
              </h3>

              <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-[600px] mx-auto lg:mx-0 px-2 animate-fadeInLeft opacity-0 animation-delay-200">
                Under the leadership of <span className="text-[#c9a870] font-semibold">Adv. Roshan Kumar</span>, we understand the complexities of modern legal challenges, especially in the digital age. Our specialized approach combines traditional legal expertise with cutting-edge knowledge of cyber laws and digital regulations.
              </p>
              
              <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto lg:mx-0 px-2 animate-fadeInLeft opacity-0 animation-delay-300">
                Whether you're facing cyber crime charges, dealing with online fraud, bank account freezing, navigating corporate compliance, or need assistance with traditional legal matters, Juris Associates is your trusted partner for comprehensive legal solutions.
              </p>

              <a 
                href="tel:9211957859"
                className="btn-hover-effect group bg-white text-[#1a1a1a] px-7 sm:px-8 md:px-9 py-3 sm:py-4 rounded-full font-bold text-[13px] sm:text-[14px] md:text-[15px] flex items-center gap-3 hover:bg-gray-200 smooth-hover tracking-wide mx-auto lg:mx-0 animate-fadeInLeft opacity-0 animation-delay-400"
              >
                SCHEDULE CONSULTATION
                <FaArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Side - Why Choose Us List */}
            <div className="order-1 lg:order-2">
              <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                {whyChooseUs.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] font-medium group hover:text-[#c9a870] smooth-hover-fast hover:translate-x-2 animate-fadeInRight opacity-0"
                    style={{
                      animationDelay: `${index * 0.1 + 0.2}s`
                    }}
                  >
                    <FaCheckCircle className="text-[#c9a870] text-lg sm:text-xl flex-shrink-0 group-hover:scale-110 smooth-hover" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
