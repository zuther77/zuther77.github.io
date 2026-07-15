import React from 'react'

const PortfolioItems = ({ item }) => {
  return (
    <a
      className="work_card"
      href={item.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${item.title} on GitHub`}
    >
      <div className="work_media">
        <img src={item.image} alt="" className="work_img" />
      </div>
      <div className="work_content">
        <span className="work_category">{item.category}</span>
        <h3 className="work_title">{item.title}</h3>
        <p className="work_description">{item.description}</p>
        <span className="work_button">
          View code <i className="bx bx-right-arrow-alt work_button-icon" aria-hidden="true"></i>
        </span>
      </div>
    </a>
  );
};

export default PortfolioItems;
