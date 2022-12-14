import { Button, Form, message } from 'antd'
import { format } from 'date-fns'
import { get } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { cancelBill, fetchBillDetail } from '../../../api/services/BillService'
import { OverlaySpinner } from '../../../components/Loading/OverlaySpinner'
import { DATE_FORMAT, URL_BACKEND } from '../../../config/constants'
import { currency } from '../../../utils/currency'
const Item = Form.Item

const initData = {
  fee: 0,
  bill_price: 0,
  created_at: 0,
  can_cancel: false,
}
function InfoBill() {
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [billDetail, setBillDetail] = useState(initData)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    setLoading(true)
    fetchBillDetail(id)
      .then((data) => {
        setBillDetail(data)
      })
      .catch(({ message }) => {
        messageApi.open({
          type: 'error',
          content: message,
        })
      })
      .finally(() => setLoading(false))
  }, [])

  const handelCancelBill = () => {
    cancelBill(id)
      .then(() => {
        setBillDetail({
          ...billDetail,
          bill_status_label: 'Huỷ đơn',
          can_cancel: false,
        })
        messageApi.open({
          type: 'success',
          content: 'Đã huỷ đơn hàng thành công',
        })
      })
      .catch(({ message }) => {
        messageApi.open({
          type: 'error',
          content: message,
        })
      })
  }
  const canCancel = get(billDetail, 'can_cancel')
  if (loading) return <OverlaySpinner open={loading} />
  return (
    <>
      {contextHolder}
      <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
        <h1 className='text-xl font-sans text-zinc-600'>Chi tiết đơn hàng</h1>
        <p className='mb-4'>Quản lý thông tin đơn hàng đã mua</p>
      </section>
      <div className='w-full grid grid-cols-3 gap-4'>
        <div className='col-span-1 py-6'>
          <div className='w-full my-2 text-base'>Thông tin giao hàng</div>
          <div className='w-full bg-white p-3.5 rounded-lg shadow-md h-36'>
            <p className='font-bold text-sm pb-2'>
              {get(billDetail, 'bill_customer_name')}
            </p>
            <p className='text-sm pb-2'>
              Địa chỉ: {get(billDetail, 'bill_address')}
            </p>
            <p className='text-sm'>
              Điện thoại: {get(billDetail, 'bill_customer_phone')}
            </p>
          </div>
        </div>
        <div className='col-span-1 py-6'>
          <div className='w-full my-2 text-base'>Thông tin thanh toán</div>
          <div className='w-full bg-white p-3.5 rounded-lg shadow-md h-36'>
            <p className='text-sm pb-2 pt-1'>
              Ngày mua:
              {billDetail.created_at &&
                format(new Date(billDetail.created_at), DATE_FORMAT)}
            </p>
            <p className='text-sm pb-2'>
              Hình thức: {get(billDetail, 'type_pay')}
            </p>
            <p className='text-sm pb-2'>
              Thanh toán: {get(billDetail, 'payment')}
            </p>
          </div>
        </div>
        <div className='col-span-1 py-6'>
          <div className='w-full my-2 text-base'>Trạng thái đơn hàng</div>
          <div className='w-full bg-white p-3.5 rounded-lg shadow-md h-36'>
            <p className='font-bold text-sm pb-2'>
              {get(billDetail, 'bill_status_label')}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-white p-3.5 rounded-lg shadow-md'>
        {billDetail.bill_details &&
          billDetail.bill_details.map((product, index) => (
            <div key={index}>
              <div className='w-full  border-b'>
                <div className='grid grid-cols-8 gap-4 my-3'>
                  <div className='col-span-1 '>
                    <img
                      className='h-20 w-20 border rounded-lg p-1'
                      src={URL_BACKEND + product.product?.product_image}
                    />
                  </div>
                  <div className='col-span-6'>
                    {product.product?.product_name}
                  </div>
                  <div className='col-span-1 flex justify-end'>
                    {currency(product.price)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className='w-full grid grid-cols-4'>
          <div className='text-sm col-span-2 flex  justify-start py-2'>
            {canCancel && (
              <Form form={form} onFinish={handelCancelBill}>
                <Item style={{ margin: '0px' }}>
                  <Button type='primary' htmlType='submit'>
                    Huỷ đơn
                  </Button>
                </Item>
              </Form>
            )}
          </div>
          <div className='text-sm col-span-1 py-2'>
            <p>phí vận chuyển:{currency(billDetail.fee)}</p>
          </div>
          <div className='text-base col-span-1 flex  justify-end py-2'>
            <b> Tổng số tiền: {currency(billDetail.bill_price)}</b>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBill
