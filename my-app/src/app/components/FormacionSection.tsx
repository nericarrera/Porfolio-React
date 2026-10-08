'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, BarChart3, Brain, Calendar, Award } from 'lucide-react';

const formacionItems = [
  {
    id: 1,
    icon: Code2,
    title: 'Aprende a Programar',
    institution: 'Argentina Programa',
    year: '2022',
    status: 'Certificado',
    description:
      'Fundamentos de JavaScript, HTML, CSS y metodologías ágiles. Primer paso en mi carrera como desarrollador.',
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Tecnicatura en Tecnologías Web',
    institution: 'Universidad Nacional del Oeste',
    year: '2023 - 2025',
    status: 'Finalizada',
    description:
      'Análisis y desarrollo de sistemas web y móviles. Formación en desarrollo web, diseño gráfico y arquitectura de software.',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Introducción a la Ciencia de Datos',
    institution: 'Santander Open Academy',
    year: '2025',
    status: 'Certificado',
    description:
      'Fundamentos de análisis de datos, visualización y herramientas para toma de decisiones basadas en datos.',
  },
  {
    id: 4,
    icon: Brain,
    title: 'Iniciación al Desarrollo con IA',
    institution: 'Big School',
    year: '2025',
    status: 'Certificado',
    description:
      'Fundamentos de inteligencia artificial aplicada al desarrollo de software. Prompting, APIs y casos de uso reales.',
  },
];

const FormacionSection = () => {
  return (
    <section
      id="formacion"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-950 to-black"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
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
            Formación
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mi{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              educación
            </span>{' '}
            técnica
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Certificaciones y formación universitaria que respaldan mi trabajo como desarrollador.
          </p>
        </motion.div>

        {/* ─── GRID DE CARDS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formacionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-500/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Header con ícono + año */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/30 flex items-center justify-center group-hover:from-sky-500/30 group-hover:to-blue-600/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                      <Award className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-1.5 leading-tight">
                  {item.title}
                </h3>

                {/* Institución */}
                <p className="text-sm text-sky-400 font-medium mb-4">
                  {item.institution}
                </p>

                {/* Descripción */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormacionSection;