import React from 'react'
import { currency } from '../../../utils/currency'
import { URL } from '../../../config/constants'
import { Link, NavLink } from 'react-router-dom'
export default function index({
  name,
  price,
  imgUrl,
  callback,
  value,
  discounts,
}) {
  return (
    <section className='product-sale'>
      <div className='product__sale-img--separator relative text-center'>
        <img
          style={{ objectFit: 'contain' }}
          src='https://images.fpt.shop/unsafe/fit-in/270x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/14/638040405020658246_frame-cate-270x210.png'
          alt=''
        />
        <NavLink to={`${URL.PRODUCT}/${value}`}>
          <div className='product__sale-img text-center'>
            <img className='object-cover' src={imgUrl} alt='' />
          </div>
        </NavLink>
      </div>

      <div className='product__sale-info my-3'>
        <Link
          className='text-base overflow-hidden uppercase font-bold'
          to={`${URL.PRODUCT}/${value}`}
        >
          {name}
        </Link>
        <p className='process rounded-full relative bg-price-mark text-white'>
          {currency(price)}
          <span className='bg-price-main absolute '></span>
        </p>
      </div>
    </section>
  )
}
