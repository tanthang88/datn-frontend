import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SliderProducts } from '../../../compoments/slider/SliderProduct.jsx'
import GridContentLayout from '../../../compoments/base/GridContentLayout.jsx'
import { ProductItems } from './ProductItems.jsx'
import { ImFire } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../services/Redux/couterSlice.jsx'
import { Col } from "antd";

export const SaleProducts = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <GridContentLayout classNameContainer='px-1 py-5 my-6'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <ImFire fill='#cd1817' size={32} />
        <h1 className='mb-0 font-bold uppercase text-2xl text-red-custom leading-8'>
          khuyến mãi hot
        </h1>
        <div>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <SliderProducts
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        modules={[Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems></ProductItems>
        </SwiperSlide>
      </SliderProducts>
    </GridContentLayout>
  )
}
