import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
// import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function HomePage() {
  return (
    <div>
      
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectCard />
      <Experience />
      <Education />
       <Contact />
    </div>
  );
}
