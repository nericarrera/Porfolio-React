'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      title: "Proyecto NO-CODE",
      description: "Diseño moderno con React + Vite y Tailwind CSS",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image: "", // Asegúrate de tener esta imagen en tu carpeta public
      demoUrl: "https://github.com/nericarrera/NO-CODE---Grupo",
      codeUrl: "https://github.com/nericarrera/NO-CODE---Grupo" // Agregado el enlace real
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

        {/* Galería de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700"
            >
              {/* Imagen del proyecto con enlace */}
              <Link href={proyecto.demoUrl} target="_blank" rel="noopener noreferrer">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={proyecto.image}
                    alt={proyecto.title}
                    fill
                    className="object-cover"
                    quality={80}
                  />
                </div>
              </Link>

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

                {/* Descripción */}
                <p className="text-gray-300 mb-6">{proyecto.description}</p>

                {/* Botones */}
                <div className="flex gap-3">
                  <Link
                    href={proyecto.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Ver Demo
                  </Link>
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
            href="#proyectos"
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

export default ProyectosSection;