import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img  alt="Logo Enrique Serra vertical" className="h-24" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/8e2c7fad9aea2503b11d71b4feb1ae5b.png" />
            </div>
            <p className="text-slate-400">
              Un respaldo confiable en cada momento, brindando tranquilidad y apoyo.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-bold mb-4 block font-heading">Servicios Fúnebres</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Sepelios y Cremaciones</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Salas Velatorias</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Traslados Nacionales</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition-colors">Moderna Flota de Vehículos</a></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-bold mb-4 block font-heading">Afiliados</span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#planes" className="hover:text-brand-blue transition-colors">Nuestros Planes</a></li>
              <li><a href="https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">Guía de Prestadores</a></li>
              <li><a href="#contacto" className="hover:text-brand-blue transition-colors">Afiliarse</a></li>
              <li><a href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">Portal de Autogestión</a></li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-bold mb-4 block font-heading">Contacto</span>
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