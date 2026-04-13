import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative overflow-hidden bg-bg-primary pt-16 pb-8 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6 flex justify-between items-end z-10 mb-8 border-b border-border-color pb-8">
        <div>
          <p className="font-display font-bold text-2xl text-text-primary">Hrishabh ✌️</p>
          <p className="text-text-secondary mt-1 max-w-xs">Crafting digital experiences with personality and precision.</p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center border border-border-color hover:border-accent group transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-text-primary group-hover:text-accent group-hover:-translate-y-1 transition-all" />
        </button>
      </div>
      
      {/* Giant Marquee Text */}
      <div className="w-full relative overflow-hidden flex whitespace-nowrap opacity-5 dark:opacity-10 pointer-events-none mt-auto">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <h1 className="text-[15rem] md:text-[20rem] lg:text-[25rem] font-display font-black leading-none tracking-tighter">
            HRISHABH DESIGN HRISHABH DESIGN
          </h1>
        </motion.div>
      </div>
      
      <div className="w-full max-w-5xl px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary font-medium relative z-10 mt-8">
        <p>© {new Date().getFullYear()} Hrishabh. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
