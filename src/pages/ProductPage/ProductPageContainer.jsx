import { Col, Radio, Row } from 'antd'
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
  const [dataFilter, setDataFilter] = useState([])
  const { id } = useParams()
  const getData = async () => {
    const data = await ProductsAPI.getProductOfCategoriesByID(id)
    setDataProduct(data?.data)
  }
  const getDataFilter = async () => {
    const data = await fetchProductFilter()
    setDataFilter(data)
  }
  useEffect(function () {
    getData()
  }, [])

  const [dataProductByFilter, setDataProductByFilter] = useState([])

  useEffect(() => {
    const getDataFilter = async () => {
      const data = await fetchProductByFilterId(id)
      setDataProductByFilter(data)
    }
    getDataFilter()
  }, [])

  useEffect(function () {}, [])

  useEffect(() => {
    getDataFilter()
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const price = searchParams.get('price')
  const battery = searchParams.get('battery')
  const screen = searchParams.get('screen')
  const camera = searchParams.get('camera')

  function onChange(e) {
    // eslint-disable-next-line no-unused-expressions
    setSearchParams(
      createSearchParams({
        price: e.target.target.value,
        battery: e.target.target.value,
        screen: e.target.target.value,
        camera: e.target.target.value,
      }),
    )
  }

  console.log(price, battery, screen, camera)
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
            <Radio.Group
              style={{
                width: '100%',
              }}
              name={(dataFilter[0] && dataFilter[0].filter_name) || undefined}
              defaultValue={
                (dataFilter[0] && dataFilter[0].filter_name) || undefined
              }
            >
              <div>
                <div>
                  <h1 className='font-bold text-black text-base pt-5'></h1>
                  <Row>
                    <Col className='leading-loose' span={12}>
                      <Radio
                        value={
                          (dataFilter[0] && dataFilter[0].filter_name) ||
                          undefined
                        }
                      >
                        Tất cả
                      </Radio>
                    </Col>
                    {dataFilter[0] &&
                      dataFilter[0]?.fields.map((field, index) => (
                        <Col key={index} className='leading-loose' span={24}>
                          <Radio
                            onChange={onChange()}
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
            <Radio.Group
              style={{
                width: '100%',
              }}
              name={(dataFilter[1] && dataFilter[1].filter_name) || undefined}
              defaultValue={
                (dataFilter[1] && dataFilter[1].filter_name) || undefined
              }
            >
              <div>
                <div>
                  <h1 className='font-bold text-black text-base pt-5'></h1>
                  <Row>
                    <Col className='leading-loose' span={12}>
                      <Radio
                        value={
                          (dataFilter[1] && dataFilter[1].filter_name) ||
                          undefined
                        }
                      >
                        Tất cả
                      </Radio>
                    </Col>
                    {dataFilter[1] &&
                      dataFilter[1]?.fields.map((field, index) => (
                        <Col key={index} className='leading-loose' span={24}>
                          <Radio
                            onChange={onChange()}
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
            <Radio.Group
              style={{
                width: '100%',
              }}
              name={(dataFilter[2] && dataFilter[2].filter_name) || undefined}
              defaultValue={
                (dataFilter[2] && dataFilter[2].filter_name) || undefined
              }
            >
              <div>
                <div>
                  <h1 className='font-bold text-black text-base pt-5'></h1>
                  <Row>
                    <Col className='leading-loose' span={12}>
                      <Radio
                        value={
                          (dataFilter[2] && dataFilter[2].filter_name) ||
                          undefined
                        }
                      >
                        Tất cả
                      </Radio>
                    </Col>
                    {dataFilter[2] &&
                      dataFilter[2]?.fields.map((field, index) => (
                        <Col key={index} className='leading-loose' span={24}>
                          <Radio
                            onChange={onChange()}
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
            <Radio.Group
              style={{
                width: '100%',
              }}
              name={(dataFilter[3] && dataFilter[3].filter_name) || undefined}
              defaultValue={
                (dataFilter[3] && dataFilter[3].filter_name) || undefined
              }
            >
              <div>
                <div>
                  <h1 className='font-bold text-black text-base pt-5'></h1>
                  <Row>
                    <Col className='leading-loose' span={12}>
                      <Radio
                        value={
                          (dataFilter[3] && dataFilter[3].filter_name) ||
                          undefined
                        }
                      >
                        Tất cả
                      </Radio>
                    </Col>
                    {dataFilter[3] &&
                      dataFilter[3]?.fields.map((field, index) => (
                        <Col key={index} className='leading-loose' span={24}>
                          <Radio
                            onChange={onChange()}
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
