import AnimatedAirplaneButton from './AnimatedAirplaneButton';
import './RsvpSection.scss';

const RsvpSection = () => {
  return (
    <section className="rsvp-section section-container">
      <div className="invitation-text">
        <p>¡Me haría muy feliz que vinieras a mi fiesta!</p>
        <p>Tu presencia haría que mi cumpleaños sea aún más especial.</p>
        <p>Espero poder compartir risas, momentos lindos y celebrar juntos este día.</p>
      </div>

      <div className="airplane-illustration">
        <img 
          src="/images/airplane_illustration (1).png" 
          alt="Avión de papel o viaje" 
          className="plane-img" 
        />
        <div className="pink-blob"></div>
      </div>

      <div className="rsvp-button-wrapper">
        <AnimatedAirplaneButton 
          text="CONFIRMA AQUÍ TU ASISTENCIA" 
          type="primary" 
          onClick={() => window.open('https://wa.me/1234567890', '_blank')} 
        />
      </div>

      <footer className="footer">
        <p>Contacto para invitaciones: 2262559594</p>
      </footer>
    </section>
  );
};

export default RsvpSection;
