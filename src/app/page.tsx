'use client';
import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import Jobs from './components/Jobs';
import About from './components/About';
import Footer from './components/Footer';

const CompanyPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <div id="hero-section" className="relative bg-surface">
        <HeroSection />
      </div>
      <section id="trabalhos" className="py-16 sm:py-24 px-6 sm:px-8 bg-surface-alt">
        <Jobs />
      </section>
      <section id="sobre" className="py-16 sm:py-24 px-6 sm:px-8 bg-surface">
        <About />
      </section>
      <section id="profissionais" className="py-16 sm:py-24 px-6 sm:px-8 bg-surface-alt">
        <Carousel />
      </section>
      <section id="contato" className="py-16 sm:py-24 px-6 sm:px-8 bg-surface">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default CompanyPage;
