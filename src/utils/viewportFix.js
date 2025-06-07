// Viewport height fix for mobile devices
// This fixes the common 100vh issue on mobile browsers

const setViewportHeight = () => {
  // Get the viewport height and multiply by 1% to get a value for 1vh
  let vh = window.innerHeight * 0.01;
  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set on initial load
setViewportHeight();

// Set on resize and orientation change
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

// For better mobile experience
if ('ontouchstart' in window) {
  document.addEventListener('DOMContentLoaded', setViewportHeight);
}

export default setViewportHeight; 