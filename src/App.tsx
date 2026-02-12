import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const CGU = lazy(() => import('./pages/CGU'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-800 font-['Inter']">
          <Header />
          <ScrollToTop />
          <main>
            <Suspense fallback={<div className="min-h-[35vh]" />}>
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
    </MotionConfig>
  );
}
