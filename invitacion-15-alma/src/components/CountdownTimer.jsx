import React from 'react';
import Countdown from 'react-countdown';
import './CountdownTimer.scss';

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="countdown-completed">¡El gran día ha llegado!</div>;
    } else {
      return (
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-value">{days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{hours}</span>
            <span className="countdown-label">Hs</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{minutes}</span>
            <span className="countdown-label">Min</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value">{seconds}</span>
            <span className="countdown-label">Seg</span>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
