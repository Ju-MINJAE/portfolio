'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={`text-gray-800 dark:text-white hover:text-blue-500 ${
                activeSection === 'home' ? 'text-blue-500' : ''
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-gray-800 dark:text-white hover:text-blue-500 ${
                activeSection === 'projects' ? 'text-blue-500' : ''
              }`}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
