import React from 'react'
import SortBy from './SortBy.jsx'
import { Card, Col, Row } from 'antd'

const { Meta } = Card

export default function GridLayout() {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-2 rounded-lg'>
        <Row className='pb-6 pt-4'>
          <SortBy />
        </Row>
        <div className='site-card-wrapper'>
          <Row gutter={24}>
            <Col span={8}>
              <Card
                className='text-center'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className='text-center'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className='text-center'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className='text-center'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className='text-center'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                className='text-center pt-1'
                title='Apple iPhone 14 Pro Max'
                bordered={false}
                hoverable
                style={{
                  width: 280,
                }}
              >
                {
                  <img
                    alt='example'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbMPE__76boKKwBr36hlS6j2k2Umgswlmw&usqp=CAU'
                  />
                }
                <Meta title='' />
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
