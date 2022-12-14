import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormDetail from './components/FormDetail'
import { FormUpdate } from './components/FormUpdate'
import { getProfileUser } from '../../api/services/UserService'
import { getDist } from '../../api/services/GetAddressInformation'
import LayoutManage from '../../components/Main/LayoutManage'

export default function User() {
  const [isEdit, setIsEdit] = useState(false)
  const { userInfo } = useSelector((state) => state.user)
  const [dataUser, setDataUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const [form] = Form.useForm()

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
    <LayoutManage>
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
          setIsEdit={setIsEdit}
        />
      ) : (
        <FormDetail
          dataUser={dataUser}
          loading={loading}
          listCity={listCity}
          listDist={listDist}
          setIsEdit={setIsEdit}
        />
      )}
    </LayoutManage>
  )
}
