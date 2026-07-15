import React from 'react';
import "./portfolio.css";
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <span className="section_label reveal">Selected work</span>
      <h2 className="section_title reveal">Projects</h2>
      <span className="section_subtitle reveal">Swipe or use the arrows to browse all six projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
