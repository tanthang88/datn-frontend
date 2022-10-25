import React from 'react'
import { Row, Col } from 'antd'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function ProductSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/30/638001640971906236_F-C1_1200x300.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/31/637975675901404701_F-C1_1200x300.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/14/638013069358950963_F-C1_1200x300.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/31/637975846002373772_F-C1_1200x300-2.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/16/637989488854227512_F-C1_1200x300.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/9/638009546916531563_F-C1_1200x300.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/1/638002145283822086_F-C1_1200x300.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/31/637975675901404701_F-C1_1200x300.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded-lg shadow-rose-400'
            src='https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/19/638018136788172154_F-C1_1200x300.png'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
