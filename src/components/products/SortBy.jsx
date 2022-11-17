import React from 'react'
import { Row, Col, Segmented, Select } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

const { Option } = Select
const handleChange = (value) => {
  console.log(value)
}

export default function SortBy() {
  return (
    <>
      <Row gutter={80}>
        <Col span={17}>
          <Segmented
            options={[
              'Bán chạy nhất',
              'Trả góp 0%',
              'Giá thấp',
              'Giá cao',
              'Ưu đãi online',
            ]}
          />
        </Col>
        <Col span={4}>
          <Select
            className='mr-4'
            labelInValue
            defaultValue={{
              value: 'bán chạy',
              label: 'Bán chạy nhất',
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
              Bán chạy nhất
            </Option>
            <Option value='bbb'>Trả góp 0%</Option>
            <Option value='ccc'>Giá thấp</Option>
            <Option value='ddd'>Giá cao</Option>
            <Option value='eee'>Ưu đãi online</Option>
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
