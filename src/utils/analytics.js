// Analytics utility for tracking user interactions
class Analytics {
  constructor() {
    this.isInitialized = false;
    this.init();
  }

  init() {
    if (this.isInitialized) return;

    // Only initialize if gtag is available
    if (typeof gtag !== 'undefined') {
      this.isInitialized = true;
      this.trackPageView();
    }
  }

  // Track page view
  trackPageView(pageTitle = null, pageLocation = null) {
    if (!this.isInitialized) return;

    gtag('config', 'G-PH6LQ9ML39', {
      page_title: pageTitle || document.title,
      page_location: pageLocation || window.location.href,
      send_page_view: true
    });
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    if (!this.isInitialized) return;

    gtag('event', eventName, {
      custom_parameter: parameters
    });
  }

  // Track form submissions
  trackFormSubmission(formType, success = true) {
    this.trackEvent('form_submit', {
      form_type: formType,
      success: success,
      timestamp: new Date().toISOString()
    });
  }

  // Track button clicks
  trackButtonClick(buttonName, section = null) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      section: section,
      timestamp: new Date().toISOString()
    });
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    this.trackEvent('scroll_depth', {
      depth: depth,
      timestamp: new Date().toISOString()
    });
  }

  // Track time on page
  trackTimeOnPage(timeSpent) {
    this.trackEvent('time_on_page', {
      time_spent: timeSpent,
      timestamp: new Date().toISOString()
    });
  }

  // Track social media clicks
  trackSocialClick(platform) {
    this.trackEvent('social_click', {
      platform: platform,
      timestamp: new Date().toISOString()
    });
  }

  // Track phone/email clicks
  trackContactClick(type) {
    this.trackEvent('contact_click', {
      contact_type: type,
      timestamp: new Date().toISOString()
    });
  }

  // Track portfolio item clicks
  trackPortfolioClick(projectName) {
    this.trackEvent('portfolio_click', {
      project_name: projectName,
      timestamp: new Date().toISOString()
    });
  }

  // Track blog article clicks
  trackBlogClick(articleTitle) {
    this.trackEvent('blog_click', {
      article_title: articleTitle,
      timestamp: new Date().toISOString()
    });
  }

  // Track service section views
  trackServiceView(serviceName) {
    this.trackEvent('service_view', {
      service_name: serviceName,
      timestamp: new Date().toISOString()
    });
  }
}

// Create singleton instance
const analytics = new Analytics();

// Auto-track scroll depth
if (typeof window !== 'undefined') {
  let maxScrollDepth = 0;
  let scrollTrackingInterval;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;

      // Track at 25%, 50%, 75%, 100%
      if ([25, 50, 75, 100].includes(maxScrollDepth)) {
        analytics.trackScrollDepth(maxScrollDepth);
      }
    }
  });

  // Track time on page
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    analytics.trackTimeOnPage(timeSpent);
  });
}

export default analytics; 