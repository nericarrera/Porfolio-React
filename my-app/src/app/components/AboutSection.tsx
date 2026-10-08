'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Gamepad2,
  Wrench,
  Users,
  MapPin,
  Calendar,
  Rocket,
  Globe,
  ArrowRight,
  Quote,
} from 'lucide-react';

// ===============================
// 🎯 INTERESES
// ===============================
const interests = [
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Wrench, label: 'Arreglar cosas' },
  { icon: Users, label: 'Asesorar gente' },
];

// ===============================
// 📊 STATS
// ===============================
const stats = [
  {
    icon: Calendar,
    value: '7 años',
    label: 'programando',
  },
  {
    icon: Rocket,
    value: '+3',
    label: 'proyectos en producción',
  },
  {
    icon: Globe,
    value: '100%',
    label: 'remoto · Buenos Aires',
  },
];

// ===============================
// 🎯 COMPONENTE
// ===============================
const AboutSection = () => {
  return (
    <section
      id="sobre-mi"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-950 to-black overflow-hidden"
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
            Sobre mí
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Detrás del{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              código
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            No soy solo un desarrollador. Soy una persona con historia, con
            procesos y con ganas de ayudarte a crecer.
          </p>
        </motion.div>

        {/* ─── GRID PRINCIPAL: FOTO + TEXTO ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 items-start">
          {/* ─── COLUMNA FOTO ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-24"
          >
            <div className="relative">
              {/* Gradiente decorativo detrás */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl" />

              {/* Foto */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square">
                <Image
                  src="/neri-about.jpg"
                  alt="Neri Carrera - Full-stack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  quality={90}
                  priority
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6">
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-950 border border-white/10 shadow-2xl backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-300">
                    Disponible
                  </span>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-sky-400" />
              San Antonio de Padua, Buenos Aires
            </div>
          </motion.div>

          {/* ─── COLUMNA TEXTO ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Título */}
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Hola, soy Neri Carrera.
              <br />
              <span className="text-sky-400">
                Full-stack developer de Buenos Aires.
              </span>
            </h3>

            {/* Párrafo 1 */}
            <p className="text-gray-300 leading-relaxed">
              Empecé a programar <strong className="text-white">a los 30 años</strong>.
              Antes pensaba que la computadora era solo para jugar y arreglar
              cosas. Un día descubrí que podía{' '}
              <strong className="text-white">crear</strong> con ella, y no paré
              más.
            </p>

            {/* Párrafo 2 */}
            <p className="text-gray-300 leading-relaxed">
              Todo empezó gracias a{' '}
              <strong className="text-white">Jonathan Ariste</strong>, después
              seguí con <strong className="text-white">Dalto</strong>, y cuando
              me di cuenta ya estaba estudiando en la{' '}
              <strong className="text-white">Universidad Nacional del Oeste</strong>.
              Fui autodidacta el primer año, después me acomodé con cursos y
              ahora trabajo y estudio al mismo tiempo.
            </p>

            {/* Párrafo 3 */}
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Soy vendedor de ropa</strong> desde
              que empecé a trabajar. Y eso me enseñó algo clave: que la mejor
              tecnología es la que{' '}
              <strong className="text-white">ayuda a la gente</strong>. Por eso
              me dedico a hacer webs que vendan, que funcionen, que resuelvan
              problemas reales.
            </p>

            {/* Párrafo 4 — el pro */}
            <p className="text-gray-300 leading-relaxed">
              Como no esperé a que apareciera la oportunidad,{' '}
              <strong className="text-white">
                la construí yo mismo
              </strong>
              : empecé a crear mis propios proyectos y a trabajar con clientes
              reales. Hoy tengo 3 proyectos en producción, incluyendo un
              e-commerce completo.
            </p>

            {/* Intereses */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                Cuando no programo
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <span
                      key={interest.label}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      <Icon className="w-4 h-4 text-sky-400" />
                      {interest.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── FILOSOFÍA DE TRABAJO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-sky-500/5 to-blue-600/5 border border-white/10 mb-16"
        >
          {/* Ícono de comillas decorativo */}
          <Quote className="absolute top-6 right-8 w-16 h-16 text-sky-500/10" />

          <div className="relative max-w-3xl">
            <h4 className="text-xs text-sky-400 uppercase tracking-wider mb-4 font-bold">
              Mi filosofía de trabajo
            </h4>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
              «Trabajo con{' '}
              <span className="text-sky-400 font-normal">
                procesos claros
              </span>{' '}
              y{' '}
              <span className="text-sky-400 font-normal">
                comunicación honesta
              </span>
              .»
            </p>
            <p className="text-gray-400 leading-relaxed">
              Te muestro avances cada semana, tenés acceso al repositorio desde
              el día 1, y si algo no funciona como se especificó, lo arreglo sin
              costo. Me gusta asesorarte: si algo no le va a servir a tu
              negocio, te lo digo antes de que lo pagues.
            </p>
          </div>
        </motion.div>

        {/* ─── STATS ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-500/40 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 mb-4">
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ─── CTA FINAL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            ¿Querés que trabajemos juntos?
          </p>
          <Link
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;