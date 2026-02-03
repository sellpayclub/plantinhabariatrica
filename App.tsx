import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TvPage } from './pages/TvPage';
import { LessonPage } from './pages/LessonPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rota Original - Página de TV/Emagrecimento */}
        <Route path="/" element={<TvPage />} />
        
        {/* Novas Rotas - Aula Secreta / LibidGotas */}
        <Route path="/aula-secreta-01" element={<LessonPage version={1} />} />
        <Route path="/aula-secreta-02" element={<LessonPage version={2} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;