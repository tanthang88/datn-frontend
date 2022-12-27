import React, { useEffect, useState } from 'react'
import { fetchProductSort } from '../../../api/services/ProductsServices.js'
import { Select } from 'antd'

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
    </>
  )
}
export default SortBy
