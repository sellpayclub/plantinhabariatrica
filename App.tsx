import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TvPage } from './pages/TvPage';
import { LessonPage } from './pages/LessonPage';
import { VideoPage } from './pages/VideoPage';
import { VideoPageEn } from './pages/VideoPageEn';
import { PreSellPage } from './pages/PreSellPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rota Original - Página de TV/Emagrecimento */}
        <Route path="/" element={<TvPage />} />
        
        {/* Pré-Sell (Nova) */}
        <Route path="/pre-sell" element={<PreSellPage />} />

        {/* Novas Rotas - Aula Secreta / LibidGotas */}
        <Route path="/aula-secreta-01" element={<LessonPage version={1} />} />
        <Route path="/aula-secreta-02" element={<LessonPage version={2} />} />

        {/* Rota Vídeo Exclusivo (Sem oferta/comentários) */}
        <Route path="/video-exclusivo" element={<VideoPage />} />

        {/* Rota Vídeo Inglês (Novo) - Corrigido para /video-exclusivo-en */}
        <Route path="/video-exclusivo-en" element={<VideoPageEn />} />

        {/* Páginas Institucionais (Rodapé) */}
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;