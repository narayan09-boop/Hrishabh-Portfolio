import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-black/10 dark:border-white/10 text-primary dark:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 360 : 0,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-black" />
      </motion.div>
    </motion.button>
  );
}
