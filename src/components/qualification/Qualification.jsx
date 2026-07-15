import React, { useState } from 'react';
import "./qualification.css";

const education = [
  {
    title: 'New York University',
    subtitle: 'Master of Science in Computer Science · New York, NY',
    date: 'Sep 2021 – May 2023',
  },
  {
    title: 'University of Mumbai',
    subtitle: 'Bachelor of Engineering in Computer Engineering · Mumbai, India',
    date: 'Aug 2017 – Jun 2021',
  },
];

const experience = [
  {
    title: 'Humatics',
    subtitle: 'Software Engineer · Boston, MA',
    date: 'Mar 2024 – Present',
    points: [
      'Owned a real-time IoT monitoring dashboard scaling to 100+ concurrent devices, cutting UI response from 80ms to 16ms.',
      'Built GPT-powered operational chat on AWS Batch/Athena and sensor ETL pipelines with Parquet, S3 versioning, and dashboards.',
      'Reduced InfluxDB query time by 60% and shipped sandbox environments with AWS CDK + GitHub Actions CI/CD.',
    ],
  },
  {
    title: 'TrekIt',
    subtitle: 'Software Engineer · New York, NY',
    date: 'Jul 2023 – Mar 2024',
    points: [
      'Engineered a cross-platform React Native travel app with 15+ screens for itinerary and expense management.',
      'Integrated GPT-3.5 for conversational itinerary generation across Python and Node.js backends.',
    ],
  },
  {
    title: 'IpserLabs',
    subtitle: 'Software Development Intern · Mountain View, CA',
    date: 'Feb 2023 – May 2023',
    points: [
      'Built secure Java authentication with session management and OOP-based access control.',
      'Delivered responsive React.js / D3.js / Tailwind dashboards and PostgreSQL-backed crawling integrations.',
    ],
  },
  {
    title: 'IpserLabs',
    subtitle: 'Software Development Intern · Mountain View, CA',
    date: 'Jun 2022 – Aug 2022',
    points: [
      'Developed Node.js / Express / MySQL microservices for e-commerce with Stripe payments.',
      'Migrated a legacy monolith to React.js and TailwindCSS to improve maintainability.',
    ],
  },
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const items = toggleState === 1 ? education : experience;

  return (
    <section className="qualification section" id="qualification">
      <span className="section_label reveal">Background</span>
      <h2 className="section_title reveal">Experience & education</h2>
      <span className="section_subtitle reveal">Where I&apos;ve built and learned</span>

      <div className="qualification_container container reveal">
        <div className="qualification_tabs" role="tablist" aria-label="Background sections">
          <button
            type="button"
            role="tab"
            aria-selected={toggleState === 2}
            className={toggleState === 2 ? 'qualification_button qualification_active' : 'qualification_button'}
            onClick={() => setToggleState(2)}
          >
            Experience
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={toggleState === 1}
            className={toggleState === 1 ? 'qualification_button qualification_active' : 'qualification_button'}
            onClick={() => setToggleState(1)}
          >
            Education
          </button>
        </div>

        <ol className="timeline">
          {items.map((item, index) => (
            <li className="timeline_item" key={`${item.title}-${item.date}`}>
              <div className="timeline_rail" aria-hidden="true">
                <span className="timeline_dot"></span>
                {index < items.length - 1 ? <span className="timeline_line"></span> : null}
              </div>
              <article className="timeline_card">
                <time className="timeline_date">{item.date}</time>
                <h3 className="timeline_title">{item.title}</h3>
                <p className="timeline_subtitle">{item.subtitle}</p>
                {item.points ? (
                  <ul className="timeline_points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Qualification;
