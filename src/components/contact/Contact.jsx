import React from 'react';
import "./contact.css";

const links = [
  {
    label: 'Email',
    value: 'shreeraj.pawar99@gmail.com',
    href: 'mailto:shreeraj.pawar99@gmail.com',
    icon: 'uil-envelope',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreepawar',
    href: 'https://www.linkedin.com/in/shreepawar',
    icon: 'uil-linkedin',
    external: true,
  },
  {
    label: 'Phone',
    value: '+1 (551) 318-7508',
    href: 'tel:+15513187508',
    icon: 'uil-phone',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/zuther77',
    href: 'https://github.com/zuther77',
    icon: 'uil-github',
    external: true,
  },
];

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact_band">
        <div className="contact_container container reveal">
          <div className="contact_intro">
            <span className="section_label">Reach me</span>
            <h2 className="contact_heading">Have a role or idea in mind?</h2>
            <p className="contact_copy">
              I&apos;m available for software engineering opportunities and collaborations.
              The fastest way to reach me is email.
            </p>
            <a href="mailto:shreeraj.pawar99@gmail.com" className="buttons button--flex contact_primary">
              Email me
              <i className="uil uil-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="contact_channels">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact_channel"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span className="contact_channel-icon" aria-hidden="true">
                  <i className={`uil ${link.icon}`}></i>
                </span>
                <span className="contact_channel-text">
                  <span className="contact_channel-label">{link.label}</span>
                  <span className="contact_channel-value">{link.value}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="contact_credit">
            © {new Date().getFullYear()} Shreeraj Pawar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
