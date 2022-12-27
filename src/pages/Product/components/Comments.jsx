import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Form, Input, message, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { UserOutlined } from '@ant-design/icons'
import { createComment } from '../../../api/services/ProductsServices.js'
import { DATETIME_FORMAT, REGEX, URL_BACKEND } from '../../../config/constants'
import { format } from 'date-fns'

export default function Comments({ productId, comments, getListComments }) {
  const { userInfo } = useSelector((state) => state.user)
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const [comment, setComment] = useState('')
  const [messageApi, contextHolder] = message.useMessage()

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const rulesOptions = {
    content: [
      {
        required: true,
        message: 'Vui lòng nhập bình luận...',
      },
      {
        pattern: REGEX.WHITE_SPACING,
        message: 'Vui lòng nhập bình luận...',
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
    phone: [
      {
        required: true,
        message: 'Vui lòng nhập số điện thoại',
      },
      {
        pattern: REGEX.PHONE,
        message: 'Số điện thoại không hợp lệ',
      },
    ],
    email: [
      {
        required: true,
        message: 'Vui lòng nhập địa chỉ Email',
      },
      {
        type: 'email',
        message: 'Địa chỉ Email không hợp lệ',
      },
    ],
  }

  const hideModal = () => {
    setOpen(false)
  }

  const handleComment = (data) => {
    if (userInfo) {
      sendComment({ ...data, customer_id: userInfo.id })
      return
    }
    setComment(data)
    setOpen(true)
  }

  const sendComment = (data) => {
    const dataComment = { ...data, ...comment }
    createComment(productId, dataComment)
      .then(() => {
        getListComments()
        messageApi.open({
          type: 'success',
          content: 'Đã thêm bình luận',
        })
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Không thể bình luận',
        })
      })
      .finally(() => {
        form.setFieldsValue({
          comment_content: '',
        })
        setOpen(false)
      })
  }

  return (
    <>
      {contextHolder}
      <section className='bg-white py-8 lg:py-16'>
        <div className='w-full mx-auto px-4'>
          <Form
            form={form}
            name='basic'
            layout='vertical'
            onFinish={handleComment}
            autoComplete='off'
          >
            <Form.Item
              label='Bình luận của bạn'
              name='comment_content'
              rules={rulesOptions.content}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Bình luận
              </Button>
            </Form.Item>
          </Form>

          {comments.map((item) => (
            <div key={item.comment_id}>
              <article className='p-6 pb-1 mb-1 text-base bg-white rounded-lg '>
                <footer className='flex justify-between items-center mb-2'>
                  <div className='flex items-center'>
                    <p className='inline-flex items-center mr-3 text-sm text-gray-900 '>
                      <img
                        className='mr-2 w-6 h-6 rounded-full'
                        src={URL_BACKEND + item.avatar}
                        alt='Michael Gough'
                      />
                      {item.comment_name}
                    </p>
                    <p className='text-sm text-gray-600'>
                      <time dateTime='2022-02-08' title='February 8th, 2022'>
                        {format(new Date(item.comment_date), DATETIME_FORMAT)}
                      </time>
                    </p>
                  </div>
                </footer>
                <p className='text-gray-500'>{item.comment_content}</p>
              </article>
              {item.children_comments &&
                item.children_comments.map((itemChild) => (
                  <article
                    key={itemChild.comment_id + item.comment_id}
                    className='p-3 mb-3 ml-12 text-base bg-white rounded-lg'
                  >
                    <footer className='flex justify-between items-center mb-2'>
                      <div className='flex items-center'>
                        <p className='inline-flex items-center mr-3 text-sm text-gray-900'>
                          <img
                            className='mr-2 w-6 h-6 rounded-full'
                            src={URL_BACKEND + '/storage/default-avatar.png'}
                          />
                          {itemChild.comment_name}
                        </p>
                        <p className='text-sm text-gray-600'>
                          <time
                            dateTime='2022-02-12'
                            title='February 12th, 2022'
                          >
                            {itemChild.comment_date}
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className='text-gray-500'>{itemChild.comment_content}</p>
                  </article>
                ))}
              <hr />
            </div>
          ))}
        </div>
      </section>
      <Modal
        title='Thông Tin Người Dùng'
        open={open}
        onOk={form.submit}
        onCancel={hideModal}
        okText='Gửi'
        cancelText='Huỷ'
      >
        <Form form={form} name='dynamic_rule' onFinish={sendComment}>
          <Form.Item
            {...formItemLayout}
            name='comment_name'
            label='Họ và tên'
            prefix={<UserOutlined className='site-form-item-icon' />}
            rules={rulesOptions.name}
          >
            <Input placeholder='Nhập họ và tên' />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name='comment_phone'
            label='Số điện thoại'
            prefix={<UserOutlined className='site-form-item-icon' />}
            rules={rulesOptions.phone}
          >
            <Input placeholder='Nhập số điện thoại' />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name='comment_email'
            label='Email'
            prefix={<UserOutlined className='site-form-item-icon' />}
            rules={rulesOptions.email}
          >
            <Input placeholder='Nhập địa chỉ Email' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
