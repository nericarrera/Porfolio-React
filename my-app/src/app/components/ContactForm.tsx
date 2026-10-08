'use client';

import { useRef, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  Clock,
  User,
  Building2,
  AtSign,
  Code2,
  Link,
  MessageCircle,
} from 'lucide-react';

// ===============================
// 🎯 TIPOS
// ===============================
type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  website: string; // honeypot
};

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

interface EmailJSError {
  message?: string;
  text?: string;
  status?: number;
}

// ===============================
// 🎯 CONFIG
// ===============================
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const PROJECT_TYPES = [
  { value: '', label: 'Seleccioná una opción' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'institucional', label: 'Web Institucional' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'rediseno', label: 'Rediseño de sitio' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
  { value: 'otro', label: 'Otro' },
];

// ===============================
// 🎯 COMPONENTE
// ===============================
const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [envReady, setEnvReady] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  // ─── VERIFICAR CONFIG ───
  useEffect(() => {
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    const allSet = Boolean(serviceId && templateId && publicKey);

    if (!allSet && process.env.NODE_ENV === 'development') {
      console.error(
        '[Contact] Faltan variables de entorno de EmailJS. Verificá .env.local'
      );
    }

    setEnvReady(allSet);
  }, []);

  // ─── HANDLERS ───
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Rate limiting: 30 segundos entre envíos
    if (lastSubmitTime && Date.now() - lastSubmitTime < 30000) {
      setSubmitStatus({
        success: false,
        message: 'Esperá 30 segundos antes de enviar otro mensaje.',
      });
      return;
    }

    // Honeypot: si el campo "website" tiene contenido, es un bot
    if (formData.website) {
      // Engañamos al bot con éxito falso
      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado con éxito!',
      });
      return;
    }

    // Validaciones
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Completá todos los campos obligatorios.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Ingresá un email válido.',
      });
      return;
    }

    if (formData.message.length < 10) {
      setSubmitStatus({
        success: false,
        message: 'El mensaje es muy corto. Contame un poco más.',
      });
      return;
    }

    if (!envReady) {
      setSubmitStatus({
        success: false,
        message: 'Error de configuración. Contactame por WhatsApp.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setLastSubmitTime(Date.now());

    try {
      // Sanitizamos los datos
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        projectType: formData.projectType || 'No especificado',
        message: sanitizeInput(formData.message),
      };

      // Enviamos usando send() con los datos sanitizados
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId!,
        EMAILJS_CONFIG.templateId!,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          from_phone: sanitizedData.phone || 'No especificado',
          project_type: sanitizedData.projectType,
          message: sanitizedData.message,
          to_name: 'Neri Carrera',
        },
        EMAILJS_CONFIG.publicKey!
      );

      if (result.status === 200) {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado con éxito! Te respondo en menos de 24 horas.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
          website: '',
        });
      } else {
        throw {
          message: `Error inesperado (${result.status})`,
          status: result.status,
        } as EmailJSError;
      }
    } catch (error: unknown) {
      let errorMessage = 'Error al enviar el mensaje. Intentá de nuevo.';

      if (typeof error === 'object' && error !== null) {
        const emailJsError = error as EmailJSError;
        if (emailJsError.text) {
          errorMessage += ` (${emailJsError.text.substring(0, 50)})`;
        } else if (emailJsError.message) {
          errorMessage = emailJsError.message;
        }
      }

      if (process.env.NODE_ENV === 'development') {
        console.error('[Contact] Error:', error);
      }

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── RENDER ───
  return (
    <section
      id="contacto"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-black to-gray-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ─── HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hablemos de{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Contame qué necesitás y te respondo en menos de 24 horas con una propuesta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ─── FORMULARIO ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl p-8 bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Enviame un mensaje
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Los campos con <span className="text-sky-400">*</span> son obligatorios.
            </p>

            {/* Success */}
            {submitStatus?.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-300">{submitStatus.message}</p>
              </motion.div>
            )}

            {/* Error */}
            {submitStatus && !submitStatus.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{submitStatus.message}</p>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">No completar</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    maxLength={100}
                    disabled={isSubmitting}
                    placeholder="Tu nombre completo"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 focus:outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    maxLength={100}
                    disabled={isSubmitting}
                    placeholder="tu@email.com"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 focus:outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Teléfono + Tipo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={30}
                      disabled={isSubmitting}
                      placeholder="+54 11 ..."
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 focus:outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de proyecto
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full pl-11 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 focus:outline-none transition-all disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-gray-900 text-white"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  maxLength={1000}
                  placeholder="Contame sobre tu proyecto: qué necesitás, para cuándo, presupuesto estimado..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 focus:outline-none transition-all resize-none disabled:opacity-50"
                />
                <p className="text-xs text-gray-500 mt-1.5 text-right">
                  {formData.message.length}/1000
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !envReady}
                className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-sky-500 disabled:hover:to-blue-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar mensaje
                  </>
                )}
              </button>

              {!envReady && (
                <p className="text-xs text-amber-400 text-center">
                  ⚠️ El formulario no está configurado. Contactame por WhatsApp.
                </p>
              )}
            </form>
          </motion.div>

          {/* ─── INFO LATERAL ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5491121764065?text=Hola%20Neri,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">WhatsApp directo</h4>
                  <p className="text-xs text-emerald-300">Respuesta rápida</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                ¿Preferís escribir directo? Hacé click y te contesto al toque.
              </p>
            </a>

            {/* Info contacto */}
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white mb-5">Información de contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:nericarrera1825@gmail.com"
                      className="text-sm text-gray-200 hover:text-sky-400 transition-colors break-all"
                    >
                      nericarrera1825@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Teléfono</p>
                    <a
                      href="tel:+5491121764065"
                      className="text-sm text-gray-200 hover:text-sky-400 transition-colors"
                    >
                      +54 11 2176-4065
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Ubicación</p>
                    <p className="text-sm text-gray-200">Buenos Aires, Argentina</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Respuesta</p>
                    <p className="text-sm text-gray-200">En menos de 24 horas</p>
                  </div>
                </li>
              </ul>

              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://github.com/nericarrera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-gray-400 hover:text-sky-300 transition-all duration-300"
                >
                  <Code2 className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nericarrera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-gray-400 hover:text-sky-300 transition-all duration-300"
                >
                  <Link className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Descargar CV */}
            <a
              href="/cv-2026-nc.pdf"
              download="CV-Neri-Carrera.pdf"
              className="group block rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                  <Download className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Descargar CV</h4>
                  <p className="text-xs text-gray-500">PDF · 1 página</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Toda mi experiencia resumida en un PDF.
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;