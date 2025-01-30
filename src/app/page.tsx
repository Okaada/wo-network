'use client';
import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import Jobs from './components/Jobs';
import About from './components/About';

const CompanyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <style jsx global>{`
        html {
          scroll-padding-top: 80px;
        }
      `}</style>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <div id="hero-section" className="relative bg-white min-h-screen">
          <HeroSection />
        </div>
        <section id="trabalhos" className="py-12 px-4 sm:px-8 bg-white">
          <Jobs />
        </section>
        <section id="sobre" className="py-12 px-4 sm:px-8 bg-white">
          <About />
        </section>
        <section id="profissionais" className="py-12 px-4 sm:px-8 bg-white">
          <Carousel />
        </section>
        <section id="contato" className="py-12 px-4 sm:px-8 bg-gray-50">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default CompanyPage;
