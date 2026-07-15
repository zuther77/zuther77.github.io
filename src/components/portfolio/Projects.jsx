import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { projectsData } from './Data';
import PortfolioItems from './PortfolioItems';

const Projects = () => {
  return (
    <div className="work_carousel container reveal">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.work_nav--prev',
          nextEl: '.work_nav--next',
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        grabCursor
        breakpoints={{
          640: { slidesPerView: 1.15 },
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        className="work_swiper"
        a11y={{
          prevSlideMessage: 'Previous project',
          nextSlideMessage: 'Next project',
          paginationBulletMessage: 'Go to project {{index}}',
        }}
      >
        {projectsData.map((item) => (
          <SwiperSlide key={item.id}>
            <PortfolioItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="work_controls">
        <button
          type="button"
          className="work_nav work_nav--prev"
          aria-label="Previous project"
        >
          <i className="uil uil-angle-left-b" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="work_nav work_nav--next"
          aria-label="Next project"
        >
          <i className="uil uil-angle-right-b" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Projects;
