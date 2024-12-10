import Header from '@/components/Header';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Project from '@/components/Project';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
