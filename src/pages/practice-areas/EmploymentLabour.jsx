import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EmploymentLabour = () => {
  const services = [
    'The Essentials: Drafting offer letters, non-disclosure agreements, and company policies',
    'Structural Changes: Employee transfers during business sales and benefits during restructure',
    'Attracting Talent: Setting up ESOPs (Employee Stock Options) and other incentive plans',
    'Staying Compliant: Navigating the latest updates to Indian labour codes',
    'Sector Experience: IT, Hospitality, Manufacturing, and Plantations',
    'Employment Dispute Resolution',
    'Workplace Compliance Audits'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaBriefcase className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Employment & <span className="text-[#c9a870]">Labour Law</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Clear-cut advice for the modern workplace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 sm:mb-20">
            <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6">
                Overview
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-4">
                Managing a team in India means dealing with a lot of red tape. At The Juris Associates, we help you cut through it. We aren't just here to quote the law; we're here to help you manage your people without getting tied up in litigation or regulatory hurdles.
              </p>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                We don't stick to one niche. Our team has worked across everything from IT and Hospitality to Manufacturing and Plantations. We also stay in constant contact with industry groups and the government, so when the rules change, we're usually the first to know. At the end of the day, our goal is simple: to help you build a workplace that is compliant, productive, and free of legal drama.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              What We Do
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6">
                Most employment issues come down to how things are set up at the start. We spend a lot of our time helping companies get their foundations right—drafting contracts that actually protect the business and creating handbooks that employees can actually understand. When things change, like during a merger or a layoff, we step in to make sure the process is handled legally and quietly.
              </p>
            </div>
          </div>

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
                    <p className="text-gray-300 text-[15px] sm:text-[16px]">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#c9a870] to-[#b89860] rounded-[20px] p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-[#1a1a1a] text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
              Need Employment & Labour Law Services?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our employment law experts for workplace legal solutions.
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

export default EmploymentLabour;

