'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      title: "Portafolio Personal",
      description: "Diseño moderno con Next.js y Tailwind CSS, incluyendo modo oscuro y animaciones.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/proyecto-portafolio.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Tienda online con carrito de compras, autenticación y pasarela de pagos.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/proyecto-ecommerce.jpg",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "App de Tareas",
      description: "Organizador de tareas con drag & drop, notificaciones y sincronización en la nube.",
      technologies: ["React", "Firebase", "Redux"],
      image: "/proyecto-tareas.jpg",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Mis <span className="text-amber-300">Proyectos</span>
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

        {/* Galería de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-400/30 transition-all"
            >
              {/* Imagen del proyecto */}
              <div className="h-48 overflow-hidden">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{proyecto.title}</h3>
                
                {/* Tecnologías */}
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

                {/* Descripción (visible siempre) */}
                <p className="text-gray-300 mb-6">{proyecto.description}</p>

                {/* Botones */}
                <div className="flex gap-3">
                  <Link
                    href={proyecto.demoUrl}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Ver Demo
                  </Link>
                  <Link
                    href={proyecto.codeUrl}
                    className="px-4 py-2 bg-transparent border border-gray-600 hover:border-amber-400 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Código
                  </Link>
                </div>
              </div>

              {/* Efecto hover (opcional) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-white mb-4">Más detalles:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Responsive design</li>
                    <li>• Optimización SEO</li>
                    <li>• Despliegue en Vercel</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón para más proyectos (opcional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-lg transition-colors"
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

export default ProyectosSection;