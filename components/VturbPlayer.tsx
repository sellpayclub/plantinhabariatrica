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
      // Optional: Cleanup if needed
    };
  }, []);

  const VturbSmartplayer = 'vturb-smartplayer' as any;

  return (
    // Removed 'aspect-video' so the player dictates the ratio (important for vertical videos)
    <div className="w-full shadow-2xl rounded-xl overflow-hidden relative z-10 bg-black">
       <VturbSmartplayer 
          id="ab-698245a49f4a0b25f3ac7c31" 
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
       ></VturbSmartplayer>
    </div>
  );
};