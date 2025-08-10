import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Check, Loader2, ArrowRight, ArrowLeft, User, Users, CreditCard, UploadCloud, PartyPopper } from 'lucide-react';

const steps = [
  { id: 1, name: 'Plan', icon: <Check className="h-5 w-5" /> },
  { id: 2, name: 'Titular', icon: <User className="h-5 w-5" /> },
  { id: 3, name: 'Beneficiarios', icon: <Users className="h-5 w-5" /> },
  { id: 4, name: 'Pago', icon: <CreditCard className="h-5 w-5" /> },
  { id: 5, name: 'Documentos', icon: <UploadCloud className="h-5 w-5" /> },
  { id: 6, name: 'Confirmación', icon: <PartyPopper className="h-5 w-5" /> },
];

const OnlineAffiliationForm = ({ selectedPlan: initialPlan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { control, handleSubmit, trigger, formState: { errors } } = useForm({
    defaultValues: {
      plan: initialPlan || 'plan-a',
      nombre: '',
      apellido: '',
      dni: '',
      email: '',
    }
  });

  const handleNext = async () => {
    const fieldsToValidate = [['plan'], ['nombre', 'apellido', 'dni', 'email']];
    const isValid = await trigger(fieldsToValidate[currentStep]);
    if (isValid) {
      if (currentStep === steps.length - 2) {
        // Final submission step
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentStep(prev => prev + 1);
        }, 1500);
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = (data) => {
    // This function will only be called on the final real submit, which we are simulating.
    console.log("Form Data Submitted:", data);
  };

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <DialogTitle className="text-2xl">Selección del Plan</DialogTitle>
            <DialogDescription>Revisá y confirmá el plan al que te querés afiliar.</DialogDescription>
            <div className="mt-6">
              <Label htmlFor="plan">Plan</Label>
              <Controller
                name="plan"
                control={control}
                rules={{ required: "Debes seleccionar un plan" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="plan" className="w-full">
                      <SelectValue placeholder="Seleccioná un plan..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plan-a">Plan A - El Marco Fundamental</SelectItem>
                      <SelectItem value="plan-plata">Plan Plata - Elevando el Estándar</SelectItem>
                      <SelectItem value="plan-oro">Plan Oro - La Oferta Premium</SelectItem>
                      <SelectItem value="asist-30">Plan Asist 30</SelectItem>
                      <SelectItem value="asist-plata">Plan Asist Plata</SelectItem>
                      <SelectItem value="asist-oro">Plan Asist Oro</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.plan && <p className="text-red-500 text-sm mt-1">{errors.plan.message}</p>}
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <DialogTitle className="text-2xl">Información del Titular</DialogTitle>
            <DialogDescription>Completá con tus datos personales.</DialogDescription>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Controller name="nombre" control={control} rules={{ required: "El nombre es requerido" }} render={({ field }) => <Input id="nombre" {...field} />} />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
              </div>
              <div>
                <Label htmlFor="apellido">Apellido</Label>
                <Controller name="apellido" control={control} rules={{ required: "El apellido es requerido" }} render={({ field }) => <Input id="apellido" {...field} />} />
                {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="dni">DNI</Label>
                <Controller name="dni" control={control} rules={{ required: "El DNI es requerido", pattern: { value: /^\d{7,8}$/, message: "DNI inválido" } }} render={({ field }) => <Input id="dni" {...field} />} />
                {errors.dni && <p className="text-red-500 text-sm mt-1">{errors.dni.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Controller name="email" control={control} rules={{ required: "El email es requerido", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } }} render={({ field }) => <Input id="email" type="email" {...field} />} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
          </motion.div>
        );
      case 2:
      case 3:
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
            <div className="mx-auto w-fit bg-slate-100 rounded-full p-4 mb-4">{steps[currentStep].icon}</div>
            <DialogTitle className="text-2xl">Función en Desarrollo</DialogTitle>
            <DialogDescription>La sección de '{steps[currentStep].name}' aún no está implementada.</DialogDescription>
            <p className="mt-4 text-sm text-slate-500">🚧 ¡Pero no te preocupes! Puedes solicitar que se desarrolle en tu próximo mensaje. 🚀</p>
          </motion.div>
        );
      case 5:
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <div className="mx-auto w-fit bg-green-100 rounded-full p-4 mb-4">
                    <PartyPopper className="h-10 w-10 text-green-600" />
                </div>
                <DialogTitle className="text-2xl">¡Solicitud Recibida!</DialogTitle>
                <DialogDescription>
                    Tu proceso de afiliación ha comenzado. Recibirás un correo electrónico con los próximos pasos.
                </DialogDescription>
                <Button onClick={() => { setIsOpen(false); setTimeout(() => setCurrentStep(0), 300);}} className="mt-6 w-full">Cerrar</Button>
            </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
            setTimeout(() => setCurrentStep(0), 300);
        }
    }}>
      <DialogTrigger asChild>
        <Button className="w-full font-bold">
          Afiliarse Ahora
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= index ? 'bg-brand-blue border-brand-blue text-white' : 'bg-slate-100 border-slate-300'}`}>
                    {currentStep > index ? <Check/> : step.icon}
                  </div>
                  <p className={`text-xs mt-2 ${currentStep >= index ? 'font-bold text-brand-blue' : 'text-slate-500'}`}>{step.name}</p>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${currentStep > index ? 'bg-brand-blue' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                >
                    {StepContent()}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {currentStep < steps.length - 1 && (
            <DialogFooter className="bg-slate-50 p-4 border-t">
            {currentStep > 0 && (
                <Button variant="outline" onClick={handlePrev} className="mr-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                </Button>
            )}
            <Button onClick={handleNext} disabled={isLoading} className="ml-auto">
                {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <>
                    {currentStep === steps.length - 2 ? 'Finalizar Solicitud' : 'Siguiente'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
            </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OnlineAffiliationForm;