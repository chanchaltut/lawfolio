// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = {};
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    
    // Only initialize in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance monitoring disabled in development');
      return;
    }

    this.setupWebVitals();
    this.setupResourceTiming();
    this.setupErrorTracking();
    this.isInitialized = true;
  }

  setupWebVitals() {
    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.lcp = lastEntry.startTime;
          this.logMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.lcp = lcpObserver;
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // FID (First Input Delay)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.logMetric('FID', this.metrics.fid);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.fid = fidObserver;
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // CLS (Cumulative Layout Shift)
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.logMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.cls = clsObserver;
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }
  }

  setupResourceTiming() {
    // Monitor resource loading performance
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.initiatorType === 'img' || entry.initiatorType === 'css' || entry.initiatorType === 'script') {
              this.logResourceTiming(entry);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.resource = resourceObserver;
      } catch (e) {
        console.warn('Resource timing observer failed:', e);
      }
    }
  }

  setupErrorTracking() {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError('JavaScript Error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError('Unhandled Promise Rejection', {
        reason: event.reason,
        promise: event.promise
      });
    });
  }

  logMetric(name, value) {
    // Send to analytics service (replace with your preferred service)
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        value: Math.round(value),
        custom_parameter: 'web_vital'
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}:`, Math.round(value));
    }
  }

  logResourceTiming(entry) {
    const timing = {
      name: entry.name,
      type: entry.initiatorType,
      duration: entry.duration,
      transferSize: entry.transferSize,
      encodedBodySize: entry.encodedBodySize
    };

    // Log slow resources
    if (entry.duration > 1000) {
      this.logError('Slow Resource', timing);
    }
  }

  logError(type, data) {
    // Send to error tracking service (replace with your preferred service)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: type,
        fatal: false,
        custom_parameter: data
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`🚨 ${type}:`, data);
    }
  }

  // Manual performance measurement
  measure(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    const duration = end - start;

    this.logMetric(name, duration);
    return result;
  }

  // Measure async operations
  async measureAsync(name, fn) {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    const duration = end - start;

    this.logMetric(name, duration);
    return result;
  }

  // Get current metrics
  getMetrics() {
    return { ...this.metrics };
  }

  // Cleanup observers
  destroy() {
    Object.values(this.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
    this.observers = {};
    this.isInitialized = false;
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Initialize on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.init();
  });
}

export default performanceMonitor; 