import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { FileText, ArrowRight, Upload, PartyPopper, Loader2, ShieldCheck, X } from 'lucide-react';

const steps = [
    { id: 1, name: 'Elegibilidad y Plan' },
    { id: 2, name: 'Información de Contacto' },
    { id: 3, name: 'Grupo Familiar' },
    { id: 4, name: 'Confirmación' },
];

const allPlans = [
    { id: "asist-30", name: "Asist 30" },
    { id: "asist-plata", name: "Asist Plata" },
    { id: "asist-oro", name: "Asist Oro" },
    { id: "plan-a", name: "Plan A" },
    { id: "plan-plata", name: "Plan Plata" },
    { id: "plan-oro", name: "Plan Oro" },
];

const StepContent = ({ currentStep, formData, setFormData }) => {
    switch (currentStep) {
        case 1:
            return (
                <>
                    <DialogDescription>Verificá si cumplís con los requisitos y seleccioná el plan de tu interés para cotizar.</DialogDescription>
                    <div className="space-y-4 mt-4">
                        <div>
                            <Label htmlFor="age-check">¿El titular es mayor de 18 años?</Label>
                            <Select>
                                <SelectTrigger id="age-check"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Sí</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-slate-500 mt-1">La cotización y posterior afiliación requieren ser mayor de edad.</p>
                        </div>
                        <div>
                            <Label htmlFor="plan-selection">Plan de Interés</Label>
                            <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
                                <SelectTrigger id="plan-selection"><SelectValue placeholder="Elegí un plan" /></SelectTrigger>
                                <SelectContent>
                                    {allPlans.map(plan => <SelectItem key={plan.id} value={plan.id}>{plan.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <DialogDescription>Completá tus datos para que podamos enviarte la cotización personalizada.</DialogDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-1"><Label htmlFor="fullName">Nombre Completo</Label><Input id="fullName" placeholder="Ej: Juan Pérez" /></div>
                        <div className="space-y-1"><Label htmlFor="dni">DNI</Label><Input id="dni" placeholder="Sin puntos" /></div>
                        <div className="space-y-1"><Label htmlFor="phone">Teléfono</Label><Input id="phone" placeholder="Ej: 3811234567" /></div>
                        <div className="space-y-1"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="juan.perez@email.com" /></div>
                    </div>
                </>
            );
        case 3:
             return (
                <>
                    <DialogDescription>Indicá cuántas personas (incluyéndote) conformarían el grupo familiar y sus edades. Esto es clave para una cotización precisa.</DialogDescription>
                     <div className="space-y-4 mt-4">
                        <Textarea placeholder="Ej: Titular (35 años), Cónyuge (32 años), Hijo 1 (5 años), Hijo 2 (2 años)."/>
                        <p className="text-xs text-slate-500 mt-1">No es necesario que incluyas nombres completos en este paso.</p>
                    </div>
                </>
            );
        default: return null;
    }
}

const OnlineAffiliationModal = ({ selectedPlan }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({ plan: selectedPlan || '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
    const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setCurrentStep(4);
            toast({
                title: "🚧 ¡Funcionalidad en desarrollo!",
                description: "¡Esta característica estará disponible muy pronto! 🚀",
            });
        }, 1500);
    };

    const handleOpenChange = (open) => {
        setIsOpen(open);
        if (!open) {
            setTimeout(() => {
                setCurrentStep(1);
                setFormData({ plan: selectedPlan || '' });
            }, 300);
        }
    };
    
     React.useEffect(() => {
        setFormData(prev => ({ ...prev, plan: selectedPlan || '' }));
    }, [selectedPlan, isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="w-full font-bold">
                    <FileText className="mr-2 h-4 w-4" /> Solicitar Cotización
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentStep === 4 ? (
                             <div className="p-8 text-center">
                                <PartyPopper className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <DialogTitle className="text-2xl">¡Solicitud Enviada!</DialogTitle>
                                <DialogDescription className="mt-2 mb-6">
                                    Hemos recibido tu pedido de cotización. Un asesor se pondrá en contacto con vos a la brevedad con una propuesta a tu medida. ¡Gracias por tu interés!
                                </DialogDescription>
                                <Button onClick={() => handleOpenChange(false)}>Finalizar</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <DialogHeader className="p-6 border-b">
                                    <DialogTitle className="text-2xl">Formulario de Cotización Online</DialogTitle>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-sm font-medium text-brand-blue">{`Paso ${currentStep}: ${steps[currentStep-1].name}`}</p>
                                        <div className="flex items-center space-x-1">
                                            {steps.slice(0, 3).map(step => (
                                                <div key={step.id} className={`w-6 h-1.5 rounded-full ${currentStep >= step.id ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </DialogHeader>
                                <div className="p-6 max-h-[60vh] overflow-y-auto">
                                    <StepContent currentStep={currentStep} formData={formData} setFormData={setFormData} />
                                </div>
                                <DialogFooter className="p-6 border-t flex justify-between w-full">
                                    {currentStep > 1 && <Button type="button" variant="outline" onClick={handleBack}>Atrás</Button>}
                                    <div className="flex-grow"></div>
                                    {currentStep < 3 ? (
                                        <Button type="button" onClick={handleNext}>Siguiente <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                    ) : (
                                        <Button type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                                            Enviar Solicitud
                                        </Button>
                                    )}
                                </DialogFooter>
                            </form>
                        )}
                    </motion.div>
                </AnimatePresence>
                 <DialogClose asChild>
                    <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default OnlineAffiliationModal;