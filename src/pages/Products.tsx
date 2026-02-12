import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Shield, Award, Settings, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';

type Product = {
  name: string;
  description: string;
  image: string;
};

type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'Thunder X1 Racing',
    description:
      'Superbike de 1000cc avec chassis carbone et electronique de pointe. Concue pour la piste et les routes sinueuses. Puissance brute et technologie de course.',
    image:
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Cruiser Elite Custom',
    description:
      "Moto de tourisme 1200cc entierement customisee par nos soins. Confort premium, son unique et style inimitable pour les longs trajets.",
    image:
      'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Street Racer Pro',
    description:
      'Naked bike urbaine 600cc preparee par notre atelier. Maniabilite extreme, freinage racing et look agressif pour dominer la ville.',
    image:
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Adventure Beast 4x4',
    description:
      "Trail 800cc renforce pour l'aventure extreme. Suspensions WP, protection complete et preparation speciale raid par nos mecaniciens.",
    image:
      'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Retro Cafe Racer',
    description:
      'Style vintage avec coeur moderne 750cc. Transformation complete en cafe racer par notre atelier avec finitions artisanales premium.',
    image:
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Phantom Black Edition',
    description:
      'Hypersport 1300cc edition limitee. Preparation moteur exclusive, carrosserie carbone et peinture speciale. Le summum de la performance.',
    image:
      'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const SERVICES: Service[] = [
  { Icon: Zap, title: 'Preparation Moteur', description: 'Optimisation puissance et couple' },
  { Icon: Shield, title: 'Securite Racing', description: 'Equipements haute performance' },
  { Icon: Settings, title: 'Customisation', description: 'Modifications sur mesure' },
  { Icon: Wrench, title: 'Atelier Expert', description: 'Reparation toutes marques' },
];

const Products: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></g></svg>')",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-6" whileHover={{ scale: 1.05 }}>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
              Collection Premium
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-['Poppins'] font-black text-white mb-6">
            NOS <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">MOTOS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Decouvrez notre selection exclusive de motos haute performance.
            Chaque machine est preparee, testee et garantie par notre equipe d'experts passionnes.
            <strong className="text-white"> Garage specialise depuis 15 ans.</strong>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-blue-400 mb-2 flex justify-center">
                <service.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-['Poppins'] font-bold text-sm mb-1">{service.title}</h3>
              <p className="text-slate-300 text-xs">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-full translate-y-12 -translate-x-12" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-black text-white mb-4">
              Trouvez votre <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">machine de reve</span>
            </h2>
            <p className="text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
              <strong className="text-white">Garage 3DBike</strong> - Nos experts vous accompagnent dans le choix,
              l'achat et la preparation de votre moto. Essais, financement, reprise et garantie inclus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  Contacter le garage
                </Link>
              </motion.div>

              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                Demander un essai
              </motion.button>
            </div>

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
