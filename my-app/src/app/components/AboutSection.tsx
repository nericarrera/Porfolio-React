'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
BatteryCharging,
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
  { icon: BatteryCharging, label: 'Descanso' },
  { icon: Wrench, label: 'Aprendiendo cosas nuevas' },
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
            No llegué a la programación por el camino tradicional. Y justamente por eso, mi forma de desarrollar tampoco lo es.
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
  Empecé a programar{' '}
  <strong className="text-white">a los 30 años</strong>.
  Hasta ese momento, para mí la computadora era solo para dibujar
  en Paint, jugar y escribir textos en Word. Jamás imaginé que podía
  ser una herramienta{' '}
  <strong className="text-white">para crear cosas desde cero.</strong>
</p>

{/* Párrafo 2 */}
<p className="text-gray-300 leading-relaxed">
  Un día descubrí el mundo de la programación y quise entender cómo
  funcionaba todo eso que había detrás de una página web. Empecé a
  buscar, aprender y probar por mi cuenta, y ahí ya no paré más.
  Mis primeros pasos fueron gracias a{' '}
  <strong className="text-white">Jonathan Ariste</strong>.
  Después conocí el contenido de{' '}
  <strong className="text-white">Soy Dalto</strong>, que me ayudó a
  seguir avanzando, y durante mi primer año aprendí principalmente
  de manera autodidacta.
  <br /><br />
  Con el tiempo entendí que quería llevarlo más en serio. Empecé a
  formarme profesionalmente, estudié en la{' '}
  <strong className="text-white">
    Universidad Nacional del Oeste
  </strong>{' '}
  y complementé mi formación con cursos y proyectos propios.
  Pero hay otra parte de mi historia que también define mucho mi
  forma de trabajar.
</p>

{/* Párrafo 3 */}
<p className="text-gray-300 leading-relaxed">
  <strong className="text-white">
    Antes de programar, trabajé durante años en ventas y especialmente
    en el rubro de la indumentaria.
  </strong>{' '}
  Estar del otro lado del mostrador me enseñó a escuchar a las
  personas, entender qué necesitan y, sobre todo, que detrás de cada
  compra hay alguien buscando una solución.
  <br /><br />
  Por eso, cuando desarrollo una web, no pienso solamente en que se
  vea bien o que el código funcione. Pienso en quién la va a usar,
  qué problema tiene que resolver y cómo puede ayudar a un negocio
  a crecer.
  <br /><br />
  De hecho, Daysport nació justamente de esa idea: combinar mi
  experiencia en indumentaria con todo lo que aprendí de desarrollo
  web. Terminé construyendo un e-commerce full-stack completo, con
  frontend, backend, base de datos, panel de administración, gestión
  de stock, pedidos y pagos.
  <br /><br />
  Y esa es también mi manera de crecer como desarrollador:{' '}
  <strong className="text-white">
    no esperar a que aparezca una oportunidad, sino construirla yo mismo.
  </strong>
</p>

{/* Párrafo 4 */}
<p className="text-gray-300 leading-relaxed">
  Hoy tengo más de 3 proyectos en producción y sigo{' '}
  <strong className="text-white">
    estudiando, aprendiendo y construyendo.
  </strong>
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
      Para mí, desarrollar un proyecto no es solamente escribir código.
      Es entender qué necesita cada cliente, explicar las cosas de forma
      clara y construir una solución que realmente tenga sentido para su
      negocio.{' '}
      <strong className="text-gray-300">
        Prefiero decirte cuando algo no hace falta antes que hacerte pagar
        por algo que no vas a necesitar.
      </strong>{' '}
      Durante el desarrollo vas viendo avances, tenés acceso al repositorio
      desde el comienzo y, si algo no funciona como fue acordado, me hago
      responsable de solucionarlo.
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