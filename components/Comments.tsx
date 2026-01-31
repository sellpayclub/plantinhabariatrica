import React from 'react';
import { ThumbsUp, Heart } from 'lucide-react';
import { Comment } from '../types';

const comments: Comment[] = [
  {
    id: 1,
    name: "Maria Helena Souza",
    avatar: "https://picsum.photos/seed/maria/50/50",
    time: "há 12 min",
    text: "Meninas, eu estava me sentindo inchada demais. Comecei a tomar e na primeira semana já perdi 3kg! Essa plantinha realmente destrava o metabolismo.",
    likes: 47
  },
  {
    id: 2,
    name: "Patrícia Gomes",
    avatar: "https://picsum.photos/seed/patricia/50/50",
    time: "há 34 min",
    text: "A Cláudia nunca indica coisa ruim. Tenho 45 anos e não conseguia emagrecer com nada. Comprei o kit de 3 meses e minhas calças já estão caindo!",
    likes: 32
  },
  {
    id: 3,
    name: "Sônia Aparecida",
    avatar: "https://picsum.photos/seed/sonia/50/50",
    time: "há 1 hora",
    text: "Eu tentei comprar ontem e estava mais caro. Que sorte que voltei hoje e apareceu esse desconto pra destravar o corpo, adorei!",
    likes: 89
  },
  {
    id: 4,
    name: "Lúcia Ferreira",
    avatar: "https://picsum.photos/seed/lucia/50/50",
    time: "há 2 horas",
    text: "Alguém sabe se pode parcelar? Vi aqui que dá pra fazer em 12x. Vou garantir logo porque preciso perder 15kg até o casamento da minha filha.",
    likes: 15
  }
];

export const Comments: React.FC = () => {
  return (
    <div className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
          Comentários da Comunidade (4)
        </h3>
        
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img 
                src={comment.avatar} 
                alt={comment.name} 
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex-1">
                <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none">
                  <p className="font-bold text-sm text-gray-900">{comment.name}</p>
                  <p className="text-gray-700 text-sm mt-1">{comment.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-1 ml-2">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-semibold">
                    Curtir
                  </button>
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-semibold">
                    Responder
                  </button>
                  <span className="text-xs text-gray-400">{comment.time}</span>
                  {comment.likes > 0 && (
                     <div className="flex items-center gap-1 ml-auto bg-white shadow-sm px-1.5 py-0.5 rounded-full border border-gray-100">
                        <div className="flex -space-x-1">
                            <div className="bg-blue-500 rounded-full p-0.5"><ThumbsUp size={8} className="text-white" /></div>
                            <div className="bg-red-500 rounded-full p-0.5"><Heart size={8} className="text-white" /></div>
                        </div>
                        <span className="text-xs text-gray-500">{comment.likes}</span>
                     </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
             <p className="text-gray-400 text-sm">Você precisa estar logada para comentar.</p>
        </div>
      </div>
    </div>
  );
};