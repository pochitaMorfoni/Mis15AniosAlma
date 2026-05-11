import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import './Hero.scss';

const Hero = () => {
  // Fecha de ejemplo (puede ser modificada luego)
  const eventDate = new Date('2026-12-15T21:00:00');

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content glass-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p className="hero-pretitle">BOARDING PASS</p>
        <h2 className="hero-subtitle">Estás invitado/a a celebrar los 15 de</h2>
        <h1 className="hero-title">Alma</h1>
        <p className="hero-date">15 Diciembre 2026 | 21:00 HS</p>
        
        <div className="countdown-wrapper">
          <CountdownTimer date={eventDate} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
