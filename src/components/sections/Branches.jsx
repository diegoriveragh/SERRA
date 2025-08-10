import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      city: 'Concepción',
      address: '24 de Septiembre 1.605',
      phone: '(03865) 422684 / 422273',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=24+de+Septiembre+1605,+Concepción,+Tucumán'
    },
    {
      city: 'Aguilares',
      address: 'Carlos Pellegrini 642',
      phone: '(03865) 481129',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Carlos+Pellegrini+642,+Aguilares,+Tucumán'
    },
    {
      city: 'Juan Bautista Alberdi',
      address: 'Av. Campero 600',
      phone: '(03865) 471099',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Campero+600,+Juan+Bautista+Alberdi,+Tucumán'
    },
    {
      city: 'La Cocha',
      address: 'San Martin 61',
      phone: '(03865) 496124',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=San+Martin+61,+La+Cocha,+Tucumán'
    },
    {
      city: 'San Miguel de Tucumán',
      address: 'San Martín 999',
      phone: '(0381) 4310756 / 4310947',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=San+Martín+999,+San+Miguel+de+Tucumán,+Tucumán'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="sucursales" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Nuestras <span className="gradient-text">Sucursales</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Encontrá la sede de Enrique Serra más cercana a vos. Siempre listos para ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-blue transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 font-heading">{branch.city}</h3>
                <div className="flex items-start space-x-3 text-slate-600 mb-2">
                  <MapPin className="h-5 w-5 mt-1 text-brand-blue flex-shrink-0" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Phone className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span>{branch.phone}</span>
                </div>
              </div>
              <a 
                href={branch.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 text-brand-blue font-bold inline-flex items-center group"
              >
                Ver en Google Maps
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;