import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Row, Col, Divider, message } from 'antd'
import React, { useEffect } from 'react'
import { loginUser } from '../../../store/Services/UserServices.js'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from 'lodash'

export default function LoginCompoment() {
  const [formLogin] = Form.useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, userInfo } = useSelector((state) => state.user)
  useEffect(
    function () {
      if (error != null) message.error(error, 2)
      if (error === null && !isEmpty(userInfo)) {
        message.success('Đăng nhập thành công!')
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    },
    [loading, error, userInfo],
  )

  return (
    <section className='xl:container border-t-gray-400'>
      <Row justify={'center'}>
        <Col
          span={8}
          className='rounded-lg border-2 px-5 py-5 bg-white shadow-lg shadow-neutral-500/40'
        >
          <h1 className='font-light text-black text-xl text-left'>Đăng Nhập</h1>
          <Form
            form={formLogin}
            name='form-login'
            onFinish={(values) => dispatch(loginUser(values))}
            scrollToFirstError
          >
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
                {
                  type: 'email',
                  message: 'Vui lòng nhập đúng định dạng email',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Email'
              />
            </Form.Item>
            <Form.Item
              name='password'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
                {
                  min: 8,
                  message: 'Mật khẩu phải nhiều hơn 8 kí tự',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Mật khẩu'
              />
            </Form.Item>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Ghi nhớ tài khoản</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button w-full'
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Divider
              orientation={'center'}
              dashed={true}
              plain={true}
              className='bg-black'
            >
              <span className='uppercase opacity-80 font-medium text-black'>
                hoặc
              </span>
            </Divider>
            <p className='text-center'>
              <span className='opacity-70'>Bạn chưa có tài khoản?</span>
              <span className='pl-1 text-main font-medium'>
                <Link to={'/register'}>Đăng kí</Link>
              </span>
            </p>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
