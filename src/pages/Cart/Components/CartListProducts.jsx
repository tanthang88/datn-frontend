import { useDispatch, useSelector } from 'react-redux'
import { CartEmpty } from './CartEmpty.jsx'
import CartBill from './CartBill.jsx'
import { Col, InputNumber, Select, Table } from 'antd'
import { RiCloseCircleFill } from 'react-icons/ri'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import {
  changeProperties,
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
  const handleChangeColorProperty = (
    itemID,
    productID,
    colorID,
    capacityID,
    propertyLabel,
    slug,
  ) => {
    dispatch(
      changeProperties({
        itemID,
        productID,
        colorID,
        capacityID,
        propertyLabel,
        slug,
      }),
    )
  }
  const handleChangeCapacityProperty = (
    itemID,
    productID,
    colorID,
    capacityID,
    propertyLabel,
    slug,
  ) => {
    dispatch(
      changeProperties({
        itemID,
        productID,
        colorID,
        capacityID,
        propertyLabel,
        slug,
      }),
    )
  }
  if (numberCart === 0) return <CartEmpty />
  return (
    <GridContentLayout justify='' classNameContainer='bg-main2'>
      <Col span={24}>
        <Table
          // bordered={true}
          locale={locale}
          loading={isLoading}
          dataSource={Carts || []}
          // rowSelection={{ type: 'checkbox', ...rowCollection }}
          tableLayout='fixed'
          pagination={
            numberCart > 0
              ? {
                  defaultPageSize: 5,
                  size: 'default',
                  // showSizeChanger: true,
                  // showQuickJumper: true,
                  // pageSizeOptions: [5, 10, 15, 20],
                  responsive: true,
                  total: numberCart,
                  showTotal: (total) => `Tổng cộng ${total} sản phẩm`,
                }
              : false
          }
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
                </div>
                <div
                  id='cart__product'
                  className='flex flex-row gap-1 cursor-pointer'
                  onClick={(e) => {
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
            // title='Thông tin'
            align={'center'}
            key='properties'
            render={(_, product, index) => (
              <div className='flex flex-col gap-2'>
                <Select
                  defaultValue={product.color_id}
                  onChange={(e, propertyColor) => {
                    console.log(propertyColor)
                    handleChangeColorProperty(
                      index,
                      product.id,
                      e,
                      product.capacity_id,
                      propertyColor.label,
                      propertyColor.slug,
                    )
                  }}
                  suffixIcon={
                    <div className='flex flex-col'>
                      <AiFillCaretUp fill={'rgba(0, 0, 0, 0.25)'} />
                      <AiFillCaretDown fill={'rgba(0, 0, 0, 0.25)'} />
                    </div>
                  }
                  style={{
                    width: 110,
                  }}
                  options={product.prop_attr_color}
                />
                <Select
                  defaultValue={product.capacity_id}
                  suffixIcon={
                    <div className='flex flex-col'>
                      <AiFillCaretUp fill={'rgba(0, 0, 0, 0.25)'} />
                      <AiFillCaretDown fill={'rgba(0, 0, 0, 0.25)'} />
                    </div>
                  }
                  onChange={(e, propertyCapacity) => {
                    handleChangeCapacityProperty(
                      index,
                      product.id,
                      product.color_id,
                      e,
                      propertyCapacity.label,
                      propertyCapacity.slug,
                    )
                  }}
                  style={{
                    width: 110,
                  }}
                  options={product.prop_attr_capacity}
                />
              </div>
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
                value={product.quantity}
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
      <Col span={24}>
        <CartBill />
      </Col>
      <CartBillSuccess />
    </GridContentLayout>
  )
}
