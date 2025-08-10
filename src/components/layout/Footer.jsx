import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
<<<<<<< HEAD
              <img  alt="Logo Enrique Serra vertical" className="h-24" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/8e2c7fad9aea2503b11d71b4feb1ae5b.png" />
=======
              <img  alt="Logo Enrique Serra vertical" className="h-24" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/8e2c7fad9aea2503b11d71b4feb1ae5b.png" />
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
            </div>
            <p className="text-slate-400">
              Un respaldo confiable en cada momento, brindando tranquilidad y apoyo.
            </p>
          </div>
          
          <div>
<<<<<<< HEAD
            <span className="text-lg font-bold mb-4 block">Área Fúnebre</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#funebre" className="hover:text-brand-blue transition-colors">Servicios Integrales</a></li>
              <li><a href="#funebre" className="hover:text-brand-blue transition-colors">Salas Velatorias</a></li>
              <li><a href="#funebre" className="hover:text-brand-blue transition-colors">Traslados</a></li>
              <li><a href="tel:081077773772" className="hover:text-brand-blue transition-colors">Urgencias 24hs</a></li>
=======
            <span className="text-lg font-bold mb-4 block font-heading">Servicios Fúnebres</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Sepelios y Cremaciones</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Salas Velatorias</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Traslados Nacionales</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Moderna Flota de Vehículos</a></li>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
            </ul>
          </div>
          
          <div>
<<<<<<< HEAD
            <span className="text-lg font-bold mb-4 block">Afiliaciones</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#afiliaciones" className="hover:text-brand-blue transition-colors">Beneficios</a></li>
              <li><a href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">Guía de Prestadores</a></li>
              <li><a href="#contacto" className="hover:text-brand-blue transition-colors">Formulario de Contacto</a></li>
=======
            <span className="text-lg font-bold mb-4 block font-heading">Afiliados</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#planes" className="hover:text-brand-blue transition-colors">Nuestros Planes</a></li>
              <li><a href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">Guía de Prestadores</a></li>
              <li><a href="#contacto" className="hover:text-brand-blue transition-colors">Afiliarse</a></li>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
              <li><a href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">Portal de Autogestión</a></li>
            </ul>
          </div>
          
          <div>
<<<<<<< HEAD
            <span className="text-lg font-bold mb-4 block">Contacto</span>
=======
            <span className="text-lg font-bold mb-4 block font-heading">Contacto</span>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
            <ul className="space-y-2 text-slate-400">
              <li><span className="font-semibold">Urgencias 24hs:</span> 0810 777 73772</li>
              <li><span className="font-semibold">WhatsApp:</span> 3865 566000</li>
              <li><span className="font-semibold">Email:</span> info@empresaserra.com.ar</li>
              <li><span className="font-semibold">Dirección:</span> 24 de Septiembre 1.605, Concepción, Tucumán</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Enrique Serra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;