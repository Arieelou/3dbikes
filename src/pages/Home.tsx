// src/pages/Home.tsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Award, Wrench, Settings, Users } from 'lucide-react';
import BurnoutLoader from '../components/BurnoutLoader';

// Image du hero (tu peux mettre un /img/local.jpg)
const HERO_IMG =
  'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

function preload(src: string, timeout = 1800): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const end = () => {
      if (done) return;
      done = true;
      resolve();
    };
    img.onload = end;
    img.onerror = end;
    img.src = src;
    setTimeout(end, timeout);
  });
}

const Home: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [ready, setReady] = useState(false);
  const productsRef = useRef<HTMLElement>(null);

  // Loader conditionnel: s'affiche seulement si > 250ms
  useEffect(() => {
    let finished = false;
    const showTimer = setTimeout(() => {
      if (!finished) setShowLoader(true);
    }, 250);

    Promise.race([preload(HERO_IMG, 1500), new Promise((r) => setTimeout(r, 1500))]).then(() => {
      finished = true;
      clearTimeout(showTimer);
      setShowLoader(false);
      setReady(true);
    });

    return () => {
      finished = true;
      clearTimeout(showTimer);
    };
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: 'Performance Extrême', description: 'Moteurs haute performance et modifications sur mesure pour une puissance maximale' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Garage Expert', description: 'Atelier professionnel avec mécaniciens spécialisés en motos sportives et custom' },
    { icon: <Shield className="w-8 h-8" />, title: 'Sécurité Premium', description: 'Technologies de sécurité avancées et équipements de protection haut de gamme' },
    { icon: <Award className="w-8 h-8" />, title: 'Qualité Supérieure', description: 'Sélection rigoureuse des meilleures marques et pièces premium' },
    { icon: <Settings className="w-8 h-8" />, title: 'Personnalisation', description: 'Modifications et customisation selon vos désirs les plus fous' },
    { icon: <Users className="w-8 h-8" />, title: 'Expertise 15 ans', description: "Équipe passionnée avec 15 ans d'expérience dans l'univers moto" },
  ];

  if (!ready && showLoader) return <BurnoutLoader />;

  return (
    <div className="relative pt-20 min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
      {/* Motif global très léger sur toute la page */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Blobs globaux très diffus pour la profondeur */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* HERO */}
      <section className="relative h-[92vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_IMG}')` }} />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/80 via-slate-900/65 to-blue-950/70" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div className="mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
              🏍️ Garage & Vente de Motos Premium
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-['Poppins'] font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block">LIBÉREZ LA</span>
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
            <strong className="text-white">3DBike</strong> - Votre garage spécialisé et concessionnaire de motos haute performance.
            Vente, réparation, customisation et passion depuis 15 ans.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <motion.button
              onClick={() => productsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🏍️ Découvrir nos Motos
            </motion.button>

            <motion.button
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🔧 Services Garage
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            onClick={() => productsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section ref={productsRef} className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase inline-block mb-6">
              🏆 Excellence & Passion
            </span>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">Nos Points Forts</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Depuis 15 ans, nous préparons, entretenons et personnalisons des machines d’exception.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-['Poppins'] font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-['Poppins'] font-bold text-white mb-6">
              Nos <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Un service complet pour tous vos besoins moto</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-bold mb-4">🏍️ Vente de Motos</h3>
              <p className="mb-4 text-blue-100">Large sélection de motos neuves et d'occasion.</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Motos sportives haute performance</li>
                <li>• Roadsters et naked bikes</li>
                <li>• Customs et cruisers</li>
                <li>• Financement et reprise</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-bold mb-4">🔧 Atelier Spécialisé</h3>
              <p className="mb-4 text-blue-100">Garage pro avec mécaniciens experts.</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Révisions et entretien complet</li>
                <li>• Réparations toutes marques</li>
                <li>• Préparation moteur</li>
                <li>• Customisation sur mesure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA propre, dans le même fond continu */}
      <section className="relative py-20 px-4">
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
                Prêt à vivre l’expérience{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">3DBike</span> ?
              </h2>
              <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Que ce soit pour acheter votre prochaine moto, faire réviser votre machine
                ou la customiser selon vos envies, notre équipe passionnée vous attend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  🏍️ Nous contacter
                </motion.a>
                <motion.a
                  href="/produits"
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/15"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  🏆 Voir nos motos
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
