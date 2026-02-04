import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Políticas de Privacidade</h1>
          
          <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
            <p>
              A sua privacidade é importante para nós. É política da PLATAFORMA SELLPAY respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">Coleta de Informações</h3>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">Uso de Dados</h3>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">Cookies e Rastreamento</h3>
            <p>
              Utilizamos cookies e tecnologias semelhantes (como Pixels do Facebook e Tags do Google) para analisar tendências, administrar o site, rastrear os movimentos dos usuários no site e coletar informações demográficas sobre nossa base de usuários como um todo. Você pode controlar o uso de cookies no nível do navegador individual.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">Segurança</h3>
            <p>
              A segurança de suas informações pessoais é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis ​​para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mt-6">Links para Outros Sites</h3>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};