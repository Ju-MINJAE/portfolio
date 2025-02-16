'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../../data/projects';

const techColors: { [key: string]: string } = {
  React: 'bg-tech-react',
  'Next.js': 'bg-transparent border border-black dark:border-white',
  TypeScript: 'bg-tech-typescript',
  JavaScript: 'bg-tech-javascript',
  TailwindCSS: 'bg-tech-tailwind',
  Firebase: 'bg-tech-firebase',
  Redux: 'bg-tech-redux',
  Axios: 'bg-tech-axios',
};

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white tracking-tight">
          {project.title}
        </h1>

        {project.imageUrl && project.imageUrl.length > 0 && (
          <div className="relative w-full h-[600px] mb-12 rounded-xl overflow-hidden shadow-2xl">
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
                  src={
                    project.imageUrl[currentImageIndex] || '/placeholder.svg'
                  }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-semibold">Description</h2>
              <p className="leading-relaxed">{project.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 ${
                      techColors[tech] || 'bg-gray-200 dark:bg-gray-700'
                    } text-sm rounded-lg hover:scale-105 transition-transform`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="md:sticky md:top-24 h-fit">
            <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
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
    </>
  );
}
