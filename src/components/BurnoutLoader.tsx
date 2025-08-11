import React from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { Bike } from 'lucide-react';

export default function BurnoutLoader() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="relative w-[300px] h-[240px]">
        {/* Fumée gauche (plus dense et plus large) */}
        {!reduce && (
          <>
            <motion.div
              className="absolute left-0 bottom-8 w-28 h-28 rounded-full bg-white/15 blur-2xl"
              initial={{ opacity: 0, x: 0, scale: 0.8 }}
              animate={{
                opacity: [0.25, 0.6, 0.25],
                x: [-10, -35, -60],
                scale: [0.9, 1.2, 1.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.div
              className="absolute left-8 bottom-10 w-20 h-20 rounded-full bg-white/20 blur-xl"
              initial={{ opacity: 0, x: 0, scale: 0.8 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                x: [-5, -25, -45],
                scale: [0.9, 1.2, 1.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.15,
              }}
            />
          </>
        )}

        {/* Trace au sol */}
        <div className="absolute left-6 right-6 bottom-5 h-2 rounded-full bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 blur-sm" />

        {/* Roue arrière qui tourne */}
        {!reduce && (
          <motion.div
            className="absolute left-36 bottom-12 w-18 h-18 rounded-full border-2 border-white/40"
            style={{ boxShadow: '0 0 35px rgba(59,130,246,0.35) inset' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* Moto principale */}
        <motion.div
          className="absolute left-20 bottom-14"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Bike className="w-28 h-28 text-white drop-shadow-[0_8px_25px_rgba(59,130,246,0.6)]" />
        </motion.div>

        {/* Effet départ rapide */}
        {!reduce && (
          <motion.div
            className="absolute left-20 bottom-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <div className="w-28 h-1 bg-gradient-to-r from-white/70 to-transparent" />
          </motion.div>
        )}
      </div>

      {/* Texte d’attente */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-white font-['Poppins'] font-bold text-2xl tracking-wide drop-shadow-lg">
          Chargement…
        </p>
        <p className="text-blue-300 text-base font-medium drop-shadow-sm">
          La gomme chauffe, tenez-vous prêt 🏍💨
        </p>
      </motion.div>
    </div>
  );
}
