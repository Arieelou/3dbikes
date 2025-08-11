import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CGU from './pages/CGU';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-800 font-['Inter']">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/cgu" element={<CGU />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;