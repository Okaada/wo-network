'use client';
import React from 'react';
import {
    ChatBubbleBottomCenterIcon,
    LightBulbIcon,
    ComputerDesktopIcon, GlobeAltIcon, BookOpenIcon
  } from '@heroicons/react/24/outline';

const Jobs = () => {
    return(
        <section id="trabalhos" className="py-12 px-4 sm:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8" style={{ color: '#ffc929' }}>
            Nossas Soluções
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Oferecemos um portfólio diversificado de soluções tecnológicas, desenvolvidas para garantir a conectividade, eficiência e segurança que sua empresa precisa.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            <li className="md:col-span-2 lg:col-span-2 bg-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <ChatBubbleBottomCenterIcon className="h-14 w-14 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-2xl text-gray-800">Suporte Técnico</h3>
              <p className="mt-4 text-gray-700 text-lg">
                Nossa equipe de analistas e técnicos especializados oferece suporte completo com 
                <strong> Field Service</strong>.
                Atuamos diretamente na sua empresa para resolver problemas técnicos rapidamente.
                Se necessário, nossos profissionais podem ficar alocados, garantindo suporte contínuo e
                personalizado para manter suas operações sempre eficientes e seguras.
              </p>
            </li>

            <li className="md:col-span-2 lg:col-span-2 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <GlobeAltIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Projetos</h3>
              <p className="mt-3 text-gray-600">
                Oferecemos suporte especializado e serviços completos para sua infraestrutura de TI, incluindo:<br></br>
                • Firewall Fortigate e segurança de rede.<br></br>
                • Apoio na implantação do SAP S/4HANA.<br></br>
                • WSUS e atualização centralizada de sistemas.<br></br>
                • Migração de Active Directory e ambientes de domínio.<br></br>
                • Virtualização com VMware e Hyper-V.<br></br>
              </p>
            </li>

            <li className="md:col-span-2 lg:col-span-2 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <LightBulbIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Soluções de Fibra Óptica</h3>
              <p className="mt-3 text-gray-600">
                Levamos conectividade de alta performance para sua empresa.
                <br></br>
                Com soluções modernas e eficientes, garantimos velocidade e confiabilidade
                para a sua infraestrutura de redes.
              </p>
            </li>

            <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <ComputerDesktopIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Infraestrutura</h3>
              <p className="mt-3 text-gray-600">
                Oferecemos peças e soluções completas para infraestrutura de redes,
                como cabos, conectores, switches, roteadores e muito mais.
              </p>
            </li>

            <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <BookOpenIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Governança</h3>
              <p className="mt-3 text-gray-600">
                Garanta controle, eficiência e conformidade em seus processos de TI.
                <br></br>
                Com nossas soluções de governança, ajudamos sua empresa a estruturar políticas, monitorar ativos e otimizar a tomada de decisão, tudo alinhado às melhores práticas de mercado.
                <br></br>
                Transforme sua gestão de TI com segurança e estratégia!
              </p>
            </li>

          </ul>
        </div>
      </section>
    );
}

export default Jobs;