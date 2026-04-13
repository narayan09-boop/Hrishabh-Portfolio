import React, { useEffect, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setVal(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, duration]);

  return <span ref={nodeRef}>{val}</span>;
}

export default function AnimatedStats() {
  const stats = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left mt-12 w-full max-w-2xl mx-auto lg:mx-0 bg-bg-secondary/50 dark:bg-bg-secondary/20 p-8 rounded-3xl border border-border-color backdrop-blur-sm">
      {stats.map((stat, i) => (
        <React.Fragment key={stat.label}>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2 flex items-center">
              <Counter from={0} to={stat.value} />
              {stat.suffix && <span className="text-accent ml-1">{stat.suffix}</span>}
            </h3>
            <p className="text-sm uppercase tracking-wider text-text-secondary font-medium">
              {stat.label}
            </p>
          </div>
          {i < stats.length - 1 && (
            <div className="hidden md:block w-px h-16 bg-border-color"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
