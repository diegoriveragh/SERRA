import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
=======
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ onOpenPlansModal }) => {
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { 
      href: '#funebre', 
      text: 'Área Fúnebre',
      subLinks: [
        { href: '#funebre', text: 'Inicio Área Fúnebre' },
        { href: '#obituario', text: 'Obituario' },
        { href: '#info-relevante', text: 'Información Relevante' },
      ]
    },
    { 
      text: 'Afiliaciones',
      href: '#afiliaciones',
      subLinks: [
        { href: '#afiliaciones', text: 'Inicio Afiliaciones' },
        { href: 'https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3', text: 'Guía de Prestadores', external: true },
        { href: 'https://afiliados.serra-cloud.com/index.php?r=site%2Flogin', text: 'Portal Afiliados', external: true },
        { href: '#planes-afiliacion', text: 'Planes de Afiliación' },
        { href: '#afiliarse-ahora', text: 'Afiliarse Ahora' },
        { href: '#guias-afiliacion', text: 'Guías App y AG' },
      ]
    },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#ubicaciones', text: 'Sucursales' },
=======
  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { action: onOpenPlansModal, text: 'Planes' },
    { href: 'https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3', text: 'Guía de Prestadores', target: '_blank' },
    { href: '#sucursales', text: 'Sucursales' },
    { href: '#app', text: 'App Móvil' },
    { href: '#nosotros', text: 'Nosotros' },
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
    { href: '#contacto', text: 'Contacto' },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: "0%" }
  };

  return (
<<<<<<< HEAD
    <>
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'glass-effect' : 'bg-white/90'}`}
      >
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#inicio"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img alt="Logo Enrique Serra horizontal" className="h-16" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/be5e3f7490433b568b89a246ae5db224.png" />
            </motion.a>
            
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, i) => 
                link.subLinks ? (
                  <DropdownMenu key={i}>
                    <DropdownMenuTrigger asChild>
                      <a href={link.href} className="flex items-center text-slate-600 hover:text-brand-blue transition-colors font-bold">
                        {link.text}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.subLinks.map((subLink, j) => (
                        <DropdownMenuItem key={j} asChild>
                          <a href={subLink.href} target={subLink.external ? "_blank" : "_self"} rel={subLink.external ? "noopener noreferrer" : ""} className="font-bold">{subLink.text}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a key={i} href={link.href} className="text-slate-600 hover:text-brand-blue transition-colors font-bold">{link.text}</a>
                )
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="text-slate-800">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
=======
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#inicio"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img alt="Logo Enrique Serra horizontal" className="h-16" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/be5e3f7490433b568b89a246ae5db224.png" />
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.slice(0, 7).map((link, i) => (
              link.action ? (
                <button key={i} onClick={link.action} className="text-slate-600 hover:text-brand-blue transition-colors font-medium">{link.text}</button>
              ) : (
                <a key={i} href={link.href} target={link.target} rel={link.target ? "noopener noreferrer" : ""} className="text-slate-600 hover:text-brand-blue transition-colors font-medium">{link.text}</a>
              )
            ))}
            <Button asChild className="bg-brand-blue text-white hover:bg-blue-700 font-bold">
              <a href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer">Portal Afiliados</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-slate-800">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
<<<<<<< HEAD
            className="mobile-menu-container"
          >
            <div className="flex justify-between items-center p-6 border-b flex-shrink-0">
              <img alt="Logo Enrique Serra" className="h-12" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/42f27d5a-013e-49fb-a4ef-ca6ccf288801/be5e3f7490433b568b89a246ae5db224.png" />
=======
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <img alt="Logo Enrique Serra" className="h-12" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/be5e3f7490433b568b89a246ae5db224.png" />
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
<<<<<<< HEAD
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link, i) => 
                  link.subLinks ? (
                    <div key={i}>
                       <a href={link.href} onClick={() => setIsOpen(false)} className="text-slate-700 text-lg font-bold">{link.text}</a>
                       <div className="flex flex-col space-y-4 mt-2 pl-4">
                        {link.subLinks.map((subLink, j) => (
                           <a key={j} href={subLink.href} onClick={() => setIsOpen(false)} target={subLink.external ? "_blank" : "_self"} rel={subLink.external ? "noopener noreferrer" : ""} className="text-slate-600 text-base font-bold">{subLink.text}</a>
                        ))}
                       </div>
                    </div>
                  ) : (
                    <a key={i} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-700 text-lg font-bold">{link.text}</a>
                  )
                )}
              </div>
=======
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link, i) => (
                link.action ? (
                  <button key={i} onClick={() => { link.action(); setIsOpen(false); }} className="text-slate-700 text-lg font-medium text-left">{link.text}</button>
                ) : (
                  <a key={i} href={link.href} onClick={() => setIsOpen(false)} target={link.target} rel={link.target ? "noopener noreferrer" : ""} className="text-slate-700 text-lg font-medium">{link.text}</a>
                )
              ))}
              <Button asChild className="bg-brand-blue text-white hover:bg-blue-700 font-bold w-full mt-4 py-3">
                <a href="https://afiliados.serra-cloud.com/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer">Portal Afiliados</a>
              </Button>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </>
=======
    </motion.header>
>>>>>>> 8553b851aa7d22f7b4bd0935a9b0d33a19c2015c
  );
};

export default Header;