import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        apikey: "7142a6fa-11ba-4bc1-95e9-5e2dbfdea5ae",
        ...data,
        subject: "Nuevo mensaje de contacto de Enrique Serra Web",
        from_name: "Enrique Serra Web",
        "replyto": data.email,
      });

      if (response.data.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos a la brevedad.",
          variant: "success",
        });
        reset();
      } else {
        throw new Error(response.data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: "¡Oh, no! Hubo un error.",
        description: "No se pudo enviar tu mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-slate-800 text-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Estamos aquí para <span className="text-slate-300">acompañarte</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contactanos hoy y descubrí el plan que mejor se adapta a vos y a tu familia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            variants={fadeInUp} 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-700/50">
              <Phone className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">Servicio Fúnebre (24hs)</div>
                <a href="tel:081077773772" className="text-slate-300 hover:text-white text-xl">0810 777 SERRA (73772)</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg">
              <MessageSquare className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">WhatsApp</div>
                <a href="https://wa.me/543865566000" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">3865 566000</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg">
              <Mail className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">Email</div>
                <a href="mailto:info@empresaserra.com.ar" className="text-slate-300 hover:text-white">info@empresaserra.com.ar</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg">
              <MapPin className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">Casa Central</div>
                <div className="text-slate-300">24 de Septiembre 1.605, (4146) Concepción, Tucumán</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-slate-700/50 rounded-2xl p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Envíanos tu consulta</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre completo"
                {...register("nombre", { required: "El nombre es requerido" })}
                className={`w-full p-4 rounded-lg border-0 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${errors.nombre ? 'focus:ring-red-500' : 'focus:ring-brand-blue'}`}
              />
              {errors.nombre && <p className="text-red-400 text-sm">{errors.nombre.message}</p>}
              <input 
                type="email" 
                placeholder="Email"
                {...register("email", { required: "El email es requerido", pattern: { value: /^\S+@\S+$/i, message: "Formato de email inválido" }})}
                className={`w-full p-4 rounded-lg border-0 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-brand-blue'}`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              <textarea 
                placeholder="Tu mensaje..."
                rows="4"
                {...register("mensaje", { required: "El mensaje es requerido" })}
                className={`w-full p-4 rounded-lg border-0 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${errors.mensaje ? 'focus:ring-red-500' : 'focus:ring-brand-blue'} resize-none`}
              ></textarea>
              {errors.mensaje && <p className="text-red-400 text-sm">{errors.mensaje.message}</p>}
              <Button 
                type="submit"
                className="w-full bg-white hover:bg-slate-200 text-slate-900 font-bold py-4 text-lg flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;