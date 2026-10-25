import React from 'react';
import { FaCheckCircle, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FAQSection from '../../components/FAQSection';
import { BANK_DEFREEZE_FAQS } from '../../seo/faqs';

const BankAccountDefreeze = () => {
  const reasons = [
    'Money from a cyber fraud complaint (NCRP / 1930) reached your account',
    'Crypto P2P sale where the buyer paid with defrauded funds',
    'UPI or IMPS payment received for goods, services or rent',
    'Your account appears in the money trail of an investment or trading app scam',
    'Mistaken identity or a wrongly linked account number',
    'Lien marked on a specific amount on the request of a cyber cell in another state'
  ];

  const process = [
    {
      title: 'Identify the freeze',
      description: 'We obtain the freeze or lien details from your bank: the police station or cyber cell, state, complaint number and amount involved.'
    },
    {
      title: 'Review your transactions',
      description: 'We examine the disputed credits with your records - invoices, P2P trade history, chats - to establish that you received the money in good faith.'
    },
    {
      title: 'Representation to the investigating officer',
      description: 'We send a documented representation to the cyber cell or investigating officer seeking release of the account or restriction of the hold to the disputed amount.'
    },
    {
      title: 'Application before the Magistrate',
      description: 'Where needed, we apply before the jurisdictional Magistrate for release or de-freezing of the account.'
    },
    {
      title: 'High Court writ, where justified',
      description: 'If the freeze is excessive or procedure has not been followed, we evaluate and file a writ petition before the High Court.'
    },
    {
      title: 'Follow-up with the bank',
      description: 'Once the order or police communication is issued, we follow up with the bank until the freeze or lien is actually lifted.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <FaBuildingColumns className="text-[#c9a870] text-6xl sm:text-7xl md:text-8xl" />
            </div>
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Bank Account Freeze, <span className="text-[#c9a870]">Defreeze & Lien Removal</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Bank account frozen by the cyber crime police, or a lien marked on your balance? Our team, led by Adv. Roshan Kumar, helps account holders across India get their accounts released through the correct legal process.
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
                Why Bank Accounts Get Frozen
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                <p>
                  When a cyber fraud is reported on the National Cybercrime Reporting Portal (cybercrime.gov.in) or the 1930 helpline, the police trace where the money went and ask every bank in the chain to put it on hold. If any part of that money reached your account - even through a genuine sale, a crypto P2P trade or a payment from a stranger - your bank may block debits from the entire account or mark a lien on a specific amount.
                </p>
                <p>
                  A frozen account can stop salaries, business payments and EMIs overnight, and in most cases the account holder is not the fraudster. Police usually act under Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (earlier Section 102 CrPC), and the law provides remedies to get the account released or the hold limited to the disputed amount.
                </p>
                <p>
                  At The Juris Associates, bank account defreezing and lien removal is a core part of our cyber crime practice. We handle these matters for individuals, traders and businesses across India, wherever the complaint has been registered.
                </p>
              </div>
            </div>
          </div>

          {/* Common Reasons */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
              Common Situations We Handle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#c9a870] text-xl mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-[15px] sm:text-[16px]">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 text-[#c9a870]">
                How We Get Your Account Released
              </h2>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#c9a870] text-[#1a1a1a] font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-gray-400 text-sm leading-relaxed mt-8">
                Every case depends on its own facts. Timelines vary with the state, the agency and the court involved, and no outcome can be guaranteed.
              </p>
            </div>
          </div>

          <FAQSection faqs={BANK_DEFREEZE_FAQS} title="Bank Account Freeze: Frequently Asked Questions" className="mb-16 sm:mb-20" />

          <p className="text-gray-400 text-center mb-16 sm:mb-20">
            Also see our <Link to="/practice-areas/cyber-crime" className="text-[#c9a870] hover:underline">cyber crime and digital law</Link> practice for online fraud, crypto disputes and cyber harassment.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#c9a870] to-[#b89860] rounded-[20px] p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-[#1a1a1a] text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
              Is Your Bank Account Frozen?
            </h2>
            <p className="text-[#1a1a1a] text-lg mb-8 max-w-2xl mx-auto">
              Share your bank's freeze details with us and we will explain the options available in your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9211957859"
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call: +91 9211957859
              </a>
              <a
                href="https://wa.me/919211957859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
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

export default BankAccountDefreeze;
