'use client';

import Navigation from '@/components/Navigation';
import ProjectTimeline from '@/components/ProjectTimeline';
import Intro from '@/components/Intro';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // 페이지를 떠날 때 현재 스크롤 위치 저장
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Navigation />
      <section id="home">
        <Intro />
      </section>
      <section id="projects">
        <ProjectTimeline />
      </section>
    </div>
  );
};

export default Home;
