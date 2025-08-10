import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send } from 'lucide-react';

const PreNeedForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Solicitud Recibida",
                description: "Gracias por su interés. Un asesor se pondrá en contacto con usted a la brevedad.",
                variant: "success",
            });
            e.target.reset();
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="pre-name">Nombre Completo</Label>
                    <Input id="pre-name" required placeholder="Su nombre" />
                </div>
                <div>
                    <Label htmlFor="pre-phone">Teléfono</Label>
                    <Input id="pre-phone" type="tel" required placeholder="Su teléfono de contacto" />
                </div>
            </div>
            <div>
                <Label htmlFor="pre-email">Email</Label>
                <Input id="pre-email" type="email" required placeholder="Su correo electrónico" />
            </div>
            <div>
                <Label htmlFor="pre-message">Mensaje (Opcional)</Label>
                <Textarea id="pre-message" placeholder="Indique el mejor horario para contactarlo o cualquier otra consulta." />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Solicitar Asesoramiento
                    </>
                )}
            </Button>
        </form>
    );
};

const FaqSection = ({ faqs }) => (
    <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                <AccordionContent className="prose max-w-none text-slate-600">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

const cremationFaqs = [
    {
        question: "¿Qué es la cremación?",
        answer: "La cremación es un proceso que reduce el cuerpo humano a fragmentos óseos mediante la aplicación de calor intenso y llamas. Estos fragmentos son luego procesados hasta obtener una consistencia fina, similar a la arena, conocidos como 'cenizas'."
    },
    {
        question: "¿Es necesario un ataúd para la cremación?",
        answer: "La legislación argentina requiere que el cuerpo sea colocado en un contenedor rígido y combustible. Puede ser un ataúd tradicional o un contenedor alternativo diseñado específicamente para cremación."
    },
    {
        question: "¿Qué sucede con las cenizas?",
        answer: "Las cenizas se colocan en una urna que la familia elige. Las opciones para el destino final de las cenizas son variadas: pueden ser conservadas en el hogar, depositadas en un cinerario o nicho, o esparcidas en un lugar significativo (sujeto a regulaciones locales)."
    }
];

const generalFaqs = [
    {
        question: "¿Qué debo hacer cuando fallece un ser querido?",
        answer: "Lo primero es contactarnos. Nuestro equipo está disponible 24/7 para guiarlo en cada paso, desde la obtención del certificado de defunción hasta la organización completa del servicio."
    },
    {
        question: "¿Qué incluye un servicio fúnebre básico?",
        answer: "Un servicio estándar incluye el retiro del fallecido, preparación del cuerpo, el ataúd, uso de la sala velatoria, el coche fúnebre para el traslado al cementerio y la gestión de los trámites necesarios."
    },
    {
        question: "¿Cómo se determinan los costos?",
        answer: "Los costos varían según las elecciones de la familia, como el tipo de ataúd, la duración del velatorio, los servicios adicionales (avisos fúnebres, flores) y el destino final. Ofrecemos planes claros y transparentes para adaptarnos a cada necesidad."
    }
];

const AdditionalFuneralServices = () => {
    return (
        <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold">Servicios de Valor Añadido</h3>
                <p className="text-lg text-slate-600 mt-2">Información y herramientas para tomar decisiones informadas.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Accordion type="multiple" className="w-full space-y-4">
                    <AccordionItem value="tanatopraxia" className="bg-white p-6 rounded-lg shadow-sm">
                        <AccordionTrigger className="text-xl font-bold text-slate-800">Tanatopraxia</AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            <div className="prose max-w-none text-slate-600">
                                <p>La tanatopraxia es un procedimiento profesional y delicado que tiene como objetivo principal preparar y preservar el cuerpo de su ser querido. Este proceso incluye técnicas de higiene, desinfección, embellecimiento y conservación, que permiten que la familia y amigos puedan despedirse en un ambiente de serenidad y respeto.</p>
                                <h4>¿Para qué sirve la tanatopraxia?</h4>
                                <p>Su propósito fundamental es asegurar una presentación digna y apacible del difunto durante el velatorio. Esto ayuda a:</p>
                                <ul>
                                    <li><strong>Facilitar el duelo:</strong> Al ver a su ser querido en un estado natural y sereno, se ayuda a aliviar parte del dolor inicial y a facilitar la aceptación de la pérdida.</li>
                                    <li><strong>Proporcionar un último adiós digno:</strong> Permite a las familias tener un momento de paz y reflexión para despedirse adecuadamente.</li>
                                    <li><strong>Garantizar medidas sanitarias:</strong> Asegura la higiene y reduce riesgos sanitarios, lo cual es importante para la seguridad de todos los presentes.</li>
                                    <li><strong>Permitir traslados:</strong> Gracias a los procesos de conservación, facilita los traslados del cuerpo, incluso a nivel internacional si fuera necesario.</li>
                                </ul>
                                <p>Nuestro equipo realiza este tratamiento con la máxima dignidad y profesionalismo, asegurando una presentación que refleje serenidad y paz, lo cual es fundamental para facilitar el proceso de duelo y cumplir con las normativas sanitarias vigentes.</p>
                                <p className="font-bold text-brand-blue mt-4">Este servicio está incluido en todos los planes de afiliacion.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cremation" className="bg-white p-6 rounded-lg shadow-sm">
                        <AccordionTrigger className="text-xl font-bold text-slate-800">Información sobre Servicios de Cremación</AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            <div className="prose max-w-none text-slate-600">
                                <p>La cremación es una alternativa cada vez más elegida por su flexibilidad y consideraciones ecológicas. Ofrecemos un servicio de cremación respetuoso y profesional, asegurando la dignidad del ser querido en todo momento.</p>
                                <h4>El Proceso:</h4>
                                <p>Nuestro equipo se encarga de todos los aspectos legales y logísticos. El proceso se realiza en instalaciones certificadas, siguiendo los más altos estándares de calidad y ética.</p>
                            </div>
                            <h5 className="font-bold text-lg mt-4">Preguntas Frecuentes sobre Cremación</h5>
                            <FaqSection faqs={cremationFaqs} />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="preneed" className="bg-white p-6 rounded-lg shadow-sm">
                        <AccordionTrigger className="text-xl font-bold text-slate-800">Planificación Funeraria Anticipada</AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-4">
                            <div className="prose max-w-none text-slate-600">
                                <p>Tomar decisiones funerarias por adelantado es un acto de amor que alivia a su familia de una carga emocional y financiera en un momento difícil. La planificación anticipada le permite dejar sus deseos establecidos y fijar los costos del servicio.</p>
                                <h4>Beneficios Clave:</h4>
                                <ul>
                                    <li><strong>Tranquilidad:</strong> Asegura que sus deseos finales sean respetados.</li>
                                    <li><strong>Alivio para la familia:</strong> Evita que sus seres queridos tengan que tomar decisiones complejas bajo presión.</li>
                                    <li><strong>Control financiero:</strong> Protege contra la inflación al congelar el precio de los servicios.</li>
                                </ul>
                                <p>Si desea más información sin compromiso, por favor complete el siguiente formulario y uno de nuestros asesores especializados se pondrá en contacto con usted.</p>
                            </div>
                            <PreNeedForm />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq" className="bg-white p-6 rounded-lg shadow-sm">
                        <AccordionTrigger className="text-xl font-bold text-slate-800">Preguntas Frecuentes Generales</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <FaqSection faqs={generalFaqs} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </motion.div>
    );
};

export default AdditionalFuneralServices;