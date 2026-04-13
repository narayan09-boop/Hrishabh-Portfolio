import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-6 w-full">
      <div className="flex justify-between mb-2">
        <span className="font-display font-bold text-text-primary uppercase tracking-wide text-sm">{skill.name}</span>
        <span className="font-mono text-text-secondary text-sm">{skill.level}%</span>
      </div>
      <div className="h-3 w-full bg-bg-secondary rounded-full overflow-hidden border border-border-color">
        <motion.div
          className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full origin-left"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
