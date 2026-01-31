import React from 'react';
import { Shield, CreditCard, ArrowDown, Gift, CheckCircle } from 'lucide-react';
import { ProductPlan } from '../types';

const plans: ProductPlan[] = [
  {
    id: 3,
    title: "3 MESES DE TRATAMENTO",
    price: 237.00,
    pricePerUnit: 79.00,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/3%20frascos%20floranobus.webp",
    savings: "Melhor Valor (Economia Máxima)",
    checkoutUrl: "https://payt.site/dKCV2AR",
    popular: true
  },
  {
    id: 2,
    title: "2 MESES DE TRATAMENTO",
    price: 177.00,
    pricePerUnit: 88.50,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/2%20frascos%20floranobis.webp",
    savings: "Mais Popular",
    checkoutUrl: "https://payt.site/BvCG5W1"
  },
  {
    id: 1,
    title: "1 MÊS DE TRATAMENTO",
    price: 97.00,
    imageUrl: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/1%20pote%20floranobis.webp",
    savings: "Desconto Padrão",
    checkoutUrl: "https://payt.site/98C5agg"
  }
];

export const OfferSection: React.FC = () => {
  return (
    <div id="oferta" className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Banner Sorteio - Mobile Optimized */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 md:p-6 rounded-xl shadow-xl mb-8 md:mb-12 text-center transform md:-rotate-1 border-2 border-green-400 border-dashed relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift size={100} />
            </div>
            <h2 className="text-lg md:text-3xl font-extrabold uppercase tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 relative z-10">
                <span>🎉 PARABÉNS! VOCÊ FOI SORTEADA!</span>
            </h2>
            <p className="mt-2 text-green-50 font-medium text-sm md:text-lg relative z-10 leading-relaxed">
                Acabamos de liberar <span className="text-green-800 bg-white font-bold px-2 py-0.5 rounded shadow-sm inline-block mx-1">MAIS 30% DE DESCONTO</span> exclusivo para esta sessão.
            </p>
        </div>

        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">Escolha Seu Kit Ideal</h3>
          <div className="flex items-center justify-center gap-2 text-red-600 font-bold animate-bounce">
            <ArrowDown size={20} />
            <span className="text-sm uppercase tracking-wider">Oferta expira em breve</span>
            <ArrowDown size={20} />
          </div>
        </div>

        {/* Grid Responsive: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-lg lg:max-w-none mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col transition-all duration-300 ${
                  plan.popular 
                  ? 'border-blue-500 ring-4 ring-blue-500/10 lg:scale-105 z-10 order-first lg:order-none' 
                  : 'border-gray-100 hover:border-blue-200 order-last lg:order-none'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm">
                  Recomendado para Destravar
                </div>
              )}
              
              <div className="p-5 md:p-6 flex-grow flex flex-col items-center text-center">
                <h4 className={`text-xl font-bold mb-4 leading-tight ${plan.popular ? 'text-blue-700' : 'text-gray-800'}`}>
                  {plan.title}
                </h4>
                
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 group">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-full filter blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
                    <img 
                        src={plan.imageUrl} 
                        alt={plan.title} 
                        className="relative w-full h-full object-contain drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {plan.savings && (
                    <span className={`inline-block text-xs md:text-sm px-4 py-1.5 rounded-full font-bold mb-5 ${
                        plan.popular 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                        {plan.savings}
                    </span>
                )}

                <div className="mt-auto w-full space-y-1">
                    <p className="text-gray-400 line-through text-sm">
                        de R$ {(plan.price * 1.6).toFixed(2).replace('.', ',')}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-gray-900">
                        <span className="text-sm md:text-base text-gray-600 font-medium">Por apenas:</span>
                        <div className="flex items-baseline">
                            <span className="text-xs font-bold mr-0.5">R$</span>
                            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">{plan.price.toFixed(0)}</span>
                            <span className="text-lg font-bold">,00</span>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 my-4 w-full">
                        <p className="text-blue-800 text-sm font-bold">
                           12x de <span className="text-2xl">R$ {(plan.price / 12).toFixed(2).replace('.', ',')}</span>
                        </p>
                    </div>
                    
                    {plan.pricePerUnit && (
                        <p className="text-green-600 font-bold text-xs mb-4 bg-green-50 inline-block px-2 py-1 rounded">
                            (Sai a R$ {plan.pricePerUnit.toFixed(2).replace('.', ',')} por frasco)
                        </p>
                    )}

                    <a 
                        href={plan.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-4 md:py-5 rounded-xl font-black text-white text-lg md:text-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 ${
                            plan.popular 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-500/30' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-500/30'
                        }`}
                    >
                        COMPRAR AGORA
                    </a>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 md:px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 md:gap-3 text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-wide">
                    <div className="flex items-center gap-1">
                        <Shield size={14} className="text-green-500" />
                        <span>Garantia 30 Dias</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1">
                        <CreditCard size={14} className="text-blue-500" />
                        <span>Compra Segura</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto flex flex-col items-center opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full max-w-sm">
               <img 
                  src="https://consulog.com.br/wp-content/uploads/2022/03/selo-anvisa.webp" 
                  alt="Selo ANVISA" 
                  className="h-10 md:h-12 object-contain"
               />
               <div className="text-left text-xs text-gray-500 leading-tight">
                 <p className="font-bold text-gray-700">PRODUTO APROVADO</p>
                 <p>Segurança e qualidade garantida pela Agência Nacional de Vigilância Sanitária.</p>
               </div>
            </div>

            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logos_cartoes_credito.png" 
                alt="Formas de Pagamento"
                className="h-6 md:h-8 mb-4 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-gray-400 text-xs text-center max-w-xs md:max-w-full mx-auto">
                Este site é blindado e 100% seguro. Seus dados não são compartilhados.
            </p>
        </div>
      </div>
    </div>
  );
};