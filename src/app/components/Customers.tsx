'use client';
import React from 'react';

const Customers = () => {
    return (
        <section id="clientes" className="py-12 px-4 sm:px-8 bg-gray-50">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#ffc929' }}>
                Nossos Clientes
            </h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                Ao longo dos anos, tivemos o privilégio de trabalhar com várias empresas e instituições de diversos setores, oferecendo soluções personalizadas e suporte especializado para impulsionar seus negócios.
            </p>

            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
                <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
                    <img src="/images/citrosuco.png" alt="Cliente 1" className="h-12 sm:h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
                    <img src="/images/fischer.png" alt="Cliente 2" className="h-12 sm:h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
                    <img src="/images/terral.png" alt="Cliente 3" className="h-12 sm:h-16 w-auto object-contain" />
                </div>
            </div>

            <p className="text-center text-gray-700 mt-8">
                Estamos prontos para colaborar com você e sua empresa. Junte-se aos nossos clientes satisfeitos!
            </p>
        </section>
    );
}

export default Customers;