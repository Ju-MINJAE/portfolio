'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, BookOpen } from 'lucide-react';
import { AboutData } from '@/data/About';

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
          className="flex flex-col md:flex-row items-center "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
            <Image
              src={AboutData.img}
              alt="MinJae's profile"
              width={400}
              height={400}
              className="rounded-3xl shadow-lg object-cover "
            />
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-4" variants={containerVariants}>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            {AboutData.desc.map((text, index) => (
              <motion.p
                key={index}
                className="text-xl mb-4"
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
