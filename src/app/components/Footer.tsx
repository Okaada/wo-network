'use client';
import React from 'react';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 py-12 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/images/wo.png" alt="Logo W.O Network" className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-slate-400 leading-relaxed">
              A Solução para seu negócio. Simplificando a gestão de serviços de tecnologia da informação desde 2000.
            </p>
            <a
              href="https://www.linkedin.com/company/w-o-network-ltda-epp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-brand transition duration-300"
              aria-label="LinkedIn da W.O Network"
            >
              <LinkedInIcon />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#apresentacao" className="text-slate-400 hover:text-brand transition duration-300 text-sm">Home</a>
              <a href="#trabalhos" className="text-slate-400 hover:text-brand transition duration-300 text-sm">Soluções</a>
              <a href="#sobre" className="text-slate-400 hover:text-brand transition duration-300 text-sm">Sobre Nós</a>
              <a href="#profissionais" className="text-slate-400 hover:text-brand transition duration-300 text-sm">Nossos Profissionais</a>
              <a href="#contato" className="text-slate-400 hover:text-brand transition duration-300 text-sm">Contato</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg">Contato</h3>
            <p className="text-sm text-slate-400">
              contato@wonetwork.com.br
            </p>
            <a
              href="https://wonetwork.vagas.solides.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-brand hover:text-brand-light transition duration-300"
            >
              Trabalhe Conosco
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} W.O Network. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
