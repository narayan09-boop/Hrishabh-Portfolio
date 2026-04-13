import React from 'react';
import { motion } from 'framer-motion';

const marqueeTexts = [
  "AVAILABLE FOR WORK",
  "•",
  "OPEN FOR CAPTIVATING PROJECTS",
  "•",
  "AVAILABLE FOR WORK",
  "•",
  "OPEN FOR CAPTIVATING PROJECTS",
  "•",
];

export default function MarqueeStrip() {
  return (
    <div className="w-full relative overflow-hidden bg-accent dark:bg-accent text-white py-4 my-16 rotate-1 -mx-[50vw] px-[50vw] left-1/2 -ml-[50vw] flex">
      {/* We use two sets of elements for a seamless infinite scroll effect */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        {[...marqueeTexts, ...marqueeTexts].map((text, idx) => (
          <span 
            key={idx} 
            className="text-2xl md:text-3xl font-display font-bold px-4 uppercase tracking-widest"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
