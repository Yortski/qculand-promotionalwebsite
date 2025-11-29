import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import Storyboard from './components/Storyboard';
import Characters from './components/Character';
import Gameplay from './components/Gameplay';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';

function App() {
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);
  const storyboardRef = useRef(null);
  const charactersRef = useRef(null);
  const gameplayRef = useRef(null);
  const newsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const [showFAB, setShowFAB] = useState(false);

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
    if (ref?.current && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFAB(!entry.isIntersecting);
      },
      { root: scrollContainerRef.current, threshold: 0 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="sticky top-0 z-50">
        <Navbar scrollToSection={scrollToSection} />
      </div>

      <div
        ref={scrollContainerRef}
        style={{ height: '100vh', overflowY: 'auto', scrollSnapType: 'y mandatory' }}
      >
        <section ref={heroRef} style={{ scrollSnapAlign: 'start' }}><Hero /></section>
        <section ref={storyboardRef} style={{ scrollSnapAlign: 'start' }}><Storyboard /></section>
        <section ref={charactersRef} style={{ scrollSnapAlign: 'start' }}><Characters /></section>
        <section ref={gameplayRef} style={{ scrollSnapAlign: 'start' }}><Gameplay /></section>
        <section ref={newsRef} style={{ scrollSnapAlign: 'start' }}><News /></section>
        <section ref={aboutRef} style={{ scrollSnapAlign: 'start' }}><About /></section>
        <section ref={footerRef} style={{ scrollSnapAlign: 'start' }}><Footer /></section>
      </div>

      {showFAB && <FloatingActions scrollContainerRef={scrollContainerRef} />}
    </div>
  );
}

export default App;
