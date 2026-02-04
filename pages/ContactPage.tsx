import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Entre em Contato</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Informações de Contato */}
            <div className="space-y-6">
                <p className="text-gray-600 mb-6">
                    Tem alguma dúvida sobre o produto ou seu pedido? Nossa equipe de suporte está pronta para ajudar. Entre em contato através dos canais abaixo.
                </p>

                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">E-mail de Suporte</h3>
                        <p className="text-gray-600 text-sm">contato@gpnegocioosdigitais.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Telefone / WhatsApp</h3>
                        <p className="text-gray-600 text-sm">(15) 9835-5640</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Endereço da Empresa</h3>
                        <p className="text-gray-600 text-sm">
                            Plataforma Sellpay<br/>
                            Rua José Maria Barbosa, 31<br/>
                            Andar 10, Apto 104, Sala 2<br/>
                            Jardim Portal da Colina, Sorocaba/SP<br/>
                            CEP: 18.047-380
                        </p>
                        <p className="text-gray-400 text-xs mt-1">CNPJ: 51.474.675/0001-03</p>
                    </div>
                </div>
            </div>

            {/* Formulário Simples (Visual) */}
            <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4">Envie uma mensagem</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nome Completo</label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="Seu nome" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">E-mail</label>
                        <input type="email" className="w-full border border-gray-300 rounded p-2 text-sm" placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Assunto</label>
                        <select className="w-full border border-gray-300 rounded p-2 text-sm">
                            <option>Dúvida sobre o produto</option>
                            <option>Status do Pedido</option>
                            <option>Garantia e Reembolso</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mensagem</label>
                        <textarea className="w-full border border-gray-300 rounded p-2 text-sm h-24" placeholder="Como podemos ajudar?"></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};