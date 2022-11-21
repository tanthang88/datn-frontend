import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartEmpty } from './CartEmpty.jsx'
import CartBill from './CartBill.jsx'
import { Col, InputNumber, Table } from 'antd'
import { RiCloseCircleFill } from 'react-icons/ri'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import CartReducer, {
  increaseQuantity,
  loadingCart,
  decreaseQuantity,
  deleteProduct,
} from '../../../store/Reducers/CartReducer.js'
import { CartBillSuccess } from './CartBillSuccess'

const { Column } = Table

export const CartListProducts = () => {
  const dispatch = useDispatch()

  const { Carts, isLoading, numberCart } = useSelector((state) => state.cart)
  // const [loading, setLoading] = useState(false)
  const locale = {
    emptyText: <CartEmpty />,
  }

  // const rowCollection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       'selectedRows: ',
  //       selectedRows,
  //     )
  //   },
  //   getCheckboxProps: (record) => ({
  //     // Column configuration not to be checked
  //   }),
  // }
  useEffect(() => {
    // isLoading ? setLoading(false) : loading
  })
  useEffect(() => {
    dispatch(CartReducer)
  })
  const increaseQuantityCart = (value, index) => {
    dispatch(loadingCart)
    dispatch(increaseQuantity({ index, value }))
  }
  const decreaseQuantityCart = (value, index) => {
    dispatch(decreaseQuantity({ index, value }))
  }

  // if (isLoading === 'pending') return <p>Loading...</p>
  if (numberCart === 0) return <CartEmpty />
  return (
    <GridContentLayout justify='' classNameContainer='bg-main2'>
      <Col span={12}>
        <Table
          // bordered={true}
          locale={locale}
          loading={isLoading}
          // dataSource={hasData ? data : []}
          dataSource={Carts}
          // rowSelection={{ type: 'checkbox', ...rowCollection }}
          tableLayout='fixed'
          pagination={false}
        >
          <Column
            title='Sản Phẩm'
            align={'center'}
            // dataIndex='product_image'
            key='product_image'
            render={(_, product, index) => (
              <section className='flex flex-col items-center gap-2'>
                <img
                  src={product.product_img}
                  alt='Ảnh sản phẩm'
                  className='w-20 h-full'
                />
                <div
                  id='cart__product'
                  className='flex flex-row gap-1 cursor-pointer'
                  onClick={(e) => {
                    const idProduct = product.id
                    const quantityProduct = product.product_quantity
                    dispatch(deleteProduct(idProduct, quantityProduct))
                  }}
                >
                  <RiCloseCircleFill size={18} fill={'#cccccc'} />
                  <span style={{ color: '#cccccc' }}>Xóa</span>
                </div>
              </section>
            )}
          />
          <Column
            title='Tên Sản Phẩm'
            dataIndex='product_name'
            key='product_name'
            render={(product_name) => (
              <section>
                <p className='text-left'>{product_name}</p>
              </section>
            )}
          />
          <Column
            title='Đơn Giá'
            // dataIndex='product_price'
            key='product_price'
            render={(cart) => (
              <span className='text-main font-bold'>
                {cart.product_price.toLocaleString('vn-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </span>
            )}
          />
          <Column
            title='Số Lượng'
            // dataIndex='product_quantity'
            key='cart_quantity'
            render={(_, product, index) => (
              <InputNumber
                min={1}
                max={20}
                size={'large'}
                defaultValue={product.product_quantity}
                onStep={function (value, handle) {
                  handle.type === 'up'
                    ? increaseQuantityCart(value, index)
                    : decreaseQuantityCart(value, index)
                }}
              />
            )}
          />
        </Table>
      </Col>
      {/* Cart Information */}
      <Col span={12}>
        <CartBill />
      </Col>
      <CartBillSuccess />
    </GridContentLayout>
  )
}
