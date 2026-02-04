import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <p>
              Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">1. Isenção de Responsabilidade Médica</h3>
            <p>
              O conteúdo deste site, incluindo textos, gráficos, imagens e outros materiais, é apenas para fins informativos. Nenhum material neste site pretende substituir o aconselhamento médico profissional, diagnóstico ou tratamento. Sempre procure o conselho de seu médico ou outro profissional de saúde qualificado com qualquer dúvida que possa ter sobre uma condição médica ou tratamento.
            </p>
            <p>
              Os resultados apresentados nos depoimentos e estudos de caso são baseados em experiências individuais e podem variar de pessoa para pessoa. Não garantimos resultados específicos.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">2. Uso de Licença</h3>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6">3. Limitações</h3>
            <p>
              Em nenhum caso a PLATAFORMA SELLPAY ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais, mesmo que tenhamos sido notificados oralmente ou por escrito da possibilidade de tais danos.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">4. Modificações</h3>
            <p>
              Podemos revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};