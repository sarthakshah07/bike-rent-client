import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./_slider.css"
import { EffectCoverflow, Pagination, Navigation ,Autoplay } from 'swiper/modules';
import { Box,Typography } from '@mui/material';
import image1 from "../../assets/images/places/shipraArti.webp"
import image2 from "../../assets/images/places/ganeshji.png"
import image3 from "../../assets/images/places/gomtikund.avif"
import image4 from "../../assets/images/places/kaliyadeshPalace.jpg"
import image5 from "../../assets/images/places/mahakal.jpg"
import image6 from "../../assets/images/places/omlareshwar.jpg"
import image7 from "../../assets/images/places/ramghat.jpg"


SwiperCore.use([Autoplay])

const SliderContainer = () => {
  const placesImages = [
    {
      url: image1,
      name: "Shipra Arti"

    },
    {
      url: image2,
      name: "Ganesh mandir"
    },
    {
      url: image3,
      name: "Gomti Kund"
    },
    {
      url: image4,
      name: "kaliyadesh Palace"
    },
    {
      url: image5,
      name: "Mahakal Mandir"
    },
    {
      url: image6,
      name: "Omkareshwar"
    },
    {
      url: image7,
      name: "Ram Ghat"
    },
  ]

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={'auto'}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter:true,
        disableOnInteraction: false
      }}
      
      speed={1000}
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

      {placesImages?.map((item, i) => (
        <SwiperSlide draggable style={{ boxShadow: "10px 10px 30px grey", borderRadius: "20px" }} >
          <Box >
            <img src={item?.url} alt="slide_image" />
            <Typography variant='h4' textAlign="center" margin={1}>{item?.name}</Typography>

          </Box>
        </SwiperSlide>
      ))}



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
