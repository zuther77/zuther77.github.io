import React from 'react'
import "./about.css";

const stats = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Focus', value: 'Backend & Cloud' },
  { label: 'Based in', value: 'New York, NY' },
];

const Info = () => {
  return (
    <div className="about_info">
      {stats.map((item) => (
        <div className="about_box" key={item.label}>
          <h3 className="about_title">{item.label}</h3>
          <span className="about_subtitle">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
