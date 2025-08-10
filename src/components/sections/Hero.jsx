import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

const Hero = () => {
=======
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ onOpenPlansModal }) => {
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
<<<<<<< HEAD
    <section id="inicio" className="pt-48 pb-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 text-slate-900"
              >
                Un Respaldo Confiable.
                <br />
                <span className="gradient-text">en Cada Momento.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
              >
                Nos dedicamos con profunda vocación a brindar servicios integrales y un respaldo completo a tu familia, ofreciendo tranquilidad y apoyo cuando más lo necesitan.
              </motion.p>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl blur-xl opacity-20"></div>
              <img  
                className="rounded-3xl shadow-2xl w-full h-auto object-cover relative"
                alt="Mano sosteniendo a otra en señal de apoyo y consuelo en un momento difícil"
               src="https://images.unsplash.com/photo-1590318719522-77b87d63d268" />
            </motion.div>
        </div>
=======
    <section id="inicio" className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-slate-800">Un Respaldo Confiable</span>
            <br />
            <span className="gradient-text">en Cada Momento</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
          >
            Nos dedicamos con profunda vocación a brindar servicios fúnebres integrales y un respaldo completo a tu familia, ofreciendo tranquilidad y apoyo cuando más lo necesitan.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={onOpenPlansModal}
              size="lg" 
              className="bg-slate-800 text-white hover:bg-slate-900 text-lg px-8 py-4 shadow-lg shadow-slate-800/20"
            >
              Conocé Nuestros Planes <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
            >
              <a href="#contacto">Contactar</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-300/20 to-slate-400/20 rounded-3xl blur-3xl"></div>
            <img 
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              alt="Mano sosteniendo a otra en señal de apoyo y consuelo"
             src="https://images.unsplash.com/photo-1590318719522-77b87d63d268" />
          </div>
        </motion.div>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
      </div>
    </section>
  );
};

export default Hero;