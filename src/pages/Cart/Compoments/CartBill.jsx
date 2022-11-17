import { Button, Divider, Form, Input, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TbDiscount2 } from 'react-icons/tb'
import {
  getCity,
  getDist,
} from '../../../api/services/GetAddressInformation.js'

const layoutFormBill = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
}
const CartBill = () => {
  const { numberCart, Carts, isLoading } = useSelector((state) => state.cart)
  const [FormBill] = Form.useForm()
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const [modalDiscountCode, setModalDiscountCode] = useState(false)
  const getListCity = async () => {
    setListCity(await getCity())
  }
  const getValueCity = async (IDCity) => {
    setListDist(await getDist(IDCity))
  }
  const submitFormBill = (formValue) => {
    console.log(formValue)
  }
  useEffect(() => {
    getListCity()
  }, [])
  return (
    <section className='bg-white'>
      <div className='px-6 py-4'>
        <h1 className='uppercase'>Thông tin khách hàng</h1>
        <Form
          {...layoutFormBill}
          name='form-bill'
          form={FormBill}
          layout={'vertical'}
          onFinish={submitFormBill}
          scrollToFirstError
        >
          <Form.Item
            name='name'
            label='Họ và tên'
            tooltip='Nhập họ và tên của bạn'
            hasFeedback
            // wrapperCol={12}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ và tên',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Số điện thoại'
            tooltip='Nhập số điện thoại'
            hasFeedback
            // wrapperCol={12}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='city_id'
            label='Tỉnh/Thành Phố'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn tỉnh/TP',
              },
            ]}
          >
            <Select placeholder='Chọn tỉnh/TP' onChange={getValueCity}>
              {listCity &&
                listCity.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='dist_id'
            label='Huyện/Thị xã'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn huyện/thị xã',
              },
            ]}
          >
            <Select placeholder='Chọn huyện/thị xã'>
              {listDist &&
                listDist.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='address'
            label='Địa chỉ'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa chỉ chi tiết',
              },
            ]}
          >
            <Input placeholder='Số nhà, đường,...' />
          </Form.Item>
          <div className='flex flex-row justify-between px-6 pt-4'>
            <p>Tổng thanh toán ({numberCart} sản phẩm)</p>
            <p className='text-main text-lg'>19000000VND</p>
          </div>
          <Divider
            className='border border-gray-400 my-0'
            style={{ margin: '0' }}
          />
          <div className='flex justify-between py-5 px-6'>
            <div className='inline-flex items-center gap-2'>
              <TbDiscount2 size={24} />
              <span className='text-lg'>Sử dụng mã giảm giá</span>
            </div>
            <div>
              <Button type='primary' onClick={() => setModalDiscountCode(true)}>
                Chọn hoặc nhập mã
              </Button>
            </div>
            <Modal
              title='Chọn mã giảm giá'
              centered
              visible={modalDiscountCode}
              onOk={() => setModalDiscountCode(false)}
              onCancel={() => setModalDiscountCode(false)}
              cancelText={'TRỞ LẠI'}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </div>
          <Divider
            className='border border-gray-400 my-0'
            style={{ margin: '0' }}
          />
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full uppercase mt-2'
            >
              ĐẶT HÀNG
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}
export default CartBill
