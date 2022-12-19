import { Checkbox, Col, Radio, Row } from 'antd'
import ProductSlider from './Components/ProductSlider.jsx'
import GridLayout from './Components/GridLayout.jsx'
import '../../scss/homepage.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  fetchProductByFilterId,
  fetchProductFilter,
  ProductsAPI,
} from '../../api/services/ProductsAPI.js'
import { createSearchParams, useSearchParams } from 'react-router-dom'

const MainProduct = () => {
  const [dataProduct, setDataProduct] = useState([])
  const { id } = useParams()
  const getData = async () => {
    const data = await ProductsAPI.getProductOfCategoriesByID(id)
    setDataProduct(data?.data)
  }
  useEffect(function () {
    getData()
  }, [])

  const [dataProductByFilter, setDataProductByFilter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductByFilterId(id)
      setDataProductByFilter(data)
    }
    getData()
  }, [])

  useEffect(function () {}, [])

  const [dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductFilter()
      setDataFilter(data)
    }
    getData()
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const price = searchParams.get('price')
  const battery = searchParams.get('battery')
  return (
    <>
      <section className='xl:container'>
        <Row gutter={24} className='pt-12'>
          <Col span={24}>
            <ProductSlider />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            {dataFilter &&
              dataFilter.map((item, i) => (
                // eslint-disable-next-line react/jsx-key
                <Radio.Group
                  style={{
                    width: '100%',
                  }}
                  name={item.filter_name}
                  defaultValue={item.filter_name}
                >
                  <div>
                    <div key={i}>
                      <h1 className='font-bold text-black text-base pt-5'>
                        {item.filter_title}
                      </h1>
                      <Row>
                        <Col className='leading-loose' span={12}>
                          <Radio value={item.filter_name}>Tất cả</Radio>
                        </Col>
                        {item.fields.map((field, index) => (
                          <Col key={index} className='leading-loose' span={24}>
                            <Radio
                              onChange={(e) => {
                                setSearchParams(
                                  createSearchParams({
                                    price: e.target.value,
                                  }),
                                )
                              }}
                              value={field.field_value}
                            >
                              {field.field_label}
                            </Radio>
                          </Col>
                        ))}
                      </Row>
                      <br />
                    </div>
                  </div>
                </Radio.Group>
              ))}
          </Col>
          <Col span={18}>
            <GridLayout dataProduct={dataProduct} />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default MainProduct
