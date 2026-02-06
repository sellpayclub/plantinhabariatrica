import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const VideoPageEn: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // 1. Set Date (English format)
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US'));

    // 2. Load Vturb Script dynamically (ID: 6984fa919248e6863dea9953)
    // Verifica se já existe para não duplicar
    const scriptId = "vturb-script-en";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/6984fa919248e6863dea9953/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // 3. Track PageView (Facebook)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    // 4. Track Conversion (Google Ads)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17738671073/0eSXCL-S7sEbEOHHuopC',
          'value': 1.0,
          'currency': 'USD'
      });
    }

    return () => {
      // Optional cleanup
    };
  }, []);

  // Cast Vturb element to any to avoid TypeScript errors with custom elements
  const VturbPlayer = 'vturb-smartplayer' as any;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      <Header theme="male" lang="en" />
      
      <main className="flex-grow w-full max-w-4xl mx-auto flex flex-col items-center pt-8 px-4 pb-12">
        
        {/* Warning Banner (English) */}
        <div className="w-full max-w-lg bg-red-100 border border-red-300 text-red-800 text-sm md:text-base font-bold py-3 px-4 rounded-lg mb-8 text-center shadow-sm">
           ⚠️ Due to high demand, we guarantee the presentation only until: {currentDate}.
        </div>

        {/* Video Player (ID: 6984fa919248e6863dea9953) */}
        <div className="w-full flex justify-center">
           <VturbPlayer 
              id="vid-6984fa919248e6863dea9953" 
              style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
           ></VturbPlayer>
        </div>

        <p className="mt-6 text-gray-500 text-xs text-center mb-8">
            Make sure your sound is on to hear the presentation.
        </p>

        {/* News Logos */}
        <div className="w-full max-w-2xl mx-auto flex justify-center">
            <img 
              src="https://manhealthy.xyz/assets/img/news-logos.webp" 
              alt="Featured on news sites" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>

      </main>

      <Footer lang="en" />
    </div>
  );
};