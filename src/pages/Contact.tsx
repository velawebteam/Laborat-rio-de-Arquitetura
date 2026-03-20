import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('Ocorreu um erro de rede. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Laboratório de Arquitetura</title>
        <meta name="description" content="Entre em contacto com o Laboratório de Arquitetura. Estamos prontos para ouvir as suas ideias e transformá-las em realidade." />
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
              className="text-[11vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-brand-black"
            >
              Vamos<br />
              <span className="text-brand-light">Falar</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-brand-black/20 border-t border-b border-brand-black/20 mb-32">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-brand-white p-8 md:p-16"
            >
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-4">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors"
                      placeholder="O seu nome"
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-4">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors"
                      placeholder="O seu email"
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-4">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors"
                      placeholder="+351"
                      disabled={status === 'submitting'}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-4">Serviço de Interesse</label>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors appearance-none"
                      required
                      disabled={status === 'submitting'}
                    >
                      <option value="" disabled>Selecione um serviço</option>
                      <option value="consultoria">Consultoria Arquitetónica</option>
                      <option value="projeto">Projeto de Execução</option>
                      <option value="licenciamento">Gestão e Licenciamento</option>
                      <option value="obra">Acompanhamento de Obra</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-4">Mensagem</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors resize-none"
                    placeholder="Descreva brevemente o seu projeto..."
                    required
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                {responseMessage && (
                  <div 
                    className={`p-6 text-sm font-bold tracking-[0.1em] uppercase ${status === 'success' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}
                    aria-live="polite"
                  >
                    {responseMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center px-12 py-6 bg-brand-black text-brand-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-light transition-all duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'A Enviar...' : 'Enviar Mensagem'}
                  <Send size={16} className="ml-4" aria-hidden="true" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-brand-white flex flex-col"
            >
              <div className="p-8 md:p-16 flex-grow">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12">Contactos</h3>
                <ul className="space-y-12">
                  <li>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-2">Sede</p>
                    <p className="text-xl font-medium leading-relaxed">R. do Carvalho do Outeiro 3,<br />2440-111 Batalha, Portugal</p>
                  </li>
                  <li>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-2">Telefone</p>
                    <p className="text-xl font-medium leading-relaxed">+351 244 767 111</p>
                  </li>
                  <li>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-2">Email</p>
                    <p className="text-xl font-medium leading-relaxed">info@laboratoriodearquitetura.pt</p>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="w-full aspect-square md:aspect-auto md:h-[400px] bg-brand-light/20 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border-t border-brand-black/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.262529944061!2d-8.8256247!3d39.6521501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b32000000001%3A0x6b4c100000000000!2sR.%20do%20Carvalho%20do%20Outeiro%203%2C%202440-111%20Batalha%2C%20Portugal!5e0!3m2!1sen!2spt!4v1700000000000!5m2!1sen!2spt" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Laboratório de Arquitetura"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
