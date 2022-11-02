import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartEmpty } from './CartEmpty.jsx'
import { Space, Table } from 'antd'
import GridContentLayout from '../../../compoments/base/GridContentLayout.jsx'
import { fetchListProducts } from '../../../store/Services/ProductServices.js'
import {
  selectProduct,
  selectLoading,
  selectErrorMessage,
} from '../../../store/Reducers/ProductReducer.js'

const { Column, ColumnGroup } = Table
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

export const CartListProducts = () => {
  const dispatch = useDispatch()
  const { isLoading, entities, hasError } = useSelector(
    (state) => state.productsList,
  )
  // console.log(entities.data.data)
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
  useEffect(() => {
    dispatch(fetchListProducts)
  })

  // if (isLoading === 'pending') return <p>Loading...</p>
  return (
    <GridContentLayout justify='' classNameContainer='my-6'>
      <Table
        // bordered={true}
        locale={locale}
        // dataSource={hasData ? data : []}
        dataSource={entities.data.data}
        rowSelection={{ type: 'checkbox', ...rowCollection }}
        tableLayout='fixed'
        pagination={false}
      >
        {/* <ColumnGroup */}
        // title='Thông Tin' // rowSpan={}
        {/* > */}
        <Column
          title='Sản Phẩm'
          dataIndex='product_image'
          key='product_image'
          render={(product_image) => (
            <section className='flex flex-row justify-start'>
              <img src={product_image} alt='Ảnh sản phẩm' className='w-20 h-full' />
            </section>
          )}
        />
        <Column
          title='Tên Sản Phẩm'
          dataIndex='product_title'
          key='product_title'
          render={(title) => (
            <section>
              <p className='text-left'>{title}</p>
            </section>
          )}
        />
        {/* </ColumnGroup> */}
        <Column title='Đơn Giá' dataIndex='product_price' key='product_price' />
        <Column title='Số Lượng' dataIndex='id' key='age' />
        <Column
          title='Số Tiền'
          // dataIndex={['product_price', 'id']}
          key='address'
          render={(_, product) => (
            <>
              <p>{product.product_price * product.id}</p>
            </>
          )}
        />
        <Column
          title='Thao Tác'
          key='action'
          render={(_, record) => (
            <span>Xóa</span>
          )}
        />
      </Table>
    </GridContentLayout>
  )
}
