import { Avatar, Col, Form, Row, Select } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { DATE_FORMAT, URL_BACKEND } from '../../../config/constants'
import { format } from 'date-fns'

const FormDetail = ({ dataUser, loading, listCity, listDist }) => {
  const {
    address,
    avatar,
    birthday,
    email,
    gender,
    name,
    tel,
    city_id: cityId,
    dist_id: distId,
  } = dataUser
  if (loading) return

  return (
    <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
      <h1 className='text-xl font-sans text-zinc-600'>Hồ sơ của tôi</h1>
      <p className='mb-4'>Quản lý thông tin hồ sơ</p>
      <hr />
      <Form>
        <Row>
          <Col span={16}>
            <div className='grid grid-cols-3 gap-5 gap-y-0 mt-4 pb-16'>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Tên</p>
              </div>
              <div className='col-span-2 py-3'>{name}</div>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Email</p>
              </div>
              <div className='col-span-2 py-3'>{email}</div>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Số điện thoại</p>
              </div>
              <div className='col-span-2 py-3'>{tel}</div>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Giới tính</p>
              </div>
              <div className='col-span-2 py-3'>
                {gender === 0 ? 'Nam' : 'Nữ'}
              </div>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Ngày sinh</p>
              </div>
              <div className='col-span-2 py-3'>
                {birthday ? format(new Date(birthday), DATE_FORMAT) : ''}
              </div>
              <div className='flex items-center justify-end py-3'>
                <p className='text-sm text-zinc-500'>Thành phố/Tỉnh thành</p>
              </div>
              <div className='col-span-2 py-3'>
                <Select value={+cityId} disabled style={{ width: '100%' }}>
                  {listCity.map((item) => (
                    <Select.Option value={item.id} key={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className='flex items-center justify-end py-3'>
                <p className='text-sm text-zinc-500'>Quận huyện/Xã</p>
              </div>
              <div className='col-span-2 py-3'>
                <Select value={+distId} disabled style={{ width: '100%' }}>
                  {listDist.map((item) => (
                    <Select.Option value={item.id} key={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className='flex items-start justify-end py-3'>
                <p className='text-sm text-zinc-500'>Địa chỉ</p>
              </div>
              <div className='col-span-2 py-3'>{address}</div>
            </div>
          </Col>
          <Col span={8}>
            <div className='w-full pt-14 justify-center flex'>
              <Avatar
                size={90}
                icon={<UserOutlined />}
                src={URL_BACKEND + avatar}
              />
            </div>
            <div className='text-center text-bold text-base text-slate-500 py-4'>
              {name}
            </div>
          </Col>
        </Row>
      </Form>
    </section>
  )
}

export default FormDetail
