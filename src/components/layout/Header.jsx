import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ onOpenPlansModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { action: onOpenPlansModal, text: 'Planes' },
    { href: 'https://serra-cloud.com/consulta/auth-login?auth_key=21232F297A57A5A743894A0E4A801FC3', text: 'Guía de Prestadores', target: '_blank' },
    { href: '#sucursales', text: 'Sucursales' },
    { href: '#app', text: 'App Móvil' },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#contacto', text: 'Contacto' },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: "0%" }
  };

  return (
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <img alt="Logo Enrique Serra" className="h-12" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f1ede706-3f51-416c-8c74-d412c8257ab7/be5e3f7490433b568b89a246ae5db224.png" />
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;