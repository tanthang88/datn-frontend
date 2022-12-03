import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { Col } from 'antd'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function CategoryBox() {
  const [productCategories, setProductCategories] = useState([])
  const getData = useSelector((state) => state.productCategory.entities)
  useEffect(() => {
    const Category = getData.filter(
      (item) => item.category_slug === 'dien-thoai',
    )
    getData && setProductCategories(Category[0]?.children)
  }, [getData])
  return (
    <GridContentLayout gutter={16} classNameContainer='my-6'>
      {productCategories &&
        productCategories.map((item, index) => (
          <Col
            span={4}
            key={index}
            className='homepage__categories-list-item hover:shadow-lg'
          >
            <NavLink to={'dien-thoai/' + item.category_slug}>
              <div className='flex justify-center items-center flex-col p-3 gap-3'>
                <picture className='p-6 rounded-full bg-zinc-100'>
                  <img
                    src={
                      import.meta.env.VITE_BACKEND_SITE_URL +
                      item.category_image
                    }
                    alt=''
                    className='w-16 h-16 object-cover'
                  />
                </picture>
                <div className='text-black'>{item.category_name}</div>
              </div>
            </NavLink>
          </Col>
        ))}
    </GridContentLayout>
  )
}
