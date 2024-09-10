import React from 'react';
import { AdjustmentsHorizontalIcon, ChatBubbleBottomCenterIcon, LightBulbIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

const CompanyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Container da imagem no topo */}
      <div className="relative w-full h-64">
        <img 
          src="/images/banner2.png" 
          alt="Imagem topo" 
          className="w-full h-full object-cover"
        />

        {/* Navbar sobreposta */}
        <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-90 shadow-lg">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-xl font-bold text-yellow-500">
              W.O Network
            </div>
            <div className="space-x-8">
              <a href="#apresentacao" className="text-yellow-500 hover:text-yellow-600">Home</a>
              <a href="#trabalhos" className="text-yellow-500 hover:text-yellow-600">Trabalhos</a>
              <a href="#clientes" className="text-yellow-500 hover:text-yellow-600">Clientes</a>
              <a href="#sobre" className="text-yellow-500 hover:text-yellow-600">Sobre Nós</a>
              <a href="#contato" className="text-yellow-500 hover:text-yellow-600">Contato</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="space-y-10 p-8 pt-24">
        {/* Apresentação da Empresa */}
        <section id="apresentacao" className="text-center py-12 bg-white shadow-md rounded-lg">
          <h2 className="text-4xl font-bold" style={{ color: '#ffc929' }}>Podemos alavancar os processos da sua Empresa!</h2>
          <p className="mt-4 text-lg text-gray-700">Otimize sua infraestrutura com soluções eficientes e suporte especializado
            com experiência comprovada em redes, suporte técnico e infraestrutura, ofereço soluções personalizadas para garantir que sua empresa opere de forma segura, escalável e eficiente.
            Desde a implementação e manutenção de redes até a otimização de processos, estou preparado para ajudar sua equipe a focar no que realmente importa: o crescimento do negócio.</p>
        </section>

        {/* Trabalhos oferecidos */}
        <section id="trabalhos" className="py-12">
          <h2 className="text-4xl font-bold text-center" style={{ color: '#ffc929' }}>Soluções</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <li className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <LightBulbIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <span className="font-bold text-lg text-gray-700">Soluções de fibra óptica</span>
              <p className="mt-2 text-gray-600">Oferecemos soluções avançadas em fibra óptica para conectividade e telecomunicações.</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <ComputerDesktopIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <span className="font-bold text-lg text-gray-700">Infraestrutura</span>
              <p className="mt-2 text-gray-600">Implementação e otimização de redes, servidores e sistemas para garantir alta disponibilidade, segurança e escalabilidade. </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <ChatBubbleBottomCenterIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <span className="font-bold text-lg text-gray-700">Suporte</span>
              <p className="mt-2 text-gray-600">Atendimento especializado para resolução de problemas técnicos e suporte contínuo.</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <AdjustmentsHorizontalIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <span className="font-bold text-lg text-gray-700">Processos</span>
              <p className="mt-2 text-gray-600">Implantação de processos para atender às necessidades dos clientes.</p>
            </li>
          </ul>
        </section>

        {/* Sobre Nós */}
        <section id="sobre" className="py-12">
          <h2 className="text-4xl font-bold text-center" style={{ color: '#ffc929' }}>Sobre Nós</h2>
          <p className="mt-4 text-lg text-center max-w-4xl mx-auto text-gray-700">A W.O Network foi fundada em 3 de agosto de 2000 com a missão de se tornar uma companhia com foco singular na simplificação dos serviços de tecnologia da informação.
            A visão neste momento é construir uma empresa que não só apoia, mas também promove o crescimento de nossos clientes.
            Oferecemos soluções tecnológicas e equipe altamente qualificada para execução dos mais variados projetos como: Conectorização Óptica, Fusão, Certificação, Cabeamento Estruturado, Organização de Racks, Manutenção em Computadores, Banco de Dados, Consultoria em Ambientes Windows e Linux e muitos outros.
            <br></br>
            Nossa missão é promover soluções robustas e disponibilizar o melhor custo benefício, desempenhando nossos projetos com foco no crescimento de nossos clientes.
          </p>
        </section>

        {/* Formulário de Contato */}
        <section id="contato" className="py-12 bg-white shadow-md rounded-lg">
          <h2 className="text-4xl font-bold text-center" style={{ color: '#ffc929' }}>Contato para Orçamentos</h2>
          <form className="max-w-lg mx-auto mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text" className="mt-1 block w-full p-2 border rounded-lg" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full p-2 border rounded-lg" placeholder="Seu email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea className="mt-1 block w-full p-2 border rounded-lg" rows={4} placeholder="Escreva sua mensagem"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Enviar</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CompanyPage;
