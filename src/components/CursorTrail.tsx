
import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prevTrail => {
        const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
        const updatedTrail = [newPoint, ...prevTrail.slice(0, 8)];
        return updatedTrail;
      });
    };

    const animate = () => {
      setTrail(prevTrail => 
        prevTrail.filter(point => Date.now() - point.id < 1000)
      );
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-4 h-4 bg-berber-terracotta rounded-full opacity-80"></div>
      </div>

      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (trail.length - index) / trail.length * 0.5,
            transform: `scale(${(trail.length - index) / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        >
          <div className="w-2 h-2 bg-berber-gold rounded-full"></div>
        </div>
      ))}
    </>
  );
};

export default CursorTrail;
