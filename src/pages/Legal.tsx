import React from 'react';
import { motion } from 'framer-motion';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></g></svg>')`
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-['Montserrat'] font-semibold tracking-wide uppercase">
                📋 Informations Légales
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">
              MENTIONS <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">LÉGALES</span>
            </h1>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 space-y-8 shadow-2xl border border-slate-700/50">
            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🏍️ Informations sur l'entreprise
              </h2>
              <div className="text-slate-300 space-y-2">
                <p><strong className="text-white">Raison sociale :</strong> 3DBike SARL - Garage & Vente de Motos</p>
                <p><strong className="text-white">Siège social :</strong> 123 Avenue des Motos, 75001 Paris, France</p>
                <p><strong className="text-white">SIRET :</strong> 12345678901234</p>
                <p><strong className="text-white">TVA Intracommunautaire :</strong> FR12345678901</p>
                <p><strong className="text-white">Téléphone :</strong> +33 1 23 45 67 89</p>
                <p><strong className="text-white">Email :</strong> contact@3dbike.fr</p>
                <p><strong className="text-white">Activité :</strong> Garage spécialisé, vente et réparation de motocycles</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                👨‍💼 Directeur de publication
              </h2>
              <p className="text-slate-300">
                Le directeur de publication du site est le gérant de la société 3DBike SARL, 
                garage spécialisé dans la vente et la réparation de motos haute performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🌐 Hébergement
              </h2>
              <div className="text-slate-300 space-y-2">
                <p><strong className="text-white">Hébergeur :</strong> Netlify, Inc.</p>
                <p><strong className="text-white">Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107</p>
                <p><strong className="text-white">Site web :</strong> https://www.netlify.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                ⚖️ Propriété intellectuelle
              </h2>
              <p className="text-slate-300 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété 
                exclusive de 3DBike SARL ou fait l'objet d'une autorisation d'utilisation. 
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                sauf autorisation écrite préalable de 3DBike SARL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🔒 Protection des données personnelles
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                les données personnelles collectées via le formulaire de contact sont utilisées 
                uniquement dans le cadre de la gestion de votre demande concernant nos services de garage 
                et vente de motos. Vous disposez d'un droit d'accès, de rectification, d'effacement 
                et de portabilité de vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🛡️ Responsabilité
              </h2>
              <p className="text-slate-300 leading-relaxed">
                3DBike SARL s'efforce de fournir des informations exactes et à jour sur ce site web 
                concernant nos services de garage, nos motos en vente et nos prestations. 
                Cependant, nous ne pouvons garantir l'exactitude, la complétude ou la pertinence 
                de ces informations. L'utilisation des informations contenues sur ce site se fait 
                sous votre propre responsabilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                ⚖️ Droit applicable
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Le présent site web et les présentes mentions légales sont régis par le droit français. 
                Tout litige relatif à l'utilisation de ce site web ou aux services proposés par 
                le garage 3DBike sera soumis à la compétence exclusive des tribunaux de Paris.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-slate-400 text-sm">
                🏍️ 3DBike - Garage spécialisé depuis 15 ans
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;