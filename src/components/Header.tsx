import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bike, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Nos Motos' },
    { path: '/contact', label: 'Contact' },
    { path: '/cgu', label: 'CGU' }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-blue-500/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-2xl border border-blue-400/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Bike className="w-7 h-7 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-['Poppins'] font-black text-white group-hover:text-blue-400 transition-colors">
                3DBike
              </span>
              <span className="text-xs text-blue-300 font-['Montserrat'] font-medium tracking-wide">
                GARAGE & MOTOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-['Montserrat'] font-semibold transition-all duration-300 hover:text-blue-400 relative px-4 py-2 rounded-lg ${
                  location.pathname === item.path 
                    ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pt-4 border-t border-blue-500/30 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 font-['Montserrat'] font-semibold transition-colors rounded-lg mx-2 mb-2 ${
                  location.pathname === item.path 
                    ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;