import React, { useEffect, useState } from 'react'
import { fetchProductSort } from '../../../api/services/ProductsServices.js'
import { Row, Select } from 'antd'

const { Option } = Select

const SortBy = ({ setDataSearch, dataSearch }) => {
  const [dataSort, setDataSort] = useState([])

  const handleChange = (data) => {
    setDataSearch({
      ...dataSearch,
      order_by: data.title,
      order_type: data.value,
    })
  }
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductSort()
      setDataSort(data)
    }
    getData()
  }, [])
  return (
    <>
      <Row className='w-full justify-end'>
        <Select
          className='mr-4 flex items-end justify-end w-40'
          labelInValue
          placeholder='Sắp xếp'
          onChange={handleChange}
        >
          {dataSort &&
            dataSort.map((item, index) => (
              <Option
                title={item.sort_name}
                key={item.id}
                value={item.field_value}
              >
                {item.sort_title}
              </Option>
            ))}
        </Select>
      </Row>
    </>
  )
}
export default SortBy
