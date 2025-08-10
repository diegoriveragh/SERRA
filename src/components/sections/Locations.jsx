import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Locations = () => {
    const locations = [
        {
            city: "Concepción",
            address: "24 de Septiembre 1.605",
            phone: "(03865) 422684 / 422273",
            mapLink: "https://www.google.com/maps/search/?api=1&query=24+de+Septiembre+1605,+Concepción,+Tucumán"
        },
        {
            city: "Aguilares",
            address: "Carlos Pellegrini 642",
            phone: "(03865) 481129",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Carlos+Pellegrini+642,+Aguilares,+Tucumán"
        },
        {
            city: "Juan Bautista Alberdi",
            address: "Av. Campero 600",
            phone: "(03865) 471099",
            mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Campero+600,+Juan+Bautista+Alberdi,+Tucumán"
        },
        {
            city: "La Cocha",
            address: "San Martin 61",
            phone: "(03865) 496124",
            mapLink: "https://www.google.com/maps/search/?api=1&query=San+Martin+61,+La+Cocha,+Tucumán"
        },
        {
            city: "San Miguel de Tucumán",
            address: "San Martín 999",
            phone: "(0381) 4310756 / 4310947",
            mapLink: "https://www.google.com/maps/search/?api=1&query=San+Martín+999,+San+Miguel+de+Tucumán,+Tucumán"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="ubicaciones" className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nuestras <span className="gradient-text">Sucursales</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Siempre cerca tuyo. Encontrá la sucursal de Enrique Serra más próxima a tu domicilio para recibir atención personalizada y el respaldo que necesitás.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-md hover:shadow-2xl hover:border-brand-blue transition-all duration-300"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{loc.city}</h3>
                            <div className="flex items-start text-slate-600 mb-3">
                                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-slate-400" />
                                <span>{loc.address}</span>
                            </div>
                            <div className="flex items-start text-slate-600 mb-6">
                                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-slate-400" />
                                <span>{loc.phone}</span>
                            </div>
                            <div className="mt-auto">
                                <Button asChild className="w-full bg-brand-blue text-white hover:bg-blue-700 font-bold">
                                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">
                                        Ver en Google Maps
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Locations;