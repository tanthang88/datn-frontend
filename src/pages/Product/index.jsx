import first from 'lodash/first'
import isEmpty from 'lodash/isEmpty'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../scss/product.scss'
import { message, Radio } from 'antd'
import Comments from './components/Comments'
import Info from './components/Info'
import Gift from './components/Gift'
import BreadCrumb from '../../components/BreadCrumb'
import { currency } from '../../utils/currency'
import { useParams } from 'react-router'
import {
  fetchCommentsProduct,
  fetchPost,
  fetchProductById,
  fetchProductByPropertiesId,
  fetchProductsRelated,
} from '../../api/services/ProductsServices.js'
import LoadingProduct from '../../components/Loading/LoadingProduct'
import Related from './components/Related'
import { URL_BACKEND } from '../../config/constants'
import { addProduct } from '../../store/Reducers/CartSlice'
import Post from './components/Post'
import { getListDiscountCode } from '../../api/services/DiscountCodeServices'

export default function Product() {
  const [product, setProduct] = useState({})
  const [productsRelated, setProductsRelated] = useState([])
  const [comments, setComments] = useState([])
  const [posts, setPosts] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const [isMoreContent, setIsMoreContent] = useState(false)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const { userInfo } = useSelector((state) => state.user)
  const [listCapacities, setListCapacities] = useState([])
  const [listColors, setListColors] = useState([])
  const [discounts, setDiscounts] = useState([])

  const dispatch = useDispatch()

  const [data, setData] = useState({
    propertyCapacity: '',
    propertyColor: '',
  })

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then((data) => {
        setProduct(data)
        if (data.properties) {
          setListCapacities(
            data.properties.filter(
              ({ propertie_slug: name }) => name === 'dung-luong',
              [],
            ),
          )
          setListColors(
            data.properties.filter(
              ({ propertie_slug: name }) => name === 'mau-sac',
              [],
            ),
          )
        }
      })
      .finally(() => setLoading(false))

    getListComments()
    getListPost()
    fetchProductsRelated(id).then((data) => {
      setProductsRelated(data)
    })
    getListDiscount()
  }, [id])

  const getListComments = () => {
    fetchCommentsProduct(id).then((data) => {
      setComments(data)
    })
  }
  const getListPost = () => {
    fetchPost(id).then((data) => {
      setPosts(data)
    })
  }

  const getListDiscount = () => {
    getListDiscountCode().then((data) => {
      setDiscounts(data)
    })
  }

  const handleGetProduct = () => {
    if (loading) return
    // eslint-disable-next-line no-use-before-define
    const slugFirst = first(product.properties).propertie_slug
    const params = {
      id: slugFirst === 'mau-sac' ? data.propertyColor : data.propertyCapacity,
      id_link:
        slugFirst === 'mau-sac' ? data.propertyCapacity : data.propertyColor,
    }
    fetchProductByPropertiesId(id, params)
      .then((data) => {
        setProduct({
          ...product,
          product_price: data.price,
          product_image: data.img,
          product_images: null,
        })
      })
      .catch(() => {})
  }
  useEffect(() => {
    handleGetProduct()
  }, [data])

  const onChangeCapacity = ({ target: { value } }) => {
    setData({ ...data, propertyCapacity: value })
  }

  function onChangeColor({ target: { value } }) {
    setData({ ...data, propertyColor: value })
  }

  const handleBuyNow = (e) => {
    if (userInfo) {
      dispatch(addProduct({ product, info: data }))
      return messageApi.open({
        type: 'success',
        content: 'Sản phẩm đã được thêm vào giỏ hàng',
      })
    }
    messageApi.open({
      type: 'error',
      content: 'Chưa đăng nhập, chưa thể đặt hàng...',
    })
  }

  const links = [
    { title: 'Trang chủ', href: '/' },
    { title: 'sản phẩm', href: '/product' },
  ]
  if (loading) return <LoadingProduct open={loading} />
  const {
    product_title: title,
    product_content: content,
    product_price: price,
    product_desc: desc,
    product_image: image,
    product_images: images,
    product_configurations: configurations,
  } = product

  return (
    <div className='xl:container 2xl:mx-auto lg:py-5 md:py-5 py-9'>
      {contextHolder}
      <BreadCrumb links={links} />
      <div className='pt-5 pb-5 grid grid-cols-4 gap-2'>
        <div className='col-span-3'>
          <h1 className='text-2xl'>{title}</h1>
        </div>

        <div className='col-span-1 rating'></div>
      </div>
      <div className='flex justify-center lg:flex-row flex-col gap-8'>
        <div className='w-full sm:w-96 md:w-8/12  lg:w-6/12 flex flex-col lg:gap-6 sm:gap-6 gap-4'>
          <div
            className=' w-full lg:w-full bg-gray-100 flex justify-center items-center'
            style={{ backgroundColor: '#fdfdfd' }}
          >
            <img src={URL_BACKEND + image} alt='' className='h-96' />
          </div>
          <div className='w-full grid lg:flex-row grid-cols-4 gap-6'>
            {images &&
              images.map((item, index) => (
                <div
                  key={index}
                  className='bg-gray-200 flex justify-center items-center'
                >
                  <img src={URL_BACKEND + item.image} />
                </div>
              ))}
          </div>
          <div className='w-full flex justify-start items-center'>
            <div className='bg-white rounded-lg w-full p-4'>{desc}</div>
          </div>
        </div>
        <div className='w-full sm:w-96 md:w-8/12 lg:w-6/12'>
          <span className='font-semibold text-3xl leading-7 text-rose-700'>
            {currency(price)}
          </span>
          {/* bảng giá */}
          <div className='mt-7'>
            <Radio.Group
              value={data?.propertyCapacity || ''}
              buttonStyle='solid'
              onChange={onChangeCapacity}
            >
              {listCapacities.map((property, index) => (
                <Radio.Button
                  style={{
                    height: '50px',
                    textAlign: 'center',
                    lineHeight: '20px',
                    padding: '3px 15px',
                  }}
                  value={property.id}
                  key={index}
                >
                  <p>{property.propertie_name}</p>
                  <b>{property.propertie_value}</b>
                </Radio.Button>
              ))}
            </Radio.Group>
          </div>
          <div className='w-full mt-4 mb-2'>
            <Radio.Group
              onChange={onChangeColor}
              value={data?.propertyColor || ''}
            >
              {listColors.map((property, index) => (
                <Radio key={index} value={property.id}>
                  {property.propertie_value}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          {!isEmpty(discounts) &&
            discounts.map((item, index) => (
              <div className='py-1' key={index}>
                Mã giảm giá
                <span className='ml-1 px-2 py-1 bg-red-200 font-bold text-red-900'>
                  {item.type === 'Giảm %'
                    ? `Giảm ${item.rate}%`
                    : `Giảm ${currency(item.rate)}`}
                </span>
              </div>
            ))}
          {/* quà tặng khi mua hàng */}
          <Gift />
          <div className='w-full py-5'>
            <button
              className='w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-center'
              onClick={handleBuyNow}
            >
              <div className='text-2xl'>Mua ngay</div>
              <p className='mb-0'>Giao hàng miễn phí hoặc nhận tại shop</p>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full justify-center grid grid-cols-5 gap-6 pb-16'>
        <div
          className={`col-span-3 mt-10 bg-white p-5 content_hidden relative
          ${isMoreContent ? 'show-more' : ''}`}
        >
          <button
            className='absolute bottom-2 m-auto w-32 left-0 right-0 pointer text-xs text-gray-800 bg-white font-normal hover:bg-gray-400 font-bold py-2 px-4 rounded-lg btn-show'
            onClick={() => setIsMoreContent(!isMoreContent)}
          >
            Xem Thêm...
          </button>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className='col-span-2 mt-10'>
          {configurations && <Info configurations={configurations} />}
          {!isEmpty(posts) && <Post posts={posts} />}
        </div>
      </div>

      <Comments
        comments={comments}
        getListComments={getListComments}
        productId={id}
      />
      <Related productsRelated={productsRelated} discounts={discounts} />
    </div>
  )
}
