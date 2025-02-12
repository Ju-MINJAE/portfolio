// components/ProjectTimelineItem.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '../types/project';

interface ProjectTimelineItemProps {
  project: Project;
  index: number;
}

const ProjectTimelineItem = ({ project, index }: ProjectTimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`mb-12 flex flex-col sm:flex-row items-center justify-center relative ${
        isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10">
        <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full absolute top-0.5 left-0.5" />
      </div>

      <div className="w-full sm:w-5/12 px-4 mb-4 sm:mb-0">
        <div
          className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
            isEven ? 'sm:text-left' : 'sm:text-right'
          }`}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mb-4 ${
              isEven ? 'sm:justify-start' : 'sm:justify-end'
            }`}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            className={`flex ${
              isEven ? 'sm:justify-start' : 'sm:justify-end'
            } gap-4`}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-5/12 px-4 mb-4 sm:mb-0">
        <span
          className={`text-gray-500 dark:text-gray-400 font-medium block text-center sm:text-left ${
            isEven ? 'sm:text-right' : 'sm:text-left'
          }`}
        >
          {project.duration}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectTimelineItem;
