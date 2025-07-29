import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AffiliationPlans = ({ onOpenPlansModal }) => {

  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: "Cobertura Fúnebre Completa",
      description: "La tranquilidad de saber que todos los servicios necesarios estarán cubiertos, liberando a tu familia de cargas económicas."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-rose-500" />,
      title: "Beneficios en Salud y Bienestar",
      description: "Acceso a descuentos en consultas médicas, odontológicas, y más con profesionales de primer nivel."
    },
    {
      icon: <Gift className="h-8 w-8 text-amber-500" />,
      title: "Obsequios",
      description: "Porque valoramos tu confianza y lealtad, nuestros planes incluyen obsequios especiales."
    }
  ];

  return (
    <section id="planes" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Planes de Afiliación: <span className="gradient-text">Beneficios para Hoy, Tranquilidad para Mañana</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Nuestros planes están diseñados para brindarte seguridad y, al mismo tiempo, ofrecerte ventajas exclusivas que mejoran tu día a día. Con una cómoda cuota mensual, tú y tu familia acceden a un mundo de posibilidades.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={onOpenPlansModal} size="lg" className="bg-brand-blue text-white hover:bg-blue-700 font-bold">Conocé Nuestros Planes</Button>
              <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold">
                <a href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3" target="_blank" rel="noopener noreferrer">Guía de Prestadores</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-brand-blue hover:bg-blue-50 font-bold">
                <a href="#contacto">Afiliate Ahora</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200"
                whileHover={{ scale: 1.03, borderColor: '#005cff' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 font-heading">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationPlans;