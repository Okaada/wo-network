'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Importa o estilo do efeito Coverflow
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const Carousel = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col items-center text-center z-10 relative">
                <div className="w-full md:w-2/3 space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ color: '#ffc929' }}>
                        Nossos Profissionais
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Nossa equipe é composta por especialistas altamente qualificados, certificados em tecnologias e frameworks reconhecidos globalmente. Esse nível de especialização nos permite oferecer soluções tecnológicas de ponta, sob medida para atender às necessidades mais exigentes.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Confira algumas das certificações que destacam nosso compromisso com a excelência:
                    </p>

                    {/* Carrossel de certificações */}
                    <div className="w-full mt-8">
                        <Swiper
                            modules={[Pagination, Navigation, EffectCoverflow]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true} // Ativa o looping
                            navigation
                            pagination={{ clickable: true }}
                            centeredSlides={true} // Centraliza o slide ativo
                            effect="coverflow" // Adiciona o efeito Coverflow
                            coverflowEffect={{
                                rotate: 30, // Ângulo de rotação do slide
                                stretch: 0, // Espaçamento entre os slides
                                depth: 100, // Profundidade
                                modifier: 1, // Intensidade do efeito
                                slideShadows: false, // Desativa sombras nos slides
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }, // Mostra 3 itens no desktop
                            }}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/itil.png"
                                        alt="Certificação ITIL Fundamentals"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/cobit.png"
                                        alt="Certificação COBIT Fundamentals"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/itsm20000.png"
                                        alt="Certificação ISO 20000"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/az900.png"
                                        alt="Certificação Microsoft Azure Fundamentals (AZ-900)"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/adm.png"
                                        alt="Certificação Microsoft Azure Administrator (AZ-104)"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/azure-arch.png"
                                        alt="Certificação Microsoft Azure Solutions Architect Expert (AZ-305)"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/desk.png"
                                        alt="Certificação Microsoft Azure Virtual Desktop Specialty (AZ-140)"
                                        className="w-40 h-auto mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-6">
                        Essas certificações reforçam nossa capacidade de oferecer serviços de consultoria, implementação e suporte com precisão técnica e agilidade, sempre priorizando os objetivos do seu negócio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Carousel;