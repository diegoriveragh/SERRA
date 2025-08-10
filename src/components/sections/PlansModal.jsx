import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const PlansModal = ({ isOpen, onOpenChange }) => {
  const plans = [
    {
<<<<<<< HEAD
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/ea8bb11480410a61d8425a00652e55e9.jpg",
      alt: "Detalles del Plan Asist 30 de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/0b54d2cfdeb296d9b0c100f110ed48e4.jpg",
      alt: "Detalles de Servicios Fúnebres Plan A de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/7f187ba61ea7a0f7eb2eaad513e7eab1.jpg",
      alt: "Detalles de Servicios Fúnebres Plan Plata de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/5d120f72953330a690ea55766a838580.jpg",
=======
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/ea8bb11480410a61d8425a00652e55e9.jpg",
      alt: "Detalles del Plan Asist 30 de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/0b54d2cfdeb296d9b0c100f110ed48e4.jpg",
      alt: "Detalles de Servicios Fúnebres Plan A de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/7f187ba61ea7a0f7eb2eaad513e7eab1.jpg",
      alt: "Detalles de Servicios Fúnebres Plan Plata de Enrique Serra"
    },
    {
      src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/5d120f72953330a690ea55766a838580.jpg",
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
      alt: "Detalles de Servicios Fúnebres Plan Oro de Enrique Serra"
    }
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % plans.length);
  }, [selectedImageIndex, plans.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
  }, [selectedImageIndex, plans.length]);
  
  const handleCloseLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') handleCloseLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev, handleCloseLightbox]);

  const handleButtonAction = (e, action) => {
    e.stopPropagation();
    action();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[600px] bg-white p-4 md:p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-4 font-heading gradient-text">Nuestros Planes</DialogTitle>
            <DialogDescription className="text-center text-slate-600 text-lg">
              Descubrí la cobertura ideal para vos y tu familia.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6 py-6 max-h-[80vh] overflow-y-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className="relative group rounded-lg shadow-lg border border-slate-200 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={plan.src} alt={plan.alt} className="w-full h-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-12 w-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={handleCloseLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-[110] hover:bg-black/80 transition-colors pointer-events-auto"
              onClick={(e) => handleButtonAction(e, handleCloseLightbox)}
              onTouchEnd={(e) => handleButtonAction(e, handleCloseLightbox)}
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-[110] hover:bg-black/80 transition-colors pointer-events-auto"
              onClick={(e) => handleButtonAction(e, handlePrev)}
              onTouchEnd={(e) => handleButtonAction(e, handlePrev)}
            >
              <ChevronLeft className="h-10 w-10" />
            </motion.button>

            <motion.button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-[110] hover:bg-black/80 transition-colors pointer-events-auto"
              onClick={(e) => handleButtonAction(e, handleNext)}
              onTouchEnd={(e) => handleButtonAction(e, handleNext)}
            >
              <ChevronRight className="h-10 w-10" />
            </motion.button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={plans[selectedImageIndex].src} alt={plans[selectedImageIndex].alt} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlansModal;