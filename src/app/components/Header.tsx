'use client';
import React, { useState } from 'react';
import {
  Bars4Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import NavLink from '@/app/components/navlink';
import ThemeToggle from '@/app/components/ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--nav-bg)] shadow-lg z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <img src="/images/wo.png" alt="Logo W.O Network" className="h-10 w-auto" />
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars4Icon className="h-8 w-8" />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#apresentacao" text="Home" />
          <NavLink href="#trabalhos" text="Soluções" />
          <NavLink href="#sobre" text="Sobre Nós" />
          <NavLink href="#profissionais" text="Nossos Profissionais" />
          <NavLink href="https://wonetwork.vagas.solides.com.br" text="Trabalhe Conosco" external />
          <NavLink href="#contato" text="Contato" />
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-[var(--border)]">
          <a href="#apresentacao" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Home</a>
          <a href="#trabalhos" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Soluções</a>
          <a href="#sobre" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Sobre Nós</a>
          <a href="https://wonetwork.vagas.solides.com.br" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Trabalhe Conosco</a>
          <a href="#profissionais" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Profissionais</a>
          <a href="#contato" onClick={handleNavClick} className="block px-4 py-2 text-brand font-bold hover:text-brand-dark transition duration-300">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
