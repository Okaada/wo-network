'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-yellow-300 rounded-full w-24 h-24 absolute top-10 left-10 opacity-30 animate-pulse"></div>
          <div className="bg-yellow-400 rounded-full w-16 h-16 absolute top-1/4 right-20 opacity-50 animate-bounce"></div>
          <div className="bg-yellow-300 rounded-full w-12 h-12 absolute bottom-20 left-1/3 opacity-50 animate-pulse"></div>
          <div className="bg-yellow-500 rounded-full w-8 h-8 absolute bottom-10 right-10 opacity-30 animate-pulse"></div>
        </div>

        <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between p-8 pt-20">
          <section id="apresentacao" className="w-full md:w-1/2 text-left space-y-6 p-6">
            <h2 className="text-5xl font-bold leading-snug tracking-tight text-left text-[#ffc929]">
              Oferecemos o <span className="block">suporte que você</span> precisa para se destacar!
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Impulsione sua empresa com soluções inovadoras de infraestrutura e suporte especializado. Com expertise em redes, suporte técnico e otimização de processos, oferecemos abordagens personalizadas que garantem máxima eficiência e segurança. Assim, você pode focar no que realmente importa: o crescimento sustentável e estratégico do seu negócio.
            </p>
            <a href="#contato" className="inline-block mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Fale Conosco
            </a>
          </section>

          <div className="hidden md:block w-full md:w-1/2 pl-0 md:pl-16">
            <img
              src="/images/herosection.png"
              alt="Imagem de suporte"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>
      </div>
  );
};

export default HeroSection;