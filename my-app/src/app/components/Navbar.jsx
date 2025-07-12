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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-white">
            <span className="text-sky-500">{"</>"}</span>Dev. Neri Carrera
          </Link>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-sky-500 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Modal móvil con animación */}
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
                  className="absolute right-0 top-0 h-full w-3/4 bg-black border-l border-gray-800"
                >
                  {/* Contenedor principal (mismo padding para X y menú) */}
                  <div className="p-1 h-full flex flex-col">
                    {/* Botón X (alineado a la derecha pero con mismo ancho que el menú) */}
                    <div className="w-full flex justify-end pr-4 p-4">
                      <button
                        className="text-white text-2xl hover:text-sky-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Lista de enlaces (mismo ancho que la X) */}
                    <ul className="bg-black hover:text-sky-500 w-auto flex flex-col gap-4 mt-0 p-9 rounded-b-lg">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block py-3 px-4 text-white hover:bg-gray-800 hover:text-sky-500 rounded-md transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
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