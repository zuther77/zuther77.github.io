import React from 'react'

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://github.com/zuther77"
        className="home_social-icons"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github" aria-hidden="true"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/shreepawar/"
        className="home_social-icons"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin" aria-hidden="true"></i>
      </a>

      <a
        href="mailto:shreeraj.pawar99@gmail.com"
        className="home_social-icons"
        aria-label="Email"
      >
        <i className="uil uil-envelope" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default Social;
