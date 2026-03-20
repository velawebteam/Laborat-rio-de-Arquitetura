import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  const services = [
    {
      id: 'consultoria',
      title: 'Consultoria Arquitetónica',
      desc: 'Análise de viabilidade, estudos prévios e aconselhamento estratégico para investimentos imobiliários.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
      benefits: [
        'Avaliação de potencial construtivo',
        'Estudos de viabilidade económica',
        'Análise de condicionantes legais',
        'Otimização de espaços e usos'
      ]
    },
    {
      id: 'projeto',
      title: 'Projeto de Execução',
      desc: 'Desenvolvimento detalhado de projetos de arquitetura e coordenação de especialidades com precisão milimétrica.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
      benefits: [
        'Conceção arquitetónica inovadora',
        'Detalhamento construtivo rigoroso',
        'Integração de engenharias',
        'Sustentabilidade e eficiência energética'
      ]
    },
    {
      id: 'licenciamento',
      title: 'Gestão e Licenciamento',
      desc: 'Navegamos a complexidade burocrática, garantindo a aprovação e conformidade legal do seu projeto.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      benefits: [
        'Instrução de processos camarários',
        'Acompanhamento de aprovações',
        'Gestão de conflitos e pareceres',
        'Legalização de obras'
      ]
    },
    {
      id: 'obra',
      title: 'Acompanhamento de Obra',
      desc: 'Garantimos que a execução reflete fielmente o projeto, controlando prazos, custos e qualidade.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      benefits: [
        'Fiscalização técnica',
        'Controlo orçamental',
        'Resolução de imprevistos',
        'Garantia de qualidade construtiva'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços | Laboratório de Arquitetura</title>
        <meta name="description" content="Serviços de arquitetura, consultoria, licenciamento e acompanhamento de obra. Soluções completas para o seu projeto." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-brand-white text-brand-black pt-32 pb-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-24 md:mb-32 border-b border-brand-black pb-12">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold tracking-tighter uppercase text-brand-black"
            >
              Especialidades
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
                Do conceito inicial à entrega da chave, oferecemos um acompanhamento integral.
              </p>
              <p className="text-xl opacity-80 font-medium leading-relaxed">
                A nossa abordagem multidisciplinar assegura que cada projeto 
                é funcional, estético e viável.
              </p>
            </motion.div>
          </div>

          {/* Services List */}
          <div className="mb-32">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-px bg-brand-black/20 border-t border-brand-black/20 last:border-b"
              >
                <div className="md:col-span-5 bg-brand-white p-8 md:p-16 flex flex-col justify-between">
                  <div className="text-6xl md:text-8xl font-bold tracking-tighter opacity-20 mb-12">
                    0{i + 1}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
                    {service.title}
                  </h3>
                </div>
                
                <div className="md:col-span-7 bg-brand-white p-8 md:p-16 flex flex-col justify-between">
                  <div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {service.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start space-x-4">
                          <div className="w-1.5 h-1.5 bg-brand-black mt-2.5 rounded-full flex-shrink-0"></div>
                          <span className="text-lg opacity-80 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center text-sm font-bold tracking-[0.2em] uppercase text-brand-black hover:text-brand-light transition-colors"
                  >
                    Pedir Orçamento <ArrowRight size={16} className="ml-4" aria-hidden="true" />
                  </Link>
                </div>
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
