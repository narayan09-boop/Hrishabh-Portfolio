import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function WorkCard({ work, onClick }) {
  return (
    <motion.div
      layoutId={`card-container-${work.id}`}
      className="group cursor-pointer relative flex flex-col gap-4 w-full"
      onClick={() => onClick(work.id)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <motion.div 
        layoutId={`card-image-container-${work.id}`}
        className="w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-3xl relative isolate"
      >
        <motion.div 
          className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <motion.img
          layoutId={`card-image-${work.id}`}
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover origin-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.21,0.47,0.32,0.98]"
        />
        
        {/* Floating icon on hover */}
        <div className="absolute top-6 right-6 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-xl">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </motion.div>

      <motion.div 
        layoutId={`card-info-${work.id}`}
        className="flex flex-col gap-2"
      >
        <div className="flex justify-between items-start">
          <motion.h3 
            layoutId={`card-title-${work.id}`}
            className="text-2xl md:text-3xl font-display font-bold text-text-primary"
          >
            {work.title}
          </motion.h3>
          <span className="text-text-secondary text-sm font-medium mt-2">{work.year}</span>
        </div>
        
        <p className="text-text-secondary">{work.client}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {work.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-bg-secondary text-text-primary text-xs font-semibold rounded-full border border-border-color">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
