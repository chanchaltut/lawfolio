import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    practiceArea: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        practiceArea: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Office Location',
      details: ['Kolkata, West Bengal', 'India'],
      link: null
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone Number',
      details: ['+91 9211957859'],
      link: 'tel:9211957859'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Address',
      details: ['roshankgupta479@gmail.com'],
      link: 'mailto:roshankgupta479@gmail.com'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      details: ['+91 9211957859'],
      link: 'https://wa.me/919211957859'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 10:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      link: null
    }
  ];

  const practiceAreas = [
    'Cyber Crime & Digital Law',
    'Banking & Finance',
    'Criminal Law',
    'Civil Law & Corporate',
    'Corporate & Commercial',
    'Dispute Resolution',
    'Employment & Labour Law',
    'Family Estates & Trust Planning',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Contact <span className="text-[#c9a870]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with our legal experts. We're here to help you navigate your legal challenges with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
            
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-[15px] p-6 border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#c9a870] flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-bold mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.includes('wa.me') ? '_blank' : undefined}
                              rel={info.link.includes('wa.me') ? 'noopener noreferrer' : undefined}
                              className="text-gray-400 hover:text-[#c9a870] transition-colors text-[14px] sm:text-[15px]"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-[14px] sm:text-[15px]">
                              {detail}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10">
                <h2 className="text-white text-[28px] sm:text-[32px] font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="practiceArea" className="block text-gray-300 text-sm font-semibold mb-2">
                        Practice Area
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                      >
                        <option value="">Select Practice Area</option>
                        {practiceAreas.map((area, index) => (
                          <option key={index} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors resize-none"
                      placeholder="Please provide details about your legal matter..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#c9a870] hover:bg-[#b89860] text-[#1a1a1a] px-8 py-4 rounded-lg font-bold text-[15px] sm:text-[16px] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 border border-[#c9a870]/20">
            <h3 className="text-white text-[24px] font-bold mb-4 text-center">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto">
              For urgent legal matters, please call us directly or reach out via WhatsApp for faster response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9211957859"
                className="bg-[#c9a870] hover:bg-[#b89860] text-[#1a1a1a] px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now: +91 9211957859
              </a>
              <a
                href="https://wa.me/919211957859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;

