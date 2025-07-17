'use client';
import { motion } from 'framer-motion';

const FormacionSection = () => {
  const formacionItems = [
    {
      id: 1,
      title: "Aprende a Programar",
      institution: "Argentina Programa",
      year: "2022",
      description: "Javascript, HTML, CSS, y metodologías ágiles.",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Tecnicatura Univ. en Tegnologias Web",
      institution: "Universidad Nacional del Oeste",
      year: "2025",
      description: "análisis y desarrollo de sistemas informáticos con principal énfasis en el análisis y desarrollo de sistemas web y móviles, ya que cuenta con una capacitación en el desarrollo web y diseño gráfico",
      icon: "🎓"
    },
    {
      id: 3,
      title: "Introduccion a la Ciencia de Datos",
      institution: "Santender, Open Academy",
      year: "2025",
      description: "Fundamentos a la utilizacion de Ciencia de Datos.",
      icon: "⚡"
    },
  ];

  return (
    <section id="formacion" className="py-20 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          Mi <span className="text-sky-500">Formación</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Educación y certificaciones que han moldeado mi carrera.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-sky-300 to-sky-800 hidden md:block"></div>
          
          {/* Items */}
          <div className="space-y-12 md:space-y-0">
            {formacionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-between gap-8`}
              >
                {/* Contenido izquierdo (o derecho para items pares) */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-sky-500/10 transition-all">
                      <span className="text-4xl mb-2 block">{item.icon}</span>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sky-400 font-medium mb-2">{item.institution}</p>
                      <p className="text-gray-300">{item.description}</p>
                      <div className="mt-3 px-4 py-1 bg-sky-800 text-neutral-50 rounded-full text-sm inline-block">
                        {item.year}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Punto central (solo en desktop) */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gray-700 border-4 border-sky-300 rounded-full z-10">
                  <span className="text-xl">{index + 1}</span>
                </div>

                {/* Espacio vacío para alternar lados */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormacionSection;