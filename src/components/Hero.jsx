import React from 'react';
import { motion } from 'framer-motion';
import CyclingTagline from './CyclingTagline';
import AnimatedStats from './AnimatedStats';
import FloatingAvatar from './FloatingAvatar';
import MagneticButton from './MagneticButton';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  const handleScrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="w-full min-h-screen pt-32 pb-16 lg:pt-48 flex items-center">
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left column (Text content) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left z-10"
        >
          <motion.div variants={itemVariants} className="w-full">
            <CyclingTagline />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter text-text-primary leading-[0.9] mt-4 mb-8"
          >
            NOT YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end inline-block pb-4 hover:scale-105 transition-transform duration-500 origin-left">
              AVERAGE
            </span>
            <br /> DESIGNER.
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center lg:justify-start">
            <MagneticButton onClick={handleScrollToWorks} className="flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            
            <a 
              href="/resume.pdf" 
              download="Hrishabh_Raj_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full font-medium transition-colors bg-transparent text-text-primary border border-border-color hover:bg-bg-secondary flex items-center justify-center gap-2"
            >
              Resume
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full mt-12">
            <AnimatedStats />
          </motion.div>

        </motion.div>

        {/* Right column (Avatar) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="w-full flex justify-center lg:justify-end z-0 mt-8 lg:mt-0"
        >
          <FloatingAvatar />
        </motion.div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-start/10 dark:bg-gradient-start/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-gradient-end/10 dark:bg-gradient-end/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}
