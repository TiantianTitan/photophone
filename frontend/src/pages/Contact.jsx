// src/pages/Contact.jsx
import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <section className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Informations pratiques</h1>
                
                {/* Horaires Section */}
                <div className="bg-white p-6 rounded shadow-md mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Horaires</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong>Lundi</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong>Mardi</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong>Mercredi</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong>Jeudi</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong>Vendredi</strong> <span className="ml-4 text-red-500">Fermé</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong className="text-green-600">Samedi</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                        <div className="p-2 bg-gray-50 rounded shadow">
                            <strong className="text-green-600">Dimanche</strong> <span className="ml-4">10h00 - 19h00</span>
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plus d'infos sur Photophone</h2>
                    <p className="text-gray-700 mb-4">
                        Photophone est un laboratoire de développement et de tirage de photos situé au 92 av Jean Jaurès à Pantin.
                        Ils offrent une large gamme de services pour les amateurs et les professionnels de la photographie. Leur équipe de 
                        professionnels qualifiés utilise des techniques modernes pour réaliser des impressions de qualité supérieure à partir 
                        de films, de cartes mémoire ou de fichiers numériques.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Photophone propose également la numérisation et la restauration de photos anciennes, ainsi que la production de 
                        livres photo personnalisés. Les clients peuvent se rendre dans leur boutique pour déposer leurs demandes ou utiliser 
                        leur site web convivial pour commander des impressions en ligne.
                    </p>
                    <p className="text-gray-900 font-bold">Localisation: 92 avenue Jean Jaurès, 93500 Pantin</p>
                    <p className="text-gray-900 font-bold">Téléphone: 01 57 42 90 19</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;
