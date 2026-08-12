import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import FreeConsultation from './components/FreeConsultation';
import ServicesSection from './components/ServicesSection';
import ExploreStyles from './components/ExploreStyles';
import ProjectGallery from './components/ProjectGallery';
import EstimatesInfo from './components/EstimatesInfo';
import QuoteFormSection from './components/QuoteFormSection';
import FooterSection from './components/FooterSection';
import ConsultationModal from './components/ConsultationModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  return (
    <div className="min-h-screen bg-sky-brand font-sans antialiased text-maroon-brand selection:bg-pink-brand selection:text-maroon-brand">
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
        <ProjectGallery onSelectImage={(img) => setSelectedGalleryImage(img)} />

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
