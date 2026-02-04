import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const VideoPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // 1. Set Date
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('pt-BR'));

    // 2. Load Vturb Script dynamically
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69837361e3e357e5578ca621/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // 3. Track PageView (Facebook)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    // 4. Track Conversion (Google Ads)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17738671073/0eSXCL-S7sEbEOHHuopC',
          'value': 1.0,
          'currency': 'BRL'
      });
    }

    return () => {
      // Cleanup if necessary (usually not needed for ad pages)
    };
  }, []);

  // Cast Vturb element to any to avoid TypeScript errors with custom elements
  const VturbPlayer = 'vturb-smartplayer' as any;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      <Header />
      
      <main className="flex-grow w-full max-w-4xl mx-auto flex flex-col items-center pt-8 px-4 pb-12">
        
        {/* Aviso de Alta Demanda */}
        <div className="w-full max-w-lg bg-red-100 border border-red-300 text-red-800 text-sm md:text-base font-bold py-3 px-4 rounded-lg mb-8 text-center shadow-sm">
           ⚠️ Devido a alta demanda de acessos, garantimos a apresentação somente até: {currentDate}.
        </div>

        {/* Video Player */}
        <div className="w-full flex justify-center shadow-2xl rounded-xl overflow-hidden bg-black">
           <VturbPlayer 
              id="vid-69837361e3e357e5578ca621" 
              style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
           ></VturbPlayer>
        </div>

        <p className="mt-6 text-gray-500 text-xs text-center">
            Certifique-se de que seu som esteja ligado para ouvir a apresentação.
        </p>

      </main>

      <Footer />
    </div>
  );
};