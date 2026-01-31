import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-white font-bold mb-4">Saúde e Boa Forma na Net</h4>
          <p>
            Conteúdo informativo sobre saúde, bem-estar e qualidade de vida. 
            Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Links Úteis</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition">Políticas de Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Aviso Legal</h4>
          <p className="text-xs">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
            As informações aqui contidas não substituem o aconselhamento médico profissional.
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs">
        &copy; {new Date().getFullYear()} Saúde e Boa Forma na Net. Todos os direitos reservados.
      </div>
    </footer>
  );
};