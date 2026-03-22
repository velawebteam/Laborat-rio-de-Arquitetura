import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const projects = [
    {
      id: 'residencia-foz',
      title: 'Residência Foz',
      category: 'Habitação',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'sede-corporativa',
      title: 'Sede Corporativa',
      category: 'Comercial',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'museu-contemporaneo',
      title: 'Museu de Arte',
      category: 'Cultural',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const services = [
    {
      id: 'consultoria',
      title: 'Consultoria',
      desc: 'Análise de viabilidade, estudos prévios e aconselhamento estratégico para investimentos imobiliários.'
    },
    {
      id: 'projeto',
      title: 'Projeto',
      desc: 'Desenvolvimento detalhado de projetos de arquitetura e especialidades com precisão milimétrica.'
    },
    {
      id: 'licenciamento',
      title: 'Gestão',
      desc: 'Navegamos a complexidade burocrática, garantindo a aprovação e conformidade legal do seu projeto.'
    },
    {
      id: 'obra',
      title: 'Obra',
      desc: 'Acompanhamento rigoroso e fiscalização de obra para garantir a execução perfeita do projeto.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Laboratório de Arquitetura | Estúdio de Design e Arquitetura</title>
        <meta name="description" content="O Laboratório de Arquitetura é um estúdio focado em criar espaços que inspiram, funcionam e perduram. Especialistas em habitação, comercial e cultural." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-brand-white text-brand-black pt-40 lg:pt-56"
      >
        {/* Brutalist Hero */}
        <section className="min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pb-12 pt-12 md:pt-24 border-b border-brand-black">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase">
              Laboratório de<br />
              Arquitetura
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-24 items-end">
            <div className="col-span-1 md:col-span-8 overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Arquitetura Moderna" 
                className="w-full h-[50vh] md:h-[60vh] object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="col-span-1 md:col-span-4 flex flex-col justify-between h-full pb-4"
            >
              <p className="text-xl md:text-3xl font-medium leading-tight mb-12 tracking-tight">
                Desafiamos os limites do espaço. Criamos arquitetura com propósito, precisão e impacto.
              </p>
              <Link 
                to="/sobre" 
                className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-brand-black pb-2 w-max hover:text-brand-light hover:border-brand-light transition-colors"
              >
                Descobrir o Estúdio <ArrowRight size={16} className="ml-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Brutalist Projects List */}
        <section className="bg-brand-black text-brand-white overflow-hidden">
          <div className="py-12 md:py-16 border-b border-brand-white/20 relative flex items-center">
            <div className="flex whitespace-nowrap animate-marquee w-max">
              {/* First Set */}
              <div className="flex items-center">
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8">Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8">Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Projetos</h2>
              </div>
              {/* Second Set (Duplicate for seamless loop) */}
              <div className="flex items-center">
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8">Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8">Projetos</h2>
                <h2 className="text-[12vw] leading-none font-bold tracking-tighter uppercase px-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Projetos</h2>
              </div>
            </div>
            
          </div>
          
          <div className="px-6 md:px-12 py-6 border-b border-brand-white/20 flex justify-end">
            <Link to="/projetos" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-light transition-colors">
              Ver Todos [→]
            </Link>
          </div>
          
          <div className="flex flex-col">
            {projects.map((p, i) => (
              <Link 
                to={`/projetos/${p.id}`} 
                key={p.id} 
                className="group border-b border-brand-white/20 py-12 md:py-16 px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-brand-white hover:text-brand-black transition-colors duration-500"
              >
                <div className="flex items-start md:items-center gap-8 mb-6 md:mb-0">
                  <span className="text-sm font-mono opacity-50 group-hover:opacity-100">0{i + 1}</span>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">{p.title}</h3>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{p.category}</span>
                    <span className="text-xs font-mono opacity-50">{p.year}</span>
                  </div>
                  <div className="w-32 h-20 md:w-48 md:h-32 overflow-hidden hidden md:block">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Brutalist Services Grid */}
        <section className="bg-brand-light text-brand-black">
          <div className="px-6 md:px-12 pt-24 pb-12 md:pt-40 md:pb-16 border-b border-brand-black/10 text-center">
            <h2 className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase">Especialidades</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/10 border-b border-brand-black/10">
            {services.map((s, i) => (
              <Link 
                to={`/servicos#${s.id}`}
                key={i} 
                className="bg-brand-light p-8 md:p-12 lg:p-16 hover:bg-brand-black hover:text-brand-white transition-colors duration-500 group flex flex-col justify-between min-h-[350px] block"
              >
                <span className="text-6xl md:text-8xl font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">{s.title}</h3>
                  <p className="text-lg md:text-xl opacity-80 font-medium leading-relaxed max-w-md">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Massive CTA */}
        <section className="py-32 md:py-48 px-6 md:px-12 bg-brand-white text-center flex flex-col items-center justify-center">
          <h2 className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase mb-12">
            Vamos<br />Construir.
          </h2>
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center px-12 py-6 bg-brand-black text-brand-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-white hover:text-brand-black border-2 border-brand-black transition-all duration-300"
          >
            Iniciar Projeto
          </Link>
        </section>
      </motion.div>
    </>
  );
}
