import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaScaleBalanced } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const DisputeResolution = () => {
  const services = [
    'Civil & Corporate Litigation: Shareholder disputes, breach of contract, and commercial disagreements',
    'Regulatory & Tribunals: Representation before quasi-judicial authorities and specialized Tribunals (NCLT, NGT, etc.)',
    'Arbitration: Domestic and international arbitration',
    'Property & Intellectual Property: Land ownership, construction, and brand protection disputes',
    'High-stakes Civil Litigation and Criminal Defense',
    'Mediation and Negotiation Services',
    'Appellate Representation'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaScaleBalanced className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Dispute <span className="text-[#c9a870]">Resolution</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              A Proven Track Record of Success in Every Forum.
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
                Dispute resolution is the core of what we do. At The Juris Associates, we don't just "handle cases"—we resolve them. Our litigation team is built on a deep understanding of Indian law and a strategic approach that prioritizes our clients' business goals over endless courtroom battles.
              </p>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                Our team has the reach and the stamina to represent you at every level of the Indian judicial system. We enter every case with a clear set of objectives, focusing on the relief you actually need to move forward. At The Juris Associates, we help you navigate complex legal hurdles so you can emerge from a dispute with your business intact and your interests secured.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              What We Do
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6">
                We believe a win in court is only a win if it makes sense for your bottom line. Our litigators don't work in a vacuum; they collaborate with our corporate and finance experts to make sure our courtroom strategy aligns with your long-term interests. We handle everything from high-stakes civil litigation and criminal defense to complex property and tax disputes.
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
              Need Dispute Resolution Services?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our dispute resolution experts for strategic litigation support.
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

export default DisputeResolution;

