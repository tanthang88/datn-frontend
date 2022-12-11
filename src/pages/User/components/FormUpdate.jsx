import get from 'lodash/get'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Row,
  Select,
  Upload,
} from 'antd'
import React, { useRef, useState } from 'react'
import { UserOutlined, UploadOutlined } from '@ant-design/icons'
import {
  REGEX,
  DATE_FORMAT_BE,
  DATE_FORMAT_NUMBER,
  URL_BACKEND,
} from '../../../config/constants'
import { updateProfileUser } from '../../../api/services/UserService'
import format from 'date-fns/format'
import { useDispatch } from 'react-redux'
import { updateUserInfo } from '../../../store/Reducers/userSlice'

dayjs.extend(weekday)
dayjs.extend(localeData)

export const FormUpdate = ({
  dataUser,
  loading,
  setLoading,
  setDataUser,
  listCity,
  listDist,
  onChangeCity,
  form,
}) => {
  const refFile = useRef()
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage()

  const defaultValue = {
    name: get(dataUser, 'name'),
    tel: get(dataUser, 'tel'),
    gender: get(dataUser, 'gender', '0'),
    birthday: dataUser.birthday ? dayjs(dataUser.birthday, 'YYYY-MM-DD') : '',
    address: get(dataUser, 'address', ''),
    avatar: get(dataUser, 'avatar'),
    city_id: get(dataUser, 'city_id'),
    dist_id: get(dataUser, 'dist_id'),
  }

  const rulesOptions = {
    birthday: [
      {
        required: true,
        message: 'Vui lòng chọn ngày sinh',
      },
    ],
    name: [
      {
        required: true,
        message: 'Vui lòng nhập Họ và tên',
      },
      {
        pattern: REGEX.WHITE_SPACING,
        message: 'Vui lòng nhập Họ và tên',
      },
    ],
    tel: [
      {
        required: true,
        message: 'Vui lòng nhập số điện thoại',
      },
      {
        pattern: REGEX.PHONE,
        message: 'Số điện thoại không hợp lệ',
      },
    ],
    address: [
      {
        required: true,
        message: 'Vui lòng nhập địa chỉ',
      },
      {
        pattern: REGEX.WHITE_SPACING,
        message: 'Vui lòng nhập địa chỉ',
      },
    ],
    dist: [
      {
        required: true,
        message: 'Vui lòng chọn huyện/Thị xã',
      },
    ],
    city: [
      {
        required: true,
        message: 'Vui lòng chọn tỉnh/Thành phố',
      },
    ],
  }

  const onSubmit = (value) => {
    const { id } = dataUser

    const dataFormat = {
      ...value,
      birthday: format(new Date(value.birthday), DATE_FORMAT_BE),
      gender: +value.gender,
    }
    setLoading(true)
    updateProfileUser(id, dataFormat)
      .then((data) => {
        setUploadImage({
          ...uploadImage,
          showUploadList: false,
        })
        setDataUser({ ...data, gender: +data.gender })
        dispatch(updateUserInfo(data))
        messageApi.open({
          type: 'success',
          content: 'Cập nhật thành công',
        })
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Cập nhật không thành công',
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const getFile = (e) => {
    setUploadImage({ ...uploadImage, showUploadList: true })
    return e && e.fileList[0].originFileObj
  }
  const [uploadImage, setUploadImage] = useState({
    className: 'w-full upload-list-inline block',
    multiple: false,
    maxCount: 1,
    ref: refFile,
    action: false,
    listType: 'picture',
    showUploadList: true,
  })

  return (
    <>
      {contextHolder}
      <section className='bg-white mt-6 px-5 py-3.5 rounded-lg shadow-md'>
        <h1 className='text-xl font-sans text-zinc-600'>Chỉnh sửa thông tin</h1>
        <p className='mb-4'>Quản lý thông tin</p>
        <hr />
        <Form form={form} initialValues={defaultValue} onFinish={onSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={16}>
              <div className='grid grid-cols-3 gap-5 gap-y-0 mt-4 pb-5'>
                <div className='flex items-center justify-end py-3'>
                  <p className='text-sm text-zinc-500'>Email</p>
                </div>
                <div className='col-span-2 py-3'>trung0910@gmail</div>
                <div className='flex items-start justify-end py-4'>
                  <p className='text-sm text-zinc-500'>Tên</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    name='name'
                    hasFeedback
                    rules={rulesOptions.name}
                    style={{ margin: '0px' }}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className='flex items-start justify-end py-4'>
                  <p className='text-sm text-zinc-500'>Số điện thoại</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    name='tel'
                    rules={rulesOptions.tel}
                    style={{ margin: '0px' }}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className='flex items-center justify-end py-3'>
                  <p className='text-sm text-zinc-500'>Giới tính</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    style={{ margin: '0px' }}
                    name='gender'
                    // defaultValue={defaultValue.gender}
                  >
                    <Radio.Group>
                      <Radio value={0}> Nam </Radio>
                      <Radio value={1}> Nữ </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div className='flex items-start justify-end py-4'>
                  <p className='text-sm text-zinc-500'>Ngày sinh</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    hasFeedback
                    style={{ margin: '0px' }}
                    rules={rulesOptions.birthday}
                    name='birthday'
                  >
                    <DatePicker format={DATE_FORMAT_NUMBER} />
                  </Form.Item>
                </div>
                <div className='flex items-center justify-end py-3'>
                  <p className='text-sm text-zinc-500'>Thành phố</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    name='city_id'
                    hasFeedback
                    rules={rulesOptions.city}
                    style={{ margin: '0px' }}
                  >
                    <Select
                      placeholder='Chọn tỉnh/TP'
                      value={dataUser.city_id}
                      onChange={onChangeCity}
                    >
                      {listCity &&
                        listCity.map((item) => (
                          <Select.Option value={item.id} key={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className='flex items-center justify-end py-3'>
                  <p className='text-sm text-zinc-500'>Quận huyện</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    name='dist_id'
                    value={dataUser.dist_id}
                    style={{ margin: '0px' }}
                    hasFeedback
                    rules={rulesOptions.dist}
                  >
                    <Select placeholder='Chọn huyện/thị xã'>
                      <Select.Option value='' disabled>
                        Vui lòng chọn
                      </Select.Option>
                      {listDist &&
                        listDist.map((item) => (
                          <Select.Option value={item.id} key={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className='flex items-center justify-end py-3'>
                  <p className='text-sm text-zinc-500'>Địa chỉ</p>
                </div>
                <div className='col-span-2 py-3'>
                  <Form.Item
                    name='address'
                    hasFeedback
                    rules={rulesOptions.address}
                    style={{ margin: '0px' }}
                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>
              <div className='w-full flex justify-center pb-10'>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Cập nhật
                  </Button>
                </Form.Item>
              </div>
            </Col>
            <Col span={8}>
              <div className='w-full pt-14 justify-center flex'>
                <Avatar
                  size={90}
                  icon={<UserOutlined />}
                  src={URL_BACKEND + dataUser.avatar}
                />
              </div>
              <div className='w-full pt-5 block'>
                <Form.Item
                  name='avatar'
                  valuePropName='file'
                  getValueFromEvent={getFile}
                  className='justify-center flex'
                >
                  <Upload {...uploadImage}>
                    <Button icon={<UploadOutlined />}>Tải ảnh</Button>
                  </Upload>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}
