import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SliderProducts } from '../../../components/slider/SliderProduct.jsx'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { ProductItem } from '../../../components/product/ProductItem.jsx'
import { ImFire } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const SaleProducts = () => {
  const [productsSale, setProductsSale] = useState([])
  const data = useSelector((state) => state.products.entities)
  useEffect(() => {
    data &&
      setProductsSale(data.filter((item) => item.is_discount_product === 1))
  }, [data])
  return (
    <GridContentLayout classNameContainer='px-1 py-5 my-6'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <ImFire fill='#cd1817' size={32} />
        <h1 className='mb-0 font-bold uppercase text-2xl text-red-custom leading-8'>
          khuyến mãi hot
        </h1>
      </div>
      <SliderProducts
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        modules={[Navigation]}
        loop={true}
      >
        {productsSale &&
          productsSale.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem data={item} />
            </SwiperSlide>
          ))}
      </SliderProducts>
    </GridContentLayout>
  )
}
