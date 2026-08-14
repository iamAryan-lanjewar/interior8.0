import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import FreeConsultation from './components/FreeConsultation';
import ServicesSection from './components/ServicesSection';
import ExploreStyles from './components/ExploreStyles';
import ProjectGallery from './components/ProjectGallery';
import ProjectsPage from './components/ProjectsPage';
import EstimatesInfo from './components/EstimatesInfo';
import QuoteFormSection from './components/QuoteFormSection';
import FooterSection from './components/FooterSection';
import ConsultationModal from './components/ConsultationModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-pink-brand font-sans antialiased text-maroon-brand selection:bg-maroon-brand selection:text-white">
        <ProjectsPage 
          onBackToHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectImage={(img) => setSelectedGalleryImage(img)}
        />

        <LightboxModal
          image={selectedGalleryImage}
          onClose={() => setSelectedGalleryImage(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-brand font-sans antialiased text-maroon-brand selection:bg-pink-brand selection:text-maroon-brand">
      {/* Standalone Top Right Animated Navigation Menu */}
      <Navbar 
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <main>
        {/* Page 1: Hero */}
        <HeroSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 1: Trust Badges */}
        <TrustBadges />

        {/* Page 1: Free Color Consultation */}
        <FreeConsultation onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Page 2: Services */}
        <ServicesSection />

        {/* Page 3: Explore Styles */}
        <ExploreStyles />

        {/* Page 3: Project Gallery */}
        <ProjectGallery 
          onSelectImage={(img) => setSelectedGalleryImage(img)}
          onOpenProjects={() => {
            setCurrentPage('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Page 3: Estimates Info */}
        <EstimatesInfo onOpenQuote={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Page 4: Quote Form */}
        <QuoteFormSection />
      </main>

      {/* Page 5: Footer */}
      <FooterSection />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <LightboxModal
        image={selectedGalleryImage}
        onClose={() => setSelectedGalleryImage(null)}
      />
    </div>
  );
}
