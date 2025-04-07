
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Calendar from '../components/Calendar';
import Philosophy from '../components/Philosophy';
import Programs from '../components/Programs';
import Teachers from '../components/Teachers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Calendar />
      <Philosophy />
      <Programs />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
