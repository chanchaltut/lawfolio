import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import roshanProfile from '../assets/roshan_profile.jpeg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adv. Roshan Kumar',
      designation: 'Founder & Principal Advocate',
      specialization: 'Cyber Crime & Digital Law Specialist',
      image: roshanProfile,
      bio: 'A practicing Cyber Crime and Digital Fraud Lawyer with extensive expertise in bank account defreezing, lien removal, and cyber-related financial disputes. Adv. Roshan Kumar has successfully handled hundreds of cyber crime cases and is recognized for his practical approach to complex digital legal matters.',
      expertise: [
        'Bank Account Defreezing & Lien Removal',
        'Cyber Crime Defense & FIR Analysis',
        'Investment & Digital Fraud Matters',
        'Crypto & P2P Trading Disputes',
        'Online Financial Disputes'
      ],
      email: 'roshankgupta479@gmail.com',
      phone: '+91 9211957859',
      experience: '15+ Years',
      cases: '1000+ Cases Handled'
    }
  ];

  const supportTeam = [
    {
      name: 'Legal Research Team',
      description: 'Our dedicated research team ensures thorough case preparation and stays updated with the latest legal developments.'
    },
    {
      name: 'Documentation Specialists',
      description: 'Expert professionals handling all documentation, filing, and compliance requirements with precision.'
    },
    {
      name: 'Client Relations',
      description: 'Committed to providing exceptional client service and maintaining clear communication throughout the legal process.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Our <span className="text-[#c9a870]">Team</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Meet the legal professionals dedicated to protecting your rights and securing your future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Principal Team Member */}
          <div className="mb-16 sm:mb-20">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                      <div className="aspect-square rounded-[20px] overflow-hidden border-4 border-[#c9a870]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-[#c9a870] text-[#1a1a1a] px-4 py-2 rounded-lg font-bold text-sm">
                        {member.experience}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h2 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold mb-2">
                        {member.name}
                      </h2>
                      <p className="text-[#c9a870] text-lg sm:text-xl font-semibold mb-4">
                        {member.designation}
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base mb-6">
                        {member.specialization}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-[#0f0f0f] px-4 py-2 rounded-lg">
                          <span className="text-[#c9a870] font-bold">{member.cases}</span>
                        </div>
                        <div className="bg-[#0f0f0f] px-4 py-2 rounded-lg">
                          <span className="text-[#c9a870] font-bold">{member.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-white text-xl font-bold mb-4">About</h3>
                      <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-white text-xl font-bold mb-4">Areas of Expertise</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {member.expertise.map((area, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#c9a870] rounded-full"></div>
                            <span className="text-gray-300 text-sm sm:text-[15px]">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 bg-[#0f0f0f] hover:bg-[#c9a870] hover:text-[#1a1a1a] text-gray-300 px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <FaEnvelope />
                        <span className="text-sm">Email</span>
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 bg-[#0f0f0f] hover:bg-[#c9a870] hover:text-[#1a1a1a] text-gray-300 px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <FaPhone />
                        <span className="text-sm">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Team */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Our Support Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {supportTeam.map((team, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 sm:p-8 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <h3 className="text-white text-xl font-bold mb-3 text-[#c9a870]">
                    {team.name}
                  </h3>
                  <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed">
                    {team.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Our Team */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 text-center">
              Why Choose Our Team?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">🎓</div>
                <h3 className="text-white font-bold mb-2">Expert Qualifications</h3>
                <p className="text-gray-400 text-sm">Highly qualified legal professionals with specialized expertise</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">⚖️</div>
                <h3 className="text-white font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-400 text-sm">Successfully resolved thousands of cases across India</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">🤝</div>
                <h3 className="text-white font-bold mb-2">Client-Focused</h3>
                <p className="text-gray-400 text-sm">Dedicated to providing personalized legal solutions</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a870] text-4xl mb-4">🚀</div>
                <h3 className="text-white font-bold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">Fast turnaround times for urgent legal matters</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;

