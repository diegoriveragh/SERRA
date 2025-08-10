import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Gift, LogIn, FileText, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AffiliationPlans from '@/components/sections/AffiliationPlans';
import AffiliationGuides from '@/components/sections/AffiliationGuides';
import OnlineAffiliationModal from '@/components/sections/OnlineAffiliationModal';

const Affiliations = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: "Cobertura Fúnebre Completa",
      description: "La tranquilidad de saber que todos los servicios necesarios estarán cubiertos, liberando a tu familia de cargas económicas."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-rose-500" />,
      title: "Beneficios en Salud y Bienestar",
      description: "Accedé a una amplia cartilla de prestadores con descuentos en farmacias, ópticas, consultas médicas y más."
    },
    {
      icon: <Gift className="h-8 w-8 text-amber-500" />,
      title: "Ventajas Exclusivas",
      description: "Disfrutá de beneficios en comercios adheridos, seguros y otros servicios pensados para vos y tu familia."
    }
  ];

  return (
    <section id="afiliaciones" className="py-24 px-6 bg-slate-100">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Afiliaciones: <span className="gradient-text">Seguridad y Ventajas Exclusivas</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ser parte de Enrique Serra es contar con un respaldo confiable en cada momento. Nuestros planes de afiliación te brindan la tranquilidad que tu familia merece y acceso a un mundo de beneficios pensados para tu bienestar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:border-brand-blue flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 bg-slate-100 p-4 rounded-full">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <AffiliationPlans />

        <motion.div 
          id="afiliarse-ahora"
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="shadow-xl border-brand-blue/20 bg-white p-4 flex flex-col justify-between">
              <CardHeader className="text-center">
                  <div className="mx-auto bg-slate-100 p-4 rounded-full w-fit mb-4">
                      <UserPlus className="h-8 w-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl">
                      Solicitud de Cotización
                  </CardTitle>
                  <CardDescription>
                      Iniciá tu consulta para obtener un plan a la medida de tu familia.
                  </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                 <OnlineAffiliationModal />
              </CardContent>
            </Card>

            <Card className="shadow-xl border-brand-blue/20 bg-white p-4 flex flex-col justify-between">
              <CardHeader className="text-center">
                  <div className="mx-auto bg-slate-100 p-4 rounded-full w-fit mb-4">
                      <FileText className="h-8 w-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl">
                      Guía de Prestadores
                  </CardTitle>
                  <CardDescription>
                      Consultá la cartilla completa de profesionales y comercios adheridos a tu plan.
                  </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                  <Button asChild size="lg" className="w-full font-bold">
                      <a href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3" target="_blank" rel="noopener noreferrer">
                          Consultar Guía
                      </a>
                  </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <AffiliationGuides />

        <motion.div
            className="mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <Card className="shadow-xl border-brand-blue/20 bg-white">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-slate-100 p-4 rounded-full w-fit mb-4">
                        <LogIn className="h-8 w-8 text-brand-blue" />
                    </div>
                    <CardTitle className="text-2xl">
                        Portal de Afiliados
                    </CardTitle>
                    <CardDescription>
                        Gestioná tus datos, consultá tus beneficios y realizá trámites de forma rápida y segura.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild size="lg" className="w-full font-bold">
                        <a href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer">
                            Ingresar al Portal
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Affiliations;