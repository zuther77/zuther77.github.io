import React, { useEffect, useState } from 'react';
import "./scrollup.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= 560);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={visible ? 'scrollup show-scroll' : 'scrollup'}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup_icon" aria-hidden="true"></i>
    </a>
  );
};

export default ScrollUp;
