'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-surface min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-brand/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <section id="apresentacao" className="w-full md:w-1/2 text-left space-y-8">
          <div className="inline-block px-4 py-1.5 bg-brand/10 text-brand text-sm font-medium rounded-full">
            Tecnologia &amp; Infraestrutura
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text-primary">
            Oferecemos o suporte que você precisa para{' '}
            <span className="text-brand">se destacar</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Impulsione sua empresa com soluções inovadoras de infraestrutura e suporte especializado. Garantimos máxima eficiência e segurança para o crescimento estratégico do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#contato" className="inline-flex items-center justify-center bg-brand text-gray-900 font-semibold py-3.5 px-8 rounded-lg hover:bg-brand-dark transition duration-300">
              Fale Conosco
            </a>
            <a href="#trabalhos" className="inline-flex items-center justify-center border-2 border-brand text-brand font-semibold py-3.5 px-8 rounded-lg hover:bg-brand/10 transition duration-300">
              Nossas Soluções
            </a>
          </div>
        </section>

        <div className="hidden md:flex w-full md:w-1/2 pl-0 md:pl-12 justify-center">
          <img
            src="/images/herosection.png"
            alt="Imagem de suporte"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
