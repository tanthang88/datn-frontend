import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import { Col } from 'antd'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function CategoryAccessory() {
  const [productCategories, setProductCategories] = useState([])
  const getData = useSelector((state) => state.productCategory.entities)
  useEffect(() => {
    const Category = getData.filter((item) => item.category_slug === 'phu-kien')
    getData && setProductCategories(Category[0]?.children.slice(0, 16))
  }, [getData])
  return (
    <GridContentLayout gutter={16} classNameContainer='my-6'>
      <div className='w-full inline-flex items-baseline gap-2 px-3'>
        <h1 className='mx-5 my-5 font-bold uppercase text-2xl text-red-custom leading-8'>
          phụ kiện hot
        </h1>
      </div>
      {productCategories &&
        productCategories.map((item, index) => (
          <Col
            span={4}
            key={index}
            className='hover:shadow-2xl'
            style={{ border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <NavLink to={'phu-kien/' + item.category_slug}>
              <div className='flex justify-center items-center flex-col p-3 gap-3'>
                <picture className='p-4'>
                  <img
                    src={
                      import.meta.env.VITE_BACKEND_SITE_URL +
                      item.category_image} alt='' className='w-11 h-11 object-cover' />
                </picture>
                <div className='text-black'>{item.category_name}</div>
              </div>
            </NavLink>
          </Col>
        ))}
    </GridContentLayout>
  )
}
