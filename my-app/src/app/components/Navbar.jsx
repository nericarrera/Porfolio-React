'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: "#formacion", label: "Formación" },
    { href: "#skills", label: "Skills" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#cv", label: "CV" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-gray-900 hover:text-sky-700 transition-colors">
            <span className="text-sky-700">{"</>"}</span>Developer
          </Link>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-900 hover:text-sky-700 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-gray-900 text-2xl hover:text-sky-700 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Modal móvil */}
          <AnimatePresence>
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                {/* Fondo oscuro semi-transparente */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                ></motion.div>

                {/* Panel lateral con efecto de vidrio */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white/90 backdrop-blur-lg border-l border-gray-200 shadow-xl"
                >
                  {/* Cabecera del menú */}
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">Menú</h3>
                    <button
                      className="text-gray-900 text-2xl hover:text-sky-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Cerrar menú"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Lista de enlaces con mejor espaciado */}
                  <ul className="flex flex-col py-4 px-6">
                    {navItems.map((item, index) => (
                      <motion.li 
                        key={item.href}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ 
                          x: 0, 
                          opacity: 1,
                          transition: { 
                            delay: index * 0.1,
                            duration: 0.3 
                          }
                        }}
                        className="w-full"
                      >
                        <Link
                          href={item.href}
                          className="block py-4 px-4 text-gray-900 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors font-medium text-lg border-b border-gray-100 last:border-0"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Footer del menú */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-sky-50/50 text-center">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Developer</p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;