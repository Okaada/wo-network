'use client';
import React from 'react';
import { AdjustmentsHorizontalIcon, ChatBubbleBottomCenterIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

const CompanyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Adicionando scroll-padding-top no HTML */}
      <style jsx global>{`
        html {
          scroll-padding-top: 80px; /* Compensar a altura da navbar */
        }
      `}</style>

      {/* Navbar fixa e centralizada */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-lg z-50">
        <div className="container mx-auto flex justify-center items-center p-4">
          <div className="flex space-x-8">
            <a href="#apresentacao" className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300">Home</a>
            <a href="#clientes" className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300">Clientes</a>
            <a href="#trabalhos" className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300">Soluções</a>
            <a href="#sobre" className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300">Sobre Nós</a>
            <a href="#contato" className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white min-h-screen overflow-hidden">
        {/* Efeitos de fundo com bolinhas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-yellow-300 rounded-full w-24 h-24 absolute top-10 left-10 opacity-30 animate-pulse"></div>
          <div className="bg-yellow-400 rounded-full w-16 h-16 absolute top-1/4 right-20 opacity-50 animate-bounce"></div>
          <div className="bg-yellow-300 rounded-full w-12 h-12 absolute bottom-20 left-1/3 opacity-50 animate-pulse"></div>
          <div className="bg-yellow-500 rounded-full w-8 h-8 absolute bottom-10 right-10 opacity-30 animate-pulse"></div>
        </div>

        <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between p-8 pt-20">
          {/* Apresentação da Empresa */}
          <section id="apresentacao" className="w-full md:w-1/2 text-left space-y-6 p-6">
            <h2 className="text-5xl font-bold leading-snug tracking-tight text-left text-[#ffc929]">
              Oferecemos o <span className="block">suporte que você</span> precisa para se destacar!
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Impulsione sua empresa com soluções avançadas em infraestrutura e suporte especializado. Com expertise em redes, suporte técnico e otimização de processos, estamos preparados para criar abordagens personalizadas que garantem eficiência e segurança, permitindo que você foque no que realmente importa: o crescimento do seu negócio.
            </p>
            <a href="#contato" className="inline-block mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Fale Conosco
            </a>
          </section>

          {/* Imagem ao lado direito */}
          <div className="w-full md:w-1/2 pl-0 md:pl-16">
            <img
              src="/images/herosection.png"
              alt="Imagem de suporte"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>
      </div>

      {/* Seção de Clientes */}
      <section id="clientes" className="py-12 bg-gray-50">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#ffc929' }}>
          Nossos Clientes
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Ao longo dos anos, tivemos o privilégio de trabalhar com várias empresas e instituições de diversos setores, oferecendo soluções personalizadas e suporte especializado para impulsionar seus negócios.
        </p>

        {/* Grade de Clientes */}
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
          {/* Cliente 1 */}
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
            <img src="/images/citrosuco.png" alt="Cliente 1" className="h-12 sm:h-16 w-auto object-contain" />
          </div>
          {/* Cliente 2 */}
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
            <img src="/images/fischer.png" alt="Cliente 2" className="h-12 sm:h-16 w-auto object-contain" />
          </div>
          {/* Cliente 3 */}
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
            <img src="/images/terral.png" alt="Cliente 3" className="h-12 sm:h-16 w-auto object-contain" />
          </div>
        </div>

        {/* Texto opcional abaixo dos clientes */}
        <p className="text-center text-gray-700 mt-8">
          Estamos prontos para colaborar com você e sua empresa. Junte-se aos nossos clientes satisfeitos!
        </p>
      </section>


      {/* Trabalhos oferecidos */}
      <section id="trabalhos" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8" style={{ color: '#ffc929' }}>
            Nossas Soluções
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Oferecemos um portfólio diversificado de soluções tecnológicas, desenvolvidas para garantir a conectividade, eficiência e segurança que sua empresa precisa.
          </p>

          {/* Grid de Soluções */}
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Suporte Técnico em destaque */}
            <li className="md:col-span-2 lg:col-span-2 bg-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <ChatBubbleBottomCenterIcon className="h-14 w-14 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-2xl text-gray-800">Suporte Técnico</h3>
              <p className="mt-4 text-gray-700 text-lg">
                Nossa equipe de analistas e técnicos especializados oferece suporte completo com <strong>Field Service</strong>. Atuamos diretamente na sua empresa para resolver problemas técnicos rapidamente. Se necessário, nossos profissionais podem ficar alocados, garantindo suporte contínuo e personalizado para manter suas operações sempre eficientes e seguras.
              </p>
            </li>

            {/* Soluções de Fibra Óptica */}
            <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <LightBulbIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Soluções de Fibra Óptica</h3>
              <p className="mt-3 text-gray-600">
                Implementamos soluções avançadas em fibra óptica para conectividade de alta performance.
              </p>
            </li>

            {/* Infraestrutura */}
            <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <ComputerDesktopIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Infraestrutura</h3>
              <p className="mt-3 text-gray-600">
                Otimização de redes, servidores e sistemas para garantir alta disponibilidade e escalabilidade.
              </p>
            </li>

            {/* Gestão de Processos */}
            <li className=" md:col-span-2 lg:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center text-center">
              <AdjustmentsHorizontalIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800">Gestão de Processos</h3>
              <p className="mt-3 text-gray-600">
                Implementação de processos ágeis e eficientes, otimizados para atender às suas necessidades.
              </p>
            </li>
          </ul>
        </div>
      </section>


      {/* Sobre Nós */}
      <section id="sobre" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ color: '#ffc929' }}>
            Sobre Nós
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Fundada em 3 de agosto de 2000, a W.O Network nasceu com o compromisso de simplificar a gestão de serviços de tecnologia da informação. Nossa missão é fornecer soluções tecnológicas eficientes, personalizadas e de alta qualidade, que atendam às necessidades específicas de cada cliente.
          </p>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Com uma equipe altamente qualificada, atuamos em diversos projetos, desde Conectorização Óptica, Fusão e Certificação, até Cabeamento Estruturado, Organização de Racks, Manutenção em Computadores e Consultoria especializada em ambientes Windows e Linux. Estamos preparados para impulsionar sua infraestrutura tecnológica.
          </p>
        </div>
      </section>


      {/* Formulário de Contato */}
      <section id="contato" className="py-8 sm:py-12 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl sm:text-4xl font-bold text-center" style={{ color: '#ffc929' }}>Contato para Orçamentos</h2>
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
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input type="tel" className="mt-1 block w-full p-2 border rounded-lg" placeholder="Seu telefone" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea className="mt-1 block w-full p-2 border rounded-lg" rows={4} placeholder="Escreva sua mensagem"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default CompanyPage;
