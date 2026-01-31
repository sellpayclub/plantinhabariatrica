import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  onVideoStart: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ onVideoStart }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // YouTube Video ID
  const videoId = "A3ifhdRwxsQ";

  const handleInteract = () => {
    setHasInteracted(true);
    onVideoStart();
  };

  return (
    <div className="w-full max-w-4xl mx-auto md:my-6 bg-black md:rounded-xl shadow-2xl relative aspect-video group overflow-hidden border-b-4 border-red-600 md:border-0">
      {/* 
        Mobile Optimization:
        - playsinline=1: Prevents full screen on iOS automatically.
        - controls=0: Hides YouTube controls to keep focus on content.
        - modestbranding=1: Cleaner look.
      */}
      
      {!hasInteracted ? (
        <div className="absolute inset-0 z-20 cursor-pointer" onClick={handleInteract}>
           {/* Background Muted Video (Preview) - Autoplay Muted */}
           <iframe
            className="w-full h-full pointer-events-none opacity-60 scale-105"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&playsinline=1&iv_load_policy=3`}
            title="Video Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />

          {/* Click to Activate Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-black/40 backdrop-blur-[1px]">
            <div className="animate-pulse-slow relative mb-4">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-40 animate-ping"></div>
                <button className="relative bg-blue-600 hover:bg-blue-700 text-white rounded-full p-5 md:p-6 shadow-[0_0_30px_rgba(37,99,235,0.6)] transform transition hover:scale-105 flex flex-col items-center gap-2 border-4 border-white/20">
                    <Volume2 size={40} md:size={48} strokeWidth={2.5} />
                </button>
            </div>
            <div className="text-center px-4 space-y-2">
                <h3 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-lg uppercase tracking-wide">
                  O VÍDEO JÁ COMEÇOU!
                </h3>
                <div className="inline-flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                    <VolumeX size={18} className="text-red-400" />
                    <p className="text-white font-bold text-sm md:text-base">
                    Toque para ativar o som
                    </p>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&iv_load_policy=3`}
          title="Programa Principal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
      
      {/* Fake Player Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-10 pointer-events-none">
        <div className="h-full bg-red-600 w-full animate-[width_1800s_linear] shadow-[0_0_10px_rgba(220,38,38,0.7)]"></div>
      </div>
    </div>
  );
};