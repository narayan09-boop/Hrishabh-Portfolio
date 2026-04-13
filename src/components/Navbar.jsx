import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Works', href: '#works' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    navLinks.forEach(({ href }) => {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(href);
          }
        }, options);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-6 transition-all duration-300 ${
        isScrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          isScrolled
            ? 'bg-bg-card/70 backdrop-blur-xl border-border-color shadow-sm shadow-black/5 dark:shadow-white/5'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#root')}
          className="font-bold font-display text-xl tracking-tight"
        >
          Hrisabh <span className="inline-block hover:rotate-12 transition-transform">✌️</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-accent outline-none"
            >
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-accent/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right side + Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Available for work</span>
          </div>

          <div className="hidden lg:block h-5 w-px bg-border-color" />
          
          <div className="hidden lg:block">
             <ThemeToggle />
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bg-primary/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-[100dvh] w-4/5 max-w-xs bg-bg-card border-l border-border-color z-50 p-6 flex flex-col shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-bold font-display text-xl">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors bg-bg-secondary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4 text-lg font-medium font-display mb-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex text-text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col space-y-6">
                <div className="flex items-center space-x-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl text-sm font-semibold w-max">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span>Available for work</span>
                </div>

                <div className="flex items-center justify-between border-t border-border-color pt-6">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
