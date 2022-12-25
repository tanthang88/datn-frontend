import React from 'react'
import { ProductItem } from '../../../components/product/ProductItem.jsx'
import { Col, Empty, Row } from 'antd'
import { OverlaySpinner } from '../../../components/Loading/OverlaySpinner.jsx'
import isEmpty from 'lodash/isEmpty'

export default function GridLayout({ productsList, loading }) {
  if (loading) return <OverlaySpinner open={loading} />
  return (
    <>
      <Row className='site-card-wrapper'>
        {!isEmpty(productsList.data) ? (
          productsList.data.map((item, index) => (
            <Col span={8} key={index}>
              <ProductItem data={item} />
            </Col>
          ))
        ) : (
          <Col span={24} className='justify-center items-center p-20'>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span>Không tìm thấy sản phẩm</span>}
            ></Empty>
          </Col>
        )}
      </Row>
    </>
  )
}
