import React from 'react';
import { Tv, Menu, PlayCircle, Activity, User } from 'lucide-react';

interface HeaderProps {
  theme?: 'default' | 'male';
}

export const Header: React.FC<HeaderProps> = ({ theme = 'default' }) => {
  const isMale = theme === 'male';

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm safe-top">
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          {/* Icon Brand */}
          <div className="relative group cursor-pointer">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 ${isMale ? 'bg-gradient-to-br from-blue-700 to-slate-800' : 'bg-gradient-to-br from-blue-600 to-indigo-700'}`}>
              {isMale ? (
                <User className="text-white w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
              ) : (
                <Activity className="text-white w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
              )}
            </div>
            {/* Notification Dot simulating 'LIVE' or 'New' */}
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-red-500 border-2 border-white rounded-full animate-pulse"></div>
          </div>

          {/* Text Brand */}
          <div className="flex flex-col justify-center">
            {isMale ? (
               <h1 className="text-base md:text-xl font-black text-gray-900 tracking-tighter leading-none flex items-center gap-1">
                 SAÚDE <span className="text-blue-700">MASCULINA</span>
               </h1>
            ) : (
               <h1 className="text-base md:text-xl font-black text-gray-900 tracking-tighter leading-none flex items-center gap-1">
                 SAÚDE <span className="text-blue-600 font-light">&</span> BOA FORMA
               </h1>
            )}
            
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest shadow-sm">
                NA NET
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wide truncate border-l border-gray-300 pl-2 leading-none">
                {isMale ? "RECEITA MASCULINA COM AMANDA!" : "Com Claudia Macedo"}
              </span>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 p-2 active:bg-gray-100 rounded-full hover:bg-gray-50 transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};