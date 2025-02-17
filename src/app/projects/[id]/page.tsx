'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../../data/projects';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ProjectSidebar from '@/components/ProjectSidebar';

const techColors: { [key: string]: string } = {
  React: 'bg-tech-react',
  'Next.js': 'bg-transparent border border-black dark:border-white',
  TypeScript: 'bg-tech-typescript',
  JavaScript: 'bg-tech-javascript',
  TailwindCSS: 'bg-tech-tailwind',
  Firebase: 'bg-tech-firebase',
  Redux: 'bg-tech-redux',
  Axios: 'bg-tech-axios',
  PWA: 'bg-tech-pwa',
  NaverMap: 'bg-tech-naver',
  Figma: 'bg-tech-figma',
};

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === params.id);
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

  const handleBack = () => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    router.back();

    if (savedScrollPosition) {
      window.scrollTo(0, Number.parseInt(savedScrollPosition));
    }
  };

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found</div>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          <ProjectSidebar
            title={project.title}
            duration={project.duration}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            onBack={handleBack}
          />

          <div className="md:w-3/4">
            <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <div className="space-y-12">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-semibold">Overview</h2>
                <p className="leading-relaxed">{project.longDescription}</p>
              </section>

              {project.imageUrl && project.imageUrl.length > 0 && (
                <section>
                  <h2 className="text-3xl font-semibold mb-6">
                    Project Images
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.imageUrl.map((url, index) => (
                      <Image
                        key={index}
                        src={url || '/placeholder.svg'}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-semibold mb-6">My Tasks</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.tasks.map((task, index) => (
                    <li key={index} className="text-lg">
                      {task}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-6">
                  Technologies Used
                </h2>
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

              {project.codeSnippet && (
                <section>
                  <h2 className="text-3xl font-semibold mb-6">
                    Code Highlight
                  </h2>
                  <SyntaxHighlighter
                    language={project.codeSnippet.language}
                    style={tomorrow}
                  >
                    {project.codeSnippet.code}
                  </SyntaxHighlighter>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {project.codeSnippet.explanation}
                  </p>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-semibold mb-6">
                  Challenges & Solutions
                </h2>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Challenge: {challenge.problem}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-6">Key Learnings</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="text-lg">
                      {learning}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
