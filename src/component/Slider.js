import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';

export function Slider(props) {   

    return ( 
        <>
      <Swiper
        loop = {true}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
             
          768:{
        slidesPerView:3,
        spaceBetween : 10             
        },
        1024:{
        slidesPerView: 4,
        spaceBetween : 20
        }
        
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide className='section  yellow d-flex flex-column justify-content-center'>Slide 1</SwiperSlide>
      <SwiperSlide className='section yellow d-flex flex-column justify-content-center'>Slide 2</SwiperSlide>
      <SwiperSlide className='section  yellow d-flex flex-column justify-content-center'>Slide 3</SwiperSlide>
      <SwiperSlide className='section   yellow d-flex flex-column justify-content-center'>Slide 4</SwiperSlide>
      <SwiperSlide className='section   yellow d-flex flex-column justify-content-center'>Slide 4</SwiperSlide>
      <SwiperSlide className='section   yellow d-flex flex-column justify-content-center'>Slide 4</SwiperSlide>
      <SwiperSlide className='section   yellow d-flex flex-column justify-content-center'>Slide 4</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>

        </>
    )
}


