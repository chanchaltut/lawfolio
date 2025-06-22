import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FuturisticCard = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  hoverEffect = true,
  delay = 0,
  glassmorphism = true,
  borderGlow = true,
  ...props 
}) => {
  const cardRef = useRef(null);
  const borderRef = useRef(null);

  const glowColors = {
    blue: {
      border: 'border-futuristic-blue-500',
      shadow: 'shadow-glow-blue',
      bg: 'bg-futuristic-blue-500/10',
      hover: 'hover:border-futuristic-blue-400'
    },
    cyan: {
      border: 'border-futuristic-cyan-500',
      shadow: 'shadow-glow-cyan',
      bg: 'bg-futuristic-cyan-500/10',
      hover: 'hover:border-futuristic-cyan-400'
    },
    purple: {
      border: 'border-futuristic-purple-500',
      shadow: 'shadow-glow-purple',
      bg: 'bg-futuristic-purple-500/10',
      hover: 'hover:border-futuristic-purple-400'
    }
  };

  const selectedColor = glowColors[glowColor] || glowColors.blue;

  useEffect(() => {
    if (!cardRef.current) return;

    // Initial animation
    gsap.fromTo(cardRef.current, 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.95 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        delay: delay,
        ease: "power2.out" 
      }
    );

    // Border glow animation
    if (borderGlow && borderRef.current) {
      gsap.to(borderRef.current, {
        opacity: [0.3, 0.8, 0.3],
        duration: 3,
        repeat: -1,
        ease: "power2.inOut"
      });
    }
  }, [delay, borderGlow]);

  const handleMouseEnter = () => {
    if (!hoverEffect || !cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1.02,
      y: -5,
      duration: 0.3,
      ease: "power2.out"
    });

    if (borderRef.current) {
      gsap.to(borderRef.current, {
        opacity: 1,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (!hoverEffect || !cardRef.current) return;

    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });

    if (borderRef.current) {
      gsap.to(borderRef.current, {
        opacity: 0.5,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-300
        ${glassmorphism ? 'backdrop-blur-sm bg-white/5' : 'bg-futuristic-dark/80'}
        ${selectedColor.border} border-2
        ${selectedColor.shadow}
        ${hoverEffect ? selectedColor.hover : ''}
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Glowing border effect */}
      {borderGlow && (
        <div
          ref={borderRef}
          className={`
            absolute inset-0 rounded-2xl opacity-50
            ${selectedColor.bg}
            transition-all duration-300
          `}
          style={{
            filter: `blur(20px)`,
            transform: 'scale(1.02)'
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-futuristic-blue-400 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-futuristic-blue-400 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-futuristic-blue-400 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-futuristic-blue-400 rounded-br-2xl" />
    </div>
  );
};

// Specialized card variants
export const InfoCard = ({ children, className = '', ...props }) => (
  <FuturisticCard 
    className={`${className}`} 
    glowColor="blue"
    {...props}
  >
    {children}
  </FuturisticCard>
);

export const FeatureCard = ({ children, className = '', ...props }) => (
  <FuturisticCard 
    className={`${className}`} 
    glowColor="cyan"
    {...props}
  >
    {children}
  </FuturisticCard>
);

export const HighlightCard = ({ children, className = '', ...props }) => (
  <FuturisticCard 
    className={`${className}`} 
    glowColor="purple"
    {...props}
  >
    {children}
  </FuturisticCard>
);

export default FuturisticCard;
