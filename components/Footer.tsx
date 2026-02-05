import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  lang?: 'pt' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'pt' }) => {
  const isEn = lang === 'en';

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Referências Científicas */}
        <div className="mb-10 border-b border-gray-800 pb-8">
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">
              {isEn ? "Scientific References and Related Studies" : "Referências Científicas e Estudos Relacionados"}
            </h5>
            <ol className="text-[10px] leading-relaxed text-gray-600 list-decimal list-inside text-left space-y-1">
                <li>Burnett, A. L. (2006). The Role of Nitric Oxide in Erectile Dysfunction. The Journal of Clinical Hypertension, 8(12), 899-902.</li>
                <li>Toda, N., et al. (2005). Nitric Oxide and Penile Erectile Function. Pharmacological Reviews, 57(3), 351-393.</li>
                <li>Sullivan, M. E., et al. (1999). Nitric Oxide and Penile Erection: Is Erectile Dysfunction Another Manifestation of Vascular Disease?. Cardiovascular Research, 43(3), 658-665.</li>
                <li>Chen, J., et al. (1999). Effect of Oral Administration of High-Dose Nitric Oxide Donor L-Arginine in Men with Organic Erectile Dysfunction. BJU International, 83(3), 269-273.</li>
                <li>Melis, M. R., et al. (2021). Erectile Function and Sexual Behavior: A Review of the Role of Nitric Oxide in the Central Nervous System. Biomolecules, 11(12), 1878.</li>
                <li>Sarris, A. B., et al. (2016). Fisiopatologia, Avaliação e Tratamento da Disfunção Erétil: Artigo de Revisão. Revista de Medicina (USP), 95(2), 79-86.</li>
                <li>Cartledge, J., et al. (2001). The Role of Nitric Oxide in Penile Erection. Expert Opinion on Pharmacotherapy, 2(1), 95-101.</li>
                <li>Liu, C., et al. (2015). Endothelial Nitric Oxide Synthase Polymorphisms and Erectile Dysfunction: A Meta-Analysis. The Journal of Sexual Medicine, 12(6), 1319-1327.</li>
                <li>Dusse, L. M. S. A., et al. (2003). Revisão sobre Óxido Nítrico. Jornal Brasileiro de Patologia e Medicina Laboratorial, 39(4), 323-330.</li>
                <li>Burnett, A. L. (1995). Role of Nitric Oxide in the Physiology of Erection. Biology of Reproduction, 52(3), 485-489.</li>
            </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold mb-4">
              {isEn ? "Health & Fitness Online" : "Saúde e Boa Forma na Net"}
            </h4>
            <p>
              {isEn 
                ? "Informative content about health, wellness, and quality of life. Results may vary from person to person." 
                : "Conteúdo informativo sobre saúde, bem-estar e qualidade de vida. Os resultados podem variar de pessoa para pessoa."
              }
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{isEn ? "Useful Links" : "Links Úteis"}</h4>
            <ul className="space-y-2">
              <li><Link to="/termos" className="hover:text-white transition">{isEn ? "Terms of Use" : "Termos de Uso"}</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition">{isEn ? "Privacy Policy" : "Políticas de Privacidade"}</Link></li>
              <li><Link to="/contato" className="hover:text-white transition">{isEn ? "Contact" : "Contato"}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{isEn ? "Legal Disclaimer" : "Aviso Legal"}</h4>
            <p className="text-xs">
              {isEn 
                ? "This site is not affiliated with Facebook, Google, or any entity of these companies. Once you leave these networks, the responsibility is not theirs but ours. The information contained herein does not replace professional medical advice." 
                : "Este site não é afiliado ao Facebook, Google ou a qualquer entidade dessas empresas. Depois que você sair dessas redes, a responsabilidade não é delas e sim do nosso site. As informações aqui contidas não substituem o aconselhamento médico profissional."
              }
            </p>
          </div>
        </div>

        {/* Dados da Empresa */}
        <div className="mt-10 border-t border-gray-800 pt-8 text-center">
            <div className="text-xs text-gray-500 space-y-1 font-medium">
                <p className="uppercase font-bold text-gray-400">CNPJ: 51.474.675/0001-03 - PLATAFORMA SELLPAY</p>
                <p>RUA JOSÉ MARIA BARBOSA, 31 - ANDAR 10 APTO 104 SALA 2</p>
                <p>BAIRRO JARDIM PORTAL DA COLINA - SOROCABA/SP - CEP 18.047-380</p>
                <p className="pt-2">CONTATO@GPNEGOCIOOSDIGITAIS.COM | (15) 9835-5640</p>
            </div>
            <div className="mt-6 text-xs text-gray-600">
                &copy; {new Date().getFullYear()} {isEn ? "Health & Fitness Online" : "Saúde e Boa Forma na Net"}. {isEn ? "All rights reserved." : "Todos os direitos reservados."}
            </div>
        </div>
      </div>
    </footer>
  );
};