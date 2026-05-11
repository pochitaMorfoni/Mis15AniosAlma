import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './EventCalendar.scss';

const EventCalendar = () => {
  const eventDate = new Date('2026-07-11T21:00:00'); // Julio 11 a las 21hs

  const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  // Julio 2026 empieza en Miércoles (índice 3)
  const blanks = Array(3).fill('');
  const dates = Array.from({length: 31}, (_, i) => i + 1);
  const calendarCells = [...blanks, ...dates];

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="countdown-oval">
      <div className="countdown-ring"></div>
      <div className="countdown-ring secondary"></div>
      <div className="countdown-numbers">
        {String(days).padStart(3, '0')}:{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="countdown-labels">
        <span>DÍAS</span>
        <span>HORAS</span>
        <span>MINUTOS</span>
        <span>SEGUNDOS</span>
      </div>
      <div className="sparkles">✨</div>
    </div>
  );

  return (
    <section className="event-calendar section-container">
      <h2 className="handwritten month-title">Julio</h2>
      
      <div className="calendar-grid">
        <div className="weekdays">
          {days.map((d, i) => <div key={i} className="day-name">{d}</div>)}
        </div>
        <div className="days">
          {calendarCells.map((day, i) => (
            <div key={i} className={`calendar-cell ${day === 11 ? 'marked' : ''}`}>
              {day}
              {day === 11 && (
                <motion.div 
                  className="heart-marker"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaHeart color="var(--color-secondary)" size={35} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="countdown-wrapper">
        <Countdown date={eventDate} renderer={renderer} />
      </div>
    </section>
  );
};

export default EventCalendar;
