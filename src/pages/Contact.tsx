import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Wrench, Bike, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Garage & Showroom",
      content: "123 Avenue des Motos\n75001 Paris, France",
      accent: "🏍️ Venez voir nos motos !"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      accent: "📞 Appel direct atelier"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Pro",
      content: "contact@3dbike.fr",
      accent: "✉️ Réponse sous 24h"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires Garage",
      content: "Lun-Sam: 8h-19h\nDimanche: 10h-16h",
      accent: "🔧 Atelier ouvert 6j/7"
    }
  ];

  const services = [
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Vente de Motos",
      description: "Neuves & occasions sélectionnées",
      features: ["Sportives", "Roadsters", "Customs", "Trails"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Atelier Spécialisé",
      description: "Réparation & préparation expert",
      features: ["Révision", "Réparation", "Préparation", "Customisation"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Services Premium",
      description: "Accompagnement personnalisé",
      features: ["Essais", "Financement", "Reprise", "Garantie"]
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
              🔧 Garage Expert
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-['Poppins'] font-black text-white mb-6">
            CONTACTEZ <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">3DBIKE</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Garage spécialisé et concessionnaire moto</strong> - 
            Notre équipe passionnée vous accueille pour tous vos projets : achat, réparation, 
            customisation ou simple conseil d'expert.
          </p>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-['Poppins'] font-bold text-white mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-slate-300 text-center mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <motion.h2
              className="text-3xl font-['Poppins'] font-black text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🏍️ Écrivez-nous
            </motion.h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <motion.h2
              className="text-3xl font-['Poppins'] font-black text-white mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📍 Infos Garage
            </motion.h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-blue-400 flex-shrink-0 mt-1 p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Poppins'] font-bold text-white mb-2 text-lg">
                      {info.title}
                    </h3>
                    <p className="text-slate-300 whitespace-pre-line mb-2">
                      {info.content}
                    </p>
                    <p className="text-blue-300 text-sm font-medium">
                      {info.accent}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center shadow-2xl border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="p-6 bg-blue-500/20 rounded-full inline-block mb-4 border border-blue-500/30">
                  <MapPin className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-white font-['Poppins'] font-bold mb-2">
                  🗺️ Plan d'accès
                </h3>
                <p className="text-slate-300">
                  Carte interactive disponible prochainement
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-black text-white mb-6">
              🏍️ Visitez notre <span className="text-blue-200">GARAGE</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Venez découvrir notre atelier professionnel, notre showroom et rencontrer 
              notre équipe de passionnés. <strong className="text-white">Essais sur rendez-vous</strong> !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-700 font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-blue-50 shadow-2xl hover:shadow-white/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📅 Prendre rendez-vous
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-['Montserrat'] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🏍️ Demander un essai
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;