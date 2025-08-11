import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Zap, Shield, Award, Settings, Users, Wrench } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: "Thunder X1 Racing",
      description: "Superbike de 1000cc avec châssis carbone et électronique de pointe. Conçue pour la piste et les routes sinueuses. Puissance brute et technologie de course.",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Cruiser Elite Custom",
      description: "Moto de tourisme 1200cc entièrement customisée par nos soins. Confort premium, son unique et style inimitable pour les longs trajets.",
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Street Racer Pro",
      description: "Naked bike urbaine 600cc préparée par notre atelier. Maniabilité extrême, freinage racing et look agressif pour dominer la ville.",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Adventure Beast 4x4",
      description: "Trail 800cc renforcé pour l'aventure extrême. Suspensions WP, protection complète et préparation spéciale raid par nos mécaniciens.",
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Retro Café Racer",
      description: "Style vintage avec cœur moderne 750cc. Transformation complète en café racer par notre atelier avec finitions artisanales premium.",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Phantom Black Edition",
      description: "Hypersport 1300cc édition limitée. Préparation moteur exclusive, carrosserie carbone et peinture spéciale. Le summum de la performance.",
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Préparation Moteur",
      description: "Optimisation puissance et couple"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Racing",
      description: "Équipements haute performance"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customisation",
      description: "Modifications sur mesure"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Atelier Expert",
      description: "Réparation toutes marques"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></g></svg>')`
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
              🏍️ Collection Premium
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-['Poppins'] font-black text-white mb-6">
            NOS <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">MOTOS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre sélection exclusive de motos haute performance. 
            Chaque machine est préparée, testée et garantie par notre équipe d'experts passionnés. 
            <strong className="text-white"> Garage spécialisé depuis 15 ans.</strong>
          </p>
        </motion.div>

        {/* Services Quick Info */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-blue-400 mb-2 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-white font-['Poppins'] font-bold text-sm mb-1">
                {service.title}
              </h3>
              <p className="text-slate-300 text-xs">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-black text-white mb-4">
              🏍️ Trouvez votre <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">machine de rêve</span>
            </h2>
            <p className="text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
              <strong className="text-white">Garage 3DBike</strong> - Nos experts vous accompagnent dans le choix, 
              l'achat et la préparation de votre moto. Essais, financement, reprise et garantie inclus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🔧 Contacter le garage
              </motion.a>
              
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Demander un essai
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-slate-700/50">
              <div className="flex items-center space-x-2 text-slate-300">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">15 ans d'expertise</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Garantie atelier</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">+500 clients satisfaits</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;