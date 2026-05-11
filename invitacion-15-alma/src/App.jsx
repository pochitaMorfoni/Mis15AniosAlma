import React from 'react';
import HeaderIntro from './components/HeaderIntro';
import EventCalendar from './components/EventCalendar';
import PhotoGallery from './components/PhotoGallery';
import LocationDetails from './components/LocationDetails';
import FilmStrip from './components/FilmStrip';
import RsvpSection from './components/RsvpSection';

function App() {
  return (
    <>
      <HeaderIntro />
      <EventCalendar />
      <PhotoGallery />
      <LocationDetails />
      <FilmStrip />
      <RsvpSection />
    </>
  );
}

export default App;
