import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const TributesPortal = () => {
    const { toast } = useToast();

    const handleNotImplemented = () => {
        toast({
            title: "🚧 Funcionalidad en desarrollo",
            description: "¡Esta característica estará disponible muy pronto en nuestro portal oficial!",
            variant: "info",
        });
    };

    const recentTributes = [
        { name: 'Nombre del Ser Querido', dates: 'Próximamente', location: 'Próximamente' },
        { name: 'Nombre del Ser Querido', dates: 'Próximamente', location: 'Próximamente' },
        { name: 'Nombre del Ser Querido', dates: 'Próximamente', location: 'Próximamente' },
    ];

    return (
        <motion.div
            className="mt-12 md:mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold">Portal de Homenajes: Un Espacio para el Recuerdo y el Apoyo</h3>
                <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
                    En Enrique Serra, estamos comprometidos a brindar un apoyo integral y empático en cada momento. Por ello, estamos desarrollando nuestro Portal de Homenajes en Línea, un espacio dedicado a honrar la memoria de sus seres queridos. Aquí, las familias y amigos podrán recordar, compartir mensajes de condolencia y encontrar un lugar de apoyo mutuo. Este portal está actualmente en desarrollo y pronto estará disponible con todas sus funcionalidades.
                </p>
            </div>

            {/* Homenajes Recientes */}
            <div className="mb-16">
                <h4 className="text-2xl font-bold text-center mb-8">Homenajes Recientes</h4>
                <div className="grid md:grid-cols-3 gap-8">
                    {recentTributes.map((tribute, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <UserCircle className="h-20 w-20 text-slate-300" />
                            </div>
                            <p className="font-bold text-lg">{tribute.name}</p>
                            <p className="text-slate-500 text-sm">Fechas: {tribute.dates}</p>
                            <p className="text-slate-500 text-sm">Localidad: {tribute.location}</p>
                            <Button onClick={handleNotImplemented} className="mt-4">Ver Homenaje</Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buscar Homenajes */}
            <div className="mb-12">
                <h4 className="text-2xl font-bold text-center mb-8">Buscar Homenajes Anteriores</h4>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="relative mb-4">
                        <Input placeholder="Buscar por nombre del ser querido..." className="pl-10" />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <Button variant="outline" className="w-full md:w-auto flex-1 justify-center">
                            <MapPin className="mr-2 h-4 w-4" /> Filtrar por Localidad
                        </Button>
                        <Button variant="outline" className="w-full md:w-auto flex-1 justify-center">
                            <Calendar className="mr-2 h-4 w-4" /> Filtrar por Fecha
                        </Button>
                    </div>
                    <Button onClick={handleNotImplemented} className="w-full">
                        <Search className="mr-2 h-4 w-4" /> Buscar
                    </Button>
                </div>
            </div>
            
            <p className="text-center text-lg text-slate-600 font-semibold">
                Estamos trabajando para ofrecerle la mejor experiencia. ¡Visítenos nuevamente para el lanzamiento oficial de nuestro Portal de Homenajes!
            </p>
        </motion.div>
    );
};

export default TributesPortal;