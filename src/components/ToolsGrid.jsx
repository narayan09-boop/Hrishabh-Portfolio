import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ToolsGrid({ tools }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      {tools.map((tool) => (
        <motion.div
          key={tool.name}
          variants={item}
          className="flex flex-col items-center justify-center p-6 bg-bg-secondary/50 dark:bg-bg-secondary/20 rounded-2xl border border-border-color hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
        >
          <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
          <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{tool.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
