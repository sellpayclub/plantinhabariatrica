import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { VideoPlayer } from './components/VideoPlayer';
import { OfferSection } from './components/OfferSection';
import { Comments } from './components/Comments';
import { Footer } from './components/Footer';

function App() {
  const [showOffer, setShowOffer] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [headlineClicks, setHeadlineClicks] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  // Configuration: 27 minutes and 50 seconds in seconds
  // 27 * 60 = 1620 + 50 = 1670 seconds
  const DELAY_SECONDS = 1670;

  useEffect(() => {
    // Set current date formatted as DD/MM/YYYY
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('pt-BR'));

    let timer: number;

    // Only start timer if video has started and offer isn't already shown (via admin click)
    if (videoStarted && !showOffer) {
      console.log(`Timer started. Offer will appear in ${DELAY_SECONDS} seconds.`);
      timer = window.setTimeout(() => {
        setShowOffer(true);
      }, DELAY_SECONDS * 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [videoStarted, showOffer]);

  const handleHeadlineClick = () => {
    const newCount = headlineClicks + 1;
    setHeadlineClicks(newCount);
    
    if (newCount === 3) {
      setShowOffer(true);
      alert("Modo Admin: Oferta liberada!");
    }

    // Reset counter after 2 seconds to prevent accidental triggers over long periods
    setTimeout(() => setHeadlineClicks(0), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa] overflow-x-hidden">
      <Header />
      
      <main className="flex-grow w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Headline Area - Mobile optimized spacing */}
        <div className="bg-white w-full border-b border-gray-200 py-4 px-4 md:py-8 shadow-sm">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                
                {/* Urgency Date Banner */}
                <div className="w-full max-w-lg bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs md:text-sm font-bold py-2 px-4 rounded mb-4 shadow-sm animate-pulse-slow">
                   ⚠️ Programa Liberado Até Hoje {currentDate} as 23hr59.
                </div>

                <span className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wider animate-pulse">
                    REPORTAGEM EXCLUSIVA COM ESPECIALISTA EM EMAGRECIMENTO
                </span>
                
                {/* Admin Backdoor: Click 3 times here */}
                <h1 
                  onClick={handleHeadlineClick}
                  className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.2] cursor-pointer select-none active:scale-[0.99] transition-transform mt-2"
                  title="Admin: Clique 3 vezes para liberar oferta"
                >
                    A “Plantinha Bariátrica” que ajuda a destravar o emagrecimento lento após os 30.
                </h1>
                
                <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-lg leading-relaxed px-2">
                    Aprenda no programa de Hoje a Destravar o seu corpo com essa plantinha poderosa.
                </p>
            </div>
        </div>

        {/* Video Area - Full width on mobile, constrained on desktop */}
        <div className="w-full px-0 md:px-4 pb-4 md:pb-8 flex flex-col items-center bg-white md:bg-transparent">
            <VideoPlayer onVideoStart={() => setVideoStarted(true)} />
            
            <div className="w-full max-w-4xl mx-auto text-center mt-2 md:mt-4 mb-4">
                <p className="text-xs md:text-sm text-gray-500 flex items-center justify-center gap-2 font-medium">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    947 pessoas estão assistindo agora
                </p>
            </div>
        </div>

        {/* Offer Section - Conditional Rendering */}
        {showOffer && (
          <div className="w-full animate-fade-in transition-all duration-700">
            <OfferSection />
            
            <Comments />

            {/* Repeated Offer Section at the bottom */}
            <div className="pt-12 pb-8 bg-gradient-to-t from-gray-100 to-white">
                <div className="max-w-4xl mx-auto text-center mb-8 px-4">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                        Garanta sua vaga com desconto antes que acabe o tempo!
                    </h3>
                    <p className="text-red-600 font-bold mt-2">Últimas unidades do lote promocional</p>
                </div>
                <OfferSection />
            </div>
          </div>
        )}
        
        {/* Removed "Carregando comentários" placeholder */}
        {!showOffer && <div className="py-4"></div>}
      </main>

      <Footer />
    </div>
  );
}

export default App;