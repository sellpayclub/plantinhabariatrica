import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PreSellPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    // Navega para a página da aula 2 com a âncora para o vídeo
    navigate('/aula-secreta-02#video-player');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow w-full max-w-2xl mx-auto flex flex-col items-center pt-8 px-4 pb-12">
        
        {/* Headline da Página 2 */}
        <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                A <span className="text-blue-600">Semente Indígena</span> que chamou a atenção de médicos após um Cacique de 64 anos, REPOVOAR sua aldeia com 14 filhas e 6 esposas.
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-600 mt-4 leading-relaxed">
                O que foi descoberto sobre esse composto dentro das sementes, está tornando homens "Ex-impotentes".
            </p>
        </div>

        {/* Imagem do Cacique */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white mb-10 w-full group cursor-pointer" onClick={handleCtaClick}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
            <img 
                src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/indio%20com%20filhos.jpg" 
                alt="Cacique com família" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* Botão Pulsante Gigante */}
        <button 
            onClick={handleCtaClick}
            className="w-full max-w-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl md:text-2xl font-black py-6 px-4 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.6)] transform transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] active:scale-95 animate-pulse flex flex-col items-center justify-center gap-2"
        >
            <div className="flex items-center gap-3">
                <PlayCircle size={32} fill="currentColor" className="text-white" />
                QUERO VER O VÍDEO!
            </div>
            <span className="text-xs md:text-sm font-medium opacity-90 tracking-wider uppercase">
                Clique aqui para assistir a revelação
            </span>
        </button>

        <p className="mt-4 text-gray-400 text-xs text-center">
            Apresentação gratuita disponível por tempo limitado.
        </p>

      </main>

      <Footer />
    </div>
  );
};