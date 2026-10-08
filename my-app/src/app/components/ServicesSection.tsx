'use client';

import { motion } from 'framer-motion';
import { Rocket, Building2, ShoppingCart, Check, ArrowRight, Wrench, Zap, Crown, AlertCircle, CreditCard, X } from 'lucide-react';
import Link from 'next/link';


// ===============================
// 📦 PAQUETES DE SERVICIOS
// ===============================
const packages = [
  {
    id: 'landing',
    icon: Rocket,
    name: 'Landing Page',
    tagline: 'Presencia online rápida y efectiva',
    idealFor: 'Profesionales, emprendedores y servicios',
    price: '$400.000',
    period: 'ARS · pago en dos cuotas',
    delivery: '10-15 días',
    features: [
      'Diseño responsive (móvil, tablet, desktop)',
      'Hasta 5 secciones',
      'Formulario de contacto funcional',
      'SEO básico',
      'Deploy en Vercel + dominio configurado',
      '2 rondas de cambios',
    ],
    cta: 'Empezar proyecto',
    highlighted: false,
  },
  {
    id: 'institucional',
    icon: Building2,
    name: 'Web Institucional',
    tagline: 'Tu negocio, profesional y completo',
    idealFor: 'Pymes, estudios, consultoras',
    price: '$900.000',
    period: 'ARS · pago en dos cuotas',
    delivery: '20-25 días',
    features: [
      'Todo lo del plan Landing',
      'Hasta 8 páginas',
      'Blog integrado',
      'Google Analytics',
      'SEO técnico completo',
      'Mapa de Google',
      '3 rondas de cambios',
    ],
    cta: 'Empezar proyecto',
    highlighted: true,
    badge: 'Más elegido',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    name: 'E-commerce / App Web',
    tagline: 'Vendé online con sistema propio',
    idealFor: 'Tiendas online y aplicaciones',
    price: 'Desde $2.000.000',
    period: 'ARS · según alcance',
    delivery: '25-35 días',
    features: [
      'Frontend Next.js 14 + panel admin',
      'Backend NestJS + PostgreSQL',
      'MercadoPago / Stripe',
      'Cálculo de envíos',
      'Gestión de stock y pedidos',
      'Emails automáticos',
      '90 días de soporte post-lanzamiento',
    ],
    cta: 'Pedir presupuesto',
    highlighted: false,
  },
];

// ===============================
// 🔧 PLANES DE MANTENIMIENTO
// ===============================
const maintenancePlans = [
  {
    icon: Wrench,
    name: 'Básico',
    idealFor: 'Webs institucionales',
    price: '$25.000',
    period: 'ARS / mes',
    features: [
      'Backups semanales',
      'Monitoreo de uptime',
      'Actualizaciones de seguridad',
      'Soporte por email (48hs)',
      '1 hora de cambios al mes',
    ],
  },
  {
    icon: Zap,
    name: 'Profesional',
    idealFor: 'Webs que generan leads o ventas',
    price: '$80.000',
    period: 'ARS / mes',
    features: [
      'Todo lo del plan Básico',
      'Backups diarios',
      'Firewall + monitoreo de seguridad',
      'Optimización de velocidad mensual',
      'Soporte prioritario (4-8hs)',
      '3 horas de cambios al mes',
    ],
    highlighted: true,
    badge: 'Más elegido',
  },
  {
    icon: Crown,
    name: 'E-commerce',
    idealFor: 'Tiendas online y sistemas custom',
    price: '$150.000',
    period: 'ARS / mes',
    features: [
      'Todo lo del plan Profesional',
      'Monitoreo 24/7',
      'Staging para testear cambios',
      'Soporte técnico prioritario',
      '5 horas de cambios al mes',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-black to-gray-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ─── HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium mb-4">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lo que hago para que tu negocio{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Venda Online
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-5">
            Elegí el plan que mejor se adapte a tu proyecto. Todos incluyen comunicación
            directa, entregas semanales y código 100% tuyo.
          </p>
        </motion.div>

        {/* ─── PAQUETES ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8 mb-24">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 mt-6 backdrop-blur-sm border transition-all duration-300 gap-1 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-b from-sky-500/10 to-blue-600/5 border-sky-500/40 shadow-2xl shadow-sky-500/20 scale-105 md:scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                {/* Badge "Más elegido" */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Ícono */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30'
                      : 'bg-white/10'
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Nombre */}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>

                {/* Tagline */}
                <p className="text-gray-300 text-sm mb-6">{pkg.tagline}</p>

                {/* Ideal para */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Ideal para
                  </p>
                  <p className="text-sm text-gray-300">{pkg.idealFor}</p>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{pkg.period}</p>
                </div>

                {/* Tiempo de entrega */}
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-sky-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Entrega en {pkg.delivery}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-sky-400' : 'text-gray-400'
                        }`}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                 {/* ─── QUÉ NO INCLUYE + FORMA DE PAGO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {/* Qué NO incluye */}
          <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Qué NO incluye ningún plan
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                'Hosting y dominio (se pagan aparte al proveedor)',
                'Costos de servicios externos (MercadoPago, email, etc.)',
                'Contenido (fotos, textos, logos) — los provee el cliente',
                'Mantenimiento después del período de soporte',
                'Cambios mayores post-entrega (se cotizan aparte)',
                'Gestión de redes sociales o publicidad',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 flex-shrink-0 mt-1 text-amber-400" />
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Forma de pago + Extras */}
          <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Forma de pago y condiciones
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                '50% al inicio, 50% contra entrega',
                'Transferencia bancaria o MercadoPago',
                'Factura A o B según necesidad',
                'El código es 100% tuyo al finalizar el proyecto',
                'Garantía de 30 días para bugs del desarrollo',
                'Cambios de alcance se cotizan por separado',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 flex-shrink-0 mt-1 text-emerald-400" />
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

                {/* CTA */}
                <Link
                  href="#contacto"
                  className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ─── SECCIÓN MANTENIMIENTO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            Servicio adicional
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planes de mantenimiento
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tu sitio siempre actualizado, seguro y funcionando. Opcional pero recomendado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {maintenancePlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-purple-500/10 to-purple-600/5 border-purple-500/40 shadow-xl shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      plan.highlighted
                        ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                        : 'bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                    <p className="text-xs text-gray-500">{plan.idealFor}</p>
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-purple-400' : 'text-gray-500'
                        }`}
                      />
                      <span className="text-xs text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ─── CTA FINAL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6 text-lg">
            ¿No encontrás lo que buscás?
          </p>
          <Link
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;