import React, { useEffect } from 'react';
import "./App.css"
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/Skills/Skills';

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <Header />

      <main className="main">
        <Home />
        <Qualification />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <ScrollUp />
    </>
  )
}

export default App
