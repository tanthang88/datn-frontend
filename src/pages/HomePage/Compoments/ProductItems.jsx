import { NavLink } from 'react-router-dom'

export const ProductItems = (props) => {
  return (
    <section
      className='product-sale
     {/*mx-3 my-3*/}
     '
    >
      <div className='product__sale-img--separator relative text-center'>
        <img
          style={{ objectFit: 'contain' }}
          src='https://images.fpt.shop/unsafe/fit-in/270x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/30/638001723906730223_tagline-desk-270x210.png'
          alt=''
        />
        <NavLink to={'/'}>
          <div className='product__sale-img text-center'>
            <img
              className='object-cover'
              src='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614227804914222_man-hinh-may-tinh-xiaomi-1c-23-8-inch-dd.jpg'
              alt=''
            />
          </div>
        </NavLink>
      </div>
      <div className='product__sale-info my-3'>
        <h3 className='text-base overflow-hidden uppercase font-bold'>
          <NavLink to={'/'}>Iphone 14 Pro Max 1TB</NavLink>
        </h3>
        <p className='process rounded-full relative bg-price-mark text-white'>
          30.000.000 ₫<span className='bg-price-main absolute '></span>
        </p>
      </div>
      <div className='product__config bg-gray-100 rounded-md px-3 py-3'>
        <span className='inline-flex flex-row gap-2'>
          <img
            className='rounded-full object-cover'
            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/5/638005671886618349_Logo-VNPAYQR.png'
            alt=''
          />
          <img
            className='rounded-full object-cover'
            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/1/638002152487434133_637426739557050119_logo-moca.png'
            alt=''
          />
          <img
            className='rounded-full object-cover'
            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/14/638013051731372853_download.png'
            alt=''
          />
          <img
            className='rounded-full object-cover'
            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/5/637847745475943329_637846629514363952_ic-tp-bank.jpg'
            alt=''
          />
        </span>
      </div>
    </section>
  )
}
