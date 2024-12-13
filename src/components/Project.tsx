'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ProjectText } from '@/constants/layout';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectData {
  title: string;
  desc: string;
  features: string[];
  duration: string;
  stack: string[];
  image?: string;
  liveLink?: string | null;
  githubLink?: string;
}

const Project = () => {
  return (
    <section id="Project" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-left mb-16 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
          Projects
        </motion.h2>
        {ProjectText.map((project: ProjectData, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row mb-20 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="md:w-1/2 mb-6 md:mb-0">
        <div className="relative w-full h-[300px]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
      </div>
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          {project.title}
        </h3>
        <div className="flex items-center mb-2 text-gray-400">
          <Calendar className="mr-2" size={20} />
          <span>{project.duration}</span>
        </div>
        <p className="text-gray-400 mb-6">{project.desc}</p>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
            주요 기능
          </h4>
          <ul className="list-disc list-inside text-gray-400">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          {project.stack.map((tech, techIndex) => {
            const colorClass = `bg-${tech.toLowerCase()}`;

            return (
              <span
                key={techIndex}
                className={`inline-block ${colorClass} text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}
              >
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github size={20} className="mr-2" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
