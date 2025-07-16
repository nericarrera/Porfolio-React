'use client';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "React", level: 60 },
        { name: "TypeScript", level: 50 },
        { name: "Tailwind CSS", level: 55 }
      ],
      icon: "💻"
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 25 },
        { name: "Next.js", level: 60 },
        { name: "Express", level: 15 },
        { name: "MongoDB", level: 25 },
        { name: "Firebase", level: 10 }
      ],
      icon: "⚙️"
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git", level: 85 },
        { name: "Figma", level: 30 },
        { name: "Vercel", level: 30 },
        { name: "Docker", level: 30 }
      ],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Mis <span className="text-sky-500">Skills</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Tecnologías que domino y uso diariamente.
        </motion.p>

        {/* Contenedor de skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/20 rounded-xl p-6 border border-gray-700/30 hover:border-sky-700/30 transition-all 
             backdrop-blur-md backdrop-filter"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sky-50">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-green-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills adicionales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-6"
        >
          <h4 className="text-xl font-semibold text-white mb-4">+ Otras habilidades</h4>
          <div className="flex flex-wrap gap-3">
            {['Scrum', 'Jira', 'Photoshop', 'UI/UX', 'WordPress', 'SEO'].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-amber-500 hover:text-white transition-all"
              >
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