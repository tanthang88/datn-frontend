import { Row, Col, Skeleton } from 'antd'
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
import { useState, useEffect } from 'react'
import _ from 'lodash'

export const MainBanner = () => {
  const [sliderHome, setSliderHome] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBanner = async () => {
      const resultSL = await publicRequest.get('slider')
      const dataSL = resultSL?.data.filter((item) => item.type === 'trang-chu')
      setSliderHome(dataSL)
      setLoading(false)
    }
    const getNewPosts = async () => {
      const result = await publicRequest.get('post/all')
      const dataNewPosts = _.slice(result?.data, 0, 4)
      setNewPosts(dataNewPosts)
      setLoading(false)
    }
    getBanner()
    getNewPosts()
    console.log(newPosts)
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
                    style={{ fontSize: '15px' }}
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
