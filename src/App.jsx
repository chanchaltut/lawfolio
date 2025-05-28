import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServiceIntroSection from './components/ServiceIntroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioIntroSection from './components/PortfolioIntroSection';
import GrowthSection from './components/GrowthSection';
import PortfolioGallerySection from './components/PortfolioGallerySection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServiceIntroSection />
      <ServicesSection />
      <PortfolioIntroSection />
      <GrowthSection />
      <PortfolioGallerySection />
    </>
  );
}

export default App;
