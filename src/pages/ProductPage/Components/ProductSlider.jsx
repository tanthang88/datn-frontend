import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { URL_BACKEND } from '../../../config/constants'

export default function ProductSlider({ sliders }) {
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
        {!isEmpty(sliders)
          ? sliders.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  className='rounded-lg shadow-rose-400'
                  src={URL_BACKEND + slider.image}
                />
              </SwiperSlide>
            ))
          : ''}
      </Swiper>
    </>
  )
}
