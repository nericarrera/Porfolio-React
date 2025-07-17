import HeroSection from './components/HeroSection';
import FormacionSection from './components/FormacionSection';
import SkillsSection from './components/SkillsSection';
import ProyectosSection from './components/ProyectosSection';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <HeroSection />
       <FormacionSection />
       <SkillsSection />
       <ProyectosSection />
       <ContactForm />
    </main>
  );
}