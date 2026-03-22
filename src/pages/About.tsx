import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Laboratório de Arquitetura</title>
        <meta name="description" content="Conheça a história, filosofia e valores do Laboratório de Arquitetura. Desenhamos espaços que transformam o modo como vivemos e trabalhamos." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-brand-white text-brand-black pt-40 lg:pt-56 pb-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-24 md:mb-32 border-b border-brand-black pb-12">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-brand-black"
            >
              Sobre<br />
              <span className="text-brand-light">Nós</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 md:col-start-5"
            >
              <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight mb-12">
                O Laboratório de Arquitetura nasceu da convicção de que o espaço construído 
                tem um impacto profundo na qualidade de vida e no sucesso dos negócios. 
              </p>
              <p className="text-xl opacity-80 font-medium leading-relaxed">
                Não desenhamos apenas edifícios; criamos ecossistemas funcionais, 
                esteticamente intemporais e tecnicamente irrepreensíveis.
              </p>
            </motion.div>
          </div>

          {/* Story & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/20 border-t border-b border-brand-black/20 mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-white aspect-square md:aspect-auto relative overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
                alt="Estúdio de Arquitetura" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-white p-12 md:p-24 flex flex-col justify-center"
            >
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-8">A Nossa História</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
                Mais de uma década a redefinir a paisagem urbana.
              </h3>
              <div className="space-y-8 text-lg opacity-80 font-medium leading-relaxed">
                <p>
                  Fundado no Porto, o nosso estúdio combina a tradição arquitetónica portuguesa 
                  com metodologias de design paramétrico e sustentabilidade avançada.
                </p>
                <p>
                  Acreditamos que cada projeto é um laboratório de ideias. Testamos, iteramos 
                  e refinamos cada conceito até atingirmos o equilíbrio perfeito entre a 
                  visão do cliente, as condicionantes do local e a viabilidade económica.
                </p>
                <p>
                  A nossa equipa multidisciplinar gere todas as fases do processo, desde 
                  o estudo prévio até à conclusão da obra, garantindo que a ideia original 
                  não se perde na execução.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats / Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-black/20 border-b border-brand-black/20 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-white p-12 md:p-16 text-center flex flex-col justify-center items-center"
            >
              <span className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">2009</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-50">Fundação (Junho)</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-white p-12 md:p-16 text-center flex flex-col justify-center items-center"
            >
              <span className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">+100</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-50">Projetos Realizados</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-white p-12 md:p-16 text-center flex flex-col justify-center items-center"
            >
              <span className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">2003</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-50">Início de Atividade</span>
            </motion.div>
          </div>

          {/* Founder */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 border-b border-brand-black pb-32">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4 flex flex-col justify-start"
            >
               <h2 className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-8">Liderança</h2>
               <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">O Fundador</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8"
            >
              <h4 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8">Arq. André Silva</h4>
              <div className="space-y-8 text-xl opacity-80 font-medium leading-relaxed">
                <p>
                  Terminou a sua formação em arquitetura em 2003, tendo vindo a desempenhar a profissão de forma contínua, 
                  rigorosa e apaixonada desde essa data.
                </p>
                <p>
                  Com uma visão focada na integração entre a estética intemporal e a funcionalidade absoluta, 
                  estabeleceu o Laboratório de Arquitetura em junho de 2009. Desde a sua fundação, tem liderado 
                  o estúdio na conceção e execução de mais de uma centena de projetos que desafiam os limites 
                  do espaço e da forma, mantendo sempre um compromisso inabalável com a excelência técnica.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-32">
            <div className="mb-16 border-b border-brand-black pb-8">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">Os nossos pilares</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-black/20 border-b border-brand-black/20">
              {[
                {
                  title: 'Rigor Técnico',
                  desc: 'A beleza sem função é efémera. Garantimos que cada detalhe construtivo é pensado para durar e performar.'
                },
                {
                  title: 'Transparência',
                  desc: 'Processos claros, orçamentos realistas e comunicação constante. Construímos confiança antes de construir edifícios.'
                },
                {
                  title: 'Sustentabilidade',
                  desc: 'Integramos soluções passivas e materiais eficientes para minimizar a pegada ecológica de cada intervenção.'
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-brand-white p-12 md:p-16 flex flex-col justify-between min-h-[300px] group hover:bg-brand-black hover:text-brand-white transition-colors duration-500"
                >
                  <span className="text-4xl font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-500 mb-12">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-6">{value.title}</h4>
                    <p className="text-lg opacity-80 font-medium leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-black text-brand-white p-12 md:p-24 text-center border-t border-brand-black"
          >
            <h2 className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase mb-12">
              Iniciar<br />Projeto
            </h2>
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center px-12 py-6 bg-brand-white text-brand-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-light transition-all duration-300"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
