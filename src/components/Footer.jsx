import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Practice Areas', href: '#practice' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const practiceAreas = [
    'Criminal Law',
    'Family Law',
    'Business Law',
    'Civil Law',
    'Property Law',
    'Immigration Law'
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#2a2a2a]">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Column 1 - Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[45px] h-[45px] bg-[#c9a870] rounded-full flex items-center justify-center">
                <svg 
                  className="w-[24px] h-[24px] text-[#1a1a1a]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2C11.45 2 11 2.45 11 3V4H9C8.45 4 8 4.45 8 5C8 5.55 8.45 6 9 6H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V6H15C15.55 6 16 5.55 16 5C16 4.45 15.55 4 15 4H13V3C13 2.45 12.55 2 12 2M6 8L4 13H8L6 8M18 8L16 13H20L18 8Z"/>
                </svg>
              </div>
              <span className="text-white text-[22px] font-bold tracking-wide">Law Pixel</span>
            </div>
            
            <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed mb-6">
              Professional legal services with over 30 years of experience. We fight for your rights with dedication and expertise.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-[14px] sm:text-[15px] hover:text-[#c9a870] transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Practice Areas */}
          <div>
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Practice Areas
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#practice"
                    className="text-gray-400 text-[14px] sm:text-[15px] hover:text-[#c9a870] transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-6 sm:mb-8">
              Contact Info
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#c9a870] text-lg mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed">
                  123 Legal Street, Law District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#c9a870] text-lg flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 text-[14px] sm:text-[15px] hover:text-[#c9a870] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#c9a870] text-lg flex-shrink-0" />
                <a href="mailto:info@lawpixel.com" className="text-gray-400 text-[14px] sm:text-[15px] hover:text-[#c9a870] transition-colors">
                  info@lawpixel.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-[13px] sm:text-[14px]">
              © {new Date().getFullYear()} Law Pixel. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#privacy" className="text-gray-500 text-[13px] sm:text-[14px] hover:text-[#c9a870] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 text-[13px] sm:text-[14px] hover:text-[#c9a870] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


