import get from 'lodash/get'
import { Avatar, Col, Form, Menu, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import FormDetail from './components/FormDetail'
import { FormUpdate } from './components/FormUpdate'
import { getProfileUser } from '../../api/services/UserService'
import { getDist } from '../../api/services/GetAddressInformation'
import { URL_BACKEND } from '../../config/constants'

export default function User() {
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const { userInfo } = useSelector((state) => state.user)
  const [dataUser, setDataUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login', { replace: true })
    }
  }, [userInfo])

  useEffect(() => {
    setLoading(true)
    getProfileUser(userInfo.id)
      .then(({ user, cities, dists }) => {
        setDataUser(user)
        setListCity(cities)
        setListDist(dists)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const onChangeCity = (cityId) => {
    form.setFieldsValue({ dist_id: '' })
    getDist(cityId).then((data) => {
      setListDist(data)
    })
  }

  return (
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
                <div className='w-full'>
                  <a onClick={() => setIsEdit(!isEdit)}>
                    Sửa hồ sơ
                    <EditOutlined />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className='bg-white mt-5 py-3.5 rounded-lg shadow-md'>
            <Menu>
              <Menu.Item>Quản lý đơn hàng</Menu.Item>
              <Menu.Item>Thông tin tài khoản</Menu.Item>
              <Menu.Item>Thông tin tài khoản</Menu.Item>
            </Menu>
          </section>
        </Col>
        <Col span='17'>
          {isEdit ? (
            <FormUpdate
              loading={loading}
              setLoading={setLoading}
              dataUser={dataUser}
              setDataUser={setDataUser}
              listCity={listCity}
              listDist={listDist}
              onChangeCity={onChangeCity}
              form={form}
            />
          ) : (
            <FormDetail
              dataUser={dataUser}
              loading={loading}
              listCity={listCity}
              listDist={listDist}
            />
          )}
        </Col>
      </Row>
    </section>
  )
}
