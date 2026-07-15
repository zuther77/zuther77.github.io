import React, { useEffect, useState } from 'react';
import "./header.css";

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#qualification', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [toggle]);

  return (
    <header className={`header ${scrolled ? 'scroll-header' : ''}`}>
      <nav className="nav container" aria-label="Primary">
        <a href="#home" className="nav_logo">Shreeraj</a>

        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className="nav_list">
            {navItems.map((item) => (
              <li key={item.href} className="nav_items">
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.href);
                    setToggle(false);
                  }}
                  className={activeNav === item.href ? 'nav_links active-link' : 'nav_links'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav_close"
            aria-label="Close menu"
            onClick={() => setToggle(false)}
          >
            <i className="uil uil-times" aria-hidden="true"></i>
          </button>
        </div>

        <a href="#contact" className="nav_cta buttons">Contact</a>

        <button
          type="button"
          className="nav_toggle"
          aria-label="Open menu"
          aria-expanded={toggle}
          onClick={() => setToggle((open) => !open)}
        >
          <i className="uil uil-bars" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
