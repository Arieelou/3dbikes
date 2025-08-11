import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Award } from 'lucide-react';
import SmartImage from './SmartImage';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, index }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-slate-700 group-hover:border-blue-500/50">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Image */}
        <div className="relative overflow-hidden h-64">
          <motion.div
            className="w-full h-full"
            whileHover={{ rotate: [0, 1, -1, 0], scale: 1.1 }}
            transition={{ duration: 0.7 }}
          >
            <SmartImage
              src={image}
              alt={name}
              className="w-full h-full"
              widths={[480, 800, 1200]}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

          {/* Performance Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-['Montserrat'] font-bold tracking-wide">
            🏍️ PERFORMANCE
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <motion.h3
            className="text-2xl font-['Poppins'] font-black text-white mb-3 group-hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
            {description}
          </p>

          {/* Features Icons */}
          <div className="flex items-center space-x-4 mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center space-x-1 text-blue-400">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-medium">Puissance</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-400">
              <Settings className="w-4 h-4" />
              <span className="text-xs font-medium">Tech</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-400">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">Premium</span>
            </div>
          </div>

          {/* Hover Button */}
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
              🏍️ Découvrir cette moto →
            </button>
          </motion.div>
        </div>

        {/* Light reflection effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000"></div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
