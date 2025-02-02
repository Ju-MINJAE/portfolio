'use client';

import { motion } from 'framer-motion';
import FloatingPaths from '@/components/FloatingPaths';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedSubtitle from '@/components/AnimatedSubTitle';

export default function Home({
  title = 'JU MIN JAE',
  subtitle = 'Frontend Developer',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
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

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
