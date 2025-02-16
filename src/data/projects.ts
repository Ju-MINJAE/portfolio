import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'desub',
    description: '디자인 월 구독 서비스',
    imageUrl: ['/images/desub.png'],
    technologies: [
      'React',
      'Next.js',
      'Redux',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/team-dbre/desub_FE',
    liveUrl: 'https://www.desub.kr/',
    duration: '2025.01 ~',
  },
  {
    id: '2',
    title: 'Chaeuda | 채우다',
    description: '전국 방치된 빈집을 소개하고 활용할 수 있도록 돕는 플랫폼',
    imageUrl: ['/images/chaeuda.png'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Zustand', 'TailwindCSS'],
    githubUrl: 'https://github.com/chaeuda-TEAM/oz-main-fe-06-team2',
    liveUrl: 'https://www.chaeuda.shop/',
    duration: '2024.12 - 2025.01',
  },
  {
    id: '3',
    title: '커뮤니T',
    description:
      '운동 관련 정보를 공유하고 다양한 챌린지에 참여할 수 있는 커뮤니티 플랫폼',
    imageUrl: ['/images/communiT.png'],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'Axios'],
    githubUrl: 'https://github.com/orlein/advanced-class-project-team-b',
    duration: '2024.10 - 2024.12',
  },
  {
    id: '4',
    title: 'Vilez | 빌리지',
    description:
      '사용자 간 사용 빈도가 낮은 물품을 대여·반납할 수 있는 C2C 플랫폼',
    technologies: ['React', 'JavaScript', 'Firebase'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    duration: '2023.10 - 2023.12',
  },
];
