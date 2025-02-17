export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  duration: string;
  tasks: string[];
  codeSnippet?: {
    code: string;
    language: string;
    explanation: string;
  };
  challenges: {
    problem: string;
    solution: string;
  }[];
  learnings: string[];
}
