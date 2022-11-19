import React from 'react'
import SortBy from './SortBy.jsx'
import { ProductItem } from './ProductItem.jsx'
import { Col, Row } from 'antd'

export default function GridLayout() {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-2 rounded-lg'>
        <Row className='pb-6 pt-4'>
          <SortBy />
        </Row>
        <div className='site-card-wrapper'>
          <Row>
            <Col span={8}>
              <ProductItem />
            </Col>
            <Col span={8}>
              <ProductItem />
            </Col>
            <Col span={8}>
              <ProductItem />
            </Col>
            <Col span={8}>
              <ProductItem />
            </Col>
            <Col span={8}>
              <ProductItem />
            </Col>
            <Col span={8}>
              <ProductItem />
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
