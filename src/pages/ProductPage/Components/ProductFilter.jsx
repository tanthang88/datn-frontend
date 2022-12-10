import React, { useState, useEffect } from 'react'
import { Checkbox, Col, Row } from 'antd'
import { fetchProductFilter } from '../../../api/services/ProductsAPI.js'
import {useSearchParams} from 'react-router-dom'

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues)
}

const ProductFilter = () => {
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
  console.warn(price)
  return (
    <Checkbox.Group
      style={{
        width: '100%',
      }}
      onChange={onChange}
      defaultValue={['aaa', 'bbb', 'ccc']}
    >
      <div>
        {dataFilter &&
          dataFilter.map((item, i) => (
            <div key={i}>
              <h1 className='font-bold text-black text-base pt-5'>
                {item.filter_title}
              </h1>
              <Row>
                <Col className='leading-loose' span={12}>
                  <Checkbox value={item.filter_name}>Tất cả</Checkbox>
                </Col>
                {item.fields.map((field, index) => (
                  <Col key={index} className='leading-loose' span={24}>
                    <Checkbox
                      onClick={() =>
                        setSearchParams({ price: field.field_value })
                      }
                      value={field.field_value}
                    >
                      {field.field_label}
                    </Checkbox>
                  </Col>
                ))}
              </Row>
              <br />
            </div>
          ))}
      </div>
    </Checkbox.Group>
  )
}

export default ProductFilter
