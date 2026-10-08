'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

// ===============================
// 🎯 SKILLS POR CATEGORÍA Y NIVEL
// ===============================
// 🟢 Experto: lo uso todos los días, puedo enseñarlo
// 🔵 Avanzado: lo domino bien, resuelvo problemas complejos
// 🟡 Intermedio: lo uso con soltura, sigo aprendiendo
// ===============================

const skillsData = [
  {
    id: 'frontend',
    icon: Code2,
    title: 'Frontend',
    description: 'Interfaces modernas, rápidas y responsivas',
    color: 'sky',
    skills: [
      { name: 'React', level: 'experto' },
      { name: 'Next.js', level: 'experto' },
      { name: 'TypeScript', level: 'avanzado' },
      { name: 'Tailwind CSS', level: 'experto' },
      { name: 'Framer Motion', level: 'avanzado' },
      { name: 'HTML', level: 'experto' },
      { name: 'CSS', level: 'experto' },
      { name: 'JavaScript', level: 'avanzado' },
      { name: 'NextAuth.js', level: 'avanzado' },
      { name: 'Bootstrap', level: 'avanzado' },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend',
    description: 'APIs robustas, seguras y escalables',
    color: 'blue',
    skills: [
      { name: 'Node.js', level: 'avanzado' },
      { name: 'NestJS', level: 'avanzado' },
      { name: 'Express', level: 'avanzado' },
      { name: 'Prisma ORM', level: 'avanzado' },
      { name: 'PostgreSQL', level: 'avanzado' },
      { name: 'JWT', level: 'avanzado' },
      { name: 'Bcrypt', level: 'avanzado' },
      { name: 'Nodemailer', level: 'avanzado' },
      { name: 'MongoDB', level: 'intermedio' },
      { name: 'Firebase', level: 'intermedio' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Herramientas',
    description: 'Flujo de trabajo profesional',
    color: 'cyan',
    skills: [
      { name: 'GitHub', level: 'experto' },
      { name: 'Git', level: 'experto' },
      { name: 'Vercel', level: 'experto' },
      { name: 'Railway', level: 'experto' },
      { name: 'Cloudinary', level: 'experto' },
      { name: 'Docker', level: 'avanzado' },
      { name: 'ESLint', level: 'avanzado' },
      { name: 'Figma', level: 'intermedio' },
    ],
  },
];

const otherSkills = [
  'Scrum',
  'Jira',
  'Photoshop',
  'UI/UX',
  'WordPress',
  'SEO',
  'Google Maps API',
  'MercadoPago',
  'Brevo',
];

// ===============================
// 🎨 CONFIGURACIÓN DE NIVELES
// ===============================
const levelConfig = {
  experto: {
    label: 'Experto',
    color: 'emerald',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/30',
    textClass: 'text-emerald-300',
    dotClass: 'bg-emerald-400',
  },
  avanzado: {
    label: 'Avanzado',
    color: 'sky',
    bgClass: 'bg-sky-500/10',
    borderClass: 'border-sky-500/30',
    textClass: 'text-sky-300',
    dotClass: 'bg-sky-400',
  },
  intermedio: {
    label: 'Intermedio',
    color: 'amber',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30',
    textClass: 'text-amber-300',
    dotClass: 'bg-amber-400',
  },
} as const;

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-black to-gray-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
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
            Stack técnico
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tecnologías que{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              uso a diario
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            El stack con el que construyo productos reales, desde la idea hasta producción.
          </p>
        </motion.div>

        {/* ─── CATEGORÍAS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-500/30 transition-all duration-300"
              >
                {/* Header de categoría */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Lista de skills */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const config = levelConfig[skill.level as keyof typeof levelConfig];
                    return (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + skillIndex * 0.03,
                        }}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${config.bgClass} ${config.borderClass} border ${config.textClass} text-[11px] font-medium whitespace-nowrap`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
                          {config.label}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ─── OTRAS HABILIDADES ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl p-8 bg-gradient-to-br from-sky-500/5 to-blue-600/5 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Otras herramientas y conocimientos
              </h4>
              <p className="text-xs text-gray-500">
                Complementos de mi stack principal
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/10 text-sm text-gray-300 hover:text-sky-300 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;