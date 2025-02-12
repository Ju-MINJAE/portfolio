'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              href="#home"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
