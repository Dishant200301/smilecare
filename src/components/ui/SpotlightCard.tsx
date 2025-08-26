// components/ui/SpotlightCard.tsx
'use client';

import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string; // To pass existing Tailwind classes to the card wrapper
  spotlightColor?: string; // Optional: Customize the spotlight color (e.g., "rgba(14, 165, 233, 0.15)" for primary/10)
  spotlightSize?: string; // Optional: Customize the spotlight size (e.g., "600px")
  spotlightFalloff?: string; // Optional: Customize the spotlight falloff (e.g., "transparent 80%")
  animationDelay?: number; // For AnimateOnScroll compatibility
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  spotlightColor = "rgba(2,132,199,0.15)", // Tailwind 'blue-600' with 0.15 opacity by default
  spotlightSize = "600px",
  spotlightFalloff = "transparent 80%",
  animationDelay // Capture animationDelay for potential future use or direct pass-through
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // The `relative` and `overflow-hidden` are crucial for the spotlight effect
      // `z-20` ensures the card content is above the spotlight
      className={`relative overflow-hidden group ${className}`} 
      style={{ animationDelay: `${animationDelay}ms` }} // Pass through delay
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize} circle at ${position.x}px ${position.y}px, ${spotlightColor}, ${spotlightFalloff})`,
        }}
      />
      {/* This div ensures your actual card content remains above the spotlight effect */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;