import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_top">
          <h2 className="footer_title">Shreeraj Pawar</h2>
          <p className="footer_text">Software Engineer · New York, NY</p>
        </div>

        <ul className="footer_list">
          <li>
            <a href="#qualification" className="footer_links">Experience</a>
          </li>
          <li>
            <a href="#portfolio" className="footer_links">Projects</a>
          </li>
          <li>
            <a href="#contact" className="footer_links">Contact</a>
          </li>
          <li>
            <a
              href="https://github.com/zuther77"
              className="footer_links"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>

        <span className="footer_copy">
          © {new Date().getFullYear()} Shreeraj Pawar. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
