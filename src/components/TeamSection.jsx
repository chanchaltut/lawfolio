import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mostafa Amin',
      role: 'Civil Lawyer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      id: 2,
      name: 'Jack Nolan',
      role: 'Business Lawyer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    },
    {
      id: 3,
      name: 'Austin McGrath',
      role: 'Family Lawyer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
    }
  ];

  const services = [
    'Immigration and Asylum',
    'Entry clearance as a Visitor',
    'Business Immigration',
    'Immigration and Asylum',
    'Business Immigration'
  ];

  return (
    <>
      {/* Team Members Section */}
      <section className="relative bg-[#202020] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-white text-[32px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-bold mb-4 sm:mb-6 leading-[1.2] px-2">
              Connecting You With Our Team<br className="hidden sm:block" />
              <span className="block sm:inline"> Of Professionals</span>
            </h2>
            <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] max-w-[700px] mx-auto px-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group bg-[#2a2a2a] rounded-[15px] sm:rounded-[20px] overflow-hidden hover:bg-[#323232] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Image */}
                <div className="w-full h-[320px] xs:h-[360px] sm:h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Info */}
                <div className="p-6 sm:p-7 md:p-8 text-center border-t-4 border-[#c9a870]">
                  <h3 className="text-white text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#1a1a1a] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-[600px] mx-auto lg:mx-0 px-2">
                Low can be used as an adjective to describe something situated close to the ground or having a small height relative to its surroundings.
              </p>
              
              <p className="text-gray-400 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto lg:mx-0 px-2">
                low can refer to a state of being or condition that is below average or minimal in degree, quantity, or quality. For instance, "After the economic downturn
              </p>

              <button className="group bg-white text-[#1a1a1a] px-7 sm:px-8 md:px-9 py-3 sm:py-4 rounded-full font-bold text-[13px] sm:text-[14px] md:text-[15px] flex items-center gap-3 hover:bg-gray-200 transition-all duration-300 tracking-wide mx-auto lg:mx-0">
                LEARN MORE
                <FaArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side - Services List */}
            <div className="order-1 lg:order-2">
              <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] font-medium group hover:text-[#c9a870] transition-colors duration-300"
                  >
                    <FaCheckCircle className="text-[#c9a870] text-lg sm:text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{service}</span>
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


