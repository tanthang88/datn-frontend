import { Row, Col } from 'antd'
import { Lazy, Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'

export const MainBanner = () => {
  const imageSlideItems = [
    {
      title: 'Item 1',
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/8/638008349489523366_F_H1_800x300.jpg',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Item 2',
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/4/638004801120320356_F-H1_800x300.png',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Item 3',
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/30/638001639645634427_F-H1_800x300.png',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Item 4',
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/4/638005013843857351_F-H1_800x300.png',
      link: 'fptshop.com.vn',
    },
  ]

  const FeaturePost = [
    {
      title: 'Tuần lễ Xiaomi giảm đến 3 triệu',
      image: 'https://www.xtsmart.vn/vnt_upload/weblink/baner_1.png',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Tuần lễ Xiaomi giảm đến 3 triệu',
      image: 'https://www.xtsmart.vn/vnt_upload/weblink/Artboard_1_copy_1.png',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Tuần lễ Xiaomi giảm đến 3 triệu',
      image: 'https://www.xtsmart.vn/vnt_upload/weblink/baner_3.png',
      link: 'fptshop.com.vn',
    },
    {
      title: 'Tuần lễ Xiaomi giảm đến 3 triệu',
      image: 'https://www.xtsmart.vn/vnt_upload/weblink/baner_4.png',
      link: 'fptshop.com.vn',
    },
  ]
  return (
    <GridContentLayout classNameContainer='px-1 py-1 my-6' gutter={24}>
      <Col className='gutter-row' span={16}>
        <Swiper
          slidesPerView={1}
          loop={true}
          lazy={true}
          navigation={true}
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Navigation, Scrollbar, Lazy, Pagination, Autoplay, A11y]}
          className='px-5 rounded-md'
        >
          {imageSlideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to='/test'>
                <img src={item.image} alt='' className='w-full' />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col className='gutter-row' span={8}>
        <article className='flex flex-col gap-y-3'>
          {FeaturePost.map((ele, index) => (
            <Link to='/test' key={index}>
              <div
                className='flex justify-start gap-x-2 items-center'
                key={index}
              >
                <img
                  src={ele.image}
                  alt=''
                  className='object-cover rounded-lg w-16 h-16'
                />
                <p
                  className='text-black font-semibold mb-0 py-1 '
                  style={{ fontSize: '15px' }}
                >
                  {ele.title}
                </p>
              </div>
            </Link>
          ))}
        </article>
      </Col>
    </GridContentLayout>
  )
}