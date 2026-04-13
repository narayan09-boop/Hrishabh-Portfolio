import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Max distance it moves from center
    const maxDistance = 15;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Normalize and scale appropriately
    const moveX = (deltaX / (width / 2)) * maxDistance;
    const moveY = (deltaY / (height / 2)) * maxDistance;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full font-medium transition-colors bg-accent text-white dark:text-black overflow-hidden group ${className}`}
    >
      {/* Gloss/Shine Effect */}
      <span className="absolute inset-0 bg-white/20 blur-md translate-y-full group-hover:-translate-y-full transition-transform duration-700 ease-out z-0" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
