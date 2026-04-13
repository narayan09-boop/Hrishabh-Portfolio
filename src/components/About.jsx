import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SkillBar from './SkillBar';
import ToolsGrid from './ToolsGrid';
import { about } from '../data/about';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section id="about" className="w-full py-24 min-h-screen">
      <SectionHeading title="About Me" subtitle="Behind the pixels" />

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        {/* Intro Block (Span 2 cols) */}
        <motion.div variants={item} className="md:col-span-2 bg-bg-secondary/30 rounded-[2rem] p-8 md:p-12 border border-border-color flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-primary">
            {about.headline}
          </h3>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-body">
            {about.bio}
          </p>
        </motion.div>

        {/* Fun Facts Block */}
        <motion.div variants={item} className="bg-accent rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between">
          <h4 className="font-display font-bold text-2xl mb-6">By the numbers</h4>
          <div className="flex flex-col gap-4">
            {about.funFacts.map((fact, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-white/20 pb-3 last:border-0 last:pb-0">
                <span className="font-bold text-2xl">{fact.front}</span>
                <span className="text-sm font-medium text-right max-w-[120px]">{fact.back}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personality Block */}
        <motion.div variants={item} className="bg-bg-secondary/30 rounded-[2rem] p-8 md:p-10 border border-border-color flex flex-col justify-center">
          <h4 className="font-display font-bold text-2xl mb-6 text-text-primary">My Vibe</h4>
          <div className="flex flex-col gap-3">
            {about.personality.map((trait, idx) => (
              <div key={idx} className="px-5 py-3 bg-bg-card rounded-xl border border-border-color font-medium text-text-secondary overflow-hidden relative group">
                <span className="relative z-10 block group-hover:text-text-primary transition-colors">{trait}</span>
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Block (Span 2 cols) */}
        <motion.div variants={item} className="md:col-span-2 bg-bg-secondary/30 rounded-[2rem] p-8 md:p-12 border border-border-color">
          <h4 className="font-display font-bold text-2xl mb-8 text-text-primary">Capabilities</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {about.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Tools Block (Span full width) */}
        <motion.div variants={item} className="md:col-span-3 mt-4">
          <h4 className="font-display font-bold text-2xl mb-8 text-text-primary text-center">Weapons of Choice</h4>
          <ToolsGrid tools={about.tools} />
        </motion.div>

      </motion.div>
    </section>
  );
}
