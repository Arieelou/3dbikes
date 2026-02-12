import React, { memo } from 'react';
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
      className="relative group cursor-pointer will-change-transform"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.015, y: -6 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-slate-700 group-hover:border-blue-500/50 will-change-transform">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* Image */}
        <div className="relative overflow-hidden h-64 will-change-transform">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }} // suppression du rotate pour performance
            transition={{ duration: 0.4 }}
          >
            <SmartImage
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              widths={[320, 480, 640, 800]}
              sizes="(max-width: 1024px) 100vw, 33vw"
              aspect={4 / 3}
            />
          </motion.div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
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

          {/* Features */}
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
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 will-change-transform"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-['Montserrat'] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              🏍️ Découvrir cette moto →
            </button>
          </motion.div>
        </div>

        {/* Light reflection */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-700 ease-out" />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default memo(ProductCard);
