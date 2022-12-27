import React from 'react'
import { Row, Col } from 'antd'
import { URL_BACKEND } from '../../../config/constants.js'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function ListPost({ dataPost }) {
  return (
    <>
      <section>
        <div className='bg-white mt-6 px-2 py-3.5 rounded-lg shadow-md'>
          <Row gutter='24'>
            <Col span='24'>
              {dataPost &&
                dataPost.slice(5, 12).map((item, index) => (
                  <div key={index}>
                    <Link to={'/post/' + item.id}>
                      <div className='h-auto px-1 pt-6 pb-6'>
                        <img
                          width='320'
                          className='mr-5 float-left'
                          alt=''
                          src={URL_BACKEND + item.post_image}
                        />
                        <p className='mb-0'>{item.category_name}</p>
                        <h1 className='text-xl tracking-normal font-semibold pl-2'>
                          {item.post_title}
                        </h1>
                        <p className='text-black'>{item.post_desc}</p>

                        <img
                          width='35'
                          className='rounded-full float-left mr-2'
                          src='https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg'
                        />
                        <p className='pt-2 text-neutral-400'>
                          Admin - {format(new Date(item.date), 'dd/MM/yyyy')}
                        </p>
                      </div>
                    </Link>
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
