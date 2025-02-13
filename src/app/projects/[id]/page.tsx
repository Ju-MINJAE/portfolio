'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../../data/projects';

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (project.imageUrl?.length ?? 1) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (project.imageUrl?.length ?? 1) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        {project.title}
      </h1>

      {project.imageUrl && project.imageUrl.length > 0 && (
        <div className="relative w-full h-96 mb-8">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={project.imageUrl[currentImageIndex] || '/placeholder.svg'}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
          {project.imageUrl.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Description
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Project Details
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Duration:</strong> {project.duration}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Github size={20} />
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
