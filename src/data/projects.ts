import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'desub',
    title: 'desub',
    description: '디자인 월 구독 서비스',
    longDescription:
      'desub은 디자이너와 기업을 연결하는 혁신적인 월 구독 서비스입니다. 기업은 매월 일정 금액을 지불하고, 필요한 디자인 작업을 요청할 수 있습니다. 이를 통해 기업은 안정적인 디자인 리소스를 확보하고, 디자이너는 지속적인 수입을 얻을 수 있습니다.',
    imageUrl: ['/images/desub.png'],
    technologies: [
      'React',
      'Next.js',
      'Redux',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Figma',
    ],
    githubUrl: 'https://github.com/team-dbre/desub_FE',
    liveUrl: 'https://www.desub.kr/',
    duration: '2025.01 ~',
    tasks: [
      '월 구독 기반의 디자인 서비스 플랫폼',
      '기업과 디자이너 매칭 시스템',
      '실시간 프로젝트 진행 상황 추적',
      '포트폴리오 관리 및 전시',
    ],
    codeSnippet: {
      code: `const SubscriptionPlan = ({ plan, onSelect }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-gray-600">{plan.description}</p>
      <button
        onClick={() => onSelect(plan)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select Plan
      </button>
    </div>
  );
};`,
      language: 'jsx',
      explanation:
        'react-syntax-highlighter를 사용해서 코드를 넣을 수 있습니다.',
    },
    challenges: [
      {
        problem: '트러블1',
        solution: '트러블1 해결방안',
      },
      {
        problem: '트러블2',
        solution: '트러블2 해결방안',
      },
    ],
    learnings: ['Framer Motion을 활용한 스크롤 애니메이션 구현'],
  },

  {
    id: 'chaeuda',
    title: 'Chaeuda | 채우다',
    description: '전국 방치된 빈집을 소개하고 활용할 수 있도록 돕는 플랫폼',
    longDescription:
      '편리하게 빈집을 올리고 구매자와 판매자가 즉각적으로 소통할 수 있는 빈집 매매 플랫폼',
    imageUrl: ['/images/chaeuda.png'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Zustand',
      'TailwindCSS',
      'NaverMap',
      'Figma',
    ],
    githubUrl: 'https://github.com/chaeuda-TEAM/oz-main-fe-06-team2',
    liveUrl: 'https://www.chaeuda.shop/',
    duration: '2024.12 - 2025.01',
    tasks: [
      'AWS IAM 권한 관리 및 Route 53 설정',
      '토큰(쿠키) 기반 인증 및 미들웨어 설정',
      'Naver Map 활용한 매물 지도 시각화',
      'Socket을 이용한 실시간 채팅 기능 구현',
    ],
    codeSnippet: {
      code: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  const refreshToken = req.cookies.get('refreshToken');

  if (
    !refreshToken &&
    (req.url.includes('/create') || req.url.includes('/chat') || req.url.includes('/mypage'))
  ) {
    return NextResponse.redirect(new URL('/auth/signIn', req.url));
  }

  if (refreshToken && (req.url.includes('/auth/signIn') || req.url.includes('/auth/signUp'))) {
    return NextResponse.redirect(new URL('/mypage', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/create/:path*', '/chat/:path*', '/mypage/:path*', '/auth/signIn', '/auth/signUp'],
};
`,
      language: 'ts',
      explanation:
        '사용자의 인증 상태에 따라 특정 페이지 접근을 제한하는 Next.js Middleware를 작성하였으며, 토큰 기반 리다이렉션 로직을 구현하여 보안 및 사용자 경험을 개선했습니다.',
    },
    challenges: [
      {
        problem: '트러블1',
        solution: '트러블1 해결방안',
      },
      {
        problem: '트러블2',
        solution: '트러블2 해결방안',
      },
    ],
    learnings: [
      '미들웨어를 활용하여 인증 상태에 따른 페이지 접근을 제어하고, NextResponse로 요청 흐름을 관리하는 방법 학습',
      'Zustand 라이브러리를 사용한 전역상태관리',
      'Socket의 Handshaking 과정을 이해하고, 이벤트 기반 실시간 데이터 송수신 및 상태 동기화 구현 경험',
    ],
  },

  {
    id: 'communiT',
    title: '커뮤니T',
    description:
      '운동 관련 정보를 공유하고 다양한 챌린지에 참여할 수 있는 커뮤니티 플랫폼',
    longDescription:
      'desub은 디자이너와 기업을 연결하는 혁신적인 월 구독 서비스입니다. 기업은 매월 일정 금액을 지불하고, 필요한 디자인 작업을 요청할 수 있습니다. 이를 통해 기업은 안정적인 디자인 리소스를 확보하고, 디자이너는 지속적인 수입을 얻을 수 있습니다.',
    imageUrl: ['/images/communiT.png'],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'Axios'],
    githubUrl: 'https://github.com/orlein/advanced-class-project-team-b',
    duration: '2024.10 - 2024.12',
    tasks: [
      '월 구독 기반의 디자인 서비스 플랫폼',
      '기업과 디자이너 매칭 시스템',
      '실시간 프로젝트 진행 상황 추적',
      '포트폴리오 관리 및 전시',
    ],
    codeSnippet: {
      code: `const SubscriptionPlan = ({ plan, onSelect }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-gray-600">{plan.description}</p>
      <button
        onClick={() => onSelect(plan)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select Plan
      </button>
    </div>
  );
};`,
      language: 'jsx',
      explanation:
        'react-syntax-highlighter를 사용해서 코드를 넣을 수 있습니다.',
    },
    challenges: [
      {
        problem: '트러블1',
        solution: '트러블1 해결방안',
      },
      {
        problem: '트러블2',
        solution: '트러블2 해결방안',
      },
    ],
    learnings: [
      ' 대규모 상태 관리를 위한 Redux 아키텍처 설계 및 최적화',
      'WebSocket을 이용한 실시간 기능 구현',
      ' 복잡한 비즈니스 로직을 처리하기 위한 커스텀 훅 설계',
      'Framer Motion을 활용한 고급 애니메이션 구현',
    ],
  },

  {
    id: 'vilez',
    title: 'Vilez | 빌리지',
    description:
      '사용자 간 사용 빈도가 낮은 물품을 대여·반납할 수 있는 C2C 플랫폼',
    longDescription:
      'desub은 디자이너와 기업을 연결하는 혁신적인 월 구독 서비스입니다. 기업은 매월 일정 금액을 지불하고, 필요한 디자인 작업을 요청할 수 있습니다. 이를 통해 기업은 안정적인 디자인 리소스를 확보하고, 디자이너는 지속적인 수입을 얻을 수 있습니다.',
    technologies: ['React', 'JavaScript', 'Firebase', 'PWA'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    duration: '2023.10 - 2023.12',
    tasks: [
      '월 구독 기반의 디자인 서비스 플랫폼',
      '기업과 디자이너 매칭 시스템',
      '실시간 프로젝트 진행 상황 추적',
      '포트폴리오 관리 및 전시',
    ],
    codeSnippet: {
      code: `const SubscriptionPlan = ({ plan, onSelect }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 text-gray-600">{plan.description}</p>
      <button
        onClick={() => onSelect(plan)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select Plan
      </button>
    </div>
  );
};`,
      language: 'jsx',
      explanation:
        'react-syntax-highlighter를 사용해서 코드를 넣을 수 있습니다.',
    },
    challenges: [
      {
        problem: '트러블1',
        solution: '트러블1 해결방안',
      },
      {
        problem: '트러블2',
        solution: '트러블2 해결방안',
      },
    ],
    learnings: [
      ' 대규모 상태 관리를 위한 Redux 아키텍처 설계 및 최적화',
      'WebSocket을 이용한 실시간 기능 구현',
      ' 복잡한 비즈니스 로직을 처리하기 위한 커스텀 훅 설계',
      'Framer Motion을 활용한 고급 애니메이션 구현',
    ],
  },
];
