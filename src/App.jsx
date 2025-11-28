import React, { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import Storyboard from './components/Storyboard';
import Characters from './components/Character';
import Gameplay from './components/Gameplay';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const heroRef = useRef(null);
  const storyboardRef = useRef(null);
  const charactersRef = useRef(null);
  const gameplayRef = useRef(null);
  const newsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const sections = {
    hero: heroRef,
    story: storyboardRef,
    characters: charactersRef,
    gameplay: gameplayRef,
    news: newsRef,
    about: aboutRef,
    footer: footerRef,
  };

  const scrollToSection = (key) => {
    const ref = sections[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={{ height: '100vh', overflowY: 'auto' }}>
      <Navbar scrollToSection={scrollToSection} />
      <section ref={heroRef} style={{ scrollSnapAlign: 'start' }}><Hero /></section>
      <section ref={storyboardRef} style={{ scrollSnapAlign: 'start' }}><Storyboard /></section>
      <section ref={charactersRef} style={{ scrollSnapAlign: 'start' }}><Characters /></section>
      <section ref={gameplayRef} style={{ scrollSnapAlign: 'start' }}><Gameplay /></section>
      <section ref={newsRef} style={{ scrollSnapAlign: 'start' }}><News /></section>
      <section ref={aboutRef} style={{ scrollSnapAlign: 'start' }}><About /></section>
      <section ref={footerRef} style={{ scrollSnapAlign: 'start' }}><Footer /></section>
    </div>
  );
}

export default App;
