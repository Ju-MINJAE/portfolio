'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SkillData } from '@/data/Skill';

interface Skill {
  category: string;
  title: string;
  desc: string;
  icon: string;
}

const groupsByCategory = (skills: Skill[]) => {
  return skills.reduce((groups: Record<string, Skill[]>, skill: Skill) => {
    const { category } = skill;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});
};

const Skill = () => {
  const groupedSkills = groupsByCategory(SkillData);
  const categories = Object.keys(groupedSkills);
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="Skill" className="text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="sticky top-24">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`w-full text-left py-3 px-4 rounded-lg mb-2 transition-all ${
                    category === activeTab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveTab(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.replace('-', ' ').toUpperCase()}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-gray-700 rounded-lg p-6"
              >
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-blue-400"
                  variants={itemVariants}
                >
                  {activeTab.replace('-', ' ').toUpperCase()}
                </motion.h3>
                <ul className="space-y-4">
                  {groupedSkills[activeTab].map((skill) => (
                    <motion.li
                      key={skill.title}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          src={skill.icon}
                          alt={`${skill.title} icon`}
                          width={45}
                          height={45}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {skill.title}
                        </h4>
                        <p className="text-gray-300">{skill.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
