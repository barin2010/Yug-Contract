// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperHeader() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-col">
            <span>провідний</span> Національний дистриб’ютор
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-row">
            <span>30</span>
            <p>років на ринку</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-row">
            <span>22</span>
            <p>регіональні представництва</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-col">
            <span>мульти продуктовий</span> портфель
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-col">
            <span>міжнародні</span> контакти
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
