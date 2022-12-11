import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartEmpty } from './CartEmpty.jsx'
import CartBill from './CartBill.jsx'
import { Col, InputNumber, Table, Select } from 'antd'
import { RiCloseCircleFill } from 'react-icons/ri'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import {
  increaseQuantity,
  loadingCart,
  decreaseQuantity,
  deleteProduct,
} from '../../../store/Reducers/CartSlice.js'
import { CartBillSuccess } from './CartBillSuccess'
import { currency } from '../../../utils/currency.js'
import { URL_BACKEND } from '../../../config/constants'

const { Column } = Table

export const CartListProducts = () => {
  const dispatch = useDispatch()

  const { Carts, isLoading, numberCart } = useSelector((state) => state.cart)
  // const [loading, setLoading] = useState(false)
  const locale = {
    emptyText: <CartEmpty />,
  }

  const increaseQuantityCart = (value, index) => {
    dispatch(loadingCart())
    dispatch(increaseQuantity({ index, value }))
  }
  const decreaseQuantityCart = (value, index) => {
    dispatch(loadingCart())
    dispatch(decreaseQuantity({ index, value }))
  }
  useEffect(() => {}, [isLoading])
  if (numberCart === 0) return <CartEmpty />
  return (
    <GridContentLayout justify='' classNameContainer='bg-main2'>
      <Col span={15}>
        <Table
          // bordered={true}
          locale={locale}
          loading={isLoading}
          // dataSource={hasData ? data : []}
          dataSource={Carts}
          // rowSelection={{ type: 'checkbox', ...rowCollection }}
          tableLayout='fixed'
          pagination={true}
        >
          <Column
            title='Sản Phẩm'
            align={'center'}
            // dataIndex='product_image'
            key='product_image'
            render={(_, product, index) => (
              <section className='flex flex-col items-center gap-2' key={index}>
                <div className='flex flex-row items-center'>
                  <img
                    src={URL_BACKEND + product.product_image}
                    alt='Ảnh sản phẩm'
                    className='w-20 h-full'
                  />
                  <div>
                    <h1>hmm</h1>
                  </div>
                </div>
                <div
                  id='cart__product'
                  className='flex flex-row gap-1 cursor-pointer'
                  onClick={(e) => {
                    console.log(index, product)
                    dispatch(deleteProduct({ index }))
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
            dataIndex='product_title'
            key='product_title'
            render={(product_title) => (
              <section>
                <p className='text-left'>{product_title}</p>
              </section>
            )}
          />
          <Column
            title='Đơn Giá'
            // dataIndex='product_price'
            key='product_price'
            render={(cart) => (
              <span className='text-main font-bold'>
                {currency(cart.product_price)}
              </span>
            )}
          />
          <Column
            title='Số Lượng'
            // dataIndex='product_quantity'
            key='quantity'
            render={(_, product, index) => (
              <InputNumber
                min={1}
                max={20}
                size={'large'}
                defaultValue={product.quantity}
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
      <Col span={9}>
        <CartBill />
      </Col>
      <CartBillSuccess />
    </GridContentLayout>
  )
}
