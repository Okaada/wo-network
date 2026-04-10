'use client';
import React from 'react';
import {
    ChatBubbleBottomCenterIcon,
    LightBulbIcon,
    ComputerDesktopIcon, GlobeAltIcon, BookOpenIcon
  } from '@heroicons/react/24/outline';

const Jobs = () => {
    return(
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand font-medium text-sm uppercase tracking-wider mb-3">O que fazemos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
              Nossas Soluções
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Oferecemos um portfólio diversificado de soluções tecnológicas, desenvolvidas para garantir a conectividade, eficiência e segurança que sua empresa precisa.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <li className="md:col-span-2 bg-[var(--card-highlight)] p-8 lg:p-10 rounded-2xl border border-brand/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand/20 rounded-xl flex items-center justify-center mb-5">
                <ChatBubbleBottomCenterIcon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="font-semibold text-2xl text-text-primary">Suporte Técnico</h3>
              <p className="mt-4 text-text-secondary text-base leading-relaxed max-w-2xl">
                Nossa equipe de analistas e técnicos especializados oferece suporte completo com
                <strong> Field Service</strong>.
                Atuamos diretamente na sua empresa para resolver problemas técnicos rapidamente.
                Se necessário, nossos profissionais podem ficar alocados, garantindo suporte contínuo e
                personalizado para manter suas operações sempre eficientes e seguras.
              </p>
            </li>

            <li className="md:col-span-2 bg-surface p-8 lg:p-10 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <GlobeAltIcon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl text-text-primary">Projetos</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Oferecemos suporte especializado e serviços completos para sua infraestrutura de TI, incluindo:<br></br>
                • Firewall Fortigate e segurança de rede.<br></br>
                • Suporte integral na infraestrutura para o projeto SAP S/4HANA.<br></br>
                • WSUS e atualização centralizada de sistemas.<br></br>
                • Migração de Active Directory e ambientes de domínio.<br></br>
                • Virtualização com VMware e Hyper-V.
              </p>
            </li>

            <li className="md:col-span-2 bg-surface p-8 lg:p-10 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <LightBulbIcon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl text-text-primary">Soluções de Fibra Óptica</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Levamos conectividade de alta performance para sua empresa.
                Com soluções modernas e eficientes, garantimos velocidade e confiabilidade
                para a sua infraestrutura de redes.
              </p>
            </li>

            <li className="bg-surface p-6 lg:p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <ComputerDesktopIcon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl text-text-primary">Infraestrutura</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Oferecemos peças e soluções completas para infraestrutura de redes,
                como cabos, conectores, switches, roteadores e muito mais.
              </p>
            </li>

            <li className="bg-surface p-6 lg:p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <BookOpenIcon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl text-text-primary">Governança</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Garanta controle, eficiência e conformidade em seus processos de TI.
                Com nossas soluções de governança, ajudamos sua empresa a estruturar políticas, monitorar ativos e otimizar a tomada de decisão, tudo alinhado às melhores práticas de mercado.
              </p>
            </li>
          </ul>
        </div>
    );
}

export default Jobs;
