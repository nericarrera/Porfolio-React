'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  X,
  ExternalLink,
  GitBranch,
  Building2,
  GraduationCap,
  User,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

// ===============================
// 🎯 TIPOS
// ===============================
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  type: 'cliente' | 'curso' | 'personal';
  duration: string;
  role: string;
  technologies: string[];
  images: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  results?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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
// 🎯 MODAL
// ===============================
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Reset image index cuando cambia el proyecto
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const config = typeConfig[project.type];
  const TypeIcon = config.icon;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-950 border border-white/10 rounded-2xl shadow-2xl"
          >
            {/* ─── BOTÓN CERRAR ─── */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="sticky top-4 right-4 ml-auto mr-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ─── CARRUSEL ─── */}
            <div className="relative w-full aspect-video bg-black -mt-14">
              <Image
                src={project.images[currentImage]}
                alt={`${project.title} - Imagen ${currentImage + 1}`}
                fill
                className="object-contain"
                quality={90}
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )
                    }
                    aria-label="Imagen anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Imagen siguiente"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        aria-label={`Ir a imagen ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImage
                            ? 'bg-white w-6'
                            : 'bg-white/40 hover:bg-white/70 w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ─── CONTENIDO ─── */}
            <div className="p-8">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.bg} ${config.border} border ${config.text} text-xs font-medium`}
                >
                  <TypeIcon className="w-3.5 h-3.5" />
                  {config.label}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {project.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                  {project.role}
                </span>
              </div>

              {/* Título */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-sky-400 mb-6">{project.subtitle}</p>

              {/* Descripción */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Desafío / Solución / Resultados */}
              <div className="space-y-6 mb-8">
                {project.challenge && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Target className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Desafío
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  </div>
                )}

                {project.solution && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wider mb-2">
                        Solución
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                )}

                {project.results && project.results.length > 0 && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-2">
                        Resultados
                      </h3>
                      <ul className="space-y-1.5">
                        {project.results.map((result, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-emerald-400 mt-0.5">▸</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Stack completo */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Stack técnico
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver sitio en vivo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <GitBranch className="w-4 h-4" />
                    Ver código
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}