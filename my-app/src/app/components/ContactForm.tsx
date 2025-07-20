'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  message: string;
  website?: string; // Campo honeypot para bots
};

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

type EmailJSError = {
  message?: string;
  text?: string;
  status?: number;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    website: '' // Inicializamos el campo honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [envReady, setEnvReady] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  // Configuración de EmailJS con valores de respaldo
  const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_j7bl088',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_qj071qh',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'c4RzGdQrv6giscvHA'
  };

  // Efecto de verificación de entorno
  useEffect(() => {
    const checkEnv = () => {
      const allEnvSet = emailjsConfig.serviceId && 
                       emailjsConfig.templateId && 
                       emailjsConfig.publicKey;
      
      console.log('Configuración EmailJS:', {
        serviceId: emailjsConfig.serviceId ? '***' + emailjsConfig.serviceId.slice(-4) : 'No definido',
        templateId: emailjsConfig.templateId ? '***' + emailjsConfig.templateId.slice(-4) : 'No definido',
        publicKey: emailjsConfig.publicKey ? '***' + emailjsConfig.publicKey.slice(-4) : 'No definido',
        envSource: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Vercel' : 'Hardcoded'
      });

      setEnvReady(true);
    };

    checkEnv();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Función para sanitizar inputs
  const sanitizeInput = (input: string): string => {
    return input.replace(/<[^>]*>?/gm, ''); // Elimina etiquetas HTML
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de rate limiting (30 segundos entre envíos)
    if (lastSubmitTime && Date.now() - lastSubmitTime < 30000) {
      setSubmitStatus({ 
        success: false, 
        message: 'Por favor espera 30 segundos entre envíos.' 
      });
      return;
    }

    // Detección de bots (honeypot)
    if (formData.website) {
      console.log('Bot detectado');
      setSubmitStatus({ 
        success: true, 
        message: '¡Mensaje enviado con éxito!' 
      }); // Engañamos al bot
      return;
    }

    // Validación de campos vacíos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ 
        success: false, 
        message: 'Por favor completa todos los campos.' 
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ 
        success: false, 
        message: 'Por favor ingresa un email válido.' 
      });
      return;
    }

    // Verificación de referencia del formulario
    if (!formRef.current) {
      console.error('Error: La referencia del formulario es null');
      setSubmitStatus({ 
        success: false, 
        message: 'Error técnico. Por favor recarga la página.' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setLastSubmitTime(Date.now());

    try {
      // Sanitizamos todos los inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message)
      };

      console.log('Enviando formulario con datos sanitizados:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message.substring(0, 20) + '...'
      });
      
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      console.log('Respuesta de EmailJS:', {
        status: result.status,
        text: result.text.substring(0, 50) + '...'
      });
      
      if (result.status === 200) {
        setSubmitStatus({ 
          success: true, 
          message: '¡Mensaje enviado con éxito! Pronto me pondré en contacto.' 
        });
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        throw { 
          message: `Estado inesperado: ${result.status}`,
          status: result.status,
          text: result.text
        };
      }
    } catch (error: unknown) {
      let errorMessage = 'Error al enviar el mensaje. Por favor inténtalo nuevamente.';
      
      if (typeof error === 'object' && error !== null) {
        const emailJsError = error as EmailJSError;
        
        if (emailJsError.text) {
          errorMessage += ` (${emailJsError.text.substring(0, 50)}...)`;
        } else if (emailJsError.message) {
          errorMessage = emailJsError.message;
        }
      }
      
      console.error('Error completo:', error);
      setSubmitStatus({ 
        success: false, 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-neutral-50 mb-12">
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Campo honeypot (anti-bots) - Oculto para humanos */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
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

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-50">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                maxLength={100}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 bg-gray-800 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-50">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                maxLength={100}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 bg-gray-800 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-50">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
                maxLength={1000}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 bg-gray-800 text-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting || !envReady}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : 'Enviar Mensaje'}
              </button>

              <a
                href="/cv-2025-nericarrera.pdf"
                download="CV_Neri_Carrera.pdf"
                className="px-6 py-3 border border-sky-600 text-sky-400 hover:bg-gray-800 font-medium rounded-md transition-colors"
              >
                Descargar CV
              </a>
            </div>

            {submitStatus && (
              <div className={`mt-4 p-3 rounded-md ${submitStatus.success ? 'bg-green-500/10 border border-green-500 text-green-500' : 'bg-red-500/10 border border-red-500 text-red-500'}`}>
                {submitStatus.message}
              </div>
            )}
          </motion.form>

          {/* Información de contacto (se mantiene igual) */}
          <div className="space-y-6">
            {/* ... (tu código existente para la sección de información) ... */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;