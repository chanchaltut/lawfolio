import React from 'react';
import { FaGavel, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CriminalLaw = () => {
  const services = [
    'Rights of Arrested Person: Presumption of innocence and legal protections',
    'Circumstantial Evidence: Establishing guilt or innocence through reasoning',
    'Rights of Arrestee: Legal rights, defenses, and proceedings',
    'Law of Evidence: Admissibility of evidence in Indian courts',
    'Bail Proceedings: Advice on bail conditions and procedures',
    'FIR Filing and Quashing',
    'Criminal Trial & Appeals',
    'White Collar Crimes Defense'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaGavel className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Criminal <span className="text-[#c9a870]">Law</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Understanding the Concept of Criminal Legal Services
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
                Criminal legal services regulate violations, including felonies and wrongdoings. Wrongdoings are referred to as offenses against the state. The standard of confirmation for wrongdoings is "past a sensible instability." This field of law is managed by Indian Penal Code, CrPC, Evidence Act etc.
              </p>
              <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                An arrangement of guidelines and statutes that portrays conduct blocked by the organization in light of the way that it cripples and damages open wellbeing and welfare, and that develops control to be constrained for the commission of such acts.
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
              Need Criminal Law Defense?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Contact our criminal law experts for expert defense representation.
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

export default CriminalLaw;

