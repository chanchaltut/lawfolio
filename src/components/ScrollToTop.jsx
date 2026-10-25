import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]);

  // Links like /#practice: scroll to the section once it has rendered
  useEffect(() => {
    if (!hash) return;
    let attempts = 0;
    let timer;
    const scrollToHash = () => {
      const element = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts++ < 20) {
        timer = setTimeout(scrollToHash, 100);
      }
    };
    timer = setTimeout(scrollToHash, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
