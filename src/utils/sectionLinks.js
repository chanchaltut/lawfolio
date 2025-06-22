// Section Links Utility
// This file provides easy access to all website section links

const WEBSITE_URL = 'https://www.codeyouridea.com'; // Update this with your actual domain

export const SECTION_LINKS = {
  home: `${WEBSITE_URL}/#`,
  about: `${WEBSITE_URL}/#about`,
  services: `${WEBSITE_URL}/#services`,
  portfolio: `${WEBSITE_URL}/#portfolio`,
  contact: `${WEBSITE_URL}/#contact`,
  quote: `${WEBSITE_URL}/#contact`, // Quote form is in contact section
  testimonials: `${WEBSITE_URL}/#testimonials`,
  stats: `${WEBSITE_URL}/#stats`
};

export const getSectionLink = (sectionName) => {
  return SECTION_LINKS[sectionName] || `${WEBSITE_URL}/#`;
};

export const getWebsiteUrl = () => WEBSITE_URL;

// Quick access functions for common sections
export const getAboutLink = () => SECTION_LINKS.about;
export const getServicesLink = () => SECTION_LINKS.services;
export const getPortfolioLink = () => SECTION_LINKS.portfolio;
export const getContactLink = () => SECTION_LINKS.contact;
export const getTestimonialsLink = () => SECTION_LINKS.testimonials;

// For local development, you can use relative paths
export const LOCAL_SECTION_LINKS = {
  home: '/#',
  about: '/#about',
  services: '/#services',
  portfolio: '/#portfolio',
  contact: '/#contact',
  quote: '/#contact',
  testimonials: '/#testimonials',
  stats: '/#stats'
};

export default SECTION_LINKS; 