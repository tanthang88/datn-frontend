import React, { useEffect, useState } from 'react'
import '../../../App.scss'
import { postsAPI } from '../../../api/services/postsAPI.js'
import { useParams } from 'react-router'
import { URL_BACKEND } from '../../../config/constants.js'
import { Col, Row } from 'antd'

const SellingPost = () => {
  const [postSelling, setPostSelling] = useState([])
  const { id } = useParams()
  const getData = async () => {
    const data = await postsAPI.getPostOfCategoriesById(id)
    setPostSelling(
      data.data.filter((item) => item.post_outstanding === 1).slice(0, 4),
    )
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section className='selling-post bg-white mt-6 py-3.5 rounded-lg shadow-md float-left w-30'>
      <div>
        <h1 className='text-lg font-semibold w-50 px-2'>Tin nỗi bật</h1>
        <hr />
      </div>
      <Row>
        {postSelling &&
          postSelling.map((item, index) => (
            <Col key={index} span={24}>
              <div className='pt-4 pb-1 float-left'>
                <div className='relative'>
                  <div className='sale-post absolute'></div>
                  <img
                    className='sale-img'
                    src={URL_BACKEND + item.post_image}
                  />
                  <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
                    {item.post_title}
                  </h2>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </section>
  )
}

export default SellingPost
