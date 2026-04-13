import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <div ref={ref} className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} mb-16`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-accent font-medium tracking-wider uppercase text-sm mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      
      <div className="relative inline-block">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-text-primary"
        >
          {title}
        </motion.h2>
        
        {/* Accent Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          className={`absolute -bottom-2 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} h-1 md:h-2 bg-gradient-to-r from-gradient-start to-gradient-end w-2/3 max-w-[120px] origin-left rounded-r-full`}
        />
      </div>
    </div>
  );
}
