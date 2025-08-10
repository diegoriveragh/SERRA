import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, MapPin, Phone, HelpCircle, Download, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const offices = [
    {
        location: 'Concepción',
        address: '24 de Septiembre 1.605',
        phone: '(03865) 422684 / 422273',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=24+de+Septiembre+1605,Concepcion,Tucuman'
    },
    {
        location: 'Aguilares',
        address: 'Carlos Pellegrini 642',
        phone: '(03865) 481129',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Carlos+Pellegrini+642,Aguilares,Tucuman'
    },
    {
        location: 'J. B. Alberdi',
        address: 'Av. Campero 600',
        phone: '(03865) 471099',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Campero+600,Juan+Bautista+Alberdi,Tucuman'
    },
    {
        location: 'La Cocha',
        address: 'San Martin 61',
        phone: '(03865) 496124',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=San+Martin+61,La+Cocha,Tucuman'
    },
    {
        location: 'San Miguel de Tucumán',
        address: 'San Martín 999',
        phone: '(0381) 4310756 / 4310947',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=San+Martín+999,San+Miguel+de+Tucuman,Tucuman'
    }
];

const GuideStep = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">{number}</div>
        <div>
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
);

const ImageModal = ({ src, alt, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
            >
                <img src={src} alt={alt} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-slate-800 hover:bg-slate-200 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
            </motion.div>
        </motion.div>
    );
};

const AffiliationGuides = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (src) => {
        setEnlargedImage(src);
    };

    const handleCloseModal = () => {
        setEnlargedImage(null);
    };

    const images = {
        mobile: "https://horizons-cdn.hostinger.com/42f27d5a-013e-49fb-a4ef-ca6ccf288801/e030ad866c4382a478d2c1a998f4133c.jpg",
        portal: "https://horizons-cdn.hostinger.com/42f27d5a-013e-49fb-a4ef-ca6ccf288801/fc3e7ca224afe20f7ba24be6e8d5768c.jpg"
    };

    return (
        <>
            <motion.div
                id="guias-afiliacion"
                className="mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold">Guías y Oficinas a tu Disposición</h3>
                    <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                        Te facilitamos todas las herramientas e información para que gestiones tus servicios y resuelvas tus dudas de la manera más simple.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <Card className="lg:col-span-3 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <HelpCircle className="h-8 w-8 text-brand-blue" />
                                Instructivos de Autogestión
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="font-bold text-lg">
                                        <div className="flex items-center gap-2">
                                            <Smartphone /> Guía para la APP Móvil
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-4">
                                        <div className="flex justify-center my-4">
                                            <img
                                                className="h-auto w-full max-w-xs border rounded-md shadow-sm cursor-zoom-in transition-transform hover:scale-105"
                                                alt="Guía visual para la aplicación móvil de afiliados"
                                                src={images.mobile}
                                                onClick={() => handleImageClick(images.mobile)}
                                            />
                                        </div>
                                        <GuideStep number="1" title="Descarga e Instalación" description="Buscá 'Serra Afiliado' en Google Play y descargá nuestra aplicación gratuita." />
                                        <div className="flex justify-center">
                                            <Button asChild>
                                                <a href="https://play.google.com/store/search?q=serra+afiliado&c=apps&hl=es_419&pli=1" target="_blank" rel="noopener noreferrer">
                                                    <Download className="mr-2 h-4 w-4" /> Descargar App
                                                </a>
                                            </Button>
                                        </div>
                                        <GuideStep number="2" title="Registro e Inicio de Sesión" description="Creá tu cuenta con tu DNI y seguí los pasos para validar tu identidad. ¡Es rápido y seguro!" />
                                        <GuideStep number="3" title="Funcionalidades Principales" description="Consultá tu cartilla, generá órdenes, pagá tu cuota y accedé a todos tus beneficios desde la palma de tu mano." />
                                        <p className="text-center text-sm text-slate-500 pt-4">Sugerencia: ¡Próximamente tutoriales en video!</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="font-bold text-lg">
                                        <div className="flex items-center gap-2">
                                            <Monitor /> Guía para el Portal de Afiliados
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-4">
                                        <div className="flex justify-center my-4">
                                            <img
                                                className="h-auto w-full max-w-md border rounded-md shadow-sm cursor-zoom-in transition-transform hover:scale-105"
                                                alt="Guía visual para el portal web de afiliados"
                                                src={images.portal}
                                                onClick={() => handleImageClick(images.portal)}
                                            />
                                        </div>
                                        <GuideStep number="1" title="Acceso al Portal" description="Ingresá a nuestro sitio web y hacé clic en 'Portal de Afiliados' o accedé directamente desde el enlace provisto." />
                                        <GuideStep number="2" title="Navegación y Gestión" description="Explorá las secciones para actualizar tus datos, ver el historial de pagos y gestionar tus beneficiarios." />
                                        <GuideStep number="3" title="Soporte y Ayuda" description="Si tenés dudas, consultá nuestra sección de Preguntas Frecuentes o contactá a nuestro equipo de soporte." />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-2 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <MapPin className="h-8 w-8 text-brand-blue" />
                                Oficinas de Afiliación
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {offices.map((office, index) => (
                                <div key={index} className="p-3 bg-slate-50 rounded-lg border">
                                    <p className="font-bold text-slate-800">{office.location}</p>
                                    <p className="text-sm text-slate-600">{office.address}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-sm text-slate-600 flex items-center gap-1"><Phone className="h-3 w-3" /> {office.phone}</p>
                                        <Button variant="link" asChild className="p-0 h-auto text-brand-blue">
                                            <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">Ver en Mapa</a>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            <AnimatePresence>
                {enlargedImage && (
                    <ImageModal
                        src={enlargedImage}
                        alt="Imagen ampliada de la guía"
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default AffiliationGuides;