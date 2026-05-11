import React from 'react';
import { motion } from 'framer-motion';
import './PhotoGallery.scss';

const polaroids = [
  '/images/teddy_girl.png',
  '/images/teddy_girl.png'
];

const PhotoGallery = () => {
  return (
    <section className="polaroid-section section-container">
      <div className="polaroids-wrapper">
        <motion.div className="star-deco top-left" animate={{ rotate: 180 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>⭐</motion.div>
        
        {polaroids.map((url, index) => (
          <motion.div 
            key={index}
            className={`polaroid-card ${index === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="polaroid-img-wrapper">
              <img src={url} alt={`Memory ${index}`} />
            </div>
          </motion.div>
        ))}

        <motion.div className="star-deco bottom-right" animate={{ rotate: -180 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>⭐</motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
