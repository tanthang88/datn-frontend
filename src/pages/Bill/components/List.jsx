import { Button } from 'antd'
import { format } from 'date-fns'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchListBills } from '../../../api/services/BillService'
import { OverlaySpinner } from '../../../components/Loading/OverlaySpinner'
import {
  DATE_FORMAT,
  LIST_BILL_STATUS,
  URL_BACKEND,
} from '../../../config/constants'
import { currency } from '../../../utils/currency'
import EmptyBill from './Empty'

const initialState = [
  {
    id: '',
    bill_details: [],
    bill_price: '',
    bill_status: 0,
    bill_phone: '',
    address: '',
    created_at: '',
  },
]
export default function List() {
  const [bills, setBills] = useState(initialState)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetchListBills()
      .then((data) => {
        setBills(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <OverlaySpinner open={loading} />
  return (
    <>
      <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
        <h1 className='text-xl font-sans text-zinc-600'>Đơn hàng của tôi</h1>
        <p className='mb-4'>Quản lý thông tin đơn hàng đã mua</p>
      </section>
      {bills.map((bill, billIndex) => (
        <div key={billIndex}>
          <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
            <div className='w-full grid grid-cols-2'>
              <div className='text-base col-span-1 font-sans text-zinc-600'>
                {LIST_BILL_STATUS.map(
                  (item) => item.value === bill.bill_status && item.name,
                )}
              </div>
              <div className='text-sm col-span-1 flex justify-end text-zinc-600'>
                Ngày tạo đơn hàng:
                {format(new Date(bill.created_at), DATE_FORMAT)}
              </div>
            </div>
            <hr />
            {bill.bill_details &&
              bill.bill_details.map((product, productItem) => (
                <div key={productItem} className='w-full  border-b'>
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
              ))}
            <div className='w-full grid grid-cols-2'>
              <div className='text-sm col-span-1 flex  justify-start py-2'>
                <Link to={`detail/${bill.id}`}>
                  <Button type='primary'>Xem chi tiết đơn</Button>
                </Link>
              </div>
              <div className='text-base col-span-1 flex  justify-end py-2'>
                <b> Tổng số tiền: {currency(bill.bill_price)}</b>
              </div>
            </div>
          </section>
        </div>
      ))}
      {isEmpty(bills) && <EmptyBill />}
    </>
  )
}
