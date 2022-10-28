import GridContentLayout from '../../compoments/base/GridContentLayout.jsx'
import { CartEmpty } from './Compoments/CartEmpty.jsx'
import { Space, Table, Tag } from 'antd'
import { useEffect, useState } from 'react'
const { Column } = Table
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]
export const CartContainer = () => {
  const [hasData, setHasData] = useState(false)
  const locale = {
    emptyText: <CartEmpty />,
  }
  const rowCollection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      )
    },
    getCheckboxProps: (record) => ({
      // Column configuration not to be checked
    }),
  }
  useEffect(() => {
    data.length > 1 ? setHasData(true) : hasData
  })
  return (
    <GridContentLayout justify='' classNameContainer='my-6'>
      <Table
        locale={locale}
        dataSource={hasData ? data : []}
        rowSelection={{ type: 'checkbox', ...rowCollection }}
        tableLayout='fixed'
        pagination={false}
      >
        <Column title='Sản Phẩm' dataIndex='firstName' key='firstName' />
        <Column title='Đơn Giá' dataIndex='lastName' key='lastName' />
        <Column title='Số Lượng' dataIndex='age' key='age' />
        <Column title='Số Tiền' dataIndex='address' key='address' />
        <Column
          title='Thao Tác'
          key='action'
          render={(_, record) => (
            <Space size='middle'>
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </GridContentLayout>
  )
}
