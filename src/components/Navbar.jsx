import React, { useState, useEffect } from 'react';
import jurisLogo from '../assets/jurisLogo.png';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside or on a link
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsPagesOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsPagesOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-5">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 z-50">
              <img src={jurisLogo} alt="Juris Associates" className="w-60 h-auto" />
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden xl:flex items-center gap-8 lg:gap-10">
              <ul className="flex items-center gap-6 lg:gap-7 xl:gap-9 text-[13px] lg:text-[14px] font-semibold tracking-wide">
                <li>
                  <a href="#home" className="text-white hover:text-[#c9a870] transition-colors">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white hover:text-[#c9a870] transition-colors">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#practice" className="text-white hover:text-[#c9a870] transition-colors">
                    PRACTICE AREA
                  </a>
                </li>
                <li className="relative">
                  <button
                    className="flex items-center gap-2 text-white hover:text-[#c9a870] transition-colors"
                    onClick={() => setIsPagesOpen(!isPagesOpen)}
                  >
                    PAGES
                    <FaChevronDown className="text-xs" />
                  </button>
                  {isPagesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-700 rounded shadow-lg">
                      <ul className="py-2">
                        <li>
                          <a href="#page1" className="block px-4 py-2 text-white hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-colors">
                            Page 1
                          </a>
                        </li>
                        <li>
                          <a href="#page2" className="block px-4 py-2 text-white hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-colors">
                            Page 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-[#c9a870] transition-colors">
                    CONTACT US
                  </a>
                </li>
              </ul>

              {/* Free Consultation Button - Desktop */}
              <a
                href="tel:9211957859"
                className="hidden lg:flex bg-[#c9a870] text-[#1a1a1a] px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 rounded-full font-bold text-[12px] lg:text-[13px] xl:text-[14px] items-center gap-2 hover:bg-[#b89860] transition-all hover:gap-3 tracking-wide whitespace-nowrap"
              >
                FREE CONSULTATION
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white text-2xl p-2 z-50 hover:text-[#c9a870] transition-colors"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Blur Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300 xl:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-[350px] bg-[#1a1a1a] z-40 transform transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <div className="w-[45px] h-[45px] bg-[#c9a870] rounded-full flex items-center justify-center">
              <svg
                className="w-[24px] h-[24px] text-[#1a1a1a]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C11.45 2 11 2.45 11 3V4H9C8.45 4 8 4.45 8 5C8 5.55 8.45 6 9 6H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V6H15C15.55 6 16 5.55 16 5C16 4.45 15.55 4 15 4H13V3C13 2.45 12.55 2 12 2M6 8L4 13H8L6 8M18 8L16 13H20L18 8Z" />
              </svg>
            </div>
            <span className="text-white text-[20px] font-bold tracking-wide">Law Pixel</span>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-6">
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={closeSidebar}
                className="block text-white text-[15px] font-semibold py-3 px-4 rounded-lg hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeSidebar}
                className="block text-white text-[15px] font-semibold py-3 px-4 rounded-lg hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#practice"
                onClick={closeSidebar}
                className="block text-white text-[15px] font-semibold py-3 px-4 rounded-lg hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300"
              >
                PRACTICE AREA
              </a>
            </li>
            <li>
              <div>
                <button
                  className="flex items-center justify-between w-full text-white text-[15px] font-semibold py-3 px-4 rounded-lg hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                >
                  PAGES
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPagesOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>
                      <a
                        href="#page1"
                        onClick={closeSidebar}
                        className="block text-gray-400 text-[14px] py-2 px-4 rounded-lg hover:text-[#c9a870] transition-colors"
                      >
                        Page 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#page2"
                        onClick={closeSidebar}
                        className="block text-gray-400 text-[14px] py-2 px-4 rounded-lg hover:text-[#c9a870] transition-colors"
                      >
                        Page 2
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeSidebar}
                className="block text-white text-[15px] font-semibold py-3 px-4 rounded-lg hover:bg-[#c9a870] hover:text-[#1a1a1a] transition-all duration-300"
              >
                CONTACT US
              </a>
            </li>
          </ul>

          {/* Free Consultation Button - Mobile */}
          <div className="mt-8 lg:hidden">
            <a
              href="tel:9211957859"
              onClick={closeSidebar}
              className="w-full bg-[#c9a870] text-[#1a1a1a] px-6 py-4 rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#b89860] transition-all"
            >
              FREE CONSULTATION
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#2a2a2a] bg-[#1a1a1a]">
          <p className="text-gray-500 text-[12px] text-center">
            © {new Date().getFullYear()} Juris Associates
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
