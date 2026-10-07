'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ─── VIDEO DE FONDO ─── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          {/* ⚠️ CAMBIAR: subí el video a Cloudinary y pegá la URL optimizada */}
          <source src="video1.mp4" type="video/mp4" />
        </video>

        {/* ─── OVERLAY ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
      </div>

      {/* ─── CONTENIDO ─── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
        {/* ─── BADGE DISPONIBILIDAD ─── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-emerald-300">
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* ─── TÍTULO PRINCIPAL ─── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight"
        >
          Desarrollo{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            e-commerce y apps web
          </span>{' '}
          que venden.
        </motion.h1>

        {/* ─── SUBTÍTULO ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl font-light"
        >
          Full-stack developer con foco en resultados. React · Next.js · NestJS · PostgreSQL · MercadoPago.
        </motion.p>

        {/* ─── SEGUNDA LÍNEA DE CONFIANZA ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-gray-400 mb-12 max-w-xl"
        >
          Trabajo con procesos claros, entregas semanales y soporte post-lanzamiento.
        </motion.p>

        {/* ─── CTAs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          {/* CTA PRIMARIO */}
          <Link
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* CTA SECUNDARIO */}
          <Link
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            Ver proyectos
          </Link>
        </motion.div>

        {/* ─── REDES SOCIALES / CONTACTO RÁPIDO ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          <a
            href="mailto:nericarrera1825@gmail.com"
            aria-label="Email"
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* ─── SCROLL INDICATOR ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;