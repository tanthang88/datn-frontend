import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SliderProducts } from '../../../components/slider/SliderProduct.jsx'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { ImFire } from 'react-icons/im'
import Item from '../../../components/product/Item'

export default function ProductsCate() {
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
        <SwiperSlide>
          <Item
            price='200000'
            name='sản phẩm cùng loại'
            callback={handleClick}
            imgUrl='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614227804914222_man-hinh-may-tinh-xiaomi-1c-23-8-inch-dd.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            price='200000'
            name='sản phẩm mới'
            callback={handleClick}
            imgUrl='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614227804914222_man-hinh-may-tinh-xiaomi-1c-23-8-inch-dd.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            price='200000'
            name='Áo quần'
            callback={handleClick}
            imgUrl='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614227804914222_man-hinh-may-tinh-xiaomi-1c-23-8-inch-dd.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            price='200000'
            name='mũ bảo hiểm'
            callback={handleClick}
            imgUrl='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614227804914222_man-hinh-may-tinh-xiaomi-1c-23-8-inch-dd.jpg'
          />
        </SwiperSlide>
      </SliderProducts>
    </GridContentLayout>
  )
}
