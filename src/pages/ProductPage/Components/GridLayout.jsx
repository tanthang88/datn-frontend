import React, { useEffect, useState } from 'react'
import SortBy from './SortBy.jsx'
import { ProductItem } from '../../../components/product/ProductItem.jsx'
import { Col, Row } from 'antd'
import { useParams } from 'react-router'
import { ProductsAPI } from '../../../api/services/ProductsAPI.js'

export default function GridLayout() {
  const [dataProduct, setDataProduct] = useState([])
  const { id } = useParams()
  const getData = async () => {
    setDataProduct(await ProductsAPI.getProductOfCategoriesByID(id))
  }
  useEffect(function () {
    getData()
  }, [])
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
