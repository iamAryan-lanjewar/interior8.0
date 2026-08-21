'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectsPage from '../../src/components/ProjectsPage';
import LightboxModal from '../../src/components/LightboxModal';
import MobileBottomNav from '../../src/components/MobileBottomNav';
import ConsultationModal from '../../src/components/ConsultationModal';

export default function ProjectsClient() {
  const router = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const handleBackToHome = () => {
    router.push('/');
  };

  const handleBookAppointment = () => {
    router.push('/#contact');
  };

  const handleContainerClick = (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG') {
      const src = target.getAttribute('src');
      if (src) {
        const alt = target.getAttribute('alt') || 'RK Interior Project';
        setSelectedGalleryImage({
          src,
          title: alt.replace(' by RK Interior', '').replace(' - RK Interior Decors', '').split(' - ')[0] || alt,
          subtitle: 'RK Interior & NEST WALLPAPERS Nagpur'
        });
      }
    }
  };

  return (
    <div 
      onClick={handleContainerClick}
      className="min-h-screen bg-pink-brand font-sans antialiased text-maroon-brand selection:bg-maroon-brand selection:text-white pb-20 sm:pb-0"
    >
      <ProjectsPage 
        onBackToHome={handleBackToHome}
        onBookAppointment={handleBookAppointment}
        onSelectImage={(img) => setSelectedGalleryImage(img)}
      />

      <LightboxModal
        image={selectedGalleryImage}
        onClose={() => setSelectedGalleryImage(null)}
      />

      <MobileBottomNav
        currentPage="projects"
        onGoHome={handleBackToHome}
        onOpenProjects={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
