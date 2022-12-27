import React from 'react'
import { Col, Row, Card } from 'antd'
import { URL_BACKEND } from '../../../config/constants.js'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function PostGroup({ dataPost }) {
  return (
    <>
      <section>
        <div className='bg-white mt-6 px-2 py-2 rounded-lg shadow-md'>
          <Row gutter='20'>
            <Col span='14'>
              <Link to={'/post/' + (dataPost[0] && dataPost[0].id)}>
                <Card
                  key={(dataPost[0] && dataPost[0].id) || undefined}
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
                  <p className='text-black-200'>
                    {dataPost[0] &&
                      format(new Date(dataPost[0].date), 'dd/MM/yyyy')}
                  </p>
                </Card>
              </Link>
            </Col>

            <Col span='10'>
              {dataPost &&
                dataPost.slice(1, 5).map((item, index) => (
                  <Link key={index} to={'/post/' + item.id}>
                    <div className='hover:shadow-md 0.5s' key={item.id}>
                      <img
                        width='160'
                        className='float-left mr-2'
                        alt='anh'
                        src={URL_BACKEND + item.post_image}
                      />
                      <div className='ml-22'>
                        <h1 className='text-sm tracking-wide font-semibold pl-2'>
                          {item.post_title}
                        </h1>
                        <p className='text-black ml-40 pl-2'>
                          {format(new Date(item.date), 'dd/MM/yyyy')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
