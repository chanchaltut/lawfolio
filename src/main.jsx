import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import setViewportHeight from './utils/viewportFix.js'
import performanceMonitor from './utils/performance.js'
import ErrorBoundary from './components/ErrorBoundary'

// Initialize performance monitoring
performanceMonitor.init();

// Set viewport height for mobile devices
setViewportHeight();

// Create root and render app
const root = createRoot(document.getElementById('root'));

// Measure app render time
performanceMonitor.measure('App Render', () => {
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
});
