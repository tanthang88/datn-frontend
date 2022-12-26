import React from 'react'
import { Row, Col } from 'antd'
import { URL_BACKEND } from '../../../config/constants.js'

export default function ListPost({ dataPost }) {
  return (
    <>
      <section>
        <div className='bg-white mt-6 px-2 py-3.5 rounded-lg shadow-md'>
          <Row gutter='24'>
            <Col span='24'>
              {dataPost &&
                dataPost.slice(5, 12).map((item) => (
                  <div key={item.id}>
                    <div className='h-auto px-1 pt-6 pb-6'>
                      <img
                        width='320'
                        className='mr-5 float-left'
                        alt=''
                        src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/7/638034531442112193_doi-ten-iphone.jpg'
                      />
                      <a href=''>
                        <p className='mb-0'>{item.category_name}</p>
                      </a>
                      <h1 className='text-xl tracking-normal font-semibold pl-2'>
                        {item.post_title}
                      </h1>
                      <p className='text-black'>{item.post_desc}</p>

                      <img
                        width='35'
                        className='rounded-full float-left mr-2'
                        src={URL_BACKEND + item.post_image}
                      />
                      <p className='pt-2 text-neutral-400'>
                        Phú Tài - 1 giờ trước
                      </p>
                    </div>
                    <hr />
                  </div>
                ))}
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
