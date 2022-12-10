import React from 'react'
import { currency } from '../../../utils/currency'
export default function index({ name, price, imgUrl, callback, value }) {
  return (
    <section className='product-sale'>
      <div className='product__sale-img--separator relative text-center cursor-pointer'>
        <img
          style={{ objectFit: 'contain' }}
          src='https://images.fpt.shop/unsafe/fit-in/270x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/30/638001723906730223_tagline-desk-270x210.png'
          alt=''
        />
        <div className='product__sale-img text-center'>
          <img className='object-cover' src={imgUrl} alt='' />
        </div>
      </div>
      <div className='product__sale-info my-3'>
        <a
          className='text-base overflow-hidden uppercase font-bold'
          href={`/product/${value}`}
        >
          {name}
        </a>
        <p className='process rounded-full relative bg-price-mark text-white'>
          {currency(price)}
          <span className='bg-price-main absolute '></span>
        </p>
      </div>
    </section>
  )
}
