import React, { useState, useEffect } from 'react';
import { Shield, BookOpen } from 'lucide-react';
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

  // 33 minutes and 12 seconds
  // 33 * 60 = 1980 + 12 = 1992 seconds
  const DELAY_SECONDS = 1992;

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('pt-BR'));

    console.log(`Timer started. Offer will appear in ${DELAY_SECONDS} seconds.`);
    const timer = window.setTimeout(() => {
      setShowOffer(true);
    }, DELAY_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      {/* Lesson Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <div className="bg-blue-600 text-white p-1.5 rounded">
                <BookOpen size={20} />
             </div>
             <div>
                <h1 className="text-sm font-bold text-gray-800 uppercase tracking-wide leading-none">Protocolo Natural</h1>
                <p className="text-[10px] text-gray-500 font-semibold">Aula Exclusiva com Amanda</p>
             </div>
           </div>
           <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">
             Acesso Restrito
           </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto flex flex-col items-center pt-6 md:pt-10 px-4">
        
        {/* Date Warning */}
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold py-2 px-4 rounded-lg mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            Esta aula sairá do ar hoje, {currentDate} às 23:59.
        </div>

        {/* Headlines & Image */}
        <div className="text-center mb-8 w-full max-w-3xl">
            {version === 1 ? (
                <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                    Descubra como preparar a <span className="text-blue-600">Semente Indígena</span> que está tornando Homens "Ex-impotentes". <br/>
                    <span className="text-lg md:text-xl font-medium text-gray-600 block mt-4">
                        Esse composto das sementes, fez o Cacique ter 14 filhas com 6 esposas mesmo após os 60 anos e REPOVOAR a aldeia.
                    </span>
                </h1>
            ) : (
                <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
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