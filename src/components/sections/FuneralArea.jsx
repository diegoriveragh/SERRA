import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Truck, Car } from 'lucide-react';
import TributesPortal from '@/components/sections/TributesPortal';
import AdditionalFuneralServices from '@/components/sections/AdditionalFuneralServices';

const FuneralArea = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };
  
  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  }

  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-brand-blue" />,
      title: "Organización Completa",
      description: "Nos encargamos de todos los trámites, coordinación de ceremonias y atención personalizada en cada detalle, para que la familia pueda enfocarse en la despedida."
    },
    {
      icon: <Home className="h-10 w-10 text-brand-blue" />,
      title: "Salas Velatorias Modernas",
      description: "Espacios modernos y acogedores, equipados con todas las comodidades para el recogimiento y la despedida de sus seres queridos."
    },
    {
      icon: <Truck className="h-10 w-10 text-brand-blue" />,
      title: "Traslados Nacionales",
      description: "Gestionamos y realizamos traslados a cualquier punto del país con una flota moderna y el máximo cuidado profesional."
    },
    {
      icon: <Car className="h-10 w-10 text-brand-blue" />,
      title: "Moderna Flota de Vehículos",
      description: "Contamos con una flota de vehículos de última generación, garantizando un servicio distinguido, seguro y puntual."
    }
  ];

  return (
    <section id="funebre" className="py-24 px-6 bg-slate-100">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Área Fúnebre: <span className="gradient-text">Un Homenaje a la Vida</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            En momentos de profunda sensibilidad, nuestro compromiso es brindar un servicio que combine la máxima profesionalidad con un trato cercano y empático. Nos ocupamos de cada detalle para que las familias puedan honrar la memoria de sus seres queridos con la tranquilidad y el respeto que merecen.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:border-brand-blue flex flex-col items-center text-center"
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-6 bg-slate-100 p-4 rounded-full">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div id="obituario">
          <TributesPortal />
        </div>

        <div id="info-relevante">
          <AdditionalFuneralServices />
        </div>

      </div>
    </section>
  );
};

export default FuneralArea;