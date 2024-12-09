import Header from '@/components/Header';
import About from '@/components/About';
import Skill from '@/components/Skill';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skill />
      </main>
    </div>
  );
};

export default Home;
