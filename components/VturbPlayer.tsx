import React, { useEffect } from 'react';

export const VturbPlayer: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    if (document.getElementById('vturb-script')) return;

    const script = document.createElement("script");
    script.id = 'vturb-script';
    script.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/ab-test/698245a49f4a0b25f3ac7c31/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional: Cleanup if needed, though usually video scripts stay
    };
  }, []);

  const VturbSmartplayer = 'vturb-smartplayer' as any;

  return (
    <div className="w-full aspect-video shadow-2xl rounded-xl overflow-hidden bg-black relative z-10">
       <VturbSmartplayer 
          id="ab-698245a49f4a0b25f3ac7c31" 
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
       ></VturbSmartplayer>
    </div>
  );
};
