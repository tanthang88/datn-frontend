import React from 'react'
import { Button, Empty } from 'antd'
import { Link } from 'react-router-dom'
import { URL } from '../../../config/constants'

const EmptyBill = () => {
  return (
    <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
      <Empty description={<span>Không có đơn hàng nào</span>}>
        <Link to={URL.HOME}>
          <Button type='primary'>Mua sắm</Button>
        </Link>
      </Empty>
    </section>
  )
}

export default EmptyBill
