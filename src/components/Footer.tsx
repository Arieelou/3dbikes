import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bike, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Nos Motos' },
    { path: '/contact', label: 'Contact' },
    { path: '/mentions-legales', label: 'Mentions légales' },
    { path: '/cgu', label: 'CGU' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 border-t border-blue-500/30 mt-auto relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></g></svg>')`
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-2xl border border-blue-400/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Bike className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <span className="text-2xl font-['Poppins'] font-black text-white">
                  3DBike
                </span>
                <p className="text-blue-300 text-sm font-['Montserrat'] font-medium">
                  Garage & Vente de Motos
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Votre spécialiste moto depuis 15 ans. Vente, réparation, customisation 
              et passion pour l'univers de la moto haute performance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-['Poppins'] font-bold text-white mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Avenue des Motos, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@3dbike.fr</span>
              </div>
            </div>
          </div>

          {/* Links & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-['Poppins'] font-bold text-white mb-6">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-white font-['Poppins'] font-semibold mb-3">
                Suivez-nous
              </h4>
              <motion.a
                href="https://facebook.com/3dbike"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-white/5 border border-slate-700 hover:border-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
                <span className="font-medium">Facebook</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} 3DBike - Garage & Vente de Motos. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-slate-400 text-sm">
              <span>🏍️ Passion</span>
              <span>•</span>
              <span>🔧 Expertise</span>
              <span>•</span>
              <span>🏆 Performance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;