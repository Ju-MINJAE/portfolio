'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { HeaderData } from '@/data/Header';

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.header
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.a
          href="/"
          className="text-2xl font-bold cursor-pointer relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">MinJae's Portfolio</span>
          <motion.div
            className="absolute left-0 bottom-0 w-full h-1 bg-blue-500"
            layoutId="underline"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex align-center gap-x-4">
            {HeaderData.map((nav, key) => (
              <motion.li
                key={key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={nav.url}
                  onClick={(e) => scrollToSection(e, nav.url.substring(1))}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">{nav.title}</span>
                  <motion.div
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="md:hidden"
      >
        <motion.ul
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-4 overflow-hidden bg-gray-800"
        >
          {HeaderData.map((nav, index) => (
            <motion.li
              key={index}
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: 20, opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={
                index === 0 || index === HeaderData.length - 1
                  ? 'pt-2 pb-2'
                  : ''
              }
            >
              <a
                href={nav.url}
                onClick={(e) => {
                  scrollToSection(e, nav.url.substring(1));
                  setIsOpen(false);
                }}
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
