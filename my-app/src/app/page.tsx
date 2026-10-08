import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FormacionSection from './components/FormacionSection';
import SkillsSection from './components/SkillsSection';
import ProyectosSection from './components/ProyectosSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
       <FormacionSection />
       <SkillsSection />
       <ProyectosSection />
       <ContactForm />
       <Footer />
    </main>
  );
}