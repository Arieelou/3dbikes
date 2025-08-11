// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 pt-24">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-7xl md:text-8xl font-black font-['Poppins'] text-blue-500 mb-4">404</h1>
        <p className="text-slate-300 text-lg mb-8">
          Oups… Cette page est introuvable.  
          Elle a peut-être changé d’adresse ou n’existe plus.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
        >
          ⬅️ Retour à l’accueil
        </Link>
      </motion.div>
    </div>
  );
}
