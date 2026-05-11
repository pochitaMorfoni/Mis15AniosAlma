import React from 'react';
import AnimatedAirplaneButton from './AnimatedAirplaneButton';
import './LocationDetails.scss';

const LocationDetails = () => {
  return (
    <section className="location-section section-container">
      <h2 className="location-title">Lugar del evento</h2>
      
      <div className="venue-photo">
        <img 
          src="https://picsum.photos/seed/venue/800/500" 
          alt="Lugar del evento" 
        />
        <div className="venue-blob"></div>
      </div>

      <div className="btn-wrapper">
        <AnimatedAirplaneButton 
          text="VER UBICACIÓN" 
          type="secondary"
          onClick={() => window.open('https://maps.google.com', '_blank')} 
        />
      </div>
    </section>
  );
};

export default LocationDetails;
