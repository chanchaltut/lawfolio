import Navbar from './components/Navbar';
import LetsBuildSuccessSection from './components/LetsBuildSuccessSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioGallerySection from './components/PortfolioGallerySection';
import TestimonialSection from './components/TestimonialSection';
import TopClientsSection from './components/TopClientsSection';
import ContactFooterSection from './components/ContactFooterSection';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection id="about" />
      <StatsSection />
      <ServicesSection id="services" />
      <PortfolioGallerySection />
      <LetsBuildSuccessSection />
      <TestimonialSection />
      <TopClientsSection />
      <ContactFooterSection id="contact" />
      <ScrollToTop />
    </>
  );
}

export default App;
