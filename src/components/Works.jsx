import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import WorkCard from './WorkCard';
import WorkModal from './WorkModal';
import { works, categories } from '../data/works';

export default function Works() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedWorkId, setSelectedWorkId] = useState(null);

  const filteredWorks = activeTab === 'all' 
    ? works 
    : works.filter(w => w.category === activeTab);

  const selectedWork = works.find(w => w.id === selectedWorkId);

  return (
    <section id="works" className="w-full py-24 min-h-screen">
      <SectionHeading title="Selected Works" subtitle="Portfolio" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === cat.id 
                ? 'text-white dark:text-black' 
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
            }`}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-accent rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map(work => (
            <WorkCard 
              key={work.id} 
              work={work} 
              onClick={() => setSelectedWorkId(work.id)} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Modal */}
      <WorkModal 
        work={selectedWork} 
        onClose={() => setSelectedWorkId(null)} 
      />
    </section>
  );
}
