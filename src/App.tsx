import { lazy, Suspense, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LeadershipSection } from './components/LeadershipSection';
import { Navbar } from './components/Navbar';
import { OverviewSection } from './components/OverviewSection';
import { ServicesGrid } from './components/ServicesGrid';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { CONTACT_SERVICE_OPTIONS } from './data/corporateData';
import type { LightboxPhoto, ModalRoute } from './types/corporate';

const ActionModals = lazy(() =>
  import('./components/ActionModals').then((m) => ({ default: m.ActionModals })),
);

export function App() {
  const [modalRoute, setModalRoute] = useState<ModalRoute>(null);
  const [contactService, setContactService] = useState<string>(CONTACT_SERVICE_OPTIONS[0]);

  const scrollToEnquiryForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      const nameInput = document.getElementById('fullName');
      if (nameInput instanceof HTMLInputElement) {
        nameInput.focus({ preventScroll: true });
      }
    }, 450);
  };

  const handleSelectService = (serviceId: string) => {
    setModalRoute({ type: 'service', serviceId });
  };

  const handleOpenGallery = (photos: LightboxPhoto[], index: number) => {
    setModalRoute({ type: 'lightbox', photos, index });
  };

  const handleChangeLightboxIndex = (index: number) => {
    setModalRoute((prev) =>
      prev && prev.type === 'lightbox' ? { ...prev, index } : prev,
    );
  };

  const handleEnquireService = (serviceOption: string) => {
    setContactService(serviceOption);
    setModalRoute(null);
    scrollToEnquiryForm();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-white text-[#1D1B56]">
        <Navbar onEnquireNow={scrollToEnquiryForm} />

        <main>
          <Hero onEnquireNow={scrollToEnquiryForm} />
          <OverviewSection />
          <AboutUs />
          <ServicesGrid
            onSelectService={handleSelectService}
            onEnquireService={handleEnquireService}
          />
          <TechnicalExpertise />
          <LeadershipSection />
          <FacilitiesSection onOpenGallery={handleOpenGallery} />
          <ContactSection
            selectedService={contactService}
            onSelectServiceChange={setContactService}
          />
        </main>

        <Footer onSelectService={handleSelectService} />

        <Suspense fallback={null}>
          <ActionModals
            route={modalRoute}
            onClose={() => setModalRoute(null)}
            onChangeLightboxIndex={handleChangeLightboxIndex}
            onEnquireService={handleEnquireService}
          />
        </Suspense>
      </div>
    </MotionConfig>
  );
}

export default App;
