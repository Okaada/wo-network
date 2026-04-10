'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const certifications = [
    { src: '/images/itil.png', alt: 'ITIL Fundamentals', label: 'ITIL' },
    { src: '/images/cobit.png', alt: 'COBIT Fundamentals', label: 'COBIT' },
    { src: '/images/itsm20000.png', alt: 'ISO/IEC 20000', label: 'ISO 20000' },
    { src: '/images/az900.png', alt: 'Microsoft Azure Fundamentals (AZ-900)', label: 'AZ-900' },
    { src: '/images/adm.png', alt: 'Microsoft Azure Administrator (AZ-104)', label: 'AZ-104' },
    { src: '/images/azure-arch.png', alt: 'Azure Solutions Architect Expert (AZ-305)', label: 'AZ-305' },
    { src: '/images/desk.png', alt: 'Azure Virtual Desktop Specialty (AZ-140)', label: 'AZ-140' },
];

const CertCard = ({ src, alt, label }: { src: string; alt: string; label: string }) => (
    <div className="flex flex-col items-center p-6 bg-surface rounded-2xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="w-28 h-28 flex items-center justify-center mb-3">
            <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
        </div>
        <span className="text-sm font-semibold text-text-primary">{label}</span>
    </div>
);

const Carousel = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <div className="w-full md:w-2/3 space-y-4 mb-14">
                    <p className="text-brand font-medium text-sm uppercase tracking-wider">Nossa equipe</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                        Nossos Profissionais
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Especialistas certificados em tecnologias e frameworks reconhecidos globalmente, oferecendo soluções de ponta sob medida para as necessidades mais exigentes.
                    </p>
                </div>

                {/* Desktop: balanced rows (4 + 3 centered) */}
                <div className="hidden md:block w-full max-w-4xl">
                    <div className="grid grid-cols-4 gap-5 mb-5">
                        {certifications.slice(0, 4).map((cert) => (
                            <CertCard key={cert.label} {...cert} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-5">
                        {certifications.slice(4).map((cert) => (
                            <div key={cert.label} className="w-[calc(25%-15px)]">
                                <CertCard {...cert} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: swiper */}
                <div className="md:hidden w-full">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={16}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        className="w-full pb-10"
                    >
                        {certifications.map((cert) => (
                            <SwiperSlide key={cert.label}>
                                <CertCard {...cert} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <p className="text-base text-text-secondary leading-relaxed mt-12 max-w-2xl">
                    Essas certificações reforçam nossa capacidade de oferecer serviços de consultoria, implementação e suporte com precisão técnica e agilidade.
                </p>
            </div>
        </div>
    );
};

export default Carousel;
