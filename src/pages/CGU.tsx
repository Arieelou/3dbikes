import React from 'react';
import { motion } from 'framer-motion';

const CGU: React.FC = () => {
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
                📜 Conditions d'Utilisation
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-['Poppins'] font-black text-white mb-6">
              CONDITIONS <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">GÉNÉRALES</span>
            </h1>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 space-y-8 shadow-2xl border border-slate-700/50">
            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🎯 1. Objet
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
                du site web 3DBike, garage spécialisé et concessionnaire de motos haute performance. 
                En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🌐 2. Accès au site
              </h2>
              <p className="text-slate-300 leading-relaxed">
                L'accès au site 3DBike est gratuit. Tous les coûts afférents à l'accès au site, 
                que ce soient les frais matériels, logiciels ou d'accès à Internet, sont exclusivement 
                à la charge de l'utilisateur. L'utilisateur est seul responsable du bon fonctionnement 
                de son équipement informatique ainsi que de son accès à Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🔧 3. Utilisation du site
              </h2>
              <div className="text-slate-300 space-y-4">
                <p>L'utilisateur s'engage à utiliser le site de manière conforme aux présentes CGU et à :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Ne pas porter atteinte à l'ordre public et aux bonnes mœurs</li>
                  <li>Ne pas enfreindre les droits de tiers</li>
                  <li>Ne pas transmettre des contenus illicites ou inappropriés</li>
                  <li>Respecter la propriété intellectuelle de 3DBike</li>
                  <li>Ne pas tenter de contourner les mesures de sécurité du site</li>
                  <li>Utiliser les informations sur nos motos et services de garage de manière loyale</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🏍️4. Contenu du site
              </h2>
              <p className="text-slate-300 leading-relaxed">
                3DBike s'efforce de maintenir les informations du site à jour et exactes concernant 
                nos services de garage, nos motos en vente et nos prestations. Cependant, nous ne 
                garantissons pas l'exactitude, la complétude ou la pertinence des informations fournies. 
                Les informations sur les produits, prix et disponibilités sont susceptibles de 
                modifications sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🔒 5. Données personnelles
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Les données personnelles collectées via le formulaire de contact sont traitées 
                conformément à notre politique de confidentialité et au RGPD. Ces données sont 
                utilisées uniquement pour répondre à vos demandes concernant nos services de garage, 
                nos motos ou pour vous recontacter dans le cadre de votre projet moto. 
                Elles ne sont pas transmises à des tiers sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                🍪 6. Cookies
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent aucune donnée personnelle et sont exempts de consentement 
                selon la réglementation en vigueur. Vous pouvez désactiver les cookies dans 
                les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                ⚠️ 7. Responsabilité
              </h2>
              <p className="text-slate-300 leading-relaxed">
                3DBike ne saurait être tenu responsable des dommages directs ou indirects résultant 
                de l'utilisation du site ou de l'impossibilité d'y accéder. L'utilisateur utilise 
                le site sous sa propre responsabilité. Les informations sur nos services de garage 
                et nos motos sont données à titre indicatif.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                📝 8. Modification des CGU
              </h2>
              <p className="text-slate-300 leading-relaxed">
                3DBike se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications prennent effet dès leur publication sur le site. 
                Il est conseillé de consulter régulièrement cette page pour prendre connaissance 
                des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                ⚖️ 9. Droit applicable et juridiction
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Les présentes CGU sont régies par le droit français. Tout litige relatif à 
                l'interprétation ou à l'exécution des présentes ou concernant nos services de garage 
                sera soumis à la compétence exclusive des tribunaux de Paris.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-['Poppins'] font-bold text-blue-400 mb-4">
                📞 10. Contact
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Pour toute question concernant ces conditions d'utilisation ou nos services de garage, 
                vous pouvez nous contacter à l'adresse : <strong className="text-white">contact@3dbike.fr</strong> 
                ou directement au garage au +33 1 23 45 67 89.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-slate-400 text-sm">
                🏍️ 3DBike - Votre garage spécialisé depuis 15 ans
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

export default CGU;