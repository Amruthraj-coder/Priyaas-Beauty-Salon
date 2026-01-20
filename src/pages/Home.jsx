import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.scss';
import Navbar from './Navbar';
import Services from './Services';
import AboutUs from './Aboutus';
import SalonLocation from './SalonLocation';
import Contact from './Contact';

// Custom hook for smooth scroll to hash
const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;

    // Wait for layout to paint, then scroll smoothly
    requestAnimationFrame(() => {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    });
  }, [hash]);
};

const Home = () => {
  const [scrolled, setScrolled] = useState(0);
  const location = useLocation();

  // Scroll to hash on mount/location change
  useScrollToHash();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Clamp for effect
  const heroStyle = {
    transform: `scale(${1 - Math.min(scrolled, 250) / 1200})`,
    filter: `blur(${Math.min(scrolled, 60) / 30}px) brightness(${1 - Math.min(scrolled, 150)/600})`,
    transition: 'transform 0.3s, filter 0.3s',
  };

  const overlayStyle = {
    background: `rgba(40, 20, 20, ${0.35 + Math.min(scrolled, 100) / 350})`,
    transition: 'background 0.3s',
  };

  return (
    <div style={{ 
      background: "linear-gradient(to bottom, #f7acba88 0%, #f7d7df34 40%, #ffffff 100%)",
      scrollBehavior: 'smooth' // Global smooth scroll (optional, CSS also works)
    }}>
      <div className="home-hero" style={heroStyle}>
        <div className="overlay" style={overlayStyle}>
          <div className="hero-content">
            <div className="logo-icon">{/* SVG Here */}</div>
            <h1 className="subtitle">PRIYAA'S</h1>
            <h1 className="title">BEAUTY SALON</h1>
            <p className="credit">Created by Priyaa'sBeautySalon.com</p>
            <a  href="#services" className="cta-btn">View Our Services</a>
          </div>
        </div>
      </div>
      
      <Navbar />
      
      <section id="services">
        <Services />
      </section>
      
      <section id="about">
        <AboutUs />
      </section>
      
      <section id="location">
        <SalonLocation />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
