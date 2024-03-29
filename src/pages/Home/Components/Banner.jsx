import { Col, Skeleton } from 'antd'
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
import { publicRequest } from '../../../api/axiosClient.js'
import { useEffect, useState } from 'react'
import slice from 'lodash/slice'
import { fetchSliderByType } from '../../../api/services/SliderServices.js'
import { LIST_TYPE_SLIDER } from '../../../config/constants.js'

export const MainBanner = () => {
  const [sliderHome, setSliderHome] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBanner = async () => {
      fetchSliderByType(LIST_TYPE_SLIDER.PROMOTION).then((data) => {
        const dataNewSlider = slice(data, 0, 8)
        setSliderHome(dataNewSlider)
      })
    }
    const getNewPosts = async () => {
      const result = await publicRequest.get('post/all')
      const dataNewPosts = slice(result?.data, 0, 4)
      setNewPosts(dataNewPosts)
      setLoading(false)
    }

    getBanner()
    getNewPosts()
  }, [])
  return (
    <GridContentLayout classNameContainer='px-1 py-1 my-6' gutter={24}>
      <Col className='gutter-row' span={16}>
        {loading && (
          <Skeleton
            active={loading}
            paragraph={{
              rows: 4,
            }}
          />
        )}
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
          {sliderHome &&
            sliderHome.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={item.link} target={'_blank'} rel='noreferrer'>
                  <img
                    src={import.meta.env.VITE_BACKEND_SITE_URL + item.image}
                    alt=''
                    className='w-full'
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Col>
      <Col className='gutter-row' span={8}>
        <article className='flex flex-col gap-y-3'>
          {loading && (
            <Skeleton
              active={loading}
              paragraph={{
                rows: 4,
              }}
            />
          )}
          {newPosts &&
            newPosts.map((item, i) => (
              <Link
                to={'/post/' + item.post_category_slug + '/' + item.id}
                key={i}
              >
                <div className='flex justify-start gap-x-2 items-center'>
                  <img
                    src={import.meta.env.VITE_BACKEND_SITE_URL + item.post_img}
                    alt=''
                    className='object-cover rounded-lg w-16 h-16'
                  />
                  <p
                    className='text-black font-semibold mb-0 py-1 '
                    style={{ fontSize: '14px' }}
                  >
                    {item.post_title}
                  </p>
                </div>
              </Link>
            ))}
        </article>
      </Col>
    </GridContentLayout>
  )
}
