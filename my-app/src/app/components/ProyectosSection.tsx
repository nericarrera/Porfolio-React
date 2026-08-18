'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Proyecto {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  codeUrl: string;
}

interface ProjectCardProps {
  proyecto: Proyecto;
  index: number;
}

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      title: "Proyecto NO-CODE",
      description: "Login para proyecto de No-Code, Formulario para agregar usuario y revalidar contraseña. Diseño moderno con React + Vite y Tailwind CSS",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive"],
      images: [
        "/no-code-login.png",
        "/no-code-formulario.png",
        "/no-code-contraseña.png"
      ],
      codeUrl: "https://github.com/nericarrera/NO-CODE---Grupo",
    },
    {
      id: 2,
      title: "Daysport E-commerce",
      description: "Plataforma de e-commerce full-stack con frontend de tienda, panel de administración independiente y backend propio. Sistema de checkout completo con cálculo de envío en tiempo real por geolocalización (Google Maps + fórmula Haversine), pasarela de pagos integrada, autocompletado de direcciones, y gestión de pedidos, stock, envíos y clientes desde un panel admin a medida.",
      technologies: ["Next.js 14", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "NextAuth.js", "Google Maps API", "Mercado Pago", "Cloudinary", "Brevo (Email)", "Docker", "Railway", "Responsive Design"],
      images: [
        "/daysport-1.png",
        "/daysport-2.png",
        "/daysport-3.png",
        "/daysport-4.png",
        "/daysport-5.png",
        "/daysport-6.png",
        "/daysport-7.png"
      ],
      codeUrl: "https://www.daysport.com.ar",
    },
    {
      id: 3,
      title: "Adopciones Ba E-commerce",
      description: "Plataforma completa para conectar personas con mascotas y que puedan ser adoptadas. Autenticación de usuarios, gestión de publicaciones y notificaciones por email.",
      technologies: ["Vite.js", "Next.js 14", "TypeScript", "NestJS", "Tailwind CSS", "Framer Motion", "Vercel", "Responsive Design"],
      images: [
        "/ba-1.png",
        "/ba-2.png",
        "/ba-3.png",
        "/ba-4.png",
        "/ba-5.png"      
      ],

      codeUrl: "https://ecommerce-ba-sage.vercel.app/",
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Mis <span className="text-sky-500">Proyectos</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Algunos de mis trabajos recientes y desafíos técnicos.
        </motion.p>

        {/* Grid centrado con 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {proyectos.map((proyecto, index) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={index} />
          ))}
        </div>

        {/* Botón para más proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/nericarrera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-sky-500 text-sky-500 hover:bg-sky-500/10 rounded-lg transition-colors"
          >
            Ver todos mis proyectos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ proyecto, index }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === proyecto.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? proyecto.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 flex flex-col"
    >
      {/* Carrusel de imágenes */}
      <div className="h-56 relative overflow-hidden group flex-shrink-0">
        <Link href={proyecto.demoUrl || proyecto.codeUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={proyecto.images[currentImageIndex]}
            alt={`${proyecto.title} - Imagen ${currentImageIndex + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            quality={80}
          />
        </Link>

        {/* Flechas de navegación */}
        {proyecto.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Imagen siguiente"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Indicadores de posición */}
        {proyecto.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {proyecto.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{proyecto.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {proyecto.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-700 text-amber-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔥 DESCRIPCIÓN CON SCROLL - ESTE ES EL CAMBIO PRINCIPAL */}
        <div className="relative flex-1 min-h-0">
          <p className="text-gray-300 text-sm leading-relaxed h-24 overflow-y-auto pr-2 
                        scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-gray-700/30 
                        hover:scrollbar-thumb-sky-400 scrollbar-rounded p-2">
            {proyecto.description}
          </p>
          {/* Degradado sutil para indicar scroll */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex gap-3 mt-4 flex-shrink-0">
          {proyecto.demoUrl && (
            <Link
              href={proyecto.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Ver Demo
            </Link>
          )}
          <Link
            href={proyecto.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border border-gray-600 hover:border-sky-400 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Ver Código
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProyectosSection;