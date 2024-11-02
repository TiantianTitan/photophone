// src/pages/Home.js
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
    const uniformHeight = 300; // 设置统一的照片高度

    return (
        <div className="bg-gray-100 min-h-screen"> {/* 确保页面可以滚动 */}
            <Navbar />
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-10">
                {/* 第一行 */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-200 p-4 rounded">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Photo identité</h3> {/* 垂直居中 */}
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/src/assets/image1.png"
                            alt="Photo identité"
                            className="w-full"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }} // 统一高度
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/src/assets/image2.png"
                            alt="Publication"
                            className="w-full"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }} // 统一高度
                        />
                    </div>
                </div>

                {/* 第二行 */}
                <div className="mt-8 grid grid-cols-2 gap-8 bg-gray-200 p-4 rounded">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Titre de séjour</h3> {/* 垂直居中 */}
                        <img
                            src="/src/assets/image3.png"
                            alt="Titre de séjour"
                            className="w-full"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }} // 统一高度
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/src/assets/image4.png"
                            alt="Permi de conduire"
                            className="w-full"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }} // 统一高度
                        />
                        <h3 className="text-2xl font-bold text-gray-900 text-center mt-4">Permi de conduire</h3> {/* 垂直居中 */}
                    </div>
                </div>
            </section>

            <section className="bg-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Votre Photo Agence en ligne
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Avantages de notre studio photo
                    </p>
                    <div className="mt-12 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                    <FeatureCard 
                        title="Qualité" 
                        description="Des photos de haute qualité grâce à des équipements professionnels et une expertise éprouvée." 
                    />
                    <FeatureCard 
                        title="Efficacité" 
                        description="Un service rapide qui respecte votre emploi du temps et minimise votre attente." 
                    />
                    <FeatureCard 
                        title="Praticité" 
                        description="Une expérience pratique et sans tracas, adaptée à vos besoins pour faciliter chaque étape." 
                    />
                     </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
}

export default Home;
