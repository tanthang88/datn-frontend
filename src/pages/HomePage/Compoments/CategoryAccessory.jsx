import GridContentLayout from '../../../compoments/base/GridContentLayout.jsx'
import { Col } from 'antd'
import { NavLink } from 'react-router-dom'

const data = [
  {
    title: 'Điện thoại',
    img: 'https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png',
    link: '/Compoments',
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
export default function CategoryAccessory() {
  return (
    <GridContentLayout gutter={16} classNameContainer='my-6'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <h1 className='mx-5 my-5 font-bold uppercase text-2xl text-red-custom leading-8'>
          phụ kiện hot
        </h1>
      </div>
      {data &&
        data.map((item, index) => (
          <Col
            span={4}
            key={index}
            className='hover:shadow-2xl'
            style={{ border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <NavLink to={item.link}>
              <div className='flex justify-center items-center flex-col p-3 gap-3'>
                <picture className='p-4'>
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
