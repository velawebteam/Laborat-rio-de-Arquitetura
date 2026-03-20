import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white border-t border-brand-white/20">
      <div className="px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
            Lab.Arq
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-80 max-w-md">
            Desafiamos os limites do espaço. Criamos arquitetura com propósito, precisão e impacto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-50">Contacto</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="mailto:info@laboratoriodearquitetura.pt" className="hover:text-brand-light transition-colors">info@laboratoriodearquitetura.pt</a></li>
              <li><a href="tel:+351244767111" className="hover:text-brand-light transition-colors">+351 244 767 111</a></li>
              <li className="pt-4 opacity-80">
                R. do Carvalho do Outeiro 3,<br />
                2440-111 Batalha, Portugal
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-50">Social</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="#" className="hover:text-brand-light transition-colors">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Behance ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="px-6 md:px-12 py-8 border-t border-brand-white/20 flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-50 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Laboratório de Arquitetura.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link to="#" className="hover:text-brand-white transition-colors">Privacidade</Link>
          <Link to="#" className="hover:text-brand-white transition-colors">Termos</Link>
        </div>
      </div>
    </footer>
  );
}
