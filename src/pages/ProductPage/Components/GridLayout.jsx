import React from 'react'
import SortBy from './SortBy.jsx'
import { ProductItem } from '../../../components/product/ProductItem.jsx'
import { Col, Row } from 'antd'

export default function GridLayout({
  productsList,
  setProductsList,
  dataSearch,
  setDataSearch,
}) {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-2 rounded-lg'>
        <Row className='pb-6 pt-4'>
          <SortBy
            setProductsList={setProductsList}
            setDataSearch={setDataSearch}
            dataSearch={dataSearch}
          />
        </Row>
        <div className='site-card-wrapper'>
          <Row>
            {productsList.data
              ? productsList.data.map((item, index) => (
                  <Col span={8} key={index}>
                    <ProductItem data={item} />
                  </Col>
                ))
              : ''}
          </Row>
        </div>
      </section>
    </>
  )
}
