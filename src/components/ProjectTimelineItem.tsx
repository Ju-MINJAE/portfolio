'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '../types/project';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5" />
      </div>

      <div className="w-full sm:w-5/12 px-4 mb-4 sm:mb-0">
        <Link href={`/projects/${project.id}`} passHref>
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg ${
              isEven ? 'sm:text-left' : 'sm:text-right'
            } cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
          >
            {project.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl[0]}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
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
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded-lg text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`flex ${
                  isEven ? 'sm:justify-start' : 'sm:justify-end'
                } gap-4`}
              ></div>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full sm:w-5/12 px-4 mb-4 sm:mb-0">
        <span
          className={`text-gray-500 dark:text-white font-medium block text-center sm:text-left ${
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
