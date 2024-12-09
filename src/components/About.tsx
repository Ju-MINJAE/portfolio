'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, BookOpen, Mail } from 'lucide-react';
import { aboutText } from '@/constants/layout';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="About" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
            <Image
              src={aboutText.img}
              alt="MinJae's profile"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={containerVariants}>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            {aboutText.desc.map((text, index) => (
              <motion.p
                key={index}
                className="text-xl mb-6"
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}

            <motion.div className="flex space-x-4" variants={itemVariants}>
              <a
                href="https://github.com/Ju-MINJAE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={25} />
              </a>
              <a
                href="https://velog.io/@min_jae/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <BookOpen size={25} />
              </a>
              <a
                href="mailto:juminjae98@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={25} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
