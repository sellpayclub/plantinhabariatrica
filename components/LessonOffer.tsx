import React from 'react';
import { Shield, CheckCircle, ArrowDown } from 'lucide-react';
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
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 mb-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">ESCOLHA SEU KIT DE TRATAMENTO</h2>
            <p className="text-gray-500 text-sm">Frete Grátis para todo o Brasil na compra dos kits promocionais</p>
            <div className="flex justify-center mt-4 animate-bounce text-blue-600">
                <ArrowDown size={24} />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
                <div 
                    key={plan.id}
                    className={`relative rounded-xl border-2 flex flex-col items-center p-4 transition-all hover:shadow-xl ${
                        plan.popular 
                        ? 'border-blue-600 bg-blue-50/30 scale-105 z-10 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                >
                    {plan.popular && (
                        <div className="absolute -top-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Campeão de Vendas
                        </div>
                    )}

                    <h3 className="font-bold text-gray-800 text-center mt-2 mb-4 h-12 flex items-center justify-center text-sm md:text-base">
                        {plan.title}
                    </h3>

                    <img 
                        src={plan.imageUrl} 
                        alt={plan.title} 
                        className="w-40 h-40 object-contain mb-4 filter drop-shadow-md"
                    />

                    <div className="mt-auto w-full text-center">
                        <div className="text-gray-400 text-sm line-through mb-1">
                            de R$ {(plan.price * 1.5).toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-1">
                            R$ {plan.price.toFixed(0)},00
                        </div>
                        <div className="text-xs text-gray-500 font-medium mb-4">
                            ou 12x de R$ {(plan.price / 12 * 1.25).toFixed(2).replace('.', ',')}
                        </div>

                        <a 
                            href={plan.checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block w-full py-3 rounded-lg font-bold text-white uppercase text-sm md:text-base shadow-lg transition-transform hover:-translate-y-1 active:scale-95 ${
                                plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                            Comprar Agora
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={16} />
                <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={16} />
                <span>Compra 100% Segura e Discreta</span>
            </div>
        </div>
    </div>
  );
};