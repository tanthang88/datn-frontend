import React, { useEffect, useState } from 'react'
import '../../../scss/product.scss'
import { Radio } from 'antd'
import ProductsCate from './components/ProductsCate'
import Comments from './components/Comments'
import Info from './components/Info'
import Gift from './components/Gift'
import BreadCrumb from '../../../compoments/BreadCrumb'
import { currency } from '../../../util/currency'
import { useParams } from 'react-router'
import {
  fetchCommentsProduct,
  fetchProductById,
} from '../../../api/services/ProductsAPI'

export default function Product() {
  const [value, setValue] = useState(1)
  const [product, setProduct] = useState({})
  const [comments, setComments] = useState([])
  const [isMoreContent, setIsMoreContent] = useState(false)
  const [loading, setLoading] = useState(true)
  const urlBackEnd = 'http://127.0.0.1:8000'
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then((data) => {
        setProduct(data)
      })
      .finally(() => setLoading(false))
    fetchCommentsProduct(id).then((data) => {
      setComments(data)
    })
  }, [])

  const {
    product_title: title,
    product_content: content,
    product_price: price,
    product_desc: desc,
    product_image: image,
    product_images: images,
  } = product

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const links = [
    { title: 'Trang chủ', href: '/' },
    { title: 'sản phẩm', href: '/product' },
  ]
  if (loading) return
  return (
    <div className='xl:container 2xl:mx-auto lg:py-5 md:py-5 py-9'>
      <BreadCrumb links={links} />
      {console.log('product', product)}

      <div className='pt-5 pb-5 grid grid-cols-4 gap-2'>
        <div className='col-span-3'>
          <h1 className='text-2xl'>{title}</h1>
        </div>

        <div className='col-span-1 rating'></div>
      </div>
      <div className='flex justify-center lg:flex-row flex-col gap-8'>
        <div className='w-full sm:w-96 md:w-8/12  lg:w-6/12 flex flex-col lg:gap-6 sm:gap-6 gap-4'>
          <div className=' w-full lg:w-full bg-gray-100 flex justify-center items-center'>
            <img src={urlBackEnd + image} alt='' className='h-96' />
          </div>
          <div className='w-full grid lg:flex-row grid-cols-4 gap-6'>
            {images &&
              images.map((item, index) => (
                <div
                  key={index}
                  className='bg-gray-200 flex justify-center items-center py-4'
                >
                  <img src={urlBackEnd + item.image} />
                </div>
              ))}
          </div>
          <div className='w-full flex justify-start items-center'>
            <div className='bg-slate-100 w-full p-4'>
              {desc}
              <ul>
                <li>
                  <p>
                    13.3 inch, 1920 x 1080 Pixels, IPS LCD LED Backlit, True
                  </p>
                </li>
              </ul>
              <a>Xem chi tiết thông số kỹ thuật</a>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-96 md:w-8/12 lg:w-6/12'>
          <span className='font-semibold text-3xl leading-7 text-rose-700'>
            {currency(price)}
          </span>
          {/* bảng giá */}
          <div className='mt-7'>
            <Radio.Group defaultValue='a' buttonStyle='solid'>
              <Radio.Button value='a'>
                <b>128GB</b>
                <p>27.9000.000đ</p>
              </Radio.Button>
              <Radio.Button value='b'>
                <b>128GB</b>
                <p>27.9000.000đ</p>
              </Radio.Button>
              <Radio.Button value='c'>
                <b>128GB</b>
                <p>27.9000.000đ</p>
              </Radio.Button>
              <Radio.Button value='d'>
                <b>128GB</b>
                <p>27.9000.000đ</p>
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className='w-full mt-4'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Đỏ</Radio>
              <Radio value={2}>Xanh</Radio>
              <Radio value={3}>Vàng</Radio>
              <Radio value={4}>Đen</Radio>
            </Radio.Group>
          </div>
          {/* quà tặng khi mua hàng */}
          <Gift />
          <div className='w-full py-5'>
            <button className='w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-center'>
              <div className='text-2xl'>Mua ngay</div>
              <p className='mb-0'>Giao hàng miễn phí hoặc nhận tại shop</p>
            </button>
            <div className='grid grid-cols-2 gap-1 mt-1'>
              <button className='w-full grid-col-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center'>
                <div className='text-xl'>Trả góp 0%</div>
                <p className='mb-0'>Duyệt nhanh qua điện thoại</p>
              </button>
              <button className='w-full grid-col-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center'>
                <div className='text-xl'>Trả góp qua thẻ</div>
                <p className='mb-0'>ATM nội địa</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* chi tiết */}
      <div className='w-full justify-center grid grid-cols-5 gap-6 pb-16'>
        <div
          className={`col-span-3 mt-10 bg-slate-100 p-5 content_hidden relative
          ${isMoreContent ? 'show-more' : ''}`}
        >
          <button
            className='absolute bottom-2 m-auto w-32 left-0 right-0 pointer text-xs text-gray-800 font-normal bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded-lg btn-show'
            onClick={() => setIsMoreContent(!isMoreContent)}
          >
            Xem Thêm...
          </button>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className='col-span-2 mt-10'>
          <div className='w-full bg-slate-100 p-5'>
            <h2 className='text-xl font-normal leading-normal mt-0 mb-2'>
              Thông số kỹ thuật
            </h2>
            <Info />
          </div>
          <div className='w-full bg-slate-100 p-5 mt-5'>
            <h2 className='text-xl font-normal leading-normal mt-0 mb-2'>
              Tin tức về iPhone 13 Pro Max
            </h2>
            <div className='grid grid-cols-5 gap-2'>
              <img
                src='https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/26/637866023730277814_iphone-13-pro-cover.jpg'
                alt=''
                className='col-span-1 py-1'
              />
              <a href='' className='col-span-4 text-base'>
                Apple tăng cường sản xuất dòng iPhone 13 Pro vì quá “hot” Tin
                Mới
              </a>
              <img
                src='https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/26/637866023730277814_iphone-13-pro-cover.jpg'
                alt=''
                className='col-span-1'
              />
              <a href='' className='col-span-4 text-base'>
                Apple tăng cường sản xuất dòng iPhone 13 Pro vì quá “hot” Tin
                Mới
              </a>
            </div>
          </div>
        </div>
      </div>

      <Comments comments={comments} />
      <ProductsCate />
    </div>
  )
}
