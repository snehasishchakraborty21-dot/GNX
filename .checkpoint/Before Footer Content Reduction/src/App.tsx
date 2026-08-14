import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesOverview } from './pages/ServicesOverview';
import { XpressPage } from './pages/XpressPage';
import { XfersPage } from './pages/XfersPage';
import { XtrasPage } from './pages/XtrasPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<'xpress' | 'xfers' | 'xtras'>('xpress');

  const handleOpenQuoteModal = (division: 'xpress' | 'xfers' | 'xtras' = 'xpress') => {
    setSelectedDivision(division);
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-[#0A0D0C] text-white selection:bg-[#2CB51D] selection:text-white">
        <Navbar onRequestQuote={handleOpenQuoteModal} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/about" element={<About onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/our-story" element={<Navigate to="/about" replace />} />
            <Route path="/services" element={<ServicesOverview onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/services/xpress" element={<XpressPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/xpress" element={<Navigate to="/services/xpress" replace />} />
            <Route path="/services/xfers" element={<XfersPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/xfers" element={<Navigate to="/services/xfers" replace />} />
            <Route path="/services/xtras" element={<XtrasPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/xtras" element={<Navigate to="/services/xtras" replace />} />
            <Route path="/contact" element={<ContactPage onRequestQuote={handleOpenQuoteModal} />} />
            <Route path="/find-us" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer onRequestQuote={() => handleOpenQuoteModal()} />

        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultDivision={selectedDivision}
        />
      </div>
    </BrowserRouter>
  );
}
