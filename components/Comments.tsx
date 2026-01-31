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
  },
  {
    id: 5,
    name: "Fernanda Lima",
    avatar: "https://picsum.photos/seed/fernanda/50/50",
    time: "há 2 horas",
    text: "Gente, eu achava que era mentira, mas em 20 dias perdi 6kg sem fazer dieta maluca. Só tomando certinho como a Cláudia ensinou.",
    likes: 56
  },
  {
    id: 6,
    name: "Roberta Alves",
    avatar: "https://picsum.photos/seed/roberta/50/50",
    time: "há 3 horas",
    text: "Comprei o kit de 3 potes e ganhei frete grátis ainda. Chegou em 4 dias aqui em Minas Gerais. Já comecei hoje!",
    likes: 23
  },
  {
    id: 7,
    name: "Ana Clara Martins",
    avatar: "https://picsum.photos/seed/ana/50/50",
    time: "há 3 horas",
    text: "Meu marido até elogiou que estou mais disposta. Além de emagrecer, senti que me deu uma energia muito boa durante o dia.",
    likes: 41
  },
  {
    id: 8,
    name: "Carla Dias",
    avatar: "https://picsum.photos/seed/carla/50/50",
    time: "há 4 horas",
    text: "Estava com o metabolismo travado depois da menopausa. Nada funcionava. Essa 'plantinha bariátrica' foi a única coisa que me fez baixar o peso na balança.",
    likes: 78
  },
  {
    id: 9,
    name: "Juliana Costa",
    avatar: "https://picsum.photos/seed/juliana/50/50",
    time: "há 5 horas",
    text: "Paguei no PIX e recebi o acesso na hora no email, tudo certinho. Site muito seguro, podem confiar.",
    likes: 19
  },
  {
    id: 10,
    name: "Amanda Oliveira",
    avatar: "https://picsum.photos/seed/amanda/50/50",
    time: "há 5 horas",
    text: "Já eliminei 12kg no total em 2 meses. Agora vou comprar mais 3 potes pra manter o resultado. Não vivo mais sem!",
    likes: 94
  },
  {
    id: 11,
    name: "Cristiane Santos",
    avatar: "https://picsum.photos/seed/cristiane/50/50",
    time: "há 6 horas",
    text: "O melhor de tudo é que não tem efeito colateral. Eu sou sensível pra remédios, mas como é natural, me senti super bem.",
    likes: 33
  },
  {
    id: 12,
    name: "Vânia Rocha",
    avatar: "https://picsum.photos/seed/vania/50/50",
    time: "há 7 horas",
    text: "Acabei de comprar! Torcendo pra chegar logo. Minha vizinha tomou e emagreceu muito rápido, fiquei chocada.",
    likes: 27
  },
  {
    id: 13,
    name: "Beatriz Mello",
    avatar: "https://picsum.photos/seed/beatriz/50/50",
    time: "há 8 horas",
    text: "Depois dos 40 anos tudo fica mais difícil, né? Mas esse produto me devolveu a autoestima. Perdi aquela barriguinha pochete que não saía por nada.",
    likes: 62
  },
  {
    id: 14,
    name: "Tatiane Ribeiro",
    avatar: "https://picsum.photos/seed/tatiane/50/50",
    time: "há 9 horas",
    text: "Preço excelente pela qualidade. Já gastei muito mais com nutricionista e remédio de farmácia que não adiantou nada.",
    likes: 45
  },
  {
    id: 15,
    name: "Silvana Mendes",
    avatar: "https://picsum.photos/seed/silvana/50/50",
    time: "há 10 horas",
    text: "Funciona mesmo? Tenho medo de comprar e não dar certo...",
    likes: 5
  },
  {
    id: 16,
    name: "Renata Vasconcelos",
    avatar: "https://picsum.photos/seed/renata/50/50",
    time: "há 10 horas",
    text: "Silvana, funciona sim! Eu tinha o mesmo medo, mas arrisquei e não me arrependo. Perdi 4kg na primeira quinzena.",
    likes: 21
  },
  {
    id: 17,
    name: "Elaine Campos",
    avatar: "https://picsum.photos/seed/elaine/50/50",
    time: "há 11 horas",
    text: "Adorei a apresentação do programa, explicou tudo direitinho. Já garanti meu kit de 3 meses pra fazer o tratamento completo.",
    likes: 38
  },
  {
    id: 18,
    name: "Gisele Nunes",
    avatar: "https://picsum.photos/seed/gisele/50/50",
    time: "há 12 horas",
    text: "Minha filha que comprou pra mim, ela é enfermeira e disse que a fórmula é muito boa e segura. Estou amando os resultados.",
    likes: 50
  },
  {
    id: 19,
    name: "Mônica Azevedo",
    avatar: "https://picsum.photos/seed/monica/50/50",
    time: "há 1 dia",
    text: "Satisfeita demais! Cheguei no meu peso ideal graças a essa maravilha. Recomendo pra todo mundo que me pergunta o que eu fiz.",
    likes: 112
  }
];

export const Comments: React.FC = () => {
  return (
    <div className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
          Comentários da Comunidade ({comments.length})
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