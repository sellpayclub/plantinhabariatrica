import React, { useEffect } from 'react';

export const VturbPlayer: React.FC = () => {
  useEffect(() => {
    // We append the script without checking for existence to ensure the player logic 
    // runs on every mount/navigation, fixing issues where the video might not appear on Page 2.
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/ab-test/698245a49f4a0b25f3ac7c31/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional cleanup
    };
  }, []);

  const VturbSmartplayer = 'vturb-smartplayer' as any;

  return (
    <div className="w-full flex justify-center">
       <VturbSmartplayer 
          id="ab-698245a49f4a0b25f3ac7c31" 
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
       ></VturbSmartplayer>
    </div>
  );
};