import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const AnimatedText = ({
  children,
  type = 'fadeIn',
  delay = 0,
  duration = 0.8,
  className = '',
  highlightWords = [],
  glowEffect = false,
  typewriter = false,
  typewriterSpeed = 0.05
}) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = text.textContent?.split(' ') || [];

    // Clear existing content
    text.innerHTML = '';

    // Create spans for each word
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(20px)';

      // Add highlight class if word should be highlighted
      if (highlightWords.some(highlight =>
        word.toLowerCase().includes(highlight.toLowerCase())
      )) {
        span.className = 'text-futuristic-blue-400 font-semibold';
      }

      text.appendChild(span);
    });

    // Animation timeline
    const tl = gsap.timeline({ delay });

    if (typewriter) {
      // Typewriter effect
      const spans = text.querySelectorAll('span');
      spans.forEach((span, index) => {
        tl.to(span, {
          opacity: 1,
          duration: typewriterSpeed,
          ease: "none"
        }, index * typewriterSpeed);
      });
    } else {
      // Staggered fade in
      const spans = text.querySelectorAll('span');
      tl.to(spans, {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: 0.05,
        ease: "power2.out"
      });
    }

    // Add glow effect if requested
    if (glowEffect) {
      gsap.to(text, {
        textShadow: "0 0 10px #0073e6, 0 0 20px #0073e6, 0 0 30px #0073e6",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: delay + duration + 0.5
      });
    }

    return () => {
      // Cleanup - no hover effects to clean up
    };
  }, [children, type, delay, duration, highlightWords, glowEffect, typewriter, typewriterSpeed]);

  return (
    <div ref={containerRef} className={className}>
      <div
        ref={textRef}
        className="inline-block"
        style={{
          filter: glowEffect ? 'drop-shadow(0 0 10px rgba(0, 115, 230, 0.5))' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Specialized text components
export const GlowingText = ({ children, className = '', ...props }) => (
  <AnimatedText
    className={`text-white font-bold ${className}`}
    glowEffect={true}
    {...props}
  >
    {children}
  </AnimatedText>
);

export const HighlightedText = ({ children, className = '', ...props }) => (
  <AnimatedText
    className={`text-white ${className}`}
    highlightWords={['AI', 'Future', 'Innovation', 'Technology', 'Digital', 'Smart']}
    {...props}
  >
    {children}
  </AnimatedText>
);

export const TypewriterText = ({ children, className = '', ...props }) => (
  <AnimatedText
    className={`text-white font-mono ${className}`}
    typewriter={true}
    {...props}
  >
    {children}
  </AnimatedText>
);

export default AnimatedText;
