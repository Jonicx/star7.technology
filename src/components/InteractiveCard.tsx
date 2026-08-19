import React, { useState, useRef, MouseEvent } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g., 'rgba(27, 67, 33, 0.12)' or 'rgba(237, 168, 0, 0.15)'
  isGlassmorphic?: boolean;
  glassStyle?: 'premium' | 'premium-dark' | 'standard' | 'none';
  enableTilt?: boolean;
  tiltMax?: number; // max tilt angle in degrees
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(27, 67, 33, 0.12)',
  isGlassmorphic = true,
  glassStyle = 'standard',
  enableTilt = true,
  tiltMax = 4,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * tiltMax;
      const rotateX = -((y - centerY) / centerY) * tiltMax;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      setTilt({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Clean up ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  };

  // Determine glass styles
  let glassClass = '';
  if (isGlassmorphic) {
    if (glassStyle === 'premium') {
      glassClass = 'glass-card-premium';
    } else if (glassStyle === 'premium-dark') {
      glassClass = 'glass-card-premium-dark';
    } else if (glassStyle === 'standard') {
      glassClass = 'glass-card';
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      className={`relative overflow-hidden transition-all duration-300 ${glassClass} ${className}`}
      style={{
        transform: enableTilt && isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01, 1.01, 1.01)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered 
          ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s, border-color 0.3s, box-shadow 0.3s' 
          : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s, border-color 0.3s, box-shadow 0.3s',
        ...style
      }}
      {...props}
    >
      {/* SPOTLIGHT GLOW & INTERACTIVE HOVER RIPPLES */}
      {isHovered && (
        <>
          {/* Spotlight Glow */}
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              width: '320px',
              height: '320px',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              opacity: 1,
              zIndex: 1,
            }}
          />
          {/* Continuous Hover Liquid Ripple Ring 1 */}
          <div
            className="absolute pointer-events-none rounded-full border border-[#1b4321]/15 hover-ripple-ring"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              width: '160px',
              height: '160px',
              zIndex: 1,
              animationDelay: '0s',
            }}
          />
          {/* Continuous Hover Liquid Ripple Ring 2 */}
          <div
            className="absolute pointer-events-none rounded-full border border-accent/20 hover-ripple-ring"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              width: '260px',
              height: '260px',
              zIndex: 1,
              animationDelay: '-3s',
            }}
          />
        </>
      )}

      {/* CLICK RIPPLE LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-[#1b4321]/15 animate-ripple"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* CARD INNER CONTENT */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
};
