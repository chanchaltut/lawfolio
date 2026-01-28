import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLandmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BankingFinance = () => {
  const services = [
    'Securitization: Managing corporate and personal loan portfolios, including mortgages',
    'Debt Restructuring: Joint lenders\' forums, negotiated settlements, and corporate restructuring',
    'Recovery & Enforcement: Bankruptcy proceedings and security enforcement',
    'Domestic and International Transactions',
    'Acquisition Finance and Infrastructure Projects',
    'Loan Documentation and Compliance',
    'Regulatory Compliance for Financial Institutions',
    'Asset-Based Financing'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaLandmark className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Banking & <span className="text-[#c9a870]">Finance</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Navigating the Complexities of Finance with Practical, High-Level Insight.
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
                At The Juris Associates, we know that in the banking world, a legal strategy is only as good as the business results it delivers. Our team brings together years of experience working alongside financial regulators and major institutions to help our clients move their deals forward with confidence.
              </p>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                We don't just cite law; we understand the industry. Our approach combines deep legal knowledge with a real-world perspective on the banking sector. We see ourselves as your partners, dedicated to finding smart, effective solutions that work for your business—here at home and across the global market.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              What We Do
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6">
                We handle the heavy lifting on both domestic and international transactions. Whether you are navigating acquisition finance or a complex infrastructure project, we provide the legal backbone needed to close the deal. We represent both lenders and borrowers, ensuring that every piece of documentation is not just compliant, but strategically sound.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Our Expertise Includes
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
              Need Banking & Finance Legal Services?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our banking and finance experts for comprehensive legal support.
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

export default BankingFinance;

