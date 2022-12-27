import { publicRequest } from '../../api/axiosClient.js'
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Skeleton } from 'antd'
import TextArea from 'antd/lib/input/TextArea.js'
import { useSelector } from 'react-redux'
import { createContact } from '../../api/services/ContactService.js'
export default function ContactPage() {
  const [infoCompany, setNewInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const { userInfo } = useSelector((state) => state.user)
  const [form] = Form.useForm()
  const [contact, setContact] = useState('')
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    const getInfoCompany = async () => {
      const result = await publicRequest.get('company')
      setNewInfo(result)
      setLoading(false)
    }
    getInfoCompany()
  }, [])
  const handleContact = (data) => {
    // if (userInfo) {
    //   sendContact({ ...data, customer_id: userInfo.id })
    //   return
    // }
    setContact(data)
    sendContact(data)
  }
  const sendContact = (data) => {
    const dataContact = { ...data, ...contact }
    createContact(dataContact)
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Thông tin liên hệ  đã được gửi ,  Xin cảm ơn!',
        })
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Không thể gửi liên hệ',
        })
      })
      .finally(() => {
        form.setFieldsValue({
          customer_name: '',
          subject: '',
          phone: '',
          content: '',
          email: '',
        })
      })
  }
  return (
    <>
      {contextHolder}
      <section className='xl:container py-6'>
        <h1 className='text-2xl font-bold font-sans pt-5 uppercase '>
          <span className=''>Liên hệ</span>
        </h1>
        <div className='grid grid-cols-2 gap-10 mt-8'>
          <div className=''>
            {loading && (
              <Skeleton
                active={loading}
                paragraph={{
                  rows: 4,
                }}
              />
            )}
            <p className='mb-2'>
              <b>{infoCompany && infoCompany.company_name}</b>
            </p>
            <p className='mb-2'>{infoCompany && infoCompany.company_address}</p>
            <p className='mb-2'>
              Số điện thoại: {infoCompany && infoCompany.company_phone}
            </p>
            <p className='mb-2'>
              Đừng ngần ngại, hãy liên hệ ngay với chúng tôi
            </p>
            <section className='mt-5'>
              <div className=''>
                <h1 className='uppercase font-semibold'>Thông tin liên hệ</h1>
                <Form
                  form={form}
                  name='basic'
                  layout='vertical'
                  onFinish={handleContact}
                  autoComplete='off'
                >
                  <Form.Item
                    name='customer_name'
                    hasFeedback
                    initialValue={userInfo ? userInfo.name : null}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập họ và tên',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Họ và tên' />
                  </Form.Item>
                  <Form.Item
                    name='subject'
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tiêu đề',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Tiêu đề' />
                  </Form.Item>
                  <Form.Item
                    name='phone'
                    hasFeedback
                    initialValue={userInfo ? userInfo.phone : null}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Số điện thoại' />
                  </Form.Item>
                  <Form.Item
                    name='email'
                    hasFeedback
                    initialValue={userInfo ? userInfo.email : null}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập email',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Email' />
                  </Form.Item>
                  <Form.Item
                    name='content'
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập nội dung',
                        whitespace: true,
                      },
                    ]}
                  >
                    <TextArea maxLength={28} rows={4} placeholder='Nội dung' />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='w-full uppercase mt-2'
                    >
                      Gửi liên hệ
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </section>
          </div>
          {loading && (
            <Skeleton
              active={loading}
              paragraph={{
                rows: 4,
              }}
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: infoCompany && infoCompany.company_ggmap,
            }}
          ></div>
        </div>
      </section>
    </>
  )
}
