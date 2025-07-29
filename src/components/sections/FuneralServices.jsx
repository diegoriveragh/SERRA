import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Truck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FuneralServices = () => {
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

  const services = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Organización Completa",
      description: "Asesoramiento y gestión de todos los trámites, coordinación de ceremonias y atención personalizada en cada detalle."
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Salas Velatorias Modernas",
      description: "Espacios acogedores y equipados con todas las comodidades para el recogimiento y la despedida."
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Traslados Nacionales",
      description: "Gestionamos y realizamos traslados a cualquier punto del país con el máximo cuidado."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Moderna Flota de Vehículos",
      description: "Contamos con una flota moderna y adecuada para brindar un servicio de excelencia."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6 bg-slate-100">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Área Fúnebre: <span className="gradient-text">Cuidado, Respeto y Calidad</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nos encargamos de todo, con la seriedad y el respeto que cada familia merece. Nuestro equipo profesional está disponible las 24 horas, los 365 días del año.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
              whileHover={{ y: -10 }}
            >
              <div className="text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 font-heading">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
           <motion.div
              variants={fadeInUp}
              className="group p-8 rounded-2xl bg-brand-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700 flex flex-col justify-center items-center text-center lg:col-span-2"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-heading">¿Necesita Asistencia Inmediata?</h3>
              <p className="leading-relaxed mb-6">Estamos disponibles 24/7 para ayudarle.</p>
              <Button asChild
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue font-bold text-lg"
              >
                <a href="tel:081077773772">Llamar al 0810 777 SERRA</a>
              </Button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuneralServices;