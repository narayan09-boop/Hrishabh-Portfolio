import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/Profile/Profile Picture.jpeg';

export default function FloatingAvatar() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
      {/* Ambient shadow / glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-gradient-start to-gradient-end rounded-[40px] blur-3xl"
      />
      
      {/* Avatar Image Container */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 2, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full rounded-[40px] p-[4px] bg-gradient-to-tr from-gradient-start to-gradient-end z-10 shadow-2xl"
      >
        <img 
          src={profilePic} 
          alt="Hrihsabh - Graphic Designer" 
          className="w-full h-full object-cover object-[center_top] rounded-[36px]" 
        />
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-bg-card border border-border-color shadow-lg flex items-center justify-center z-20 text-2xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-8 -right-4 w-16 h-16 rounded-2xl bg-bg-card border border-border-color shadow-lg flex items-center justify-center z-20 text-3xl"
      >
        🎨
      </motion.div>
    </div>
  );
}
