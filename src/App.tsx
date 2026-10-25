import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { WorkPage, ClientalPage, AboutPage, ContactPage } from './pages';
import { PORTFOLIO_ITEMS, type PortfolioItem } from './data/portfolioData';
import './App.css';

// Automatically scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Work / Home Page */}
            <Route path="/" element={<WorkPage onSelectImage={setSelectedImage} />} />
            <Route path="/work" element={<WorkPage onSelectImage={setSelectedImage} />} />

            {/* Cliental Page */}
            <Route path="/cliental" element={<ClientalPage onSelectImage={setSelectedImage} />} />

            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Fullscreen Lightbox Modal */}
        {selectedImage && (
          <LightboxModal
            item={selectedImage}
            allItems={PORTFOLIO_ITEMS}
            onClose={() => setSelectedImage(null)}
            onSelectNext={(next) => setSelectedImage(next)}
            onSelectPrev={(prev) => setSelectedImage(prev)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
