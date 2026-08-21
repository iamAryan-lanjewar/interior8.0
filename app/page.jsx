'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../src/components/Navbar';
import HeroSection from '../src/components/HeroSection';
import TrustBadges from '../src/components/TrustBadges';
import FreeConsultation from '../src/components/FreeConsultation';
import ServicesSection from '../src/components/ServicesSection';
import ExploreStyles from '../src/components/ExploreStyles';
import ProjectGallery from '../src/components/ProjectGallery';
import EstimatesInfo from '../src/components/EstimatesInfo';
import QuoteFormSection from '../src/components/QuoteFormSection';
import FooterSection from '../src/components/FooterSection';
import ConsultationModal from '../src/components/ConsultationModal';
import LightboxModal from '../src/components/LightboxModal';
import MobileBottomNav from '../src/components/MobileBottomNav';

export default function HomePage() {
  const router = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const handleOpenProjects = () => {
    router.push('/projects');
  };

  // Universal Click Handler to open ANY clicked image across the site
  const handleContainerClick = (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG') {
      const src = target.getAttribute('src');
      if (src) {
        const alt = target.getAttribute('alt') || 'RK Interior & NEST WALLPAPERS';
        setSelectedGalleryImage({
          src,
          title: alt.replace(' by RK Interior', '').replace(' - RK Interior', '').split(' - ')[0] || alt,
          subtitle: 'RK Interior & NEST WALLPAPERS Nagpur'
        });
      }
    }
  };

  return (
    <div 
      onClick={handleContainerClick}
      className="min-h-screen bg-sky-brand font-sans antialiased text-maroon-brand selection:bg-pink-brand selection:text-maroon-brand pb-20 sm:pb-0"
    >
      {/* Standalone Top Right Animated Navigation Menu - PC ONLY */}
      <Navbar />

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
          onOpenProjects={handleOpenProjects}
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

      {/* Mobile Bottom Dock for Native App Experience */}
      <MobileBottomNav
        currentPage="home"
        onGoHome={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenProjects={handleOpenProjects}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

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
