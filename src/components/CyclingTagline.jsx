import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  "Graphic Designer",
  "Brand Identity Expert",
  "Visual Storyteller",
  "Typography Nerd",
];

export default function CyclingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xl md:text-2xl font-body text-text-secondary h-[40px] flex items-center justify-center lg:justify-start overflow-hidden relative">
      <span className="mr-2">I am a</span>
      <div className="relative h-full flex-1 min-w-[250px]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 text-accent font-bold tracking-wide"
          >
            {taglines[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
