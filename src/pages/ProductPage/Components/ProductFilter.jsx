import React, { useState, useEffect } from 'react'
import { Radio, Col, Row } from 'antd'
import { fetchProductFilter } from '../../../api/services/ProductsServices'

const ProductFilter = ({ setDataSearch, dataSearch }) => {
  const [dataFilter, setDataFilter] = useState([])

  const onChange = (e) => {
    if (e.target.checked) {
      return setDataSearch({
        ...dataSearch,
        [e.target.label]: e.target.value,
        page: 1,
      })
    }
    setDataSearch({ ...dataSearch, [e.target.label]: '', page: 1 })
  }
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductFilter()
      setDataFilter(data)
    }
    getData()
  }, [])

  return (
    <div>
      {dataFilter &&
        dataFilter.map((item, i) => (
          <div key={i}>
            <Radio.Group
              style={{
                width: '100%',
              }}
              name={item.filter_name}
            >
              <h1 className='font-bold text-black text-base pt-5'>
                {item.filter_title}
              </h1>
              <Row>
                {item.fields.map((field, index) => (
                  <Col key={index} className='leading-loose' span={24}>
                    <Radio
                      label={item.filter_name}
                      name={item.filter_name}
                      onChange={onChange}
                      value={field.field_value}
                      checked={true}
                    >
                      {field.field_label}
                    </Radio>
                  </Col>
                ))}
              </Row>
              <br />
            </Radio.Group>
          </div>
        ))}
    </div>
  )
}

export default ProductFilter
