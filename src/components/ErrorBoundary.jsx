import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        // Optionally log error to an external service
        if (window.gtag) {
            window.gtag('event', 'exception', {
                description: error?.toString(),
                fatal: false,
            });
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-8">
                    <h1 className="text-3xl font-bold text-[#3F51B5] mb-4">Something went wrong</h1>
                    <p className="text-gray-700 mb-4">An unexpected error occurred. Please refresh the page or try again later.</p>
                    <details className="text-xs text-gray-500 whitespace-pre-wrap max-w-xl mx-auto" style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary; 