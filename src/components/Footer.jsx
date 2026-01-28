import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jurisLogo from '../assets/jurisLogo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/#practice' },
    { name: 'Insights', href: '/insights' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const practiceAreas = [
    'Cyber Crime & Digital Law',
    'Banking & Finance',
    'Criminal Law',
    'Civil Law & Corporate',
    'Corporate & Commercial',
    'Dispute Resolution',
    'Employment & Labour Law',
    'Family Estates & Trust Planning'
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/jurisassociates', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/jurisassociates', label: 'Twitter' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/jurisassociates', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/jurisassociates', label: 'Instagram' }
  ];

  return (
    <footer id="contact" className="relative bg-[#0f0f0f] border-t border-[#2a2a2a]">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Column 1 - Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 z-50 mb-6">
              <img src={jurisLogo} alt="Juris Associates" className="w-60 h-auto" />
            </Link>

            <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed mb-6 animate-fadeInUp opacity-0 animation-delay-100">
              Full-service legal consultancy led by <span className="text-[#c9a870] font-semibold">Adv. Roshan Kumar</span>, specializing in cyber crime, digital fraud, and financial cyber disputes. Pan-India legal services with expertise you can trust.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-fadeInUp opacity-0 animation-delay-200">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[#c9a870] hover:text-[#1a1a1a]"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="animate-fadeInUp opacity-0 animation-delay-300">
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="footer-link text-gray-400 text-[14px] sm:text-[15px] inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Practice Areas */}
          <div className="animate-fadeInUp opacity-0 animation-delay-400">
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Practice Areas
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {practiceAreas.map((area, index) => {
                const routeMap = {
                  'Cyber Crime & Digital Law': '/practice-areas/cyber-crime',
                  'Banking & Finance': '/practice-areas/banking-finance',
                  'Criminal Law': '/practice-areas/criminal-law',
                  'Civil Law & Corporate': '/practice-areas/civil-law-corporate',
                  'Corporate & Commercial': '/practice-areas/corporate-commercial',
                  'Dispute Resolution': '/practice-areas/dispute-resolution',
                  'Employment & Labour Law': '/practice-areas/employment-labour',
                  'Family Estates & Trust Planning': '/practice-areas/family-estates'
                };
                return (
                  <li key={index}>
                    <Link
                      to={routeMap[area] || '/#practice'}
                      className="footer-link text-gray-400 text-[14px] sm:text-[15px] inline-block"
                    >
                      {area}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="animate-fadeInUp opacity-0 animation-delay-500">
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Contact Info
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-[#c9a870] text-lg mt-1 flex-shrink-0 smooth-hover group-hover:scale-110" />
                <span className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed">
                  Kolkata, West Bengal<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhone className="text-[#c9a870] text-lg flex-shrink-0 smooth-hover group-hover:scale-110 group-hover:rotate-12" />
                <a
                  href="tel:9211957859"
                  className="footer-link text-gray-400 text-[14px] sm:text-[15px]"
                >
                  +91 9211957859
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-[#c9a870] text-lg flex-shrink-0 smooth-hover group-hover:scale-110" />
                <a
                  href="mailto:roshankgupta479@gmail.com"
                  className="footer-link text-gray-400 text-[14px] sm:text-[15px] break-all"
                >
                  roshankgupta479@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-white text-[16px] sm:text-[18px] font-bold mb-4">
                Newsletter
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#c9a870] transition-colors"
                />
                <button
                  type="submit"
                  className="btn-hover-effect inline-flex items-center justify-center gap-2 bg-[#c9a870] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#b89860] smooth-hover"
                >
                  <FaPaperPlane className="text-sm" />
                  Subscribe
                </button>
              </form>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="tel:9211957859"
                className="btn-hover-effect inline-flex items-center gap-2 bg-[#c9a870] text-[#1a1a1a] px-6 py-3 rounded-full font-bold text-[13px] hover:bg-[#b89860] smooth-hover"
              >
                <FaPhone className="text-sm" />
                Call Now
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-[13px] sm:text-[14px] animate-fadeIn opacity-0 animation-delay-600">
              © {new Date().getFullYear()} Juris Associates. All Rights Reserved. | Adv. Roshan Kumar - Cyber Crime Specialist | Developed by{' '}
              <a
                href="https://www.codeyouridea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a870] hover:text-[#b89860] transition-colors font-semibold"
              >
                Code Your Idea
              </a>
            </p>
            <div className="flex items-center gap-6 sm:gap-8 animate-fadeIn opacity-0 animation-delay-700">
              <Link to="/privacy-policy" className="footer-link text-gray-500 text-[13px] sm:text-[14px]">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="footer-link text-gray-500 text-[13px] sm:text-[14px]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Smooth Footer Link Hover */
        .footer-link {
          position: relative;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link:hover {
          color: #c9a870;
          padding-left: 8px;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: #c9a870;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        /* Social Icon Smooth Animation */
        .social-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1) rotate(5deg);
        }

        /* Smooth Hover */
        .smooth-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
