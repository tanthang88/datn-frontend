import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { Col } from 'antd'
import { Link } from 'react-router-dom'
const listCategory = [
  {
    image:
      'https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199039669299_icon-desktop-1.png',
    link: '/',
  },
  {
    image:
      'https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199040294624_icon-desktop.png',
    link: '/',
  },
  {
    image:
      'https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/5/12/637248776517146629_f-friends.png',
    link: '/',
  },
]
export const CategoryAbout = () => {
  return (
    <GridContentLayout
      classNameContainer='my-4 bg-transparent'
      gutter={[16, 10]}
    >
      {listCategory.map((item, index) => (
        <Col span={8} className='' key={index}>
          <div>
            <Link to={item.link}>
              <img
                className='object-cover rounded-md'
                src={item.image}
                alt='Category image'
              />
            </Link>
          </div>
        </Col>
      ))}
    </GridContentLayout>
  )
}
