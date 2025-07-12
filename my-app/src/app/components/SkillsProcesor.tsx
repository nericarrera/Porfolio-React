'use client';
import { motion } from 'framer-motion';

const SkillsProcessor = () => {
  // Datos para las "cápsulas" de skills/formación
  const nodes = [
    { id: 1, title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"], x: 0, y: 0 },
    { id: 2, title: "Backend", skills: ["Node.js", "Express", "MongoDB"], x: 200, y: 100 },
    { id: 3, title: "Formación", skills: ["Ingeniería Informática", "Cursos Certificados"], x: -200, y: 100 },
    { id: 4, title: "Soft Skills", skills: ["Trabajo en equipo", "Resolución de problemas"], x: 0, y: 200 },
  ];

  // Conexiones entre nodos (líneas)
  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Título */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Mis <span className="text-sky-500">Atributos</span>
      </h2>

      {/* Contenedor del "procesador" */}
      <div className="relative mx-auto max-w-4xl h-[500px]">
        {/* Líneas de conexión (animadas) */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, i) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null; // Evita errores si falta algún nodo
            return (
              <motion.line
                key={i}
                x1={fromNode.x + 150}
                y1={fromNode.y + 150}
                x2={toNode.x + 150}
                y2={toNode.y + 150}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="0"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Nodos (cápsulas de skills) */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-48 p-4 bg-gray-800 border border-amber-300/20 rounded-lg shadow-lg"
            style={{ left: '50%', top: '50%' }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: node.x, y: node.y, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: node.id * 0.1 }}
          >
            <h3 className="text-lg font-bold text-amber-300 mb-2">{node.title}</h3>
            <ul className="space-y-1">
              {node.skills.map((skill, i) => (
                <li key={i} className="text-white text-sm hover:text-amber-300 transition-colors">
                  • {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsProcessor;