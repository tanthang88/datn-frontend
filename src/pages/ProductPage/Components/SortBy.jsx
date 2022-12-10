import React, { useEffect, useState } from 'react'
import { Row, Col, Segmented, Select } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { fetchProductSort } from '../../../api/services/ProductsAPI.js'

const { Option } = Select
const handleChange = (value) => {
  console.log(value)
}

const SortBy = () => {
  const [dataSort, setDataSort] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductSort()
      setDataSort(data)
    }
    getData()
    console.log(dataSort)
  }, [])
  return (
    <>
      <Row gutter={80}>
        <Col span={17}>
          {dataSort &&
            dataSort.map((item, i) => (
              <Segmented key={i} options={[item.sort_title]} />
            ))}
        </Col>
        <Col span={4}>
          <Select
            className='mr-4'
            labelInValue
            defaultValue={{
              value: '',
              label: 'Mặc định',
            }}
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option
              className='font-bold text-black text-sm border-y-gray-400'
              value='aaa'
            >
              Mặc định
            </Option>
            {dataSort &&
              dataSort.map((item, i) => (
                <Option name={item.sort_name} key={i} value={item.sort_value}>
                  {item.sort_title}
                </Option>
              ))}
          </Select>
        </Col>
        <Col span={3}>
          <Segmented
            options={[
              {
                value: 'Kanban',
                icon: <AppstoreOutlined />,
              },
              {
                value: 'List',
                icon: <BarsOutlined />,
              },
            ]}
          />
        </Col>
      </Row>
    </>
  )
}
export default SortBy
