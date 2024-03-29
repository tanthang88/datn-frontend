import React from 'react'
export default function index({ name, price, imgUrl, callback }) {
  return (
    <section className='product-sale'>
      <div
        className='product__sale-img--separator relative text-center cursor-pointer'
        onClick={callback}
      >
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
          onClick={callback}
        >
          {name}
        </a>
        <p className='process rounded-full relative bg-price-mark text-white'>
          {price}
          <span className='bg-price-main absolute '></span>
        </p>
      </div>
    </section>
  )
}
