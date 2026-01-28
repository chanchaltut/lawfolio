import React from 'react';
import { FaGavel, FaUsers, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience', icon: <FaAward className="text-3xl" /> },
    { number: '2.5k+', label: 'Cases Successfully Resolved', icon: <FaGavel className="text-3xl" /> },
    { number: '100+', label: 'Cyber Crime Cases Handled', icon: <FaShieldHalved className="text-3xl" /> },
    { number: '50+', label: 'Corporate Clients Served', icon: <FaUsers className="text-3xl" /> }
  ];

  const values = [
    {
      title: 'Client-Centric Approach',
      description: 'Every case is unique, and we treat each client with personalized attention, ensuring their legal needs are met with dedication and care.'
    },
    {
      title: 'Ethical Excellence',
      description: 'We maintain the highest standards of professional ethics and integrity in all our legal practices and client interactions.'
    },
    {
      title: 'Innovative Solutions',
      description: 'We combine traditional legal expertise with cutting-edge knowledge of cyber laws and digital regulations to provide modern solutions.'
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in keeping our clients informed at every step, ensuring transparency in our processes and clear communication.'
    }
  ];

  const expertise = [
    'Bank Account Freeze & Defreeze Matters',
    'Online Investment & Trading App Fraud',
    'Crypto Fraud & P2P Trading Disputes',
    'Identity Theft & Impersonation',
    'Social Media Crime & Cyber Harassment',
    'Criminal Defense & Litigation',
    'Corporate & Commercial Law',
    'Civil Disputes & Recovery'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              About <span className="text-[#c9a870]">Juris Associates</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              A client-centric legal consultancy firm specializing in cyber crime, digital fraud, and comprehensive legal solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Introduction */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12 lg:p-16">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                <p>
                  Juris Associates is a full-service legal consultancy firm led by <span className="text-[#c9a870] font-semibold">Adv. Roshan Kumar</span>, a practicing Cyber Crime and Digital Fraud Lawyer with extensive expertise in bank account defreezing, lien removal, and cyber-related financial disputes.
                </p>
                <p>
                  Founded with a vision to provide accessible, expert legal services across India, Juris Associates has built a reputation for delivering practical, timely, and ethical legal solutions. Our firm combines traditional legal expertise with cutting-edge knowledge of cyber laws and evolving digital regulations.
                </p>
                <p>
                  We understand that in today's digital age, legal challenges extend beyond traditional courtrooms. With a strong focus on cyber crime law, we are uniquely positioned to handle complex cases involving digital fraud, online financial disputes, and technology-driven legal matters while maintaining excellence in traditional areas of law.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 sm:p-8 text-center border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <div className="text-[#c9a870] mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-[#c9a870] text-[36px] sm:text-[42px] md:text-[48px] font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10">
              <h3 className="text-white text-[24px] sm:text-[28px] font-bold mb-4 text-[#c9a870]">
                Our Mission
              </h3>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                To protect our clients' legal rights while delivering practical, timely, and ethical legal solutions. We are committed to providing accessible legal services that combine deep legal knowledge with real-world perspectives, ensuring our clients receive the best possible representation in both traditional and modern technology-driven disputes.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10">
              <h3 className="text-white text-[24px] sm:text-[28px] font-bold mb-4 text-[#c9a870]">
                Our Vision
              </h3>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                To be India's most trusted legal consultancy firm, recognized for excellence in cyber crime law and comprehensive legal services. We aim to bridge the gap between traditional legal practice and the evolving digital landscape, ensuring justice and protection for all our clients across the nation.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 sm:p-8 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <h3 className="text-white text-[20px] sm:text-[22px] font-bold mb-3 text-[#c9a870]">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8">
                Our Areas of Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#c9a870] text-lg mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-[15px] sm:text-[16px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6 text-center">
              Why Choose Juris Associates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">🎯</div>
                <h3 className="text-white text-xl font-bold mb-2">Specialized Expertise</h3>
                <p className="text-gray-400 text-sm">Deep knowledge in cyber crime law and digital fraud matters</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">🌐</div>
                <h3 className="text-white text-xl font-bold mb-2">Pan-India Service</h3>
                <p className="text-gray-400 text-sm">Representing clients across all major cities in India</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">⚡</div>
                <h3 className="text-white text-xl font-bold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">Fast turnaround times and immediate attention to urgent matters</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;

