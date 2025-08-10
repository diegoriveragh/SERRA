<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
<<<<<<< HEAD
import FuneralArea from '@/components/sections/FuneralArea';
import Affiliations from '@/components/sections/Affiliations';
import Locations from '@/components/sections/Locations';
import AboutUs from '@/components/sections/AboutUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

function App() {
=======
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

>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
  return (
    <>
      <Helmet>
        <title>Enrique Serra - Respaldo Confiable en Cada Momento</title>
        <meta name="description" content="Enrique Serra ofrece servicios fúnebres integrales y un respaldo completo a tu familia, ofreciendo tranquilidad y apoyo cuando más lo necesitan." />
<<<<<<< HEAD
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-900 font-gotham">
        <Header />
        <main>
          <Hero />
          <FuneralArea />
          <Affiliations />
          <AboutUs />
          <Locations />
=======
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
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
          <Contact />
        </main>
        <Footer />
        <Toaster />
<<<<<<< HEAD
=======
        <PlansModal isOpen={isPlansModalOpen} onOpenChange={setIsPlansModalOpen} />
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
      </div>
    </>
  );
}

export default App;