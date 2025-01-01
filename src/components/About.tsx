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
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <div className="relative w-full aspect-square md:pr-8">
              <Image
                src={AboutData.img}
                alt="MinJae's profile"
                width={300}
                height={300}
                className="rounded-3xl shadow-lg object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8 pt-8 md:pt-0"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-8 text-blue-400"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            {AboutData.desc.map((text, index) => (
              <motion.p
                key={index}
                className="text-lg mb-4 leading-relaxed text-gray-300"
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}
            <motion.div className="flex space-x-6 mt-6" variants={itemVariants}>
              <a
                href="https://github.com/Ju-MINJAE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://velog.io/@min_jae/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <BookOpen size={28} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
