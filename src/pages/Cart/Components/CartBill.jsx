import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  notification,
} from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TbDiscount2 } from 'react-icons/tb'
import { getCity, getDist } from '../../../api/services/CountryServices.js'
import { getListDiscountCode } from '../../../api/services/DiscountCodeServices.js'
import { currency } from '../../../utils/currency.js'
import {
  setTransportFee,
  resetDiscountCode,
} from '../../../store/Reducers/CartSlice.js'
import moment from 'moment'
import { verifyDiscountCode } from '../../../store/Services/CartServices.js'

const layoutFormBill = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
}
const CartBill = () => {
  const dispatch = useDispatch()
  const {
    numberCart,
    Carts,
    amountCart,
    isLoading,
    transportFee,
    saveMoneyDiscount,
  } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.user)
  const [FormBill, FormVoucher] = Form.useForm()
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const [listDiscountCode, setListDiscountCode] = useState([])
  const [modalDiscountCode, setModalDiscountCode] = useState(false)
  const [btnSubmitVoucher, setBtnSubmitVoucher] = useState(true)
  const getListCity = async () => {
    setListCity(await getCity())
    if (userInfo) {
      if (listCity) {
        for (const property in listCity) {
          const { id, transport_fee } = listCity[property]
          if (id === userInfo.city_id) {
            dispatch(setTransportFee(transport_fee))
            return
          }
        }
        // listCity.map((i) => {
        //   if (i.id === userInfo.city_id)
        //     dispatch(setTransportFee(i.transport_fee))
        // })
      }
    }
  }
  const getValueCity = async (IDCity) => {
    setListDist(await getDist(IDCity))

    for (const property in listCity) {
      const { id, transport_fee } = listCity[property]
      if (id === IDCity) {
        dispatch(setTransportFee(transport_fee))
        return
      } else {
        dispatch(setTransportFee(listCity[IDCity].transport_fee))
      }
    }
    // listCity.map((i) => {
    //   if (i.id === IDCity) {
    //     dispatch(setTransportFee(i.transport_fee))
    //   } else {
    //     dispatch(setTransportFee(listCity[IDCity].transport_fee))
    //   }
    // })
  }

  const onChangeInputVoucher = (e) => {
    e.target.value !== ''
      ? setBtnSubmitVoucher(false)
      : setBtnSubmitVoucher(true)
  }
  const getDataDiscountCode = async () => {
    let data = await getListDiscountCode()
    data = data.map((item) => {
      if (item.type === 'Giảm %') {
        item.type_content = `${item.rate}%`
      }
      if (item.type === 'Giảm tiền') {
        item.type_content = `${currency(item.rate)}`
      }
      return item
    })
    setListDiscountCode(data)
  }

  const submitFormBill = (formValue) => {
    console.log(formValue)
  }
  const handleChoiceDiscount = (e) => {
    const value = e.target.value
    dispatch(verifyDiscountCode({ id: value, total: amountCart })).then(
      ({ payload }) => {
        const { success, message } = payload[0]
        if (success) {
          notification.success({
            message: `${message}`,
          })
        } else {
          notification.error({
            message: `${message}`,
          })
        }
      },
    )
  }
  const submitDiscount = (e) => {
    switch (e) {
      case null:
        setModalDiscountCode(false)
        break
      case e:
        if (e !== null) {
          console.log(e)
        }
        break
    }
  }

  useEffect(() => {
    getListCity()
    getDataDiscountCode()
    dispatch(resetDiscountCode())
    if (userInfo) getValueCity(userInfo.city_id)
  }, [userInfo])
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
            initialValue={userInfo.name || null}
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
            initialValue={userInfo.tel || undefined}
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
            initialValue={userInfo.city_id}
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
                listCity.map((item, i) => (
                  <Select.Option value={item.id} key={item.i}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='dist_id'
            label='Huyện/Thị xã'
            initialValue={userInfo.dist_id || null}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn huyện/thị xã',
              },
            ]}
          >
            <Select
              placeholder='Chọn huyện/thị xã'
              defaultValue={userInfo.dist_id || null}
            >
              {listDist &&
                listDist.map((item, i) => (
                  <Select.Option value={item.id} key={item.i}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='address'
            label='Địa chỉ'
            initialValue={userInfo.address || null}
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
          <Form.Item name='bill' label='Bill' noStyle initialValue={Carts}>
            <Input type='hidden' />
          </Form.Item>
          <div className='flex flex-col px-0 pb-2'>
            <div className='flex flex-row items-center justify-between'>
              <p className='flex flex-row justify-around'>Phí vận chuyển:</p>
              <p className='text-main text-xl font-bold'>
                {currency(transportFee || 0)}
              </p>
            </div>
            {saveMoneyDiscount !== 0 ? (
              <div className='flex flex-row items-center justify-between'>
                <p className='flex flex-row justify-around'>
                  Sử dụng mã giảm giá:
                </p>
                <p className='text-main text-xl font-bold'>
                  - {currency(saveMoneyDiscount)}
                </p>
              </div>
            ) : (
              ''
            )}
            <div className='flex flex-row items-center justify-between'>
              <p className='flex flex-row justify-around'>
                Tổng thanh toán ({numberCart} sản phẩm):
              </p>
              <p className='text-main text-2xl font-bold'>
                {currency(amountCart + transportFee)}
              </p>
            </div>
          </div>
          <Divider
            className='border border-gray-400 my-0'
            style={{ margin: '0' }}
          />
          <div className='flex justify-between py-5 px-0'>
            <div className='inline-flex items-center gap-2'>
              <TbDiscount2 size={24} />
              <span className='text-md'>Sử dụng mã giảm giá</span>
            </div>
            <div>
              <Button type='primary' onClick={() => setModalDiscountCode(true)}>
                Chọn hoặc nhập mã
              </Button>
            </div>
            <Modal
              title='Chọn mã giảm giá'
              centered
              open={modalDiscountCode}
              onOk={() => submitDiscount(null)}
              onCancel={() => setModalDiscountCode(false)}
              cancelText={'TRỞ LẠI'}
            >
              {/* Lastfire Voucher */}
              {/* <section */}
              {/*  className='px-4 py-4' */}
              {/*  style={{ backgroundColor: '#f8f8f8' }} */}
              {/* > */}
              {/*  <Form */}
              {/*    name='form-voucher' */}
              {/*    form={FormVoucher} */}
              {/*    layout={'horizontal'} */}
              {/*    onFinish={submitFormBill} */}
              {/*    className='flex flex-row justify-between gap-2' */}
              {/*  > */}
              {/*    <Form.Item */}
              {/*      name='discount-code' */}
              {/*      style={{ marginBottom: '0px' }} */}
              {/*      className='w-full' */}
              {/*    > */}
              {/*      <Input */}
              {/*        className='w-full' */}
              {/*        allowClear */}
              {/*        placeholder='Nhập mã giảm giá' */}
              {/*        onChange={onChangeInputVoucher} */}
              {/*      /> */}
              {/*    </Form.Item> */}
              {/*    <Button */}
              {/*      type='primary' */}
              {/*      htmlType='submit' */}
              {/*      disabled={btnSubmitVoucher} */}
              {/*    > */}
              {/*      Áp dụng */}
              {/*    </Button> */}
              {/*  </Form> */}
              {/* </section> */}
              <article>
                <div className='my-0'>
                  <p className='text-base'>Mã giảm giá sản phẩm</p>
                  <span>Chỉ có thể chọn 1 mã</span>
                </div>
                <Radio.Group name='discountcode' className='w-full'>
                  <Space
                    direction='vertical'
                    className='cart__discountcode w-full'
                  >
                    {listDiscountCode &&
                      listDiscountCode.map((item, index) => (
                        <Radio
                          value={item.id}
                          key={index}
                          onChange={(e) => submitDiscount(e)}
                        >
                          <div className='flex flex-row gap-2'>
                            <div
                              style={{
                                backgroundColor: '#00bfa5',
                              }}
                              className='overflow-hidden'
                            >
                              <h1 className='uppercase text-white text-lg m-0 px-6 pt-6'>
                                giảm giá <br /> đơn hàng
                              </h1>
                            </div>
                            <div className='flex flex-col gap-2 py-2'>
                              <p>
                                Mã{' '}
                                <span className='font-bold'>{item.title}</span>
                              </p>
                              <p>
                                Giảm <strong>{item.type_content}</strong> trên
                                tổng đơn hàng
                              </p>
                              <p className='italic'>
                                Đơn hàng tối thiếu:{' '}
                                <span className='font-bold'>
                                  {currency(item.minimum_order)}
                                </span>
                                <span className='py-2 block'>
                                  <span className='font-bold italic'>
                                    {moment(item.expiry_date).format(
                                      '[HSD:] HH:mm:ss - DD.MM.YYYY',
                                    )}
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </Radio>
                      ))}
                  </Space>
                </Radio.Group>
              </article>
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
