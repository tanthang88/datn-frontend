import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Col,
  notification,
  Row,
  Spin,
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
import GridContentLayout from '../../../components/base/GridContentLayout.jsx'
import IconPaymentMethodCOD from '../../../assets/images/icon-payment-method-cod.svg'
import IconPaymentMethodATM from '../../../assets/images/icon-payment-method-atm.svg'
import ACB from '../../../assets/images/bank-logo/ACB.jpg'
import BIDV from '../../../assets/images/bank-logo/BIDV.jpg'
import DAB from '../../../assets/images/bank-logo/DAB.jpg'
import EIB from '../../../assets/images/bank-logo/EIB.jpg'
import HDB from '../../../assets/images/bank-logo/HDB.jpg'
import MB from '../../../assets/images/bank-logo/MB.jpg'
import MSB from '../../../assets/images/bank-logo/MSB.jpg'
import NAB from '../../../assets/images/bank-logo/NAB.jpg'
import NCB from '../../../assets/images/bank-logo/NCB.jpg'
import SACOMBANK from '../../../assets/images/bank-logo/SACOMBANK.png'
import SCB from '../../../assets/images/bank-logo/SCB.png'
import TCB from '../../../assets/images/bank-logo/TCB.jpg'
import TPB from '../../../assets/images/bank-logo/TPB.jpg'
import VARB from '../../../assets/images/bank-logo/VARB.jpg'
import VCB from '../../../assets/images/bank-logo/vcb.jpg'
import VTB from '../../../assets/images/bank-logo/viettink.png'
import VPB from '../../../assets/images/bank-logo/VPB.jpg'
import { addBill } from '../../../api/services/BillService.js'
import { useNavigate } from 'react-router-dom'

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
  const { numberCart, Carts, amountCart, transportFee, saveMoneyDiscount } =
    useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.user)
  const [FormBill, FormVoucher] = Form.useForm()
  const [listCity, setListCity] = useState(null)
  const [listDist, setListDist] = useState(null)
  const [showListBank, setShowListBank] = useState(false)
  const [loadingListBank, setLoadingListBank] = useState(false)
  const [listDiscountCode, setListDiscountCode] = useState([])
  const [modalDiscountCode, setModalDiscountCode] = useState(false)
  const [btnSubmitVoucher, setBtnSubmitVoucher] = useState(true)
  const [bankCode, setBankCode] = useState(null)
  const [discountCodeID, setDiscountCodeID] = useState(null)
  const navigate = useNavigate()
  const listBank = (
    <article className='my-2' key={showListBank.toString()}>
      <Radio.Group
        buttonStyle='outline'
        name='bank'
        optionType={'default'}
        onChange={(e) => handleSelectBankPayment(e)}
      >
        <Row gutter={[8, 8]} className='payment-listbank'>
          <Col span={6}>
            <Radio value='ACB' className='w-full'>
              <img
                src={ACB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='NCB' className='w-full'>
              <img
                src={NCB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='BIDV' className='w-full'>
              <img
                src={BIDV}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='DAB' className='w-full'>
              <img
                src={DAB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='EIB' className='w-full'>
              <img
                src={EIB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='HDB' className='w-full'>
              <img
                src={HDB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='MB' className='w-full'>
              <img
                src={MB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='' className='w-full'>
              <img
                src={MSB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='NAB' className='w-full'>
              <img
                src={NAB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='SACOMBANK' className='w-full'>
              <img
                src={SACOMBANK}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='SCB' className='w-full'>
              <img
                src={SCB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='TCB' className='w-full'>
              <img
                src={TCB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='TPB' className='w-full'>
              <img
                src={TPB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='VARB' className='w-full'>
              <img
                src={VARB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='VCB' className='w-full'>
              <img
                src={VCB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='VTB' className='w-full'>
              <img
                src={VTB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
          <Col span={6}>
            <Radio value='VPB' className='w-full'>
              <img
                src={VPB}
                alt='Ngân hàng'
                className='w-full h-full object-cover'
              />
            </Radio>
          </Col>
        </Row>
      </Radio.Group>
    </article>
  )
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
  const submitFormBill = (form) => {
    const formValue = JSON.parse(JSON.stringify(form))
    formValue?.products.forEach((item) => {
      item.variant_name = `${item.labelColor} ${item.labelCapacity}`
      item.product_name = item.product_title
      item.variant_id = null
    })
    formValue.payment = 1
    if (showListBank && bankCode !== null) {
      formValue.bank_code = bankCode
      formValue.payment = 0
    }
    formValue.discount_code_id = discountCodeID
    formValue.bill_price = amountCart

    Object.preventExtensions(formValue)
    const rs = addBill(formValue)
    rs.then((res) => {
      if (res[0].payment === 'offline') {
        console.log('ok')
        notification.success({
          message: 'Thanh toán đơn hàng thành công!',
        })
      } else {
        navigate(res[0].data)
      }
    })
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
          setDiscountCodeID(value)
        } else {
          notification.error({
            message: `${message}`,
          })
        }
      },
    )
  }
  const handleChangePayment = (e) => {
    const valuePayment = e.target.value
    if (valuePayment === 'ATM') {
      setLoadingListBank(true)
      setTimeout(() => {
        setLoadingListBank(false)
        setShowListBank(true)
      }, 500)
    } else {
      setShowListBank(false)
      setBankCode(null)
    }
  }
  const submitDiscount = (e) => {
    switch (e) {
      case null:
        setModalDiscountCode(false)
        break
      case e:
        if (e !== null) {
          handleChoiceDiscount(e)
        }
        break
    }
  }
  const handleSelectBankPayment = (e) => {
    setBankCode(e.target.value)
  }
  useEffect(() => {
    getListCity()
    getDataDiscountCode()
    dispatch(resetDiscountCode())
    if (userInfo) getValueCity(userInfo.city_id)
  }, [userInfo])
  return (
    <GridContentLayout>
      <Col span={12}>
        <section className='bg-white mt-4 ml-4 mb-4'>
          <h1 className='uppercase'>Hình thức thanh toán</h1>
          <Radio.Group
            onChange={(e) => handleChangePayment(e)}
            optionType={'button'}
            className='w-full'
          >
            <Space
              direction='horizontal'
              className='w-full justify-between payment-method gap-3'
            >
              <Radio value='COD' className='w-full'>
                <div className='inline-flex flex-row justify-center items-center gap-2 ml-8'>
                  <img
                    src={IconPaymentMethodCOD}
                    alt='phương thức thanh toán khi nhận hàng'
                    className='m-0 p-0'
                    style={{ marginTop: '-.35rem' }}
                  />
                  <p className='m-0'>Thanh toán khi nhận hàng</p>
                </div>
              </Radio>
              <Radio value='ATM' className='w-full'>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <img
                    src={IconPaymentMethodATM}
                    alt='phương thức thanh toán qua thẻ'
                  />
                  <p className='m-0 p-0'>Thẻ ATM/Internet Banking</p>
                </div>
              </Radio>
            </Space>
          </Radio.Group>

          {loadingListBank ? (
            <div className='flex justify-center py-5'>
              <Spin size={'large'} />
            </div>
          ) : (
            ''
          )}
          {showListBank ? listBank : ''}
        </section>
      </Col>
      <Col span={12}>
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
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name='customer_name'
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
                </Col>
                <Col span={12}>
                  <Form.Item
                    name='bill_phone'
                    label='Số điện thoại'
                    tooltip='Nhập số điện thoại liên hệ'
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
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={12}>
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
                </Col>
                <Col span={12}>
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
                </Col>
                <Col span={24}>
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
                  <Form.Item name='products' noStyle initialValue={Carts}>
                    <Input type='hidden' />
                  </Form.Item>
                  {/* <Form.Item */}
                  {/*  name='bill_price' */}
                  {/*  noStyle */}
                  {/*  initialValue={amountCart} */}
                  {/* > */}
                  {/*  <Input type='hidden' /> */}
                  {/* </Form.Item> */}
                  <Form.Item
                    name='customer_id'
                    noStyle
                    initialValue={userInfo?.id}
                  >
                    <Input type='hidden' />
                  </Form.Item>
                  <Form.Item
                    name='sale'
                    noStyle
                    initialValue={saveMoneyDiscount || 0}
                  >
                    <Input type='hidden' />
                  </Form.Item>
                </Col>
              </Row>
              <div className='flex flex-col px-0 pb-2'>
                <div className='flex flex-row items-center justify-between'>
                  <p className='flex flex-row justify-around'>
                    Phí vận chuyển:
                  </p>
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
                  <Button
                    type='primary'
                    onClick={() => setModalDiscountCode(true)}
                  >
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
                                  <h1 className='uppercase text-white text-lg m-0 px-6 pt-12'>
                                    giảm giá <br /> đơn hàng
                                  </h1>
                                </div>
                                <div className='flex flex-col gap-2 py-2 pt-4'>
                                  <p className='m-0'>
                                    <span className='font-bold'>
                                      {item.title}
                                    </span>
                                  </p>
                                  <p className='m-0'>
                                    Giảm <strong>{item.type_content}</strong>{' '}
                                    trên tổng đơn hàng
                                  </p>
                                  <p className='italic mb-0'>
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
      </Col>
    </GridContentLayout>
  )
}
export default CartBill
