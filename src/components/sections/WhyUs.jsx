import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Sparkles } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Award className="h-12 w-12 text-slate-700" />,
      title: "Experiencia y Profesionalismo",
      description: "Décadas de trayectoria en el sector, brindando un servicio de excelencia y confianza."
    },
    {
      icon: <Users className="h-12 w-12 text-slate-700" />,
      title: "Atención Humana y Empática",
      description: "Entendemos y respetamos el dolor, ofreciendo un trato cálido, personalizado y con discreción."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-slate-700" />,
      title: "Transparencia y Confianza",
      description: "Contratos claros, sin letra chica, para tu total tranquilidad y seguridad."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-slate-700" />,
      title: "Innovación y Flexibilidad",
      description: "Planes adaptados a las nuevas realidades y beneficios pensados para toda la familia."
    }
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="nosotros" className="py-20 px-6 bg-slate-100">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Por Qué Elegir <span className="gradient-text">Enrique Serra?</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-200"
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;