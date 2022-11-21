import { Table } from 'antd'
import React from 'react'

export default function Info() {
  const columns = [
    {
      title: 'thông số',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: 'chi tiết',
      dataIndex: 'chinese',
    },
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ]
  return (
    <Table columns={columns} bordered dataSource={data} pagination={false} />
  )
}
