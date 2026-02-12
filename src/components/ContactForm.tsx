import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const isMountedRef = useRef(true);
  const resetSubmittedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (resetSubmittedTimeoutRef.current) {
        clearTimeout(resetSubmittedTimeoutRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!isMountedRef.current) return;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    if (resetSubmittedTimeoutRef.current) {
      clearTimeout(resetSubmittedTimeoutRef.current);
    }
    resetSubmittedTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setIsSubmitted(false);
      }
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl border border-green-500/50"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-['Poppins'] font-bold text-white mb-2">
          🏍️ Message envoyé !
        </h3>
        <p className="text-slate-300">
          Merci ! Notre équipe du garage vous répondra dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-2xl border border-slate-700/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <label htmlFor="name" className="block text-white font-['Poppins'] font-semibold mb-2">
          Nom *
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all backdrop-blur-sm ${
            errors.name 
              ? 'border-red-400 focus:ring-red-400' 
              : 'border-slate-600 focus:ring-blue-500 focus:border-blue-500'
          }`}
          placeholder="Votre nom complet"
          whileFocus={{ scale: 1.01 }}
        />
        {errors.name && (
          <motion.p
            className="text-red-400 text-sm mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-['Poppins'] font-semibold mb-2">
          Email *
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all backdrop-blur-sm ${
            errors.email 
              ? 'border-red-400 focus:ring-red-400' 
              : 'border-slate-600 focus:ring-blue-500 focus:border-blue-500'
          }`}
          placeholder="votre@email.com"
          whileFocus={{ scale: 1.01 }}
        />
        {errors.email && (
          <motion.p
            className="text-red-400 text-sm mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-['Poppins'] font-semibold mb-2">
          Message *
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none backdrop-blur-sm ${
            errors.message 
              ? 'border-red-400 focus:ring-red-400' 
              : 'border-slate-600 focus:ring-blue-500 focus:border-blue-500'
          }`}
          placeholder="Décrivez votre projet : achat, réparation, customisation..."
          whileFocus={{ scale: 1.01 }}
        />
        {errors.message && (
          <motion.p
            className="text-red-400 text-sm mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>🏍️ Envoyer au garage</span>
          </>
        )}
      </motion.button>

      <p className="text-slate-400 text-sm text-center">
        💬 Réponse garantie sous 24h par notre équipe
      </p>
    </motion.form>
  );
};

export default ContactForm;
