import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "../../assets/images/activa.png"
import "./_slider.css"
import { EffectCoverflow, Pagination,Navigation  } from 'swiper/modules';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const SliderContainer = () => {
    // const settings = {
    //     dots: false,
    //     speed: 800,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     // nextArrow: <KeyboardDoubleArrowRightIcon />,
    //     // prevArrow: <KeyboardDoubleArrowLeftIcon />,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
          
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >
          <img src={Image} alt="slide_image"  />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_2} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_3} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_4} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_5} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_6} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={slide_image_7} alt="slide_image" /> */}
          <img src={Image} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    )
}

export default SliderContainer
