import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Comment } from '../types';

const comments: Comment[] = [
  { id: 1, name: "Carlos Eduardo", avatar: "https://randomuser.me/api/portraits/men/1.jpg", time: "há 5 min", text: "Rapaz, eu achava que era balela, mas o negócio funciona mesmo. Minha esposa tá agradecendo até hoje kkk", likes: 24 },
  { id: 2, name: "Roberto Mendes", avatar: "https://randomuser.me/api/portraits/men/2.jpg", time: "há 12 min", text: "Chegou em 5 dias aqui em SP. Caixa bem discreta, ninguém percebeu o que era. Recomendo.", likes: 18 },
  { id: 3, name: "João Paulo", avatar: "https://randomuser.me/api/portraits/men/3.jpg", time: "há 20 min", text: "Tenho 52 anos e tava difícil manter... Depois de 2 semanas usando o LibidGotas, pareço um garoto de 20 anos. Energia pura.", likes: 45 },
  { id: 4, name: "Marcos Silva", avatar: "https://randomuser.me/api/portraits/men/4.jpg", time: "há 35 min", text: "Alguém sabe se diabético pode tomar? Vi que é natural, mas queria confirmar.", likes: 6 },
  { id: 5, name: "Dr. Paulo (Suporte)", avatar: "https://randomuser.me/api/portraits/men/5.jpg", time: "há 30 min", text: "Olá Marcos! Pode sim, a fórmula é 100% natural e não interfere na glicemia.", likes: 12 },
  { id: 6, name: "Fernando Souza", avatar: "https://randomuser.me/api/portraits/men/6.jpg", time: "há 42 min", text: "Comprei o kit de 3 frascos pra garantir. O preço tá muito bom hoje.", likes: 29 },
  { id: 7, name: "Antônio Carlos", avatar: "https://randomuser.me/api/portraits/men/7.jpg", time: "há 55 min", text: "Minha vida mudou da água pro vinho. Eu tava com vergonha até de sair com mulheres novas. Agora a confiança voltou 100%.", likes: 67 },
  { id: 8, name: "Pedro Henrique", avatar: "https://randomuser.me/api/portraits/men/8.jpg", time: "há 1 hora", text: "Funciona mesmo depois dos 60?", likes: 8 },
  { id: 9, name: "Geraldo Magela", avatar: "https://randomuser.me/api/portraits/men/9.jpg", time: "há 58 min", text: "Pedro, tenho 63 e funcionou pra mim. Demorou uns 10 dias pra sentir o efeito forte, mas agora tá firme e forte.", likes: 21 },
  { id: 10, name: "Ricardo Oliveira", avatar: "https://randomuser.me/api/portraits/men/10.jpg", time: "há 1 hora", text: "Já tinha tentado o azulzinho mas me dava dor de cabeça. Esse natural não deu nada de ruim, só coisa boa.", likes: 54 },
  { id: 11, name: "Sérgio Reis", avatar: "https://randomuser.me/api/portraits/men/11.jpg", time: "há 2 horas", text: "Essa semente indígena é poderosa mesmo. Vi uma reportagem sobre isso e decidi testar. Não me arrependo.", likes: 33 },
  { id: 12, name: "Lucas Ferreira", avatar: "https://randomuser.me/api/portraits/men/12.jpg", time: "há 2 horas", text: "Paguei no cartão, aprovou na hora e já recebi o rastreio.", likes: 15 },
  { id: 13, name: "André Santos", avatar: "https://randomuser.me/api/portraits/men/13.jpg", time: "há 3 horas", text: "Achei que fosse golpe mas chegou certinho. Produto original.", likes: 40 },
  { id: 14, name: "Marcelo Diniz", avatar: "https://randomuser.me/api/portraits/men/14.jpg", time: "há 3 horas", text: "Salvou meu casamento. Sério mesmo.", likes: 92 },
  { id: 15, name: "Valdir Soares", avatar: "https://randomuser.me/api/portraits/men/15.jpg", time: "há 4 horas", text: "To tomando a 1 mês. Aumentou até a grossura parece, ou é impressão minha? kkkk muito bom.", likes: 38 },
  { id: 16, name: "Júlio Cesar", avatar: "https://randomuser.me/api/portraits/men/16.jpg", time: "há 4 horas", text: "Recomendo o de 3 frascos que sai bem mais barato.", likes: 25 },
  { id: 17, name: "Fábio Costa", avatar: "https://randomuser.me/api/portraits/men/17.jpg", time: "há 5 horas", text: "Muito obrigado Amanda por compartilhar isso. Os médicos não querem que a gente saiba.", likes: 61 },
  { id: 18, name: "Renato Lima", avatar: "https://randomuser.me/api/portraits/men/18.jpg", time: "há 6 horas", text: "Sensacional. Acordo todo dia pronto pro combate agora.", likes: 44 },
  { id: 19, name: "Gilberto Vieira", avatar: "https://randomuser.me/api/portraits/men/19.jpg", time: "há 7 horas", text: "Pode comprar sem medo.", likes: 19 },
  { id: 20, name: "Cláudio Ramos", avatar: "https://randomuser.me/api/portraits/men/20.jpg", time: "há 8 horas", text: "Top demais!", likes: 11 }
];

export const LessonComments: React.FC = () => {
  return (
    <div className="bg-white py-8 border-t border-gray-200 w-full rounded-xl mt-8">
      <div className="px-4">
        <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
          Comentários Recentes
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{comments.length}</span>
        </h3>
        
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 animate-fade-in">
              <img 
                src={comment.avatar} 
                alt={comment.name} 
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex-1">
                <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none">
                  <p className="font-bold text-sm text-blue-900">{comment.name}</p>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">{comment.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-1 ml-2">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-semibold transition-colors">
                    Curtir
                  </button>
                  <span className="text-xs text-gray-400">{comment.time}</span>
                  {comment.likes > 0 && (
                     <div className="flex items-center gap-1 ml-auto">
                        <div className="bg-blue-500 rounded-full p-0.5"><ThumbsUp size={10} className="text-white" /></div>
                        <span className="text-xs text-gray-500">{comment.likes}</span>
                     </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
             <button className="text-blue-600 font-semibold text-sm hover:underline">Carregar mais comentários...</button>
        </div>
      </div>
    </div>
  );
};