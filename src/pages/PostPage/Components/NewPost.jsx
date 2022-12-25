import React from 'react'

const PostHotView = () => {
  return (
    <>
      <section className='bg-white mt-6 px-2 py-3.5 rounded-lg shadow-md float-left'>
        <div>
          <h1 className='text-lg font-semibold'>Sản phẩm mới</h1>
          <hr />
        </div>
        <div className='pt-4 pb-1 float-left w-full'>
          <div className='w-20 bg-red-custom rounded-full float-left mr-2'>
            <img src='https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/9//637800424689194351_samsung-galaxy-s22-ultra-do-dd.jpg' />
          </div>
          <h1 className='text-base'>Samsung Galaxy S23 Ultra</h1>
          <a href=''>
            <p>22 bài viết</p>
          </a>
        </div>
        <div className='pt-4 pb-1 float-left w-full'>
          <div className='w-20 bg-red-custom rounded-full float-left mr-2'>
            <img src='https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/10//637800498484893706_samsung-galaxy-s22-den-12.jpg' />
          </div>
          <h1 className='pr-1 text-base'>Samsung Galaxy S23</h1>
          <a href=''>
            <p>20 bài viết</p>
          </a>
        </div>
        <div className='pt-4 pb-1 float-left w-full'>
          <div className='w-20 bg-red-custom rounded-full float-left mr-2'>
            <img src='https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/7//638007285202545738_iphone-14-pro-max-dd-bh.jpg' />
          </div>
          <h1 className='pr-1 text-base'>iPhone 14 Pro Max 128GB</h1>
          <a href=''>
            <p>60 bài viết</p>
          </a>
        </div>
        <div className='pt-4 pb-1 float-left w-full'>
          <div className='w-20 bg-red-custom rounded-full float-left mr-2'>
            <img src='https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/7//638007285202545738_iphone-14-pro-max-dd-bh.jpg' />
          </div>
          <h1 className='pr-1 text-base'>iPhone 14 Pro 128GB</h1>
          <a href=''>
            <p>97 bài viết</p>
          </a>
        </div>
      </section>
    </>
  )
}

export default PostHotView
