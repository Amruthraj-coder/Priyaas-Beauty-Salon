import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  const ref = useRef(null);
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`about-us ${isInView ? 'about-us--visible' : ''}`}
      id="about"
    >
      <div className="about-us__content">
        <h2 className="about-us__title">About Priyaa&apos;s Salon</h2>
        <div className="about-us__underline" />
        <p className="about-us__text">
          Priyaa&apos;s Salon is a modern beauty studio dedicated to premium hair and
          skin care, blending luxury services with a calm, welcoming atmosphere.
        </p>
        <p className="about-us__text">
          Since 2015, our experienced stylists and skin experts have focused on
          personalised consultations, safe products, and techniques that enhance
          your natural beauty with every visit.
        </p>
      </div>

      {/* Background image is now handled in SCSS on this wrapper */}
      <div className="about-us__image-wrapper" />
    </section>
  );
};

export default AboutUs;
