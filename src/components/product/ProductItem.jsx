import { NavLink } from 'react-router-dom'
import { URL_BACKEND } from '../../config/constants'
import { currency } from '../../utils/currency'
import isEmpty from 'lodash/isEmpty'

export const ProductItem = (props) => {
  return (
    <section
      className='product-sale
     {/*mx-3 my-3*/}
     '
    >
      <div className='product__sale-img--separator relative text-center'>
        <img
          style={{ objectFit: 'contain' }}
          src='https://images.fpt.shop/unsafe/fit-in/270x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/14/638040405020658246_frame-cate-270x210.png'
          alt=''
        />
        <NavLink to={`/product/${props.data?.id}`}>
          <div className='product__sale-img text-center'>
            <img
              className='object-cover'
              src={URL_BACKEND + props.data?.product_image}
              alt=''
            />
          </div>
        </NavLink>
      </div>
      <div className='product__sale-info my-3'>
        <h3 className='text-base overflow-hidden uppercase font-bold'>
          <NavLink to={`/product/${props.data?.id}`}>
            {props.data?.product_title || props.data?.product_name}
          </NavLink>
        </h3>
        {!isEmpty(props.discounts) && (
          <div className='flex flex-wrap'>
            {props.discounts.map((item, index) => (
              <div
                key={index}
                className='px-2 py-1 my-2 mx-1 bg-red-200 font-bold text-red-900'
              >
                {item.type === 'Giảm %'
                  ? `Giảm ${item.rate}%`
                  : `Giảm ${currency(item.rate)}`}
              </div>
            ))}
          </div>
        )}
        <p className='process rounded-full relative bg-price-mark text-white'>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(props.data?.product_price)}
          <span className='bg-price-main absolute '></span>
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
