'use client';

import { motion } from 'framer-motion';
import FloatingPaths from './FloatingPaths';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';

const Intro = () => {
  const title = 'JU MIN JAE';
  const subtitle = 'Frontend Developer';

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedTitle title={title} />
          <AnimatedSubtitle subtitle={subtitle} />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
