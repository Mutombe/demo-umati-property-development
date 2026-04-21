import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Developments from './pages/Developments';
import DevelopmentDetail from './pages/DevelopmentDetail';
import Services from './pages/Services';
import Invest from './pages/Invest';
import Leadership from './pages/Leadership';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollReset />
      <Navbar />
      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/developments" element={<Developments />} />
              <Route path="/developments/:slug" element={<DevelopmentDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster
        position="top-center"
        theme="dark"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Averta Std, system-ui, sans-serif',
            borderRadius: '0px',
            background: '#111111',
            color: '#FDFCFA',
            border: '1px solid rgba(232, 119, 34, 0.25)',
          },
        }}
      />
    </>
  );
}
