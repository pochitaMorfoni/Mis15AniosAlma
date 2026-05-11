import React from 'react';
import './FilmStrip.scss';

const FilmStrip = () => {
  return (
    <section className="film-strip-section">
      <div className="handwritten note-top">My story</div>
      
      <div className="film-strip">
        <div className="film-holes top"></div>
        <div className="film-images">
          <img src="https://picsum.photos/seed/travel1/200/120" alt="story 1" />
          <img src="/images/main_girl.png" alt="story 2" style={{ objectPosition: 'top' }} />
          <img src="https://picsum.photos/seed/travel3/200/120" alt="story 3" />
        </div>
        <div className="film-holes bottom"></div>
      </div>

      <div className="film-strip offset">
        <div className="film-holes top"></div>
        <div className="film-images">
          <img src="https://picsum.photos/seed/travel4/200/120" alt="story 4" />
          <img src="/images/teddy_girl.png" alt="story 5" style={{ objectPosition: 'center' }} />
          <img src="https://picsum.photos/seed/travel6/200/120" alt="story 6" />
        </div>
        <div className="film-holes bottom"></div>
      </div>

      <div className="notes-container section-container">
        <div className="handwritten note-left">Today will be a good day</div>
        <div className="handwritten note-right">You are braver than you believe,<br/>stronger than you seem,<br/>and smarter than you think.</div>
      </div>
    </section>
  );
};

export default FilmStrip;
