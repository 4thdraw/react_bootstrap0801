import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";



import 'swiper/css';

export function Slider(props) {
   

    return (
        <>


      <Swiper
      loop = {true}
      slidesPerView={2.5}
      centeredSlides={true}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='section  yellow d-flex flex-column justify-content-center'>Slide 1</SwiperSlide>
      <SwiperSlide className='section yellow d-flex flex-column justify-content-center'>Slide 2</SwiperSlide>
      <SwiperSlide className='section  yellow d-flex flex-column justify-content-center'>Slide 3</SwiperSlide>
      <SwiperSlide className='section   yellow d-flex flex-column justify-content-center'>Slide 4</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
            

        </>
    )
}


