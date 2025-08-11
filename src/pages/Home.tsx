import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Award, Wrench, Settings, Users } from 'lucide-react';

const Home: React.FC = () => {
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Extrême",
      description: "Moteurs haute performance et modifications sur mesure pour une puissance maximale"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Garage Expert",
      description: "Atelier professionnel avec mécaniciens spécialisés en motos sportives et custom"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Premium",
      description: "Technologies de sécurité avancées et équipements de protection haut de gamme"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualité Supérieure",
      description: "Sélection rigoureuse des meilleures marques et pièces premium"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Personnalisation",
      description: "Modifications et customisation selon vos désirs les plus fous"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise 15 ans",
      description: "Équipe passionnée avec 15 ans d'expérience dans l'univers moto"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Motorcycle Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Motorcycle Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
              🏍️ Garage & Vente de Motos Premium
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-['Poppins'] font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">LIBÉREZ LA</span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              PUISSANCE
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-['Inter'] font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <strong className="text-white">3DBike</strong> - Votre garage spécialisé et concessionnaire de motos haute performance. 
            Vente, réparation, customisation et passion depuis 15 ans.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={scrollToProducts}
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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

      {/* Brand Presentation with Motorcycle Theme */}
      <section ref={productsRef} className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></g></svg>')`
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
                🏆 Excellence & Passion
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">3DBIKE</span>
              <span className="block text-3xl md:text-4xl mt-2 text-blue-100">Garage & Concessionnaire</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Depuis 15 ans, nous sommes votre référence pour l'achat, la réparation et la customisation 
              de motos haute performance. Notre garage spécialisé et notre showroom vous offrent 
              une expérience complète dans l'univers de la moto.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="text-blue-400 mb-6 flex justify-center group-hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-['Poppins'] font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-blue-50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-['Poppins'] font-bold text-slate-800 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Un service complet pour tous vos besoins moto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-2xl font-['Poppins'] font-bold mb-4">🏍️ Vente de Motos</h3>
              <p className="text-blue-100 mb-6">
                Large sélection de motos neuves et d'occasion. Sportives, roadsters, customs, 
                nous avons la moto de vos rêves.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Motos sportives haute performance</li>
                <li>• Roadsters et naked bikes</li>
                <li>• Customs et cruisers</li>
                <li>• Financement et reprise</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-2xl font-['Poppins'] font-bold mb-4">🔧 Atelier Spécialisé</h3>
              <p className="text-slate-300 mb-6">
                Garage professionnel avec mécaniciens experts. Réparation, entretien, 
                préparation et customisation.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Révisions et entretien complet</li>
                <li>• Réparations toutes marques</li>
                <li>• Préparation moteur</li>
                <li>• Customisation sur mesure</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Background motorcycle silhouette */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800')`
            }}
          />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">
              Prêt à vivre l'expérience{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                3DBike
              </span> ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Que ce soit pour acheter votre prochaine moto, faire réviser votre machine 
              ou la customiser selon vos envies, notre équipe passionnée vous attend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🏍️ Nous contacter
              </motion.a>
              <motion.a
                href="/produits"
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🏆 Voir nos motos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;