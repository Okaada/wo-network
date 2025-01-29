'use client';
import React from 'react';
const About = () => {
    return (
        <section id="sobre" className="py-12 px-4 sm:px-8 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ color: '#ffc929' }}>
              Sobre Nós
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Fundada em 3 de agosto de 2000, a W.O Network nasceu com o compromisso de simplificar a gestão de serviços de tecnologia da informação. Nossa missão é fornecer soluções tecnológicas eficientes, personalizadas e de alta qualidade, que atendam às necessidades específicas de cada cliente.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Com uma equipe altamente qualificada, atuamos em diversos projetos,
              desde Conectorização Óptica, Fusão e Certificação, até Cabeamento Estruturado,
              Organização de Racks, Manutenção em Computadores e
              Consultoria especializada em ambientes Windows e Linux.
              Estamos preparados para impulsionar sua infraestrutura tecnológica.
            </p>
          </div>

          <div className="hidden md:block w-full md:w-1/2 pl-0 md:pl-16">
            <img
              src="/images/about-bg.png"
              alt="Imagem de sobre nós"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>
      </section>
    );
}

export default About;