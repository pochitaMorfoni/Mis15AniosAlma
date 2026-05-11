import React from 'react';
import './AnimatedAirplaneButton.scss';

const AnimatedAirplaneButton = ({ text, onClick, type = "primary" }) => {
  return (
    <div className="airplane-action-wrapper">
      <button className={`simple-btn ${type}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default AnimatedAirplaneButton;
