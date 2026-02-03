import React from 'react';
import { Shield, CheckCircle, ArrowDown, Truck, Star } from 'lucide-react';
import { ProductPlan } from '../types';

const plans: ProductPlan[] = [
  {
    id: 3,
    title: "TRATAMENTO COMPLETO (3 FRASCOS)",
    price: 197.00,
    pricePerUnit: 65.66,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/3%20frascos.png",
    savings: "MAIS VENDIDO",
    checkoutUrl: "https://seguro.vitago-suplements.shop/r/40AUTPX9KU",
    popular: true
  },
  {
    id: 2,
    title: "TRATAMENTO RECOMENDADO (2 FRASCOS)",
    price: 147.00,
    pricePerUnit: 73.50,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/2%20frascos.png",
    savings: "Popular",
    checkoutUrl: "https://seguro.vitago-suplements.shop/r/L1TBD95BF7"
  },
  {
    id: 1,
    title: "TRATAMENTO BÁSICO (1 FRASCO)",
    price: 97.00,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/1%20frasco.png",
    checkoutUrl: "https://seguro.vitago-suplements.shop/r/AUPMGGZUZ3"
  }
];

export const LessonOffer: React.FC = () => {
  return (
    <div id="oferta" className="w-full bg-gradient-to-b from-blue-50/50 to-white rounded-3xl shadow-sm border border-gray-100 p-4 md:p-8 mb-8">
        <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
                ESCOLHA SEU KIT DE TRATAMENTO
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
                 <div className="flex text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                 </div>
                 <span className="text-sm font-bold text-gray-600">Mais de 12.000 clientes satisfeitos</span>
            </div>
            <p className="text-gray-500 text-sm md:text-base">Selecione a melhor opção para o seu caso abaixo:</p>
            <div className="flex justify-center mt-4 animate-bounce text-blue-600">
                <ArrowDown size={24} />
            </div>
        </div>

        {/* Grid Responsive: 1 col mobile, 3 cols desktop (Popular in middle/first) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
                <div 
                    key={plan.id}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col transition-all duration-300 ${
                        plan.popular 
                        ? 'border-blue-600 ring-4 ring-blue-600/10 lg:scale-110 z-10 order-first lg:order-none' 
                        : 'border-gray-100 hover:border-blue-300 order-last lg:order-none'
                    }`}
                >
                    {plan.popular && (
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 text-xs md:text-sm font-bold uppercase tracking-widest shadow-md">
                            Campeão de Vendas
                        </div>
                    )}
                    
                    {/* Discount Badge if applies (custom logic) */}
                    {plan.id > 1 && (
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg z-20">
                           FRETE GRÁTIS
                        </div>
                    )}

                    <div className="p-5 md:p-6 flex-grow flex flex-col items-center text-center">
                        <h3 className={`font-black text-gray-800 text-center mt-1 mb-4 text-lg md:text-xl leading-tight h-10 flex items-center justify-center ${plan.popular ? 'text-blue-700' : ''}`}>
                            {plan.title}
                        </h3>

                        <div className="relative w-48 h-48 mb-4 group cursor-pointer">
                            <div className="absolute inset-0 bg-blue-500/5 rounded-full filter blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
                            <img 
                                src={plan.imageUrl} 
                                alt={plan.title} 
                                className="relative w-full h-full object-contain filter drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        {plan.pricePerUnit && (
                            <div className="bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-4">
                                <p className="text-green-700 font-bold text-xs md:text-sm">
                                    Apenas R$ {plan.pricePerUnit.toFixed(2).replace('.', ',')} por frasco
                                </p>
                            </div>
                        )}

                        <div className="mt-auto w-full space-y-1">
                            <p className="text-gray-400 text-sm line-through">
                                de R$ {(plan.price * 1.8).toFixed(2).replace('.', ',')}
                            </p>
                            
                            <div className="flex items-center justify-center gap-1.5 text-gray-900 mb-2">
                                <span className="text-sm text-gray-600 font-medium">Por:</span>
                                <div className="flex items-baseline">
                                    <span className="text-xs font-bold mr-0.5">R$</span>
                                    <span className="text-3xl md:text-4xl font-extrabold tracking-tight">{plan.price.toFixed(0)}</span>
                                    <span className="text-lg font-bold">,00</span>
                                </div>
                            </div>
                            
                            {/* Installment Highlight */}
                            <div className={`p-3 rounded-lg border my-4 w-full ${plan.popular ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
                                <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-1">Parcelamento Facilitado</p>
                                <p className={`text-2xl font-black ${plan.popular ? 'text-blue-700' : 'text-gray-800'}`}>
                                   12x de R$ {(plan.price / 12 * 1.25).toFixed(2).replace('.', ',')}
                                </p>
                            </div>

                            <a 
                                href={plan.checkoutUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-4 rounded-xl font-black text-white text-lg shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 flex flex-col items-center justify-center leading-none gap-1 ${
                                    plan.popular 
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-500/30' 
                                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-500/30'
                                }`}
                            >
                                <span>COMPRAR AGORA</span>
                                <span className="text-[10px] opacity-80 font-medium tracking-wide">COMPRA 100% SEGURA</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Trust Footer of Card */}
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                            {plan.id > 1 ? (
                                <div className="flex items-center gap-1 text-green-600">
                                    <Truck size={12} />
                                    <span>Frete Grátis</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <CheckCircle size={12} />
                                    <span>Pronta Entrega</span>
                                </div>
                            )}
                            <span className="text-gray-300">|</span>
                            <div className="flex items-center gap-1">
                                <Shield size={12} />
                                <span>Garantia</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500 bg-white border border-gray-200 p-4 rounded-xl max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={18} />
                <span className="font-medium">Garantia Blindada de 30 dias</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                <span className="font-medium">Dados Criptografados e Seguros</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
                <Truck className="text-gray-500" size={18} />
                <span className="font-medium">Entrega Rápida e Discreta</span>
            </div>
        </div>
    </div>
  );
};