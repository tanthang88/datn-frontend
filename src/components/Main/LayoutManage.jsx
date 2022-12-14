import { Avatar, Col, Menu, Row } from 'antd'
import React, { useEffect } from 'react'
import { UserOutlined, InboxOutlined } from '@ant-design/icons'
import get from 'lodash/get'
import { URL, URL_BACKEND } from '../../config/constants'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const LayoutManage = ({ children }) => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.user)
  useEffect(() => {
    if (!userInfo) {
      navigate('/login', { replace: true })
    }
  }, [userInfo])

  const itemNav = [
    {
      key: URL.USER,
      icon: <UserOutlined />,
      label: <Link to={URL.USER}>Thông tin tài khoản</Link>,
    },
    {
      key: URL.BILL,
      icon: <InboxOutlined />,
      label: <Link to={URL.BILL}>Quản lý đơn hàng</Link>,
    },
  ]
  return (
    <>
      <section className='xl:container px-2 py-2'>
        <Row gutter='20'>
          <Col span='7'>
            <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
              <div className='info grid grid-cols-5'>
                <div className='flex '>
                  <Avatar
                    src={URL_BACKEND + get(userInfo, 'avatar', '')}
                    size={40}
                    icon={<UserOutlined />}
                  />
                </div>

                <div className='col-span-4'>
                  <div className='w-full text-base font-bold text-zinc-600'>
                    {get(userInfo, 'name')}
                  </div>
                </div>
              </div>
            </section>
            <section className='bg-white mt-5 py-3.5 rounded-lg shadow-md'>
              <Menu items={itemNav} />
            </section>
          </Col>
          <Col span='17' className='mb-16'>
            {children}
          </Col>
        </Row>
      </section>
    </>
  )
}

export default LayoutManage
