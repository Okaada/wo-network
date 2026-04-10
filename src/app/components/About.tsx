'use client';
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-brand font-medium text-sm uppercase tracking-wider">Quem somos</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                Sobre Nós
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Fundada em 3 de agosto de 2000, a W.O Network nasceu com o compromisso de simplificar a gestão de serviços de tecnologia da informação. Nossa missão é fornecer soluções tecnológicas eficientes, personalizadas e de alta qualidade, que atendam às necessidades específicas de cada cliente.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Com uma equipe altamente qualificada, atuamos em diversos projetos,
                desde Conectorização Óptica, Fusão e Certificação, até Cabeamento Estruturado,
                Organização de Racks, Manutenção em Computadores e
                Consultoria especializada em ambientes Windows e Linux.
                Estamos preparados para impulsionar sua infraestrutura tecnológica.
              </p>
            </div>

            <div className="hidden md:flex w-full md:w-1/2 justify-center">
              <img
                src="/images/about-bg.png"
                alt="Imagem de sobre nós"
                className="w-full max-w-md h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
    );
}

export default About;
