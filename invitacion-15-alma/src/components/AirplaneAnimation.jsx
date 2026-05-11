import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';
import './AirplaneAnimation.scss';

const AirplaneAnimation = () => {
  return (
    <div className="airplane-container">
      <motion.div
        className="airplane-icon"
        initial={{ x: '-20vw', y: 100, rotate: 15 }}
        animate={{ 
          x: ['-20vw', '120vw'], 
          y: [100, 20, 80, -20, 50] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <FaPlane size={50} color="#C89B3C" />
      </motion.div>
    </div>
  );
};

export default AirplaneAnimation;
