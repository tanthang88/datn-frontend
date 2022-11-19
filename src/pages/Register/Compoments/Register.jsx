import { useState, useEffect } from 'react'
import { Form, Select, Input, Button, Divider, Col, Row, message } from 'antd'
import {
  getCity,
  getDist,
} from '../../../api/services/GetAddressInformation.js'
import { handleRegisterUser } from '../../../store/Actions/AuthenticationActions.js'
import { Link, useNavigate } from 'react-router-dom'

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
}
export default function RegisterCompoment() {
  // const navigate = useNavigate()
  const [formRegister] = Form.useForm()
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const getListCity = async () => {
    setListCity(await getCity())
  }
  const getValueCity = async (IDCity) => {
    setListDist(await getDist(IDCity))
  }
  const submitForm = (formValues) => {
    handleRegisterUser(formValues).then((res) => {
      if (res.data.status === 1) {
        message.success('Đăng kí tài khoản thành công!', 2)
      }
    })
  }
  useEffect(() => {
    getListCity()
  }, [])
  return (
    <section className='xl:container border-t-gray-400'>
      <Row justify='center'>
        <Col
          span={8}
          className='rounded-lg border-2 px-5 py-5 bg-white shadow-lg shadow-neutral-500/40'
        >
          <h1 className='font-light text-black text-xl text-left'>Đăng ký</h1>
          <Form
            {...layout}
            layout='vertical'
            form={formRegister}
            name='form-register'
            onFinish={submitForm}
            scrollToFirstError
          >
            <Form.Item
              name='name'
              label='Họ và tên'
              tooltip='Nhập họ và tên của bạn'
              hasFeedback
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
              name='email'
              label='E-mail'
              tooltip='Nhập email của bạn'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
                {
                  type: 'email',
                  message: 'Vui lòng nhập đúng định dạng e-mail',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label='Mật khẩu'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
                {
                  min: 8,
                  message: 'Vui lòng nhập mật khẩu dài hơn 8 kí tự',
                },
              ]}
            >
              <Input.Password />
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
                  message: 'Vui lòng nhập địa chỉ',
                },
              ]}
            >
              <Input placeholder='Địa chỉ chi tiết' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='w-full uppercase'
              >
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
          <p style={{ fontSize: '12px' }} className='text-center'>
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về
            <br />
            <Link to={'/'}> Điều khoản dịch vụ</Link> &
            <Link to={'/'}> Chính sách bảo mật</Link>
          </p>
          <Divider
            orientation={'center'}
            dashed={true}
            plain={true}
            className='bg-black'
          >
            <span className='uppercase opacity-50 font-medium text-black'>
              hoặc
            </span>
          </Divider>
          <p className='text-center'>
            <span>Bạn đã có tài khoản?</span>
            <span className='pl-1 text-main font-medium'>
              <Link to={'/Components'}>Đăng nhập ngay</Link>
            </span>
          </p>
        </Col>
      </Row>
    </section>
  )
}
