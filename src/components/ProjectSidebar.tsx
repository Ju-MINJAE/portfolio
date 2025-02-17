import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

interface ProjectSidebarProps {
  title: string;
  duration: string;
  githubUrl: string;
  liveUrl?: string;
  onBack: () => void;
}

const ProjectSidebar = ({
  title,
  duration,
  githubUrl,
  liveUrl,
  onBack,
}: ProjectSidebarProps) => {
  return (
    <div className="md:w-1/4">
      <div className="sticky top-24 space-y-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-4"
        >
          <ArrowLeft size={20} />
          뒤로 가기
        </button>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{title} Urls</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{duration}</p>
          <div className="flex flex-col gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Github size={20} />
              View on GitHub
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
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
  );
};

export default ProjectSidebar;
