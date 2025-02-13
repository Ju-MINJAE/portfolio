'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';
import ProjectTimelineItem from './ProjectTimelineItem';

const ProjectTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={ref} className="relative py-20 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="relative">
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 dark:bg-white origin-top"
          />
          {projects.map((project, index) => (
            <ProjectTimelineItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
