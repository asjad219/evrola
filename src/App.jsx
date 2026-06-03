import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import BentoServices from './components/BentoServices.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import { EmergencyRibbon, MobileStickyBar } from './components/Extras.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <EmergencyRibbon />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoServices />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
