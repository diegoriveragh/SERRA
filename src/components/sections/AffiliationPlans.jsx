import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Shield, Award, Gem, HeartHandshake, Box, Package, FileText, CheckCircle2, Stethoscope, Briefcase, HeartHandshake as Handshake, HeartPulse } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OnlineAffiliationModal from '@/components/sections/OnlineAffiliationModal';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const funeralPlans = [
    {
        id: "plan-a",
        icon: <Shield className="h-10 w-10 text-brand-blue" />,
        name: "Plan A",
        title: "El Marco Fundamental",
        description: "Ofrece los servicios fúnebres esenciales con dignidad y profesionalismo.",
        benefits: [
            "Ataúd y bóveda (2 paneles para tierra/monumento), caja interior metálica y blondas.",
            "Tanatopraxia: Tratamiento sanitizante, estético y de conservación.",
            "Salas Velatorias climatizadas con servicio de catering de primer nivel.",
            "Capilla Ardiente en domicilio (opcional).",
            "Traslado de restos a nivel provincial.",
            "Cortejo Fúnebre hasta 30 km.",
            "Aviso de Invitación al Sepelio en diario local.",
            "Parcela en Cementerio Parque (subconcesión).",
            "Trámites en el Registro Civil."
        ]
    },
    {
        id: "plan-plata",
        icon: <Award className="h-10 w-10 text-slate-500" />,
        name: "Plan Plata",
        title: "Elevando el Estándar",
        description: "Se basa en el Plan A, añadiendo mayor comodidad y opciones, como la cremación y ayuda económica por duelo.",
        benefits: [
            "Todos los servicios del Plan A.",
            "Servicio de Cremación como opción a la inhumación.",
            "Ayuda de Duelo: Provisión de una ayuda económica por única vez."
        ]
    },
    {
        id: "plan-oro",
        icon: <Gem className="h-10 w-10 text-amber-500" />,
        name: "Plan Oro",
        title: "La Oferta Premium",
        description: "La oferta más completa, con todos los beneficios anteriores y servicios exclusivos.",
        benefits: [
            "Todos los servicios del Plan A y Plan Plata.",
            "Traslado de restos a nivel nacional sin cargo.",
            "Gastos de Inhumación: Conducción, excavación, sellado y placa.",
            "Servicio de Cremación incluido como estándar."
        ]
    }
];

const asist30Benefits = {
    title: "Beneficios Asistenciales (Salud y Sociales)",
    description: "Este plan se enfoca en el bienestar diario y el apoyo social. La afiliación, carencias y prestaciones están sujetas a la aceptación discrecional por parte de la empresa y la suscripción del contrato.",
    services: [
        { service: "Consultas Médicas", coverage: "Valor contratado", waitingPeriod: "Inmediata" },
        { service: "Prestaciones Sanatoriales Programadas", coverage: "Valor contratado", waitingPeriod: "90 días" },
        { service: "Ópticas", coverage: "Valor contratado", waitingPeriod: "180 días" },
        { service: "Enfermería (Inyecciones, etc.)", coverage: "Sin Costo", waitingPeriod: "Inmediata" },
        { service: "Farmacia", coverage: "30% receta, 20% s/Obra Social", waitingPeriod: "Inmediata" },
        { service: "Traslados Programados", coverage: "Valor contratado", waitingPeriod: "180 días" },
        { service: "Estudios de Diagnóstico", coverage: "Valor contratado", waitingPeriod: "Inmediata" },
        { service: "Odontología", coverage: "Valor contratado", waitingPeriod: "Inmediata" },
        { service: "Servicios Sociales (Kit Escolar, etc.)", coverage: "Valor contratado", waitingPeriod: "Hasta 300 días" },
        { service: "Estudios de Alta Complejidad", coverage: "Valor contratado", waitingPeriod: "Inmediata" },
        { service: "Servicios Fúnebres", coverage: "Según Plan Elegido (A, Plata u Oro)", waitingPeriod: "Según tabla de Edades" }
    ],
    usageNote: "Modo de uso general: Solicitar/Retirar órdenes y autorizaciones en nuestras oficinas. Para más detalles, consulte el contrato de afiliación."
};

