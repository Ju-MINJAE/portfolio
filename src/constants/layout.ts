import aboutImg from '../../public/image/test.jpeg';

export const headerNav = [
  {
    title: 'About',
    url: '#About',
  },
  {
    title: 'Skill',
    url: '#Skill',
  },
  {
    title: 'Project',
    url: '#Project',
  },
  {
    title: 'Contact',
    url: '#Contact',
  },
];

export const aboutText = {
  desc: [
    '웅성👥👤👥뭐야..👤👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 뭐야..👥👤👥👤👥👥👤👥👤👥👤👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥👤👥👤👥👤👥👥👤👥웅성웅성..👤👥 👤👥👤👥👤👥👤👥👥👤👥 👤👥👤👥👥👤👥👤👥👤👥 👥👤👥👤뭐야..👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 👥👤웅성..👥👤👥👥👤👥👤👥👤 👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥 👤',
    '웅성👥👤👥뭐야..👤👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 뭐야..👥👤👥👤👥👥👤👥👤👥👤👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥👤👥👤👥👤👥👥👤👥웅성웅성..👤👥 👤👥👤👥👤👥👤👥👥👤👥 👤👥👤👥👥👤👥👤👥👤👥 👥👤👥👤뭐야..👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤 👥👤웅성..👥👤👥👥👤👥👤👥👤 👥👤👥👤👥👤👥👥 뭐야..👤👥👤 👤👥👤👥👤👤👥👥 👤',
  ],
  img: aboutImg,
};

export const skillText = [
  {
    category: 'language',
    title: 'JavaScript',
    desc: 'JavaScript 코드를 작성할 수 있습니다.',
  },
  {
    category: 'frontend',
    title: 'HTML5',
    desc: 'HTML을 사용할 수 있습니다.',
  },
  {
    category: 'frontend',
    title: 'CSS',
    desc: 'CSS를 할 수 있...있습니다.,,,',
  },

  {
    category: 'language',
    title: 'TypeScript',
    desc: 'TypeScript 코드를 작성할 수 있습니다.',
  },
  {
    category: 'language',
    title: 'Python',
    desc: 'Python 마스터',
  },
  {
    category: 'language',
    title: 'C',
    desc: 'C언어가 뭐였지..',
  },
  { category: 'frontend', title: 'React', desc: 'React 딸깍딸깍..' },
  { category: 'frontend', title: 'Next', desc: 'Next 딸깍딸깍..ing ~' },
  { category: 'frontend', title: 'Axios', desc: 'Axios 딸깍딸깍..' },
  {
    category: 'frontend',
    title: 'TailwindCSS',
    desc: 'TailwindCSS 딸깍딸깍..',
  },
  { category: 'frontend', title: 'Redux', desc: 'Redux 딸깍딸깍..' },
  { category: 'backend', title: 'Node', desc: 'Node 딸깍딸깍..' },
  { category: 'etc', title: 'AWS', desc: 'AWS S3, IAM 딸깍딸깍..' },
  { category: 'etc', title: 'Git', desc: 'Git 딸깍딸깍..' },
  { category: 'etc', title: 'GitHub', desc: 'Node 딸깍딸깍..' },
  { category: 'etc', title: 'Firebase', desc: 'Node 딸깍딸깍..' },
  { category: 'etc', title: 'Supabase', desc: 'Node 딸깍딸깍..' },
  { category: 'etc', title: 'Vercel', desc: 'Vercel 딸깍딸깍..' },
];

export const ProjectText = [
  {
    title: 'Villez',
    desc: '개인 간의 물품 대여와 반납을 지원하는 C2C 서비스입니다.',
    features: [
      '사용자 로그인 및 인증',
      '물품 등록 및 예약 기능',
      '실시간 채팅 지원',
    ],
    duration: '2023.10 ~ 2023.12',
    stack: ['React', 'Firebase', 'PWA'],
    image: '/image/test.jpeg',
    githubLink: 'https://github.com/Ju-MINJAE/Viliez/tree/main/viliez-pwa',
    liveLink: null,
  },
  {
    title: '그리핀도미토리',
    desc: '기숙사 룸메이트를 구할 수 있는 플랫폼입니다.',
    features: [
      '자유게시판: 글 작성 및 댓글 기능',
      '룸메이트 모집 게시판: 모집글 작성 및 신청 기능',
      '사용자 관리 및 인증',
    ],
    duration: '2024.04 ~ 2024.06',
    stack: ['Vue', 'Firebase', 'PWA'],
    image: '/image/Griffindormitory.png',
    githubLink: 'https://github.com/Ju-MINJAE/Griffindormitory',
    liveLink: null,
  },
  {
    title: '커뮤니T',
    desc: '운동 애호가를 위한 커뮤니티 플랫폼입니다.',
    features: [
      '자유게시판: 사용자 간 소통 및 정보 공유',
      '챌린지 게시판: 챌린지 생성 및 참여 기능',
      '이벤트 관리: 공동 목표 설정 및 진행',
    ],
    duration: '2024.10 ~ 2024.11',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Axios', 'Vercel'],
    image: '/image/123.png',
    githubLink: 'https://github.com/Ju-MINJAE/communiT',
    liveLink: 'https://advanced-class-project.vercel.app/',
  },
];

export const contactText = [
  {
    title: 'Phone',
    info: '010-7591-1040',
    onClick: 'copy',
    btnText: '복사하기',
  },
  {
    title: 'Email',
    info: 'juminjae98@gmail.com',
    onClick: 'email',
    btnText: '전송하기',
  },

  {
    title: 'linkedin',
    info: 'https://www.linkedin.com/feed/',
    onClick: 'link',
    btnText: '방문하기',
  },
];
