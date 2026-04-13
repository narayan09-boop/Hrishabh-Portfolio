import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function WorkModal({ work, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (work) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [work]);

  return (
    <AnimatePresence>
      {work && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 cursor-pointer"
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 md:p-8">
            <motion.div
              layoutId={`card-container-${work.id}`}
              className="w-full max-w-4xl max-h-full bg-bg-card rounded-[2rem] overflow-hidden pointer-events-auto flex flex-col shadow-2xl border border-border-color"
            >
              <div className="relative w-full h-64 md:h-96 shrink-0">
                <motion.img
                  layoutId={`card-image-${work.id}`}
                  src={work.images ? work.images[0] : work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <motion.div 
                layoutId={`card-info-${work.id}`}
                className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div>
                    <motion.h2 
                      layoutId={`card-title-${work.id}`}
                      className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-2"
                    >
                      {work.title}
                    </motion.h2>
                    <p className="text-xl text-text-secondary">{work.client} — {work.year}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-bg-secondary text-text-primary text-sm font-semibold rounded-full border border-border-color">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-lg text-text-primary/80 leading-relaxed font-body">
                  <p>{work.description}</p>
                </div>
                
                {work.images && work.images.length > 1 && (
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {work.images.slice(1).map((img, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden aspect-video border border-border-color">
                        <img src={img} alt={`${work.title} detail`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
