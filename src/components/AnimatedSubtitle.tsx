'use client';

import { motion } from 'framer-motion';

interface AnimatedSubtitleProps {
  subtitle: string;
}

const AnimatedSubtitle = ({ subtitle }: AnimatedSubtitleProps) => {
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-neutral-700 dark:text-neutral-300"
    >
      {subtitle}
    </motion.h2>
  );
};

export default AnimatedSubtitle;
