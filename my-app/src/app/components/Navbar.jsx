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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/20 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-gray-900">
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
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Modal móvil */}
          <AnimatePresence>
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                {/* Fondo oscuro */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/70"
                  onClick={() => setIsMenuOpen(false)}
                ></motion.div>

                {/* Panel lateral */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", ease: "easeInOut" }}
                  className="absolute right-0 top-0 h-full w-3/4 bg-white border-l border-gray-200"
                >
                  {/* Contenedor principal */}
                  <div className="p-1 h-full flex flex-col">
                    {/* Botón X */}
                    <div className="w-full flex justify-end pr-4 p-4">
                      <button
                        className="text-gray-900 text-2xl hover:text-sky-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Lista de enlaces */}
                    <ul className="w-auto flex flex-col gap-4 mt-0 p-9 rounded-b-lg">
                      {navItems.map((item) => (
                        <motion.li 
                          key={item.href}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-full text-center"
                        >
                          <Link
                            href={item.href}
                            className="block py-3 px-6 text-gray-900 hover:bg-gray-100 hover:text-sky-700 rounded-md transition-colors font-medium text-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
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