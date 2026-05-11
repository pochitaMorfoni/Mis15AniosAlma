import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';
import './MusicPlayer.scss';

const MusicPlayer = () => {
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
    <div className="music-player-container">
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        loop 
      />
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        aria-label="Toggle Music"
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
    </div>
  );
};

export default MusicPlayer;
