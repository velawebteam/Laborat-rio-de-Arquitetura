import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from './Projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Laboratório de Arquitetura | Arq. André Silva</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-brand-white text-brand-black pt-40 lg:pt-56 pb-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link 
            to="/projetos" 
            className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-brand-black hover:text-brand-light transition-colors mb-12 md:mb-24"
          >
            <ArrowLeft size={16} className="mr-4" aria-hidden="true" />
            Voltar
          </Link>

          {/* Header */}
          <div className="mb-12 md:mb-24 border-b border-brand-black pb-12">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-brand-black mb-12"
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-bold tracking-[0.2em] uppercase border-t border-brand-black/20 pt-8"
            >
              <div>
                <span className="block opacity-50 mb-2">Categoria</span>
                <span>{project.category}</span>
              </div>
              <div>
                <span className="block opacity-50 mb-2">Localização</span>
                <span>{project.location}</span>
              </div>
              <div>
                <span className="block opacity-50 mb-2">Ano</span>
                <span>{project.year}</span>
              </div>
            </motion.div>
          </div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/3] md:aspect-[21/9] mb-24 md:mb-32 overflow-hidden border border-brand-black/20"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24 md:mb-32">
            <div className="md:col-span-4">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">O Desafio</h3>
              <p className="text-lg opacity-80 font-medium leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">A Solução</h3>
              <p className="text-xl md:text-3xl font-medium leading-tight mb-8 tracking-tight">
                {project.description}
              </p>
              <p className="text-lg opacity-80 font-medium leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/20 border-t border-b border-brand-black/20 mb-32">
            {project.gallery?.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
                className="bg-brand-white aspect-square md:aspect-[4/3] overflow-hidden relative group"
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Detalhe ${index + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
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
