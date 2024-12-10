import Header from '@/components/Header';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Project from '@/components/Project';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skill />
        <Project />
      </main>
    </div>
  );
};

export default Home;
