import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Award, Wrench, Settings, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SmartImage from '../components/SmartImage';

const HERO_IMG =
  'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

type Feature = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Zap,
    title: 'Performance Extreme',
    description: 'Moteurs haute performance et modifications sur mesure pour une puissance maximale',
  },
  {
    Icon: Wrench,
    title: 'Garage Expert',
    description: 'Atelier professionnel avec mecaniciens specialises en motos sportives et custom',
  },
  {
    Icon: Shield,
    title: 'Securite Premium',
    description: 'Technologies de securite avancees et equipements de protection haut de gamme',
  },
  {
    Icon: Award,
    title: 'Qualite Superieure',
    description: 'Selection rigoureuse des meilleures marques et pieces premium',
  },
  {
    Icon: Settings,
    title: 'Personnalisation',
    description: 'Modifications et customisation selon vos desirs',
  },
  {
    Icon: Users,
    title: 'Expertise 15 ans',
    description: "Equipe passionnee avec 15 ans d'experience dans l'univers moto",
  },
];

const deferredSectionStyle: React.CSSProperties = {
  contentVisibility: 'auto',
  containIntrinsicSize: '1px 1000px',
};

const Home: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="relative pt-20 min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <section className="relative h-[92vh] md:h-screen flex items-center justify-center overflow-hidden">
        <SmartImage
          src={HERO_IMG}
          alt="Moto sportive premium 3DBike"
          className="absolute inset-0 z-0"
          widths={[640, 960, 1280, 1600, 1920]}
          sizes="100vw"
          priority
          aspect={16 / 9}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/80 via-slate-900/65 to-blue-950/70" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
              Garage et Vente de Motos Premium
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-['Poppins'] font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block">LIBEREZ LA</span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              PUISSANCE
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-['Inter'] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <strong className="text-white">3DBike</strong> - Votre garage specialise et concessionnaire de motos haute performance.
            Vente, reparation, customisation et passion depuis 15 ans.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <motion.button
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Decouvrir nos motos
            </motion.button>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="block bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
              >
                Services garage
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToProducts}
            className="text-white hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </section>

      <section ref={productsRef} className="relative py-20 px-4" style={deferredSectionStyle}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase inline-block mb-6">
              Excellence et passion
            </span>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">Nos points forts</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Depuis 15 ans, nous preparons, entretenons et personnalisons des machines d'exception.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-6">
                  <feature.Icon className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-['Poppins'] font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4" style={deferredSectionStyle}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-['Poppins'] font-bold text-white mb-6">
              Nos <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Un service complet pour tous vos besoins moto</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Vente de motos</h3>
              <p className="mb-4 text-blue-100">Large selection de motos neuves et d'occasion.</p>
              <ul className="space-y-2 text-blue-100">
                <li>- Motos sportives haute performance</li>
                <li>- Roadsters et naked bikes</li>
                <li>- Customs et cruisers</li>
                <li>- Financement et reprise</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Atelier specialise</h3>
              <p className="mb-4 text-blue-100">Garage pro avec mecaniciens experts.</p>
              <ul className="space-y-2 text-blue-100">
                <li>- Revisions et entretien complet</li>
                <li>- Reparations toutes marques</li>
                <li>- Preparation moteur</li>
                <li>- Customisation sur mesure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4" style={deferredSectionStyle}>
        <div className="container mx-auto max-w-4xl">
          <div className="mx-4 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">
                Pret a vivre l'experience{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">3DBike</span> ?
              </h2>
              <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Que ce soit pour acheter votre prochaine moto, faire reviser votre machine
                ou la customiser selon vos envies, notre equipe passionnee vous attend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/produits"
                    className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/15"
                  >
                    Voir nos motos
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
