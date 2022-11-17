import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { Col } from 'antd'
import { NavLink } from 'react-router-dom'

const data = [
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/Components',
  },
  {
    title: 'Laptop',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tablet.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/',
  },
]
export default function CategoryBox() {
  return (
    <GridContentLayout gutter={16} classNameContainer='my-6'>
      {data &&
        data.map((item, index) => (
          <Col
            span={4}
            key={index}
            className='homepage__categories-list-item hover:shadow-lg'
          >
            <NavLink to={item.link}>
              <div className='flex justify-center items-center flex-col p-3 gap-3'>
                <picture className='p-6 rounded-full bg-zinc-100'>
                  <img src={item.img} alt='' className='' />
                </picture>
                <div className='text-black'>{item.title}</div>
              </div>
            </NavLink>
          </Col>
        ))}
    </GridContentLayout>
  )
}
