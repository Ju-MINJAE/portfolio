'use client';

import Navigation from '@/components/Navigation';
import ProjectTimeline from '@/components/ProjectTimeline';
import Intro from '@/components/Intro';

const Home = () => {
  return (
    <div className="relative w-full">
      <Navigation />
      <Intro />
      <ProjectTimeline />
    </div>
  );
};

export default Home;
