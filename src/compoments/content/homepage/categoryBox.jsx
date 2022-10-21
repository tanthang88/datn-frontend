import GridContentLayout from '../../base/GridContentLayout.jsx'
import { Col } from 'antd'

const data = [
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
    <GridContentLayout>
      {data &&
        data.map((item) => (
          <Col span={4}>
            <div className='flex justify-center items-center flex-col p-3'>
              <picture className='p-6 rounded-full bg-zinc-100'>
                <img src={item.img} alt='' className='' />
              </picture>
              <div>{item.title}</div>
            </div>
          </Col>
        ))}
    </GridContentLayout>
  )
}
