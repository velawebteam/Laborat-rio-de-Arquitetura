/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-black selection:text-brand-white"
            >
              <Navbar />
              <main className="flex-grow">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path="/projetos" element={<Projects />} />
                    <Route path="/projetos/:id" element={<ProjectDetail />} />
                    <Route path="/contacto" element={<Contact />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
}
