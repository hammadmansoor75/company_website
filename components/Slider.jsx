import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
const Slider = () => {

  return (
    <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{clickable:true}}
        navigation
        className='w-full h-100'
    >
        <SwiperSlide>
            <Image src='/assets/hero-slide-1.jpg' width={30} height={30} alt="slider"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/assets/hero-slide-2.jpg' width={30} height={30} alt="slider"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/assets/hero-slide-3.jpg' width={30} height={30} alt="slider"/>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider
