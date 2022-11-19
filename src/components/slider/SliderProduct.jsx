import { Swiper } from 'swiper/react'
import 'swiper/css/bundle'
export const SliderProducts = ({ children, ...configSlider }) => {
  return <Swiper {...configSlider}>{children}</Swiper>
}
