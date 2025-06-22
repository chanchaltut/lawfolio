import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==',
    loading = 'lazy',
    sizes = '100vw',
    priority = false,
    onLoad,
    onError,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (priority) return; // Skip intersection observer for priority images

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px 0px', // Start loading 50px before the image comes into view
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
            observerRef.current = observer;
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setHasError(true);
        onError?.();
    };

    // Generate WebP src if possible
    const generateWebPSrc = (originalSrc) => {
        if (!originalSrc || typeof originalSrc !== 'string') return originalSrc;

        // Check if the image is already WebP
        if (originalSrc.includes('.webp')) return originalSrc;

        // For imported images, we can't easily convert to WebP in the browser
        // This would need to be done at build time with a plugin
        return originalSrc;
    };

    const webpSrc = generateWebPSrc(src);

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                width: width ? `${width}px` : 'auto',
                height: height ? `${height}px` : 'auto'
            }}
        >
            {/* Placeholder */}
            {!isLoaded && !hasError && (
                <div
                    className="absolute inset-0 bg-gray-200 animate-pulse"
                    style={{
                        backgroundImage: `url(${placeholder})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                </div>
            )}

            {/* Main image */}
            {isInView && !hasError && (
                <picture>
                    {/* WebP format for supported browsers */}
                    {webpSrc !== src && (
                        <source srcSet={webpSrc} type="image/webp" />
                    )}

                    {/* Original format as fallback */}
                    <img
                        src={src}
                        alt={alt}
                        loading={loading}
                        sizes={sizes}
                        onLoad={handleLoad}
                        onError={handleError}
                        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        {...props}
                    />
                </picture>
            )}
        </div>
    );
};

export default OptimizedImage; 