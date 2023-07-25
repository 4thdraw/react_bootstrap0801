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
        {
          
          props.map.map((v, i) =>{
            return <SwiperSlide className={v.cls}><p>{
                  
                     v.content.split("<br>").map(( x, idx) =>{
                      return <p>{x}</p>

                     })
                    
                     
              }</p></SwiperSlide>
          })
        
        }
    
    
    </Swiper>

        </>
    )
}


