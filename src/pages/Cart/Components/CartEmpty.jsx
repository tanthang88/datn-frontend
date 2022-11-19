import { Button } from 'antd'
import { Link } from 'react-router-dom'
export const CartEmpty = () => {
  return (
    <section className='cart__empty-container flex flex-col items-center py-10'>
      <img
        src='https://fptshop.com.vn/cart/Content/Desktop/images/empty-cart.png'
        alt='Cart Empty Image'
        width='100px'
        height='100px'
      />
      <h2>Không có sản phẩm nào trong giỏ hàng</h2>
      <Link to='/'>
        <Button type='primary' size='large' className='uppercase' danger>
          về trang chủ
        </Button>
      </Link>
    </section>
  )
}
