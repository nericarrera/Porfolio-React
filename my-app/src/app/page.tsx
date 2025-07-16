import HeroSection from './components/HeroSection';
import FormacionSection from './components/FormacionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
       <FormacionSection />
      {/* Hero Section (temporal) */}
      <section className="h-screen flex items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-white">
          ¡Navbar listo! 🎉 <br />
          <span className="text-sky-300">Siguiente paso: Hero Section</span>
        </h1>
      </section>
    </main>
  );
}