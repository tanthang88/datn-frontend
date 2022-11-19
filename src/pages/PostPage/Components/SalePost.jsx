import React from 'react'
import '../../../App.css'

const SalePost = () => {
  return (
    <>
      <section className='bg-white mt-6 py-3.5 rounded-lg shadow-md float-left'>
        <div>
          <h1 className='text-lg font-semibold w-full px-2'>Khuyến mãi</h1>
          <hr />
        </div>
        <div className='pt-4 pb-1 w-full float-left'>
          <div className='relative'>
            <div className='sale-post absolute'></div>
            <img
              className='w-full'
              src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/8/638035243959447184_nf_1200x628.png'
            />
            <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
              FPT Shop giảm thêm 5% cho màn hình LCD khi mua kèm Laptop/ PC/
              Macbook
            </h2>
          </div>
        </div>

        <div className='pt-4 pb-1 w-full float-left'>
          <div className='relative'>
            <div className='sale-post absolute'></div>
            <img
              className='w-full'
              src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/7/638034366074501624_giadungxiaomi2-15.jpg'
            />
            <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
              FPT Shop giảm đến 40% cho nhiều thiết bị thông minh Xiaomi
            </h2>
          </div>
        </div>

        <div className='pt-4 pb-1 w-full float-left'>
          <div className='relative'>
            <div className='sale-post absolute'></div>
            <img
              className='w-full'
              src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/7/638034349464404386_lenovo-website.png'
            />
            <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
              Laptop Lenovo giảm đến 50% khi mua tại FPT Shop
            </h2>
          </div>
        </div>

        <div className='pt-4 pb-1 w-full float-left'>
          <div className='relative'>
            <div className='sale-post absolute'></div>
            <img
              className='w-full'
              src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/3/638030952911660662_hs-t11-tuan1-chung-thumb.jpg'
            />
            <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
              Giá sốc cuối tuần, FPT Shop giảm giá đến 50% cho nhiều sản phẩm
              công nghệ
            </h2>
          </div>
        </div>

        <div className='pt-4 pb-1 w-full float-left'>
          <div className='relative'>
            <div className='sale-post absolute'></div>
            <img
              className='w-full'
              src='https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029979387916134_imgpsh_fullsize_anim.jpeg'
            />
            <h2 className='absolute bottom-5 px-2 text-white font-bold text-base font-sans'>
              GFPT Shop tặng Adobe Creative Cloud cho khách hàng mua sản phẩm
              ASUS ProArt
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default SalePost
