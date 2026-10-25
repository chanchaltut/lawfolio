import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Answers stay in the DOM when collapsed, so crawlers and AI assistants can read them.
const FAQSection = ({ faqs, title = 'Frequently Asked Questions', className = '' }) => {
  return (
    <section className={className} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-8 sm:mb-12 text-center">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-[#1a1a1a] rounded-[15px] border border-[#2a2a2a] hover:border-[#c9a870] open:border-[#c9a870] transition-all duration-300"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-white text-[16px] sm:text-[18px] font-semibold">{faq.q}</h3>
              <FaChevronDown className="text-[#c9a870] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="px-6 pb-6 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
