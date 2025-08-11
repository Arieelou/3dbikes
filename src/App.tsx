import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Code-splitting par page
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const CGU = lazy(() => import('./pages/CGU'));
import NotFound from './pages/NotFound';

// Scroll to top fluide
function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-800 font-['Inter']">
        <Header />
        <ScrollToTop />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/cgu" element={<CGU />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
