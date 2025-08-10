import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section id="nosotros" className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={cardVariants}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Nuestra <span className="gradient-text">Historia y Compromiso</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                            Desde nuestros inicios, en Enrique Serra hemos mantenido un compromiso inquebrantable: acompañar a las familias en los momentos más difíciles con un servicio humano, profesional y respetuoso.
                        </p>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Con décadas de trayectoria, hemos crecido y evolucionado para adaptarnos a las nuevas realidades, pero nuestros valores fundacionales de confianza, empatía y excelencia permanecen intactos. Somos más que una empresa; somos un pilar de apoyo para nuestra comunidad.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex items-start space-x-4">
                                <Award className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg font-bold text-slate-800">Experiencia y Trayectoria</p>
                                    <p className="text-slate-600">Décadas de servicio avalan nuestra calidad.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Users className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg font-bold text-slate-800">Atención Humana</p>
                                    <p className="text-slate-600">Un equipo con vocación de servicio y profunda empatía.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <ShieldCheck className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg font-bold text-slate-800">Confianza y Transparencia</p>
                                    <p className="text-slate-600">Compromiso claro para tu total tranquilidad.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;