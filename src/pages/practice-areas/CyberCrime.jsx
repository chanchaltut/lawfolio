import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CyberCrime = () => {
  const services = [
    'Bank Account Freeze & Defreeze Matters',
    'Online Investment & Trading App Fraud',
    'Crypto Fraud & P2P Trading Disputes',
    'Identity Theft & Impersonation',
    'Social Media Crime & Cyber Harassment',
    'Online Extortion, Blackmail & Defamation',
    'Wrongful Cyber Allegations & Defense',
    'Digital Financial Fraud Recovery',
    'Cyber Bullying & Online Harassment Cases',
    'Data Privacy & Protection Matters'
  ];

  const whyChooseUs = [
    {
      title: 'Specialized Expertise',
      description: 'Deep understanding of Indian cyber laws including IT Act, 2000 and related regulations'
    },
    {
      title: 'Quick Response',
      description: 'Rapid action on urgent matters like bank account freezes to minimize client impact'
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully handled 100+ cyber crime cases with high success rate'
    },
    {
      title: 'Pan-India Service',
      description: 'Representing clients across all major cities in India'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaShieldHalved className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Cyber Crime & <span className="text-[#c9a870]">Digital Law</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Specialized expertise in cyber crime and digital law matters. Protecting your digital rights and securing your financial interests in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Overview */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6">
                Overview
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                <p>
                  At The Juris Associates, we specialize in cyber crime and digital law, providing expert legal services for matters involving digital fraud, online financial disputes, and cyber-related offenses. Our team has extensive experience in handling complex cyber crime cases with a focus on protecting our clients' rights and interests.
                </p>
                <p>
                  We provide comprehensive legal support for cyber crime matters including bank account freeze and defreeze cases, online investment fraud, cryptocurrency disputes, identity theft, social media crimes, and wrongful cyber allegations. Our approach combines deep understanding of cyber laws with practical solutions tailored to each client's unique situation.
                </p>
                <p>
                  Our specialized practice in cyber crime law positions us uniquely to handle complex digital disputes. We understand the evolving nature of cyber laws and digital regulations, ensuring that our clients receive the most current and effective legal representation. We work closely with law enforcement agencies, financial institutions, and regulatory bodies to achieve the best outcomes for our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#c9a870] text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">{service}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6 text-[#c9a870]">
                What We Do
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6">
                We provide comprehensive legal support for cyber crime matters including bank account freeze and defreeze cases, online investment fraud, cryptocurrency disputes, identity theft, social media crimes, and wrongful cyber allegations. Our approach combines deep understanding of cyber laws with practical solutions tailored to each client's unique situation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">Bank Account Matters</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Quick resolution of frozen bank accounts due to cyber fraud investigations. We work with banks and cyber cells to expedite the defreezing process.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">Digital Fraud Recovery</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Assistance in recovering funds lost to online scams, investment frauds, and cryptocurrency-related frauds through legal channels.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">Cyber Harassment</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Legal protection against online harassment, cyberbullying, and social media crimes with proper documentation and legal action.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">Defense Services</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Strong defense representation for clients facing wrongful cyber crime allegations with proper evidence analysis and legal strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Why Choose Us for Cyber Crime Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 sm:p-8 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 text-[#c9a870]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#c9a870] to-[#b89860] rounded-[20px] p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-[#1a1a1a] text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
              Need Help with a Cyber Crime Matter?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our cyber crime specialists today for immediate assistance with your digital legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9211957859"
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call: +91 9211957859
              </a>
              <Link
                to="/contact"
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Send Message
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CyberCrime;

