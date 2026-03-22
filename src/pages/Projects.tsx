import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const projectsData = [
  {
    id: 'residencia-foz',
    title: 'Residência Foz',
    category: 'Habitação',
    year: '2025',
    location: 'Porto, Portugal',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: 'Uma moradia unifamiliar desenhada para maximizar a luz natural e a relação com o oceano. O uso de betão aparente e madeira cria um diálogo entre a brutalidade e o conforto.',
    challenge: 'O terreno apresentava um declive acentuado e uma exposição solar desafiante. O objetivo era criar uma casa que se abrisse para o mar, mantendo a privacidade em relação à rua.',
    solution: 'A casa foi desenhada em socalcos, acompanhando a topografia natural. Grandes envidraçados a poente garantem vistas panorâmicas, enquanto pátios interiores trazem luz natural e ventilação cruzada aos espaços mais íntimos.',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687931-ceeb66d18f50?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'sede-corporativa',
    title: 'Sede Corporativa',
    category: 'Comercial',
    year: '2024',
    location: 'Lisboa, Portugal',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    description: 'Reabilitação de um edifício industrial para acolher a sede de uma empresa tecnológica. O projeto foca-se na flexibilidade dos espaços de trabalho e na sustentabilidade energética.',
    challenge: 'Transformar um espaço industrial escuro e compartimentado num ambiente de trabalho colaborativo, luminoso e inspirador, respeitando a memória industrial do edifício.',
    solution: 'A intervenção preservou a estrutura original, introduzindo novos volumes em vidro e aço que albergam salas de reunião e áreas de foco. Um grande átrio central com iluminação zenital funciona como o coração da empresa.',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop'
    ]
  },
  {
    id: 'museu-arte',
    title: 'Pavilhão de Arte',
    category: 'Cultural',
    year: '2023',
    location: 'Braga, Portugal',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    description: 'Um espaço expositivo minimalista que funciona como uma tela em branco para a arte contemporânea. A iluminação zenital é o elemento central do projeto.',
    challenge: 'Criar um espaço flexível capaz de acolher diferentes tipos de exposições, desde pintura e escultura a instalações multimédia, com um controlo rigoroso da luz natural.',
    solution: 'O pavilhão apresenta-se como um volume puro, revestido a painéis de betão branco. A cobertura integra um sistema de claraboias orientadas a norte, garantindo uma luz difusa e constante, ideal para a contemplação de obras de arte.',
    gallery: [
      'https://images.unsplash.com/photo-1518998053401-a4149019841c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=2014&auto=format&fit=crop'
    ]
  },
  {
    id: 'hotel-boutique',
    title: 'Hotel Boutique',
    category: 'Hospitalidade',
    year: '2025',
    location: 'Douro, Portugal',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
    description: 'Integração sensível na paisagem vinhateira do Douro. O hotel utiliza materiais locais e técnicas construtivas tradicionais reinterpretadas de forma contemporânea.',
    challenge: 'Inserir um programa hoteleiro exigente numa paisagem classificada como Património Mundial, minimizando o impacto visual e ambiental.',
    solution: 'O projeto fragmenta o programa em pequenos volumes que se diluem nos socalcos das vinhas. A utilização de xisto, madeira e taipa cria uma continuidade material com a envolvente, enquanto os interiores oferecem um luxo contido e focado na experiência da paisagem.',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop'
    ]
  }
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projetos | Laboratório de Arquitetura</title>
        <meta name="description" content="Explore o nosso portfólio de projetos de arquitetura. Habitação, espaços comerciais e culturais desenhados com precisão e propósito." />
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
              Arquivo<br />
              <span className="text-brand-light">Projetos</span>
            </motion.h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/20 border-t border-b border-brand-black/20 mb-32">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-white group cursor-pointer"
              >
                <Link to={`/projetos/${project.id}`} className="block h-full flex flex-col">
                  <div className="p-6 md:p-12 flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-4xl md:text-6xl font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        0{i + 1}
                      </span>
                      <div className="text-right">
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-1">{project.category}</span>
                        <span className="block text-xs font-mono opacity-50">{project.year}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">{project.title}</h4>
                    </div>
                  </div>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] border-t border-brand-black/20">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Link>
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
