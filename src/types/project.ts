export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  duration: string;
}
