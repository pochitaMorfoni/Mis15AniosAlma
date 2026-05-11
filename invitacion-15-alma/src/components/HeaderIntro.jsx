import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaSyncAlt, FaPlane } from 'react-icons/fa';
import './HeaderIntro.scss';

const HeaderIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="header-intro">
      <div className="collage-wrapper">
        <div className="title-container">
          <svg className="star-drawn left" viewBox="0 0 24 24"><path fill="none" stroke="#d49db3" strokeWidth="1.5" d="M12 2l3 7 7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z"/></svg>
          <h1 className="handwritten title-main">Happy Birthday</h1>
          <svg className="star-drawn right" viewBox="0 0 24 24"><path fill="none" stroke="#d49db3" strokeWidth="1.5" d="M12 2l3 7 7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z"/></svg>
        </div>

        <div className="collage-scene">
          {/* Photo Card */}
          <div className="photo-card">
            <img src="/images/main_girl.png" alt="Birthday Girl" />
            <span className="love-text">I LOVE YOU</span>
          </div>

          {/* Birthday Pink Passport (Style requested) */}
          <div className="birthday-passport-card">
            <div className="passport-ticket">
              <div className="ticket-text">BOARDING PASS</div>
            </div>
            
            <div className="passport-cover">
              <div className="passport-text top">PASAPORTE</div>
              <div className="passport-text title">MIS 15</div>
              
              <div className="passport-center-emblem">
                <div className="star-circle"></div>
                <div className="cross-lines"></div>
                <FaPlane className="gold-plane" />
              </div>
              
              <div className="passport-text bottom">ALMA</div>
            </div>
          </div>

          {/* Stickers */}
          <div className="sticker-star s1">☆</div>
          <div className="sticker-star s2">☆</div>
          <div className="sticker-dot d1"></div>
          <div className="sticker-dot d2"></div>
          <div className="sticker-cake">🎂</div>
          <svg className="star-drawn bottom-right" viewBox="0 0 24 24"><path fill="none" stroke="#2a2a2a" strokeWidth="1.5" d="M12 2l3 7 7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z"/></svg>
        </div>
      </div>

      <div className="music-player-container section-container">
        <h2 className="subtitle-text llamativo">Dale play a mi canción favorita</h2>

        <div className="music-player-pill">
          <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
          <div className="player-controls">
            <FaRandom className="player-icon small" />
            <FaStepBackward className="player-icon" />
            <button className="play-btn" onClick={togglePlay}>
              {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" style={{ marginLeft: '4px' }} />}
            </button>
            <FaStepForward className="player-icon" />
            <FaSyncAlt className="player-icon small" />
          </div>
          <div className="player-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: isPlaying ? '50%' : '0%' }}></div>
              <div className="progress-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderIntro;
