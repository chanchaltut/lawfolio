import React, { useRef, useEffect, useState } from 'react';

const CursorMask = () => {
    const cursorRingRef = useRef(null);
    const cursorDotRef = useRef(null);
    const cursorGlowRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let cursorDotX = 0;
        let cursorDotY = 0;
        let cursorRingX = 0;
        let cursorRingY = 0;
        let cursorGlowX = 0;
        let cursorGlowY = 0;

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Show cursor when mouse moves
            if (!isVisible) {
                setIsVisible(true);
            }
        };

        // Mouse enter/leave handlers for interactive elements
        const handleMouseEnter = (e) => {
            if (cursorRingRef.current && cursorDotRef.current && cursorGlowRef.current) {
                // Scale up cursor when hovering over interactive elements
                cursorRingRef.current.style.transform = `translate(${cursorRingX}px, ${cursorRingY}px) scale(2)`;
                cursorDotRef.current.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px) scale(0.5)`;
                cursorGlowRef.current.style.transform = `translate(${cursorGlowX}px, ${cursorGlowY}px) scale(2)`;
                
                // Change opacity for better visibility
                cursorRingRef.current.style.opacity = '0.8';
                cursorGlowRef.current.style.opacity = '0.6';
            }
        };

        const handleMouseLeave = () => {
            if (cursorRingRef.current && cursorDotRef.current && cursorGlowRef.current) {
                // Reset cursor when leaving interactive elements
                cursorRingRef.current.style.transform = `translate(${cursorRingX}px, ${cursorRingY}px) scale(1)`;
                cursorDotRef.current.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px) scale(1)`;
                cursorGlowRef.current.style.transform = `translate(${cursorGlowX}px, ${cursorGlowY}px) scale(1)`;
                
                // Reset opacity
                cursorRingRef.current.style.opacity = '0.4';
                cursorGlowRef.current.style.opacity = '0.3';
            }
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        
        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .interactive, [role="button"], input, textarea, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Animation loop for smooth cursor following
        const animate = () => {
            // Smooth cursor following with different speeds for different elements
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursorDotX += (mouseX - cursorDotX) * 0.3;
            cursorDotY += (mouseY - cursorDotY) * 0.3;
            
            cursorRingX += (mouseX - cursorRingX) * 0.15;
            cursorRingY += (mouseY - cursorRingY) * 0.15;
            
            cursorGlowX += (mouseX - cursorGlowX) * 0.12;
            cursorGlowY += (mouseY - cursorGlowY) * 0.12;

            // Apply transforms to cursor elements
            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate(${cursorRingX}px, ${cursorRingY}px)`;
            }
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`;
            }
            if (cursorGlowRef.current) {
                cursorGlowRef.current.style.transform = `translate(${cursorGlowX}px, ${cursorGlowY}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isVisible]);

    // Don't render until mouse moves
    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Cursor ring glow (background blur effect) */}
            <div
                ref={cursorGlowRef}
                className="fixed pointer-events-none z-[9998] w-12 h-12 rounded-full bg-futuristic-cyan-400/20 opacity-30 transition-all duration-300 ease-out"
                style={{
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(8px)',
                    mixBlendMode: 'difference'
                }}
            />
            
            {/* Main cursor ring */}
            <div
                ref={cursorRingRef}
                className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border-2 border-futuristic-cyan-400/60 opacity-40 transition-all duration-200 ease-out"
                style={{
                    transform: 'translate(-50%, -50%)',
                    filter: 'drop-shadow(0 0 12px rgba(0, 230, 230, 0.4))',
                    mixBlendMode: 'difference'
                }}
            />
            
            {/* Cursor dot (center point) */}
            <div
                ref={cursorDotRef}
                className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 bg-futuristic-cyan-400 rounded-full opacity-90 transition-all duration-150 ease-out"
                style={{
                    transform: 'translate(-50%, -50%)',
                    filter: 'drop-shadow(0 0 6px rgba(0, 230, 230, 0.8))',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default CursorMask;
