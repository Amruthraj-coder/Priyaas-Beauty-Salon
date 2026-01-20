// src/components/Services.jsx

import React, { useState } from 'react';
import { Carousel } from 'antd';
import './Services.scss';

import bgHair from '../assets/images/bg_hair.png';
import bgBridal from '../assets/images/bg_Bridal.png';
import bgSkin from '../assets/images/bg_skinfacial.png';
import bgSpa from '../assets/images/bg_spa.png';
import bgColor from '../assets/images/bg_color.png';

const servicesData = [
  {
    title: 'Hair Styling & Cutting',
    subtitle: 'Fresh looks for every occasion',
    description:
      'Precision haircuts, blow-dries, and styling tailored to your face shape and lifestyle.',
    tag: 'Most Popular',
    bgImage: bgHair,
  },
  {
    title: 'Bridal & Party Makeup',
    subtitle: 'Flawless glam that lasts',
    description:
      'HD makeup, long‑wear foundation, and customized looks for brides and party events.',
    tag: 'Bridal Special',
    bgImage: bgBridal,
  },
  {
    title: 'Skin & Facial Care',
    subtitle: 'Glow from within',
    description:
      'Deep cleansing facials, tan removal, and glow treatments for all skin types.',
    tag: 'Skin Care',
    bgImage: bgSkin,
  },
  {
    title: 'Hand, Feet & Spa',
    subtitle: 'Relax, renew, refresh',
    description:
      'Manicure, pedicure, and spa rituals to pamper your hands and feet.',
    tag: 'Spa Time',
    bgImage: bgSpa,
  },
  {
    title: 'Hair Coloring',
    subtitle: 'Vibrant shades & trends',
    description: 'Custom color treatments, highlights, and balayage.',
    tag: 'Color Specialist',
    bgImage: bgColor,
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="services-section"
      style={{
        backgroundImage: `url(${servicesData[currentSlide].bgImage})`,
      }}
    >
      <div className="overlay" />
      <div className="services-content-wrapper">
        <div className="services-header">
          <p className="services-kicker">Our Services</p>
          <h2 className="services-title">Enhance your beauty, effortlessly</h2>
          {/* <p className="services-subtitle">
            From everyday styling to special occasions, Priyaa&apos;s Beauty Salon offers personalized services designed around you.
          </p> */}
        </div>

        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots
          dotPosition="bottom"
          className="services-carousel"
          effect="fade"
          pauseOnHover
          afterChange={setCurrentSlide}
        >
          {servicesData.map((service, idx) => (
            <div key={idx}>
              <div className="service-slide">
                <span className="service-tag">{service.tag}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                {/* <p className="service-description">{service.description}</p> */}
                <button className="service-cta" onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Book now <span className="service-cta__icon">➜</span>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services;

