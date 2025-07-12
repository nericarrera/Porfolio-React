'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="video1.mp4" type="video/mp4" />
          {/* Puedes añadir fuentes alternativas aquí si es necesario */}
        </video>
        {/* Capa oscura para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/40 shadow-xl"></div>
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
         Hi, I´m Neri Carrera
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-2xl"
        >
          Desarrollador Frontend especializado en React, Next.js y Tailwind CSS
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#contacto"
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-sky-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg shadow-violet-500/35"
          >
            Contacto
          </Link>
          <Link
            href="#proyectos"
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-sky-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg shadow-violet-500/35"
          >
            Proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;