const integratedPlans = [
    {
        id: "asist-30",
        icon: <Package className="h-10 w-10 text-brand-blue" />,
        name: "Asist 30",
        description: "Este plan ofrece la cobertura fundamental de servicios fúnebres del Plan A, complementada con los beneficios esenciales de salud y sociales del Plan Asist 30, brindando un respaldo completo y digno.",
        funeralBenefitRef: "Incluye todos los servicios detallados en el Plan Fúnebre A.",
        assistanceBenefits: asist30Benefits,
    },
    {
        id: "asist-plata",
        icon: <Package className="h-10 w-10 text-slate-500" />,
        name: "Asist Plata",
        description: "Este plan ofrece la cobertura mejorada de servicios fúnebres del Plan Plata, complementada con los beneficios de salud y sociales del Plan Asist 30, para un respaldo más completo.",
        funeralBenefitRef: "Incluye todos los servicios detallados en el Plan Fúnebre Plata.",
        assistanceBenefits: asist30Benefits,
    },
    {
        id: "asist-oro",
        icon: <Package className="h-10 w-10 text-amber-500" />,
        name: "Asist Oro",
        description: "La oferta más completa, que integra la cobertura premium de servicios fúnebres del Plan Oro, complementada con los beneficios de salud y sociales del Plan Asist 30, para una tranquilidad absoluta.",
        funeralBenefitRef: "Incluye todos los servicios detallados en el Plan Fúnebre Oro.",
        assistanceBenefits: asist30Benefits,
    }
];


const FuneralPlanDetails = ({ plan }) => (
    <div className="text-left mt-4">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-base">Ver detalles de la cobertura</AccordionTrigger>
                <AccordionContent>
                    <h4 className="font-bold text-lg mb-2 text-slate-800">{plan.title}</h4>
                    <ul className="space-y-2">
                        {plan.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
);

const IntegratedPlanDetails = ({ plan }) => (
    <div className="text-left mt-4">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-base">Ver detalles de la cobertura</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center"><Box className="mr-2 h-5 w-5 text-brand-blue" />Beneficios Fúnebres</h4>
                            <p className="text-slate-600 pl-7">{plan.funeralBenefitRef}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center"><HeartPulse className="mr-2 h-5 w-5 text-rose-500" />{plan.assistanceBenefits.title}</h4>
                            <p className="text-sm text-slate-500 mb-4 pl-7">{plan.assistanceBenefits.description}</p>
                            <div className="rounded-lg border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-slate-50 hover:bg-slate-100">
                                            <TableHead className="font-bold">Servicio</TableHead>
                                            <TableHead className="font-bold">Cobertura</TableHead>
                                            <TableHead className="font-bold">Carencia</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {plan.assistanceBenefits.services.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">{item.service}</TableCell>
                                                <TableCell>{item.coverage}</TableCell>
                                                <TableCell>{item.waitingPeriod}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 text-center px-2">
                                {plan.assistanceBenefits.usageNote}
                            </p>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
);

const PlanCard = ({ plan, type }) => (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl hover:border-brand-blue transition-all duration-300 h-full border rounded-xl overflow-hidden">
        <CardHeader className="items-center text-center pt-8 pb-4">
            <div className="bg-slate-100 p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">{plan.icon}</div>
            <CardTitle className="text-3xl font-bold text-slate-800">{plan.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow text-center p-6 pt-2">
            <p className="text-slate-600 mb-4 flex-grow">{plan.description}</p>
            
            {type === 'funeral' ? <FuneralPlanDetails plan={plan} /> : <IntegratedPlanDetails plan={plan} />}

            <div className="mt-6 mb-4 p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg">
                <p className="text-sm text-slate-800 font-medium">
                    El valor de la cuota se personaliza según la cantidad de integrantes y sus edades.
                </p>
            </div>
            <div className="w-full pt-4 mt-auto">
                <OnlineAffiliationModal 
                    selectedPlan={plan.name}
                />
            </div>
        </CardContent>
    </Card>
);

const AffiliationPlans = () => {
    return (
        <motion.div
            id="planes-afiliacion"
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Nuestros Planes de Afiliación</h3>
                <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                    Descubrí nuestras opciones de cobertura, diseñadas para adaptarse a cada necesidad y ofrecerte la tranquilidad que merecés.
                </p>
            </div>

            <Tabs defaultValue="funeral" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-10 h-12 rounded-lg p-1 bg-slate-200">
                     <TabsTrigger value="funeral" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md flex items-center justify-center gap-2 font-semibold text-slate-600 data-[state=active]:text-brand-blue">
                        <Box className="mr-2 h-5 w-5" /> Coberturas Fúnebres
                    </TabsTrigger>
                    <TabsTrigger value="integrated" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md flex items-center justify-center gap-2 font-semibold text-slate-600 data-[state=active]:text-brand-blue">
                        <HeartHandshake className="mr-2 h-5 w-5" /> Planes Integrados
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="funeral">
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {funeralPlans.map((plan) => (
                            <PlanCard key={plan.id} plan={plan} type="funeral" />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="integrated">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {integratedPlans.map((plan) => (
                           <PlanCard key={plan.id} plan={plan} type="integrated" />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
=======
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
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
};

export default AffiliationPlans;