import React from 'react'
import { Col, Row, Card } from 'antd'
import _ from 'lodash'
import { URL_BACKEND } from '../../../config/constants.js'

export default function PostGroup({ dataPost }) {
  return (
    <>
      <section>
        <div className='bg-white mt-6 px-2 py-2 rounded-lg shadow-md'>
          <Row gutter='20'>
            <Col span='14' key={dataPost[0] && dataPost[0].id}>
              <Card
                hoverable
                style={{
                  width: 480,
                  float: 'left',
                }}
                cover={
                  <img
                    alt=''
                    src={
                      URL_BACKEND + (dataPost[0] && dataPost[0].post_image) ||
                      undefined
                    }
                  />
                }
              >
                <h1 className='text-lg font-semibold'>
                  {(dataPost[0] && dataPost[0].post_title) || undefined}
                </h1>
                <p className='text-black-200'>0 - 17 giờ trước</p>
              </Card>
            </Col>
            <Col span='10'>
              {dataPost &&
                dataPost.slice(1, 4).map((item) => (
                  <div className='hover:shadow-md 0.5s' key={item.id}>
                    <a>
                      <img
                        width='160'
                        className='float-left mr-2'
                        alt='anh'
                        src={URL_BACKEND + item.post_image}
                      />
                    </a>
                    <div className='ml-22 mb-10'>
                      <h1 className='text-sm tracking-wide font-semibold pl-2'>
                        {item.post_title}
                      </h1>
                      <p className='text-black'>0 - 17 giờ trước</p>
                    </div>
                  </div>
                ))}
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
