import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { useParams } from 'react-router'
import { postsAPI } from '../../../api/services/postsAPI.js'
import { _ } from 'lodash'

const PostHotView = () => {
  const [postHotView, setPostHotView] = useState([])
  const { id } = useParams()
  const getData = async () => {
    const data = await postsAPI.getPostOfCategoriesById(id)
    setPostHotView(
      data.data.sort((a, b) => b.post_view - a.post_view).slice(0, 6),
    )
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(postHotView)
  return (
    <>
      <section className='bg-white mt-6 px-2 py-3.5 rounded-lg shadow-md'>
        <div>
          <h1 className='text-lg font-semibold'>Xem nhiều</h1>
          <hr />
        </div>

        {postHotView &&
          postHotView.map((post, index) => (
            <Row key={index} gutter={6}>
              <div className='pt-1'>
                <Col span={1}>
                  <div className='h-11 w-11 bg-red-custom rounded-full float-left mr-2'>
                    <p className='text-white text-2xl pt-1.5 ml-3.5 font-semibold'>
                      {index + 1}
                    </p>
                  </div>
                </Col>
                <Col span={23} className='ml-14'>
                  <h1 className='pr-1'>{post.post_title}</h1>
                </Col>
              </div>
            </Row>
          ))}
      </section>
    </>
  )
}

export default PostHotView
