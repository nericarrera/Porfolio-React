import HeroSection from './components/HeroSection';
import FormacionSection from './components/FormacionSection';
import SkillsSection from './components/SkillsSection';
import ProyectosSection from './components/ProyectosSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
       <FormacionSection />
       <SkillsSection />
       <ProyectosSection />
    </main>
  );
}