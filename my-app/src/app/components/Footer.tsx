'use client';
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-white/10 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="#" className="text-2xl font-bold text-gray-500 dark:text-white hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
              <span className="text-sky-700 dark:text-sky-400">{"</>"}</span>Developer
            </Link>
            <p className="text-gray-300 dark:text-gray-200 p-3">
              Neri Carrera
            </p>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-500 dark:text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link href="#formacion" className="text-gray-300 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Formación</Link></li>
              <li><Link href="#skills" className="text-gray-300 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Skills</Link></li>
              <li><Link href="#proyectos" className="text-gray-300 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Proyectos</Link></li>
              <li><Link href="#contacto" className="text-gray-300 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Contacto</Link></li>
            </ul>
          </motion.div>

          {/* Columna 3 - Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-500 dark:text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-sky-700 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                devnericarrera@gmail.com
              </li>
              <li className="flex items-center text-gray-300 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-sky-700 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +54 11 2176-4065
              </li>
            </ul>
          </motion.div>

          {/* Columna 4 - Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-500 dark:text-white mb-4">Redes</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nericarrera" target="blank" className="text-gray-600 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.github.com/nericarrera" target="blank" className="text-gray-600 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Derechos de autor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Developer Portfolio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;