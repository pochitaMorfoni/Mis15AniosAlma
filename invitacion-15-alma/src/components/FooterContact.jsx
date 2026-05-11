import React from 'react';
import { FaInstagram, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import './FooterContact.scss';

const FooterContact = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content glass-card">
        <h3>¿Te gustó esta invitación?</h3>
        <p>Creamos invitaciones digitales personalizadas para tu próximo gran viaje.</p>
        
        <div className="social-links">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="Website"><FaGlobe /></a>
        </div>
        
        <div className="developer-info">
          <p>Desarrollado con ♥ por <strong>TuMarca Studio</strong></p>
          <small>© 2026 Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
