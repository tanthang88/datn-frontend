import React, { useEffect, useState } from 'react'
import SortBy from './SortBy.jsx'
import { ProductItem } from '../../../components/product/ProductItem.jsx'
import { Col, Row } from 'antd'
import { useParams } from 'react-router'
import { ProductsAPI } from '../../../api/services/ProductsAPI.js'

export default function GridLayout({ dataProduct }) {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-2 rounded-lg'>
        <Row className='pb-6 pt-4'>
          <SortBy />
        </Row>
        <div className='site-card-wrapper'>
          <Row>
            {dataProduct &&
              dataProduct.map((item, index) => (
                <Col span={8} key={index}>
                  <ProductItem data={item} />
                </Col>
              ))}
          </Row>
        </div>
      </section>
    </>
  )
}
