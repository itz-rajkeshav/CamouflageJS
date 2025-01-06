import React, { useEffect, useState } from 'react';

const AnimatedGridPattern = ({ 
  numSquares = 20,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className = ""
}) => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    // Create initial squares
    const newSquares = Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * maxOpacity
    }));
    setSquares(newSquares);

    // Animation loop
    const animate = () => {
      setSquares(prev => prev.map(square => ({
        ...square,
        x: (square.x + 0.5) % 100,
        y: (square.y + 0.5) % 100,
        opacity: (Math.sin(Date.now() / (duration * 1000) + square.id) + 1) * maxOpacity / 2
      })));
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, [numSquares, maxOpacity, duration]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full">
        {squares.map(square => (
          <rect
            key={square.id}
            x={`${square.x}%`}
            y={`${square.y}%`}
            width={`${square.size}%`}
            height={`${square.size}%`}
            fill="currentColor"
            opacity={square.opacity}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedGridPattern;