import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaHouseChimneyUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CivilLawCorporate = () => {
  const services = [
    'Contract Drafting and Review: Researching, reviewing and drafting contracts and agreements',
    'Civil and Corporate Litigation: Non-criminal legal issues and disputes',
    'Oral Pleadings: Effective representation before judges and adjudicating authorities',
    'Property & Real Estate Disputes',
    'Recovery Suits and Injunctions',
    'Family & Matrimonial Matters',
    'Consumer Protection Cases'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaHouseChimneyUser className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Civil Law & <span className="text-[#c9a870]">Corporate</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Changing facets of Civil and Corporate Litigation Services
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
                Initially, the law was broadly categorized under two main areas namely, civil and criminal. But today, there is one more branch of law namely Corporate law. Civil and corporate litigation involves the determination of all the non-criminal legal issues and disputes between two or more people with the intention of either seeking legal performance of a contract or if that is not a possibility, then to award damages and compensation to the aggrieved party.
              </p>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                We ensure that your lawyer is always at your assistance and provides you with proper and sound legal advice. At every stage of proceedings, we give you an update on the status of your matter and what lies or may lie ahead.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              What We Do
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6">
                Civil and Corporate Litigation services involve researching, reviewing and drafting of contracts, agreements of any type and kind. Once the drafting part is taken care of, the next crucial part is of oral pleadings. Both civil and corporate litigation relies heavily on the lawyer's command over the language as well as his persuasiveness when it comes to convincing the authority.
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
              Need Civil or Corporate Legal Services?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our civil and corporate law experts for comprehensive legal support.
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

export default CivilLawCorporate;

