import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SliderProducts } from '../../../components/slider/SliderProduct.jsx'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { ImFire } from 'react-icons/im'
import Item from '../../../components/product/Item'

export default function Related({ productsRelated }) {
  const handleClick = () => {}
  return (
    <GridContentLayout classNameContainer='px-1 py-5 my-6'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <ImFire fill='#cd1817' size={32} />
        <h1 className='mb-0 font-bold uppercase text-2xl text-red-custom leading-8'>
          Sản Phẩm Cùng Loại
        </h1>
      </div>
      <SliderProducts
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        modules={[Navigation]}
        loop={true}
      >
        {productsRelated.map((item, index) => (
          <SwiperSlide key={index}>
            <Item
              price={item.product_price}
              name={item.product_title}
              callback={handleClick}
              imgUrl={item.product_image}
            />
          </SwiperSlide>
        ))}
      </SliderProducts>
    </GridContentLayout>
  )
}
