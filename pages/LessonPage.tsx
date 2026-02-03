import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { VturbPlayer } from '../components/VturbPlayer';
import { LessonOffer } from '../components/LessonOffer';
import { LessonComments } from '../components/LessonComments';
import { Footer } from '../components/Footer';

interface LessonPageProps {
  version: 1 | 2;
}

export const LessonPage: React.FC<LessonPageProps> = ({ version }) => {
  const [showOffer, setShowOffer] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [headlineClicks, setHeadlineClicks] = useState(0);

  // 33 minutes and 12 seconds
  // 33 * 60 = 1980 + 12 = 1992 seconds
  const DELAY_SECONDS = 1992;

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('pt-BR'));

    let timer: number;
    
    // Only start timer if offer isn't already shown (via admin click)
    if (!showOffer) {
      console.log(`Timer started. Offer will appear in ${DELAY_SECONDS} seconds.`);
      timer = window.setTimeout(() => {
        setShowOffer(true);
      }, DELAY_SECONDS * 1000);
    }

    return () => clearTimeout(timer);
  }, [showOffer]);

  const handleHeadlineClick = () => {
    const newCount = headlineClicks + 1;
    setHeadlineClicks(newCount);
    
    if (newCount === 3) {
      setShowOffer(true);
      alert("Modo Admin: Oferta liberada!");
    }

    // Reset counter after 2 seconds
    setTimeout(() => setHeadlineClicks(0), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      {/* Use shared Header to match branding of Page 1 */}
      <Header />

      <main className="flex-grow w-full max-w-4xl mx-auto flex flex-col items-center pt-6 md:pt-10 px-4">
        
        {/* Date Warning */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs md:text-sm font-bold py-2 px-4 rounded mb-6 flex items-center justify-center gap-2 w-full max-w-lg shadow-sm">
            <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></span>
            Esta aula sairá do ar hoje, {currentDate} às 23:59.
        </div>

        {/* Headlines & Image */}
        <div className="text-center mb-8 w-full max-w-3xl">
            {version === 1 ? (
                <h1 
                    onClick={handleHeadlineClick}
                    className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6 cursor-pointer select-none active:scale-[0.99] transition-transform"
                    title="Admin: Clique 3 vezes para liberar oferta"
                >
                    Descubra como preparar a <span className="text-blue-600">Semente Indígena</span> que está tornando Homens "Ex-impotentes". <br/>
                    <span className="text-lg md:text-xl font-medium text-gray-600 block mt-4">
                        Esse composto das sementes, fez o Cacique ter 14 filhas com 6 esposas mesmo após os 60 anos e REPOVOAR a aldeia.
                    </span>
                </h1>
            ) : (
                <h1 
                    onClick={handleHeadlineClick}
                    className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6 cursor-pointer select-none active:scale-[0.99] transition-transform"
                    title="Admin: Clique 3 vezes para liberar oferta"
                >
                    A <span className="text-blue-600">Semente Indígena</span> que chamou a atenção de médicos após um Cacique de 64 anos, REPOVOAR sua aldeia com 14 filhas e 6 esposas.
                    <span className="text-lg md:text-xl font-medium text-gray-600 block mt-4">
                        O que foi descoberto sobre esse composto dentro das sementes, está tornando homens Ex-impotentes.
                    </span>
                </h1>
            )}

            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white mb-8 mx-auto max-w-2xl group">
                <img 
                    src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/indio%20com%20filhos.jpg" 
                    alt="Cacique com família" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-xs md:text-sm font-medium">Registro fotográfico da aldeia</p>
                </div>
            </div>
        </div>

        {/* Video Vturb */}
        <div className="w-full mb-8">
            <VturbPlayer />
            <p className="text-center text-gray-400 text-xs mt-4 flex items-center justify-center gap-1">
                <Shield size={12} />
                Vídeo seguro e criptografado
            </p>
        </div>

        {/* Offer & Comments */}
        {showOffer && (
            <div className="w-full animate-fade-in">
                <LessonOffer />
                <LessonComments />
                <div className="py-8">
                    <h3 className="text-center text-2xl font-bold text-gray-900 mb-6">Aproveite a oportunidade única</h3>
                    <LessonOffer />
                </div>
            </div>
        )}

        {!showOffer && <div className="h-20"></div>}
      </main>

      <Footer />
    </div>
  );
};