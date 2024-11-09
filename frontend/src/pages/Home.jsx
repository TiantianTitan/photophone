// src/pages/Home.js
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
    const uniformHeight = 300; // 设置统一的照片高度

    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 min-h-screen"> {/* 使用渐变背景 */}
            <Navbar />
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-10">
                {/* 第一行 */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"> {/* 添加悬停效果和阴影 */}
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 animate-pulse">Photo identité</h3> {/* 轻微动画效果 */}
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/src/assets/image1.png"
                            alt="Photo identité"
                            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105" /* 图片悬停放大效果 */
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/src/assets/image2.png"
                            alt="Publication"
                            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* 第二行 */}
                <div className="mt-8 grid grid-cols-2 gap-8 bg-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 animate-pulse">Titre de séjour</h3>
                        <img
                            src="/src/assets/image3.png"
                            alt="Titre de séjour"
                            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/src/assets/image4.png"
                            alt="Permi de conduire"
                            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            style={{ height: `${uniformHeight}px`, objectFit: 'contain' }}
                        />
                        <h3 className="text-2xl font-bold text-gray-900 text-center mt-4 animate-pulse">Permi de conduire</h3>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Votre Photo Agence en ligne</h2>
                    <p className="text-gray-600 mt-2 mb-6">Avantages de notre studio photo</p>
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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
}

export default Home;
