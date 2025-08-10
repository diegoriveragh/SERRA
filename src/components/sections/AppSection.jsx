import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const AppSection = () => {
  return (
    <section id="app" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Gestioná todo desde tu <span className="gradient-text">Móvil</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descargá nuestra app y accedé a todos tus beneficios de forma rápida y sencilla.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <img 
<<<<<<< HEAD
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/f17b06d5360640b2c30a4a4652f694a6.jpg" 
=======
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/f17b06d5360640b2c30a4a4652f694a6.jpg" 
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
              alt="Instrucciones para descargar la App Serra Afiliado" 
              className="rounded-xl shadow-2xl mb-8 max-w-md w-full"
            />
            <Button asChild size="lg" className="bg-brand-blue text-white hover:bg-blue-700 font-bold">
              <a href="https://play.google.com/store/search?q=serra+afiliado&c=apps&hl=es_419" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar en Play Store
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
<<<<<<< HEAD
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/eb0820f60e53bf515859b661fae11d27.jpg" 
=======
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/eb0820f60e53bf515859b661fae11d27.jpg" 
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
              alt="Instrucciones para acceder a la autogestión web" 
              className="rounded-xl shadow-2xl max-w-md w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;