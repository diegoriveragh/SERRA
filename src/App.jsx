import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import FuneralServices from '@/components/sections/FuneralServices';
import AffiliationPlans from '@/components/sections/AffiliationPlans';
import AppSection from '@/components/sections/AppSection';
import Branches from '@/components/sections/Branches';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import PlansModal from '@/components/sections/PlansModal';

function App() {
  const [isPlansModalOpen, setIsPlansModalOpen] = useState(false);

  const handleOpenPlansModal = () => {
    setIsPlansModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Enrique Serra - Respaldo Confiable en Cada Momento</title>
        <meta name="description" content="Enrique Serra ofrece servicios fúnebres integrales y un respaldo completo a tu familia, ofreciendo tranquilidad y apoyo cuando más lo necesitan." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Header onOpenPlansModal={handleOpenPlansModal} />
        <main>
          <Hero onOpenPlansModal={handleOpenPlansModal} />
          <FuneralServices />
          <AffiliationPlans onOpenPlansModal={handleOpenPlansModal} />
          <AppSection />
          <Branches />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
        <Toaster />
        <PlansModal isOpen={isPlansModalOpen} onOpenChange={setIsPlansModalOpen} />
      </div>
    </>
  );
}

export default App;