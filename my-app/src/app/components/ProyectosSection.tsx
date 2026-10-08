'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Building2,
  GraduationCap,
  User,
  Clock,
  Sparkles,
} from 'lucide-react';
import ProjectModal, { type Project } from './ProjectModal';

// ===============================
// 🎯 DATOS DE PROYECTOS
// ===============================
// ⚠️ EDITAR: revisá los datos de cada proyecto
// ===============================
const projects: Project[] = [
  {
    id: 1,
    title: 'Daysport E-commerce',
    subtitle: 'Tienda online + panel admin para ropa deportiva',
    description:
      'Plataforma de e-commerce full-stack con tienda pública, panel de administración independiente y backend propio. Incluye checkout con cálculo de envío por geolocalización, integración con MercadoPago y gestión completa de pedidos, stock y clientes.',
    type: 'cliente',
    duration: '30 días',
    role: 'Full-stack Developer',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'Framer Motion',
      'NextAuth.js',
      'Google Maps API',
      'MercadoPago',
      'Cloudinary',
      'Brevo',
      'Docker',
      'Railway',
    ],
    images: [
      '/daysport-0.png',
      '/daysport-1.png',
      '/daysport-2.png',
      '/daysport-3.png',
      '/daysport-4.png',
      '/daysport-5.png',
      '/daysport-6.png',
      '/daysport-7.png',
    ],
    projectUrl: 'https://www.daysport.com.ar',
    featured: true,
    challenge:
      'La tienda necesitaba vender online con pago integrado y cálculo automático de envíos por zona, algo que no podía resolver con plataformas no-code.',
    solution:
      'Desarrollé un e-commerce a medida con Next.js 14 en el frontend y NestJS + PostgreSQL en el backend. Implementé el cálculo de envíos usando Google Maps API + fórmula Haversine, integré MercadoPago como pasarela de pagos, y construí un panel admin completo para gestionar pedidos, stock y clientes.',
    results: [
      'Checkout 100% automatizado con pago online',
      'Cálculo de envíos en tiempo real por geolocalización',
      'Panel admin a medida para gestión completa del negocio',
      'Emails transaccionales automáticos (Brevo)',
    ],
  },
  {
    id: 2,
    title: 'Adopciones BA',
    subtitle: 'Plataforma para conectar mascotas con familias',
    description:
      'Aplicación web full-stack para publicar mascotas en adopción y conectar con personas interesadas. Incluye autenticación de usuarios, gestión de publicaciones, filtros de búsqueda y notificaciones automáticas por email.',
    type: 'curso',
    duration: '15 días',
    role: 'Full-stack Developer',
    technologies: [
      'Next.js 14',
      'Vite.js',
      'TypeScript',
      'NestJS',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
    images: ['/ba-1.png', '/ba-2.png', '/ba-3.png', '/ba-4.png', '/ba-5.png'],
    projectUrl: 'https://ecommerce-ba-sage.vercel.app/',
    challenge:
      'Crear una plataforma completa de adopciones con autenticación, gestión de publicaciones y sistema de notificaciones por email.',
    solution:
      'Desarrollé la aplicación full-stack con Next.js y NestJS. Implementé autenticación de usuarios, CRUD de publicaciones, filtros de búsqueda y un sistema de emails automáticos para notificar a los interesados.',
    results: [
      'Sistema completo de publicaciones con imágenes',
      'Autenticación segura de usuarios',
      'Notificaciones automáticas por email',
    ],
  },
  {
    id: 3,
    title: 'NO-CODE',
    subtitle: 'Sistema de autenticación para plataforma No-Code',
    description:
      'Módulo de autenticación para un proyecto de plataforma No-Code. Incluye login, formulario de registro de usuarios y flujo completo de revalidación de contraseña.',
    type: 'curso',
    duration: '10 días',
    role: 'Frontend Developer',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
    ],
    images: [
      '/no-code-login.png',
      '/no-code-formulario.png',
      '/no-code-contraseña.png',
    ],
    githubUrl: 'https://github.com/nericarrera/NO-CODE---Grupo',
    challenge:
      'Implementar un sistema de autenticación completo con validaciones y flujo de revalidación de contraseña para una plataforma No-Code.',
    solution:
      'Desarrollé el módulo con React + Vite y Tailwind CSS. Incluye formularios validados, login seguro y flujo completo de recuperación de contraseña con diseño moderno.',
    results: [
      'Login funcional con validaciones',
      'Formulario de registro de usuarios',
      'Flujo completo de revalidación de contraseña',
    ],
  },
];

// ===============================
// 🎨 CONFIGURACIÓN DE TIPOS
// ===============================
const typeConfig = {
  cliente: {
    label: 'Cliente real',
    icon: Building2,
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
  },
  curso: {
    label: 'Proyecto de curso',
    icon: GraduationCap,
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
    text: 'text-sky-300',
  },
  personal: {
    label: 'Proyecto personal',
    icon: User,
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
  },
};

// ===============================
// 🎯 SECCIÓN PRINCIPAL
// ===============================
export default function ProyectosSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="proyectos"
        className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-950 to-black"
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* ─── HEADER ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium mb-4">
              Proyectos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trabajos que{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                resuelven problemas reales
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Cada proyecto incluye el desafío, la solución técnica y los resultados
              obtenidos.
            </p>
          </motion.div>

          {/* ─── GRID DE PROYECTOS ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const config = typeConfig[project.type];
              const TypeIcon = config.icon;
              const visibleTechs = project.technologies.slice(0, 5);
              const remainingCount = project.technologies.length - visibleTechs.length;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border transition-all duration-300 hover:border-sky-500/40 ${
                    project.featured
                      ? 'border-sky-500/30 lg:col-span-2'
                      : 'border-white/10'
                  }`}
                >
                  {/* Imagen */}
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      project.featured ? 'aspect-[21/9]' : 'aspect-video'
                    }`}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={85}
                    />

                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge tipo */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.bg} ${config.border} border ${config.text} text-xs font-medium backdrop-blur-sm`}
                      >
                        <TypeIcon className="w-3.5 h-3.5" />
                        {config.label}
                      </span>
                    </div>

                    {/* Badge destacado */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-lg">
                          <Sparkles className="w-3.5 h-3.5" />
                          Destacado
                        </span>
                      </div>
                    )}

                    {/* Metadata abajo */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                        <Clock className="w-3.5 h-3.5" />
                        {project.duration}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col p-6 flex-1">
                    {/* Título */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sky-400 text-sm mb-4">
                      {project.subtitle}
                    </p>

                    {/* Descripción corta */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {visibleTechs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {remainingCount > 0 && (
                        <span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 rounded-lg text-xs font-medium">
                          +{remainingCount} más
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40"
                      >
                        Ver caso completo
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver sitio
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                        >
                          <Code2 className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ─── CTA FINAL ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 mb-6 text-lg">
              ¿Tenés un proyecto en mente?
            </p>
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105"
            >
              Hablemos de tu idea
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── MODAL ─── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}