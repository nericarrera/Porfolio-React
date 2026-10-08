'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  MessageCircle,
  CodeXml,
} from 'lucide-react';

// ===============================
// 🔗 LINKS DE NAVEGACIÓN
// ===============================
const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'nericarrera1825@gmail.com',
    href: 'mailto:nericarrera1825@gmail.com',
  },
  {
    icon: Phone,
    label: '+54 11 2176-4065',
    href: 'tel:+5491121764065',
  },
  {
    icon: MapPin,
    label: 'Buenos Aires, Argentina',
    href: null,
  },
];

const socialLinks = [
  {
    icon: CodeXml,
    label: 'GitHub',
    href: 'https://github.com/nericarrera',
  },
  {
    icon: ArrowUpRight,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nericarrera',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5491121764065?text=Hola%20Neri,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto',
  },
];

// ===============================
// 🎯 FOOTER
// ===============================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/10">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* ─── GRID PRINCIPAL ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ─── COLUMNA 1: BRAND + TAGLINE ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link
              href="/"
              className="inline-block group mb-6"
              aria-label="Volver al inicio"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {'</>'}
                </span>
                <span className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  Neri Carrera
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Desarrollo e-commerce y aplicaciones web que venden. Full-stack
              developer con foco en resultados.
            </p>

            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Disponible para proyectos
              </span>
            </div>
          </motion.div>

          {/* ─── COLUMNA 2: NAVEGACIÓN ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── COLUMNA 3: CONTACTO ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Contacto
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 flex-shrink-0 text-sky-400" />
                    <span className="text-sm text-gray-400 group-hover:text-sky-400 transition-colors break-all">
                      {item.label}
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-start gap-3"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ─── COLUMNA 4: REDES + CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Redes
            </h3>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-gray-400 hover:text-sky-300 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5491121764065?text=Hola%20Neri,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4" />
              Escribime por WhatsApp
            </a>
          </motion.div>
        </div>

        {/* ─── SEPARADOR ─── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* ─── COPYRIGHT ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear}{' '}
            <span className="text-gray-300 font-medium">Neri Carrera</span>. Todos
            los derechos reservados.
          </p>

          <p className="inline-flex items-center gap-1.5 text-sm text-gray-500">
            Hecho con
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            en Buenos Aires
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